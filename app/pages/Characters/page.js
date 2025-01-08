"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function page() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.jikan.moe/v4/top/characters");
      const result = await data.json();
      setCharacters(result.data);
    }

    fetchData();
  }, []);

  console.log(characters);
  return (
    <div className="flex gap-2  flex-wrap items-center justify-center mx-6 my-4 px-5 py-4">
      {characters?.map((character) => (
        <div key={character.mal_id} className="flex flex-col gap-2">
          {/* {character.name} */}
          <Image
            src={character.images.webp.image_url}
            alt={character.name}
            width={150} 
            height={100}
          />
          {character.name}
        </div>
      ))}
    </div>
  );
}
