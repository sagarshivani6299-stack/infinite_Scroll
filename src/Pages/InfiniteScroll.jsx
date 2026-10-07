// import React, { useEffect, useRef } from "react";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import imageData from "../assets/imageData";

// // Fetch images from local imageData array
// const fetchImages = async ({ pageParam = 0 }) => {
//   const limit = 4;

//   const images = imageData.slice(pageParam, pageParam + limit);

//   // Small delay to simulate API request
//   await new Promise((resolve) => setTimeout(resolve, 500));

//   return {
//     images,
//     nextPage: pageParam + limit,
//   };
// };

// const InfiniteScroll = () => {
//   const isFetchingRef = useRef(false);

//   const {
//     data,
//     isLoading,
//     isError,
//     error,
//     isFetchingNextPage,
//     hasNextPage,
//     fetchNextPage,
//   } = useInfiniteQuery({
//     queryKey: ["infinite-images"],

//     queryFn: ({ pageParam }) => fetchImages({ pageParam }),

//     initialPageParam: 0,

//     getNextPageParam: (lastPage) => {
//       // No more pages if fewer than 4 images are returned
//       if (lastPage.images.length < 4) {
//         return undefined;
//       }

//       // Stop after all 50 images
//       if (lastPage.nextPage >= imageData.length) {
//         return undefined;
//       }

//       return lastPage.nextPage;
//     },
//   });

//   // Keep ref updated with current fetching status
//   useEffect(() => {
//     isFetchingRef.current = isFetchingNextPage;
//   }, [isFetchingNextPage]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const innerHeight = window.innerHeight;
//       const scrollHeight = document.documentElement.scrollHeight;

//       const currentPosition = scrollY + innerHeight;
//       const bottomDistance = scrollHeight - currentPosition;

//       // Show values only in browser console
//       console.log("Scroll Y:", scrollY);
//       console.log("Inner Height:", innerHeight);
//       console.log("Scroll Height:", scrollHeight);
//       console.log("Current Position:", currentPosition);
//       console.log("Bottom Distance:", bottomDistance);

//       // Load next page when 200px remain at the bottom
//       if (
//         bottomDistance <= 200 &&
//         hasNextPage &&
//         !isFetchingRef.current
//       ) {
//         console.log("Fetching next images...");

//         isFetchingRef.current = true;

//         fetchNextPage();
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Remove event listener when component unmounts
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [hasNextPage, fetchNextPage]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-slate-950 py-10 text-center text-white">
//         <p className="text-xl text-blue-400">
//           Loading Images...
//         </p>
//       </div>
//     );
//   }


//   if (isError) {
//     return (
//       <div className="min-h-screen bg-slate-950 py-10 text-center text-red-400">
//         <p className="text-xl">
//           Error: {error.message}
//         </p>
//       </div>
//     );
//   }
//   return (
//     <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">

//       {/* Header */}
//       <div className="mx-auto mb-10 max-w-6xl text-center">
//         <h1 className="text-3xl font-bold text-blue-400">
//           Infinite Image Scroll
//         </h1>

//         <p className="mt-2 text-slate-400">
//           Scroll down to load more images
//         </p>
//       </div>

//       {/* Two Images Per Row */}
//       <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6">

//         {data?.pages.map((page) =>
//           page.images.map((item) => (
//             <div
//               key={item.id}
//               className="overflow-hidden rounded-xl border border-blue-900 bg-slate-900 shadow-lg transition duration-300 hover:scale-[1.02]"
//             >
//               {/* Image */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-64 w-full object-cover"
//                 loading="lazy"
//               />

//               {/* Image Details */}
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold text-blue-300">
//                   {item.title}
//                 </h2>

//                 <p className="mt-1 text-sm text-slate-400">
//                   Image ID: {item.id}
//                 </p>
//               </div>
//             </div>
//           ))
//         )}

//       </div>

//       {/* Bottom Loading Status */}
//       <div className="py-10 text-center">

//         {isFetchingNextPage && (
//           <p className="text-blue-400">
//             Loading more images...
//           </p>
//         )}

//         {!hasNextPage && (
//           <p className="text-green-400">
//             You have seen all 50 images!
//           </p>
//         )}

//       </div>

//     </div>
//   );
// };

// export default InfiniteScroll;



import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import {
  onLCP,
  onCLS,
  onINP,
} from "web-vitals";

import imageData from "../assets/imageData";


// =========================
// FETCH IMAGES
// =========================

const fetchImages = async ({ pageParam = 0 }) => {
  const limit = 4;

  const images = [];

  // 4 images generate karo
  for (let i = 0; i < limit; i++) {
    const imageIndex = (pageParam + i) % imageData.length;

    images.push({
      ...imageData[imageIndex],

      // Unique ID do taaki React key duplicate na ho
      uniqueId: `${pageParam}-${i}`,
    });
  }

  // Fake API delay
  await new Promise((resolve) =>
    setTimeout(resolve, 500)
  );

  return {
    images,

    // Next page
    nextPage: pageParam + limit,
  };
};


const InfiniteScroll = () => {

  const { ref, inView } = useInView({
    threshold: 0.1,
  });


  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({

    queryKey: ["infinite-images"],

    queryFn: fetchImages,

    initialPageParam: 0,

    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
  });


  // =========================
  // INFINITE SCROLL
  // =========================

  useEffect(() => {

    if (
      inView &&
      !isFetchingNextPage
    ) {

      console.log("Loading next images...");

      fetchNextPage();
    }

  }, [
    inView,
    isFetchingNextPage,
    fetchNextPage,
  ]);


  // =========================
  // CORE WEB VITALS
  // =========================

  useEffect(() => {

    onLCP((metric) => {
      console.log("LCP:", metric.value);
    });

    onCLS((metric) => {
      console.log("CLS:", metric.value);
    });

    onINP((metric) => {
      console.log("INP:", metric.value);
    });

  }, []);


  // =========================
  // LOADING
  // =========================

  if (isLoading) {

    return (
      <div className="min-h-screen bg-slate-950 py-10 text-center">

        <p className="text-xl text-blue-400">
          Loading Images...
        </p>

      </div>
    );
  }


  // =========================
  // ERROR
  // =========================

  if (isError) {

    return (
      <div className="min-h-screen bg-slate-950 py-10 text-center">

        <p className="text-xl text-red-400">
          Error: {error.message}
        </p>

      </div>
    );
  }


  // =========================
  // UI
  // =========================

  return (

    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">


      {/* =========================
          HEADING
      ========================= */}

      <div className="mx-auto mb-10 max-w-6xl text-center">

        <h1 className="text-3xl font-bold text-blue-400">
          Infinite Image Scroll
        </h1>

        <p className="mt-2 text-slate-400">
          Scroll down to load more images
        </p>

      </div>


      {/* =========================
          IMAGE GRID
      ========================= */}

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6">

        {data?.pages.map((page) =>

          page.images.map((item) => (

            <div
              key={item.uniqueId}
              className="overflow-hidden rounded-xl border border-blue-900 bg-slate-900 shadow-lg"
            >


              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.title}
                width="800"
                height="600"
                loading="lazy"
                className="h-64 w-full object-cover"
              />


              {/* CONTENT */}

              <div className="p-4">

                <h2 className="text-lg font-semibold text-blue-300">
                  {item.title}
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Image ID: {item.id}
                </p>

              </div>

            </div>

          ))

        )}

      </div>


      {/* =========================
          IN VIEW TARGET
      ========================= */}

      <div
        ref={ref}
        className="py-10 text-center"
      >

        {isFetchingNextPage && (

          <p className="text-blue-400">
            Loading more images...
          </p>

        )}

        {!isFetchingNextPage && (

          <p className="text-slate-500">
            Keep scrolling for more images...
          </p>

        )}

      </div>


    </div>
  );
};


export default InfiniteScroll;