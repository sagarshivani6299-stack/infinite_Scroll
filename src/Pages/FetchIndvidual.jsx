
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPostById } from "../API/api";

const FetchIndvidual = () => {
  const { id } = useParams();

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
  });

  // Loading State
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500"></div>

          <h2 className="text-xl font-semibold text-blue-400">
            Loading Post Details...
          </h2>
        </div>
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <div className="rounded-lg border border-red-500/30 bg-slate-900 p-6 text-center">
          <h2 className="mb-2 text-xl font-semibold text-red-400">
            Something went wrong!
          </h2>

          <p className="text-slate-300">
            {error?.message || "Unable to fetch post"}
          </p>

          <Link
            to="/rq"
            className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
          >
            Back to Posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-12">
      <div className="mx-auto max-w-3xl">
        {/* Back Button */}
        <Link
          to="/rq"
          className="mb-6 inline-block rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
        >
          ← Back to Posts
        </Link>

        {/* Post Details Card */}
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg sm:p-10">
          {/* Post ID */}
          <span className="inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm font-semibold text-blue-400">
            Post #{post.id}
          </span>

          {/* Post Title */}
          <h1 className="mt-5 text-3xl font-bold capitalize text-blue-400 sm:text-4xl">
            {post.title}
          </h1>

          {/* Post Body */}
          <p className="mt-6 text-lg leading-8 text-slate-300">
            {post.body}
          </p>

          {/* User ID */}
          <div className="mt-8 border-t border-slate-700 pt-5">
            <p className="text-sm text-slate-400">
              Written by User ID:{" "}
              <span className="font-semibold text-white">
                {post.userId}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchIndvidual;