import {
    useMutation,
    useQuery,
    useQueryClient,
    QueryClientProvider,
  } from "react-query";
  import axios from "axios";
  
  const fetchForumPosts = ()=> {
    const query = useQuery('fetchForum', async () => {
      try {
        const response = await axios.get(`http://localhost:3000/forum/posts/`);
        const forum = response.data
        return forum;
      } catch (error) {
        console.error( error);
        throw error;
      }
    }, {
      onError: (error) => {
        console.log(error, "An error occurred");
      },
    });
    return query;
  }
  
  const upvotePost=()=>{
    
    const mutation= useMutation({
      mutationFn:async(id)=>{
       
         const response =axios.put(`http://localhost:3000/forum/posts/upvote`,{postId:id})
      },
      onError: (error) => {
        console.log(error);
    },
    })
    return mutation
  }
  
  const downvotePost=()=>{
    
    const mutation= useMutation({
      mutationFn:async(id)=>{
       
         const response =axios.put(`http://localhost:3000/forum/posts/downvote`,{postId:id})
      },
      onError: (error) => {
        console.log(error);
    },
    })
    return mutation
  }
  const createForumPost = () => {
    const queryClient = useQueryClient();
  
    const mutation = useMutation({
      mutationFn: async ( { title, content,authorId }) => {
        const response = await axios.post(`http://localhost:3000/forum/posts/sad`, { title, content,authorId });
        return response.data;
      },
      onSuccess: () => {
        
        queryClient.invalidateQueries('fetchForum');
      },
      onError: (error) => {
        console.error(error);
      },
    });
  
    return mutation;
  };
  
  const createCommentMutation = () => {
    
    const mutationFn = async ({ content, postId, userId }) => {
      try {
        const response = await axios.post(
          `http://localhost:3000/forum/comments/`, { content, postId, userId });
        return response.data;
      } catch (error) {
        console.error('Error creating comment', error.message);
        throw error;
      }
    };
    return useMutation(mutationFn);
  };
  const useFetchComments = (postId) => {
    return useQuery(['comments', postId], async () => {
      const response = await axios.get(`http://localhost:3000/forum/comments/${postId}`);
      return response.data;
    }, {
      onError: (error) => {
        console.error('Error fetching comments:', error);
      }
    });
  };
  const deleteCommentMutation = () => {
    const mutationFn = async (commentId) => {
      try {
        const response = await axios.delete(`http://localhost:3000/forum/comments/${commentId}`);
        return response.data;
      } catch (error) {
        console.error('Error deleting comment', error);
        throw error;
      }
    };
    return useMutation(mutationFn);
  };
  
  const editCommentMutation = () => {
    const mutationFn = async ({ commentId, content }) => {
      try {
        const response = await axios.put(`http://localhost:3000/forum/comments/${commentId}`, { content });
        return response.data;
      } catch (error) {
        console.error('Error editing comment', error);
        throw error;
      }
    };
    return useMutation(mutationFn);
  };
  const deletePostMutation = () => {
    return useMutation(async (postId) => {
      try {
        const response = await axios.delete(`http://localhost:3000/forum/posts/${postId}`);
        return response.data;
      } catch (error) {
        console.error("Error in deletePostMutation:", error);
        throw error;  // rethrow to ensure the error is propagated
      }
    });
  };
  // const editTagcomment=() => {
  //   const mutationFn=async({userId,commentId}) => {
  //     try {
  //       const response =await axios.put(`http://localhost:3000/forum/comments/${commentId}`,{userId})
  //       return response.data;
  //     } catch (error) {
  //       console.error("Error in tagedit", error);
  //     }
  //   }
  //   return useMutation(mutationFn)
  // }
  
  const getUserIdFromUsername = async (username) => {
    try {
        const response = await axios.get(`http://localhost:3000/users/getUserIdByUsername/${username}`);
        return response.data; // This should be the user ID
    } catch (error) {
        console.error('Error fetching user ID:', error);
        return null; // Handle error appropriately
    }
  };
  
  export { fetchForumPosts,deletePostMutation,useFetchComments,createForumPost,createCommentMutation,getUserIdFromUsername,deleteCommentMutation,editCommentMutation,upvotePost,downvotePost };
  
  
  