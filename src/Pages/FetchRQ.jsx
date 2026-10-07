// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchPosts } from "../API/api";

// const FetchRQ = () => {
//   const {
//     data,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ["posts"],
//     queryFn: fetchPosts,
//   });

//   // Loading state
//   if (isLoading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-slate-950">
//         <div className="text-center">
//           <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500"></div>

//           <h2 className="text-xl font-semibold text-blue-400">
//             Loading Posts...
//           </h2>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (isError) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
//         <div className="rounded-lg border border-red-500/30 bg-slate-900 p-6 text-center shadow-lg">
//           <h2 className="mb-2 text-xl font-semibold text-red-400">
//             Something went wrong!
//           </h2>

//           <p className="text-slate-300">{error.message}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-12">
//       {/* Page Heading */}
//       <div className="mx-auto mb-10 max-w-7xl text-center">
//         <h1 className="text-3xl font-bold text-blue-400 sm:text-4xl">
//           Posts Using React Query
//         </h1>

//         <p className="mt-3 text-slate-400">
//           Fetching posts using TanStack Query and Axios
//         </p>
//       </div>

//       {/* Posts Grid */}
//       <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {data?.data?.map((post) => (
//           <div
//             key={post.id}
//             className="rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-500/10"
//           >
//             {/* Post ID */}
//             <span className="mb-4 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm font-semibold text-blue-400">
//               Post #{post.id}
//             </span>

//             {/* Post Title */}
//             <h2 className="mb-3 text-lg font-bold capitalize text-white">
//               {post.title}
//             </h2>

//             {/* Post Body */}
//             <p className="leading-7 text-slate-400">
//               {post.body}
//             </p>

//             {/* Read More Button */}
//             <button
//               type="button"
//               className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-500"
//             >
//               Read More
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FetchRQ;


import React, { useState } from "react";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { Link } from "react-router-dom";
import { deletePost, fetchPosts, updatePost } from "../API/api";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const queryClient = useQueryClient();

  // Fetch Posts
  const {
    data: posts = [],
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    staleTime: 50000,
    // gcTime: 1000,
    // refetchInterval: 5000,
    // refetchIntervalInBackground: true,
    placeholderData: keepPreviousData,
  });

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),

    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNumber], (posts) => {
        return posts?.filter((post) => post.id !== id);
      });
    },

    onError: (error) => {
      console.error("Delete failed:", error);
    },
  });
  // Update Mutation
  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),

    onSuccess: (response, postId) => {
      queryClient.setQueryData(["posts", pageNumber], (posts = []) => {
        return posts.map((post) =>
          post.id === postId
            ? {
              ...post,
              title: response.data.title,
            }
            : post
        );
      });
    },

    onError: (error) => {
      console.error("Update failed:", error);
    },
  });

  // Loading State
  if (isLoading) {
    return (
      <p className="mt-10 text-center text-blue-400">
        Loading Posts...
      </p>
    );
  }

  // Error State
  if (isError) {
    return (
      <p className="mt-10 text-center text-red-400">
        Error: {error?.message || "Unable to fetch posts"}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-blue-400 sm:text-4xl">
            Fetch Posts Using React Query
          </h1>

          <p className="mt-3 text-slate-400">
            Explore posts fetched using TanStack Query
          </p>
        </div>

        {/* Fetching Message */}
        {isFetching && (
          <p className="mb-5 text-center text-sm text-blue-400">
            Updating posts...
          </p>
        )}

        {/* Posts Grid */}
        {/* One card in each row */}
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              {/* Post ID */}
              <span className="inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm font-semibold text-blue-400">
                Post #{post.id}
              </span>

              {/* Post Title */}
              <h3 className="mt-4 text-lg font-bold capitalize leading-7 text-white transition group-hover:text-blue-400">
                {post.title}
              </h3>

              {/* Post Body */}
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {post.body}
              </p>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap gap-3">
                {/* Delete Button */}
                <button
                  type="button"
                  onClick={() => deleteMutation.mutate(post.id)}
                  disabled={deleteMutation.isPending}
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {deleteMutation.isPending
                    ? "Deleting..."
                    : "Delete"}
                </button>

                <button
                  type="button"
                  onClick={() => updateMutation.mutate(post.id)}
                  disabled={updateMutation.isPending}
                  className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {updateMutation.isPending
                    ? "Updating..."
                    : "Update"}
                </button>


                {/* Read More */}
                <Link
                  to={`/rq/${post.id}`}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-5">
          {/* Previous Button */}
          <button
            onClick={() =>
              setPageNumber((previousPage) =>
                Math.max(previousPage - 1, 1)
              )
            }
            disabled={pageNumber === 1 || isFetching}
            className="rounded-lg bg-slate-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>

          {/* Page Number */}
          <span className="font-medium text-blue-400">
            Page {pageNumber}
          </span>

          {/* Next Button */}
          <button
            onClick={() =>
              setPageNumber((previousPage) => previousPage + 1)
            }
            disabled={isFetching || posts.length < 3}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FetchRQ;