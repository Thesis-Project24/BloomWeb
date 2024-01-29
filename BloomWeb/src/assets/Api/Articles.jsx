import { useMutation, useQuery } from "react-query";

import axios from "axios";

// {all Articles fetcher } //

export const useFetchArticles = () => {
  return useQuery("Articles", async () => {
    const response = await axios.get(
      `http://localhost:3000/articles/getArticles`
    );
    const data = response.data.article;
    return data;
  });
};

// // {One article fetcher} //
export const useFetchOneArticle = (id) => {
  const query = useQuery(["Article", id], async () => {
    const response = await axios.get(
      `http://localhost:3000/articles/getonearticle/${id}`,
      
    );
    return response.data;
  });
  return query;
};


// // {Article Saving} //

export const useSaveArticle = () => {
  const mutation = useMutation(
    async ({ userId, articleId }) => {
      const response = await axios.post(
        `http://localhost:3000/articles/saveArticle`,
        { userId, articleId }
      );

      return response.data;
    }
  );
  return [mutation.mutate, mutation.data, mutation.error];
};

// //  {Saved Articles fetcher} //
export const useFetchSavedArticles = (userId) => {
  return useQuery({
    queryKey: ["SavedArticles", userId],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/articles/savedArticles`,
        {
          userId,
        }
        );
        const data = response.data;
        return data;
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

// //  {Article deletion} //
// export const deleteArticle = async (id) => {
//   const response = await axios.delete(
//     `http://localhost:3000/articles/${id}`
//   );
//   return response.data;
// };
// export const useDeleteArticle = () => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation(
//     async (id) => {
//       const response = await axios.delete(`http://localhost:3000/articles/${id}`);
//       return response.data;
//     },
//     {
//       onSuccess: () => {
//         // Invalidate and refetch the articles query after a successful deletion
//         queryClient.invalidateQueries('articles');
//       },
//     }
//   );

//   return mutation;
// };
export const useDeleteArticle = () => {
  const mutation = useMutation(
    async (id) => {
      const response = await axios.delete(`http://localhost:3000/articles/${id}`);
      return response.data;
    }
  );

  const deleteArticle =  (id) => {
    try {
       mutation.mutate(id);
      mutation.onSuccess(); 
    } catch (error) {
      console.error("Error deleting article", error);
    }
  };

  return [deleteArticle, mutation];
};
// // {Article Creation} //

// export const createArticle = () => {
//   const mutation = useMutation(
//     async ({
//       title,
//       content,
//       authorId,
//     }: {
//       title: string;
//       content: string;
//       authorId: number;
//     }) => {
//       const response = await axios.post(
//         `http://${process.env.EXPO_PUBLIC_ipadress}:3000/articles/postArticle`,
//         { title, content, authorId }
//       );
//       return response.data;
//     }
//   );
//   return mutation;
// };




// // {Search Article}  //
// export const useSearchArticles = (keyword: string) => {
//   const query = useQuery("Articles", async () => {
//     const response = await axios.get(
//       `http://${process.env.EXPO_PUBLIC_ipadress}:3000/articles/searchArticle?keyword=`
//     );
//     return response.data.article;
//   });
//   return query;
// };
