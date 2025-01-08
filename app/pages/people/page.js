'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.jikan.moe/v4/top/people");
      const result = await data.json();
      setPeople(result.data);
    }

    fetchData();
  }, []);
    
    console.log(people);
  return (
    <div className="flex gap-2  flex-wrap items-center justify-center mx-6 my-4 px-5 py-4">
      {people?.map((person) => (
        <div key={person.mal_id} className="flex flex-col gap-2">
          <Image
            src={person.images.jpg.image_url}
            alt={person.name}
            width={150}
            height={100}
          />
          {person.name}
        </div>
      ))}
    </div>
  );
}
