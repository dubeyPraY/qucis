// components/SubstackFeed.js

import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { BarLoader } from 'react-spinners';

const SubstackFeed = () => {
  const [loading, setLoading] = useState(true)
//   useEffect(() => {
//     try{
//     setLoading(true)
//     window.SubstackFeedWidget = {
//         substackUrl: "quantumpirates.substack.com",
//         posts: 3,
//         filter: "top",
//         layout: "right",
//         hidden: ["subtitle", "reactions"],
//         colors: {
//           primary: "#404040",
//           secondary: "#808080",
//           background: "white",
//         }
//     }

//     const script = document.createElement("script");
//     script.src = "https://substackapi.com/embeds/feed.js";
//     script.async = true;
//     document.getElementById("substack-feed-embed").appendChild(script);
// }finally{
//     setLoading(false)
// }
//     return () => {
//       // Clean up script when the component unmounts
//       document.getElementById("substack-feed-embed").removeChild(script);
//     };
//   }, []);

useEffect(() => {
  // Inside a function to use async/await
  const fetchData = async () => {
    try {
      setLoading(true);
      window.SubstackFeedWidget = {
        substackUrl: "quantumpirates.substack.com",
        posts: 3,
        filter: "top",
        layout: "right",
        hidden: ["subtitle", "reactions"],
        colors: {
          primary: "#404040",
          secondary: "#808080",
          background: "white",
        }
      }
      const script = document.createElement("script");
      script.src = "https://substackapi.com/embeds/feed.js";
      script.async = true;
      const embedElement = document.getElementById("substack-feed-embed");
      if (embedElement) {
        embedElement.appendChild(script);
        return () => {
          // Clean up script when the component unmounts
          if (embedElement.contains(script)) {
            embedElement.removeChild(script);
          }
        };
      }
    } finally {
      setLoading(false);
    }
  };

  fetchData();

  return () => {
    // Clean up script when the component unmounts
    const embedElement = document.getElementById("substack-feed-embed");
    if (embedElement) {
      const scriptElement = embedElement.querySelector("script");
      if (scriptElement) {
        embedElement.removeChild(scriptElement);
      }
    }
  };
}, []);


  return <>
  <div className=' text-black border rounded-[24px] shadow-lg  md:max-w-[70%] md:p-6 min-h-[500px] flex items-center justify-center flex-col min-w-[70%]' id="substack-feed-embed">
  {loading && <div className='flex flex-col gap-6 justify-center items-center p-6'>
    <h1 className='text-xl font-semibold'>Loading the latest news...</h1>
    <BarLoader />
    </div>}
    </div>;
  </>
};

export default SubstackFeed;
