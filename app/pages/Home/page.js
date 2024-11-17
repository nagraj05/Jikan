"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AnimeCard from "@/app/components/AnimeCard";

export default function Page() {
  const [posts, setPosts] = useState([]);

  // Fetching data on client side
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.jikan.moe/v4/top/anime");
      const result = await data.json();
      setPosts(result.data); // Set posts to state
    }

    fetchData();
  }, []);

  return (
    <div className=" ">
      <h3>This is Jikan</h3>
      <div className="flex gap-2  flex-wrap border border-green-800 mx-6 my-4 px-5 py-4">
        {posts.map((post) => (
          // <div key={post.mal_id} className="anime-item">
          //   <h3>{post.title}</h3>
          //   <Image
          //     src={post.images.webp.image_url} // Image URL from the API
          //     alt={post.title} // Alt text for accessibility
          //     width={300} // Adjust the width as needed
          //     height={450} // Adjust the height as needed
          //   />
          // </div>
          <AnimeCard
            key={post.mal_id}
            img={post.images.webp.image_url}
            title={post.title}
            description={post.synopsis}
            episodes={24}
            rating="PG-13"
            score={8.5}
            popularity={1234}
          />
        ))}
      </div>
    </div>
  );
}
