import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown, FaTrashAlt, FaRegKeyboard, FaPencilAlt, FaTimes, FaSave, FaCommentAlt, FaPlus  } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";

import { createCommentMutation, deleteCommentMutation, deletePostMutation, downvotePost, editCommentMutation, getUserIdFromUsername, upvotePost, useFetchComments } from '../../Api/Forum';
import { toast } from 'react-toastify';
import CreatePost from './createPost';

const PostForum = ({ post,refetch }) => {

    const [newComment, setNewComment] = useState('');
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedContent, setEditedContent] = useState('');

    const { data: comments, isLoading: isLoadingComments, refetch: refetchComments } = useFetchComments(post.id); 
    const { mutate: deletePost } = deletePostMutation();
    const { mutate: createComment } = createCommentMutation();
    const { mutate: editComment } = editCommentMutation();
    const { mutate: deleteComment } = deleteCommentMutation();
    const { mutate: upvote } = upvotePost();
    const { mutate: downvote } = downvotePost();
    const currentUserId = 'zi8ll3WpjMQe11hIiZEfpZpXz672';
  
    const handleChangeText = (text) => {
        setNewComment(text);
    
        const tagMatch = text.match(/@\w*$/); // Regular expression to match '@' followed by username
        if (tagMatch) {
          setIsTagging(true);
          const searchQuery = tagMatch[0].slice(1); // Remove '@' from the search query
          axios.get(`http://localhost:3000/forum/posts/searchUsers?q=${searchQuery}`)
            .then((response) => {
              setUserSuggestions(response.data.map((user) => user.username));
            })
            .catch((error) => console.error('Error fetching users:', error));
        } else {
          setIsTagging(false);
          setUserSuggestions([]);
        }
      };

    const handleUpvote = () => {
      upvote(post.id, {
          onSuccess: () => {
              // Handle success, e.g., refetch data or update state
          },
          onError: (error) => {
              // Handle error
          }
      });
  };

  const handleDownvote = () => {
      downvote(post.id, {
          onSuccess: () => {
              // Handle success
          },
          onError: (error) => {
              // Handle error
          }
      });
  };



    const handleDeleteComment = (commentId) => {
      deleteComment(commentId, {
        onSuccess: () => {
          refetchComments();
        },
        onError: (error) => {
  
  
        }
      });
    };

    const handleAddComment = async() => {
        if (newComment) {
            const tagUsernameMatch = newComment.match(/@\w+/g);
            let tagId = null
      
            if (tagUsernameMatch) {
                const tagUsername = tagUsernameMatch[0].slice(1);
                tagId = await getUserIdFromUsername(tagUsername);
            }
          const commentData = {
              content: newComment,
              postId: post.id,
              userId: currentUserId,
              tagId: tagId,
          };

            createComment(commentData, {
                onSuccess: () => {
                    setNewComment('');
                    refetchComments();
                    toast.success("Comment added successfully!");
                },
                onError: (error) => {
                    console.error('Error adding comment', error);
                }
            });
        }
    };

    const handleDeletePost = () => {
      if (post.authorId === currentUserId) {
          deletePost(post.id, {
              onSuccess: () => {
                  toast.success("Post deleted successfully!");
              },
              onError: (error) => {
                  console.error('Error deleting post', error);
              }
          });
      }
  };

    const startEditing = (comment) => {
        setEditingCommentId(comment.id);
        setEditedContent(comment.content);
    };

    const submitEdit = (commentId) => {
      if (editedContent.trim()) {
          console.log(`Submitting edit for comment ID: ${commentId} with new content: ${editedContent}`);
          editComment({ commentId, content: editedContent }, {
              onSuccess: () => {
                  console.log('Comment edited successfully');
                  setEditingCommentId(null);
                  setEditedContent('');
                  refetchComments();
                  toast.success("Comment edited successfully!");
              },
              onError: (error) => {
                  console.error('Error editing comment', error);
              }
          });
      } else {
          console.log('Edited content is empty');
      }
  };

    const cancelEdit = () => {
        setEditingCommentId(null);
        setEditedContent('');
    };

    const renderComment = (comment) => {
      const isEditing = comment.id === editingCommentId;
      const isCurrentUser = comment.userId === currentUserId;

      return (
          <div className="flex p-2 border-b border-gray-300" key={comment.id}>
              <img src={comment.User.profile_picture} alt="Profile" className="w-10 h-10 rounded-full mr-3" />
              <div className="flex-grow">
                  <p className="font-semibold">{comment.User.first_name}</p>
                  {isEditing ? (
                      <input
                          type="text"
                          value={editedContent}
                          onChange={(e) => setEditedContent(e.target.value)}
                          autoFocus
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                      />
                  ) : (
                      <p className="text-gray-600">{comment.content}</p>
                  )}
              </div>
              <div className="flex items-center">
                  {isEditing && isCurrentUser && (
                      <>
                          <button onClick={() => submitEdit(comment.id)} className="p-2 text-[#729384]">
                              <FaSave /> {/* Save icon */}
                          </button>
                          <button onClick={cancelEdit} className="p-2 text-red-600">
                              <FaTimes /> {/* Cancel icon */}
                          </button>
                      </>
                  )}
                  {!isEditing && isCurrentUser && (
                      <>
                          <button onClick={() => startEditing(comment)} className="p-2 ">
                              <FaPencilAlt /> {/* Edit icon */}
                          </button>
                          <button onClick={() => handleDeleteComment(comment.id)} className="p-2 text-red-600">
                              <FaTrashAlt /> {/* Delete icon */}
                          </button>
                      </>
                  )}
              </div>
          </div>
      );
  };
  
  

    return (
      <div className="flex justify-center items-center my-8">
        
            <div className="bg-transparent shadow-xl max-w-xl w-full mx-auto p-6 rounded-lg ">
                <div className="flex items-center mb-4">
                    <img src={post.author.profile_picture} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <span className="font-semibold text-lg text-gray-800">{post.author.first_name}</span>
                        {/* Additional post info like date */}
                    </div>
                    {post.authorId === "zi8ll3WpjMQe11hIiZEfpZpXz672" && (
                        <button className="ml-auto p-2" onClick={handleDeletePost}>
                            <FaTrashAlt size={24} color="#729384" />
                        </button>
                    )}
                </div>
                <p className="text-xl font-bold text-gray-800 mb-2">{post.title}</p>
                <p className="text-base text-gray-600 mb-4">{post.content}</p>

                <div className="flex items-center justify-start mb-6">
                    <button className="flex items-center "onClick={handleUpvote}>
                        <FaArrowUp size={24} />
                    </button>
                    <span className="text-base font-medium ml-1.5 mr-4">{post.upvote}</span>

                    <button className="flex items-center mr-4" onClick={handleDownvote}>
                        <FaArrowDown size={24} />
                    </button>
                    <span className="text-base font-medium ml-1.5">{post.downvote}</span>
                </div>

                <div className="border-t border-gray-300 pt-4">
                <div className="flex">
    <input
        className="flex-1 text-base px-4 py-2 bg-gray-100 rounded-full border border-gray-400 mr-3"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => handleChangeText(e.target.value)}
    />
    <button onClick={handleAddComment} className="bg-[#729384] text-white rounded-full px-4 py-2 hover:bg-[#ADD8C4]">
    <IoSend  /> {/* Using FaEdit as an example */}
    </button>
</div>

                </div>

                {/* Comments Section */}
                <div className="w-full mt-4">
                    {comments && comments.map(renderComment)}
                </div>
            </div>
        </div>
    );
};

export default PostForum;
