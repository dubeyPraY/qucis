// components/SubstackFeed.js

import React, { useEffect } from 'react';

const SubstackFeed = () => {
  useEffect(() => {
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
    document.getElementById("substack-feed-embed").appendChild(script);

    return () => {
      // Clean up script when the component unmounts
      // document.getElementById("substack-feed-embed").removeChild(script);
    };
  }, []);

  return <div className=' text-black  p-6' id="substack-feed-embed"></div>;
};

export default SubstackFeed;
