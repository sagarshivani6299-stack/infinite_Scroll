import React from "react";

const Home = () => {
return ( <div className="min-h-screen bg-slate-950 px-6 py-10 text-white"> <div className="mx-auto max-w-6xl">

    {/* Hero */}
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h1 className="text-4xl font-bold text-blue-400">
        React Query Learning Project
      </h1>

      <p className="mt-4 max-w-3xl leading-7 text-slate-400">
        Is project ka purpose traditional API fetching aur TanStack Query
        ke beech difference ko practically samajhna hai. Hum same API ko
        do different approaches se fetch kar rahe hain.
      </p>
    </section>

    {/* What is API Fetching */}
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-blue-400">
        1. API Fetching kya hoti hai?
      </h2>

      <p className="mt-4 leading-7 text-slate-400">
        Jab frontend application ko backend ya kisi external API se data
        chahiye hota hai, tab hum HTTP request bhejte hain. API se data
        receive karne ke process ko API data fetching kehte hain.
      </p>

      <p className="mt-4 text-slate-300">
        Is project mein hum JSONPlaceholder API se posts fetch kar rahe hain.
      </p>
    </section>

    {/* Traditional Fetch */}
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-green-400">
        2. Traditional Fetching — FetchOld
      </h2>

      <p className="mt-4 leading-7 text-slate-400">
        Traditional approach mein API request ko manually manage karna
        padta hai. Hum useState, useEffect aur Axios ka use kar rahe hain.
      </p>

      <div className="mt-6 rounded-xl bg-slate-950 p-5">
        <h3 className="font-semibold text-white">
          Is approach mein kya karna padta hai?
        </h3>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-400">
          <li>Loading state create karni padti hai.</li>
          <li>Error state create karni padti hai.</li>
          <li>Data state create karni padti hai.</li>
          <li>useEffect ke andar API call karni padti hai.</li>
          <li>Error ko manually handle karna padta hai.</li>
          <li>Refetching manually implement karni pad sakti hai.</li>
          <li>Caching manually manage karni padti hai.</li>
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-green-500/20 bg-slate-950 p-5">
        <h3 className="text-lg font-semibold text-green-400">
          Traditional Flow
        </h3>

        <p className="mt-3 text-slate-400">
          Component render → useEffect → API request → loading →
          success/error → state update → component re-render
        </p>
      </div>
    </section>

    {/* TanStack Query */}
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-purple-400">
        3. TanStack Query — FetchRQ
      </h2>

      <p className="mt-4 leading-7 text-slate-400">
        TanStack Query ek library hai jo server-state ko fetch, cache,
        synchronize aur update karne ke liye use hoti hai.
      </p>

      <p className="mt-4 leading-7 text-slate-400">
        Iska main purpose sirf API call karna nahi hai. Ye API se aaye
        server data ko efficiently manage karne mein help karti hai.
      </p>

      <div className="mt-6 rounded-xl bg-slate-950 p-5">
        <h3 className="font-semibold text-white">
          TanStack Query kya manage kar sakta hai?
        </h3>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-400">
          <li>Loading state</li>
          <li>Error state</li>
          <li>Successful data</li>
          <li>Query caching</li>
          <li>Refetching</li>
          <li>Background updates</li>
          <li>Stale data management</li>
          <li>Retry behavior</li>
        </ul>
      </div>
    </section>

    {/* Why React Query */}
    <section className="mt-8 rounded-2xl border border-blue-500/20 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-blue-400">
        4. TanStack Query kyun use kiya?
      </h2>

      <div className="mt-6 space-y-5">

        <div>
          <h3 className="text-lg font-semibold text-white">
            ✅ 1. Less Boilerplate
          </h3>

          <p className="mt-2 text-slate-400">
            Traditional fetching mein loading, error aur data ke liye
            multiple states manage karne padte hain. TanStack Query in
            states ko query ke through manage karta hai.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            ✅ 2. Caching
          </h3>

          <p className="mt-2 text-slate-400">
            Query ka result cache ho sakta hai. Isse same data ko baar-baar
            unnecessarily fetch karne ki zarurat kam ho sakti hai.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            ✅ 3. Refetching
          </h3>

          <p className="mt-2 text-slate-400">
            Data ko dobara fetch karna TanStack Query ke through easily
            manage kiya ja sakta hai.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            ✅ 4. Server State Management
          </h3>

          <p className="mt-2 text-slate-400">
            API se aane wala data server state hota hai. TanStack Query
            specifically server-state management ke liye designed hai.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            ✅ 5. Background Updates
          </h3>

          <p className="mt-2 text-slate-400">
            Query library data ko background mein refresh karne jaise
            behaviors manage kar sakti hai.
          </p>
        </div>
      </div>
    </section>

    {/* Comparison */}
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-yellow-400">
        5. FetchOld vs FetchRQ
      </h2>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-4 text-white">Feature</th>
              <th className="p-4 text-green-400">FetchOld</th>
              <th className="p-4 text-purple-400">FetchRQ</th>
            </tr>
          </thead>

          <tbody className="text-slate-400">
            <tr className="border-b border-slate-800">
              <td className="p-4">API Request</td>
              <td className="p-4">Manually</td>
              <td className="p-4">queryFn ke through</td>
            </tr>

            <tr className="border-b border-slate-800">
              <td className="p-4">Loading</td>
              <td className="p-4">useState</td>
              <td className="p-4">isLoading / status</td>
            </tr>

            <tr className="border-b border-slate-800">
              <td className="p-4">Error</td>
              <td className="p-4">Manually handle</td>
              <td className="p-4">isError / error</td>
            </tr>

            <tr className="border-b border-slate-800">
              <td className="p-4">Caching</td>
              <td className="p-4">Manual</td>
              <td className="p-4">Built-in query cache</td>
            </tr>

            <tr className="border-b border-slate-800">
              <td className="p-4">Refetching</td>
              <td className="p-4">Manual implementation</td>
              <td className="p-4">Query features available</td>
            </tr>

            <tr>
              <td className="p-4">Server State</td>
              <td className="p-4">Manually manage</td>
              <td className="p-4">Designed for server state</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* Query Code */}
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-purple-400">
        6. FetchRQ mein useQuery kaise kaam karta hai?
      </h2>

      <div className="mt-5 rounded-xl bg-slate-950 p-5">
        <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
```

{`const { data, isLoading, isError, error } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
});`} </pre> </div>

```
      <div className="mt-6 space-y-4 text-slate-400">
        <p>
          <strong className="text-white">queryKey:</strong>{" "}
          Query ko uniquely identify karta hai. Yahan ["posts"] ka
          matlab hai ki ye posts data ki query hai.
        </p>

        <p>
          <strong className="text-white">queryFn:</strong>{" "}
          Wo function jo actual API request karega. Hamare project mein
          ye fetchPosts function hai.
        </p>

        <p>
          <strong className="text-white">data:</strong>{" "}
          Successful API response ka data.
        </p>

        <p>
          <strong className="text-white">isLoading:</strong>{" "}
          Jab initial data load ho raha hota hai tab loading state ko
          represent karta hai.
        </p>

        <p>
          <strong className="text-white">isError:</strong>{" "}
          Agar query fail ho jaye toh error state check karne ke liye.
        </p>

        <p>
          <strong className="text-white">error:</strong>{" "}
          Actual error information access karne ke liye.
        </p>
      </div>
    </section>

    {/* Axios */}
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-orange-400">
        7. Axios ka role kya hai?
      </h2>

      <p className="mt-4 leading-7 text-slate-400">
        Axios aur TanStack Query same cheez nahi hain.
      </p>

      <div className="mt-5 rounded-xl bg-slate-950 p-5">
        <p className="text-slate-300">
          <strong className="text-orange-400">Axios</strong> → HTTP
          request bhejne ke liye.
        </p>

        <p className="mt-3 text-slate-300">
          <strong className="text-purple-400">TanStack Query</strong> →
          Server data ko fetch aur manage karne ke liye.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-slate-700 p-5">
        <p className="text-slate-400">
          Simple flow:
        </p>

        <p className="mt-3 text-blue-400">
          Component → useQuery → queryFn → Axios → API → Data → Cache → UI
        </p>
      </div>
    </section>

    {/* Project Flow */}
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-2xl font-bold text-pink-400">
        8. Hamare Project ka Complete Flow
      </h2>

      <div className="mt-6 space-y-4">

        <div className="rounded-lg bg-slate-950 p-4 text-slate-300">
          <span className="text-blue-400">Step 1:</span> User FetchOld
          page open karta hai.
        </div>

        <div className="rounded-lg bg-slate-950 p-4 text-slate-300">
          <span className="text-blue-400">Step 2:</span> useEffect API
          request trigger karta hai.
        </div>

        <div className="rounded-lg bg-slate-950 p-4 text-slate-300">
          <span className="text-slate-300">Step 3:</span> Axios API se
          posts fetch karta hai.
        </div>

        <div className="rounded-lg bg-slate-950 p-4 text-slate-300">
          <span className="text-purple-400">Step 4:</span> User FetchRQ
          page open karta hai.
        </div>

        <div className="rounded-lg bg-slate-950 p-4 text-slate-300">
          <span className="text-purple-400">Step 5:</span> useQuery
          queryFn ko call karta hai.
        </div>

        <div className="rounded-lg bg-slate-950 p-4 text-slate-300">
          <span className="text-purple-400">Step 6:</span> Axios API se
          posts fetch karta hai.
        </div>

        <div className="rounded-lg bg-slate-950 p-4 text-slate-300">
          <span className="text-green-400">Step 7:</span> TanStack Query
          result ko cache aur query state ke through manage karta hai.
        </div>
      </div>
    </section>

    {/* Why this project */}
    <section className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-950/20 p-8">
      <h2 className="text-2xl font-bold text-blue-400">
        9. Is Project se kya seekhna hai?
      </h2>

      <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-300">
        <li>React mein API fetching kaise hoti hai.</li>
        <li>useEffect aur useState se API kaise manage karte hain.</li>
        <li>Axios ka use kaise karte hain.</li>
        <li>TanStack Query kya hai.</li>
        <li>useQuery kaise kaam karta hai.</li>
        <li>Query keys kya hoti hain.</li>
        <li>Server state kya hota hai.</li>
        <li>Client state aur server state mein difference.</li>
        <li>Caching ka concept.</li>
        <li>Refetching aur background updates.</li>
      </ul>
    </section>

    {/* Final */}
    <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
      <h2 className="text-2xl font-bold text-white">
        Traditional Fetch → TanStack Query
      </h2>

      <p className="mt-4 text-slate-400">
        Is project mein dono approaches ko compare karke samajhna hai ki
        real-world React applications mein server-state management ke
        liye TanStack Query kaise useful ho sakta hai.
      </p>
    </section>

  </div>
</div>


);
};

export default Home;
