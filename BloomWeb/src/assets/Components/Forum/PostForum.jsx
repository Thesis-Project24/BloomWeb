import React, { useState } from 'react'
import { useNavigation } from 'react-router-dom';
import { createCommentMutation, deleteCommentMutation, deletePostMutation, editCommentMutation, useFetchComments } from '../../Api/Forum';

const PostForum = ({post}) => {
    
    const [userSuggestions, setUserSuggestions] = useState([]);
  const [isTagging, setIsTagging] = useState(false);
//   const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [newComment, setNewComment] = useState('');
  const [voteStatus, setVoteStatus] = useState({ upvoted: false, downvoted: false });
  const [upvoteCount, setUpvoteCount] = useState(post.upvote);
  const [downvoteCount, setDownvoteCount] = useState(post.downvote);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [posts, setPost] = useState();

  //  comments fetcher 
  const { data: comments, isLoading: isLoadingComments, refetch: refetchcomments } = useFetchComments(post.id);
  // comments deletion
  const { mutate: deleteComment } = deleteCommentMutation();
  // comments editor
  const { mutate: editComment } = editCommentMutation();
  // comments creation
  const { mutate: createComment, isLoading: isCommentLoading, isError: isCommentError } = createCommentMutation();
// post deletion
  const { mutate: deletePost } = deletePostMutation();
  //handle up vote changes
  const upvoteMutation = useMutation(async (postId) => {
    const response = await axios.put(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/upvote`, { postId });
    return response.data;
  });
//handle down vote changes
  const downvoteMutation = useMutation(async (postId) => {
    const response = await axios.put(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/downvote`, { postId });
    return response.data;
  });
////////////////////////////////input and tag handler/////////////////////////////////////////////////////////////////
const handleChangeText = (text) => {
    setNewComment(text);

    const tagMatch = text.match(/@\w*$/); // Regular expression to match '@' followed by username 
    if (tagMatch) {
      setIsTagging(true);
      const searchQuery = tagMatch[0].slice(1); // Remove '@' from the search query
      axios.get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/searchUsers?q=${searchQuery}`)
        .then((response) => {
          setUserSuggestions(response.data.map((user) => user.username));
        })
        .catch((error) => console.error('Error fetching users:', error));
    } else {
      setIsTagging(false);
      setUserSuggestions([]);
    }
  };










  // const renderCommentOptions = (comment) => {
  //   if (comment.userId === "fdgbh") {
  //     return (
  //       <div className="flex justify-end gap-2.5">
  //         <button onClick={() => startEditing(comment)} className="text-black">
  //           <FontAwesome name="pencil" size={24} />
  //         </button>
  //         <button onClick={() => handleDeleteComment(comment.id)} className="text-red-500">
  //           <FontAwesome name="trash-o" size={24} />
  //         </button>
  //       </div>
  //     );
  //   }
  //   return null;
  // };
  






  return (
<div className="bg-[#F7F7F7] p-3 rounded-lg shadow shadow-black/5 mb-3 border border-gray-300">
  <div className="flex items-center mb-2.5">
    <img src={post.author.profile_picture} alt="Profile" className="w-11 h-11 rounded-full mr-2.5" />
    <span className="font-semibold text-lg text-gray-800 flex-1">{post.author.first_name}</span>
    {post.authorId === "zi8ll3WpjMQe11hIiZEfpZpXz672" && (
      <button onClick={handleDeletePost} className="p-2">
        <MaterialIcons name="delete" size={24} color="#729384" />
      </button>
    )}
  </div>
  <p className="text-xl font-bold text-gray-800 mb-2">{post.title}</p>
  <p className="text-base text-gray-600 mb-3">{post.content}</p>

  <div className="flex items-center justify-start mb-3">
    <button className="flex items-center mr-4" onClick={handleUpvote}>
      <AntDesign name="arrowup" size={24} color={voteStatus.upvoted ? "#4CAF50" : "black"} />
    </button>
    <span className="text-base font-medium ml-1.5">{post.upvote}</span>

    <button className="flex items-center mr-4" onClick={handleDownvote}>
      <AntDesign name="arrowdown" size={24} color={voteStatus.downvoted ? "#F44336" : "black"} />
    </button>
    <span className="text-base font-medium ml-1.5">{post.downvote}</span>
  </div>

  {comments.map(renderComment)}

  <div className="flex items-center border-t border-gray-300 pt-2">
    <div className="flex-1">
      <input
        className="w-full h-10 text-base px-4 bg-white rounded-full border border-gray-400 mr-2 text-gray-800"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => handleChangeText(e.target.value)}
      />

      {isTagging && (
        <div className="flex flex-col">
          {userSuggestions.map((item, index) => (
            <button key={index} onClick={() => {
              setNewComment(newComment + item);
              setIsTagging(false);
            }} className="p-2.5 text-base border-b border-gray-300">
              <span>{item}</span>
            </button>
          ))}
        </div>
      )}
    </div>
    <button className="enterButton" onClick={handleAddComment}>
      <AntDesign name="enter" size={24} color="black" />
    </button>
  </div>
</div>

  )
}

export default PostForum
