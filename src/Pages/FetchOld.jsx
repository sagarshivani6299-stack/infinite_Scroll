
import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";

const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getPosts = async () => {
    try {
      const response = await fetchPosts();

      setPosts(response);
    } catch (err) {
      setError("Something went wrong!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // Loading State
  if (loading) {
    return (
      <p className="mt-10 text-center text-blue-400">
        Loading Posts...
      </p>
    );
  }

  // Error State
  if (error) {
    return (
      <p className="mt-10 text-center text-red-400">
        {error}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-blue-400 sm:text-4xl">
            Fetch Posts
          </h1>

          <p className="mt-3 text-slate-400">
            Explore posts fetched using Axios and useEffect
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

              {/* Read More */}
              <button
                type="button"
                className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchOld;