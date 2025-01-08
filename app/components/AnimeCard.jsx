import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AnimeCard({
  img,
  title,
  description,
  episodes,
  rating,
  score,
  popularity,
}) {
  return (
    <Card className="w-full max-w-[400px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-[200px]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover rounded-t-md"
        />
      </div>
      {/* <CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex items-center gap-2">
          <Badge variant="outline" className="px-2 py-1">
            {episodes} Episodes
          </Badge>
          <Badge variant="outline" className="px-2 py-1">
            Rating: {rating}
          </Badge>
          <Badge variant="outline" className="px-2 py-1">
            Score: {score}
          </Badge>
          <Badge variant="outline" className="px-2 py-1">
            Popularity: {popularity}
          </Badge>
        </div>
      </CardContent> */}
    </Card>
  );
}
