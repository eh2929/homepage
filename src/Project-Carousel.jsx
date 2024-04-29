import * as React from "react";
import { Link } from "react-router-dom";
import image1 from "./assets/LendEase_logo_copy.jpg";
import image2 from "./assets/JobTrackr_logo.jpg";
import image3 from "./assets/Crate_Joy_logo.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ProjectCarousel() {
  const cards = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    // Add more cards as needed
  ];

  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Link to="/projects/mortgage-app">
                <Card className="border-2 border-gray-300 dark:border-gray-500 rounded-lg">
                  <CardContent
                    className="flex aspect-square items-center justify-center p-6"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span className="text-4xl font-semibold">{card.text}</span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ProjectCarousel;
