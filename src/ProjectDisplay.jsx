import * as React from "react";
import { Link } from "react-router-dom";
import image1 from "../public/LendEase_logo_copy.jpg";
import image2 from "../public/JobTrackr_logo.jpg";
import image3 from "../public/Crate_Joy_logo.jpg";
import image4 from "../public/myPokeCollector_logo.jpg";
import image5 from "../public/CLI_job_tracker.jpg";
import image6 from "../public/LFG.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProjectDisplay() {
  const cards = [
    {
      image: image1,
      title: "Lend Ease",
      description:
        "Lend Ease is a communications solution for indepedent third party lenders and their clients.",
      url: "https://github.com/eh2929/Mortgage-Client-Communications",
    },
    {
      image: image2,
      title: "Job Trackr",
      description:
        "An app to help you track and visualize your job search progress.",
      url: "https://github.com/eh2929/Job-app-tracker",
    },
    {
      image: image3,
      title: "Crate Joy",
      description:
        "An e-commerce marketplace for vendors to sell subscription boxes.",
      url: "https://github.com/eh2929/SubscriptionBox-Marketplace",
    },
    {
      image: image4,
      title: "myPoke Collector",
      description: "A Pokemon card collection tracker.",
      url: "https://github.com/eh2929/Phase1-Final",
    },
    {
      image: image5,
      title: "CLI Job Tracker",
      description:
        "A command line interface to help you track your job search progress.",
      url: "https://github.com/eh2929/Job-Application-Tracker",
    },
    {
      image: image6,
      title: "Let's Find Games",
      description: "A platform for gamers to find games based on their mood.",
      url: "https://github.com/eh2929/phase-2-project",
    },
    // Add more cards as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {cards.map((card, index) => (
        <div key={index} className="max-w-xs mx-auto rounded-xl m-2">
          <Card>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/lend-ease">
                <img
                  className="w-full h-auto"
                  src={card.image}
                  alt={card.title}
                />
              </Link>
            </CardContent>
            <CardFooter>
              <Button className="bg-slate-600 dark:bg-slate-100 px-4 py-2">
                DEMO
              </Button>
              <a href={card.url} target="_blank" rel="noopener noreferrer">
                <Button className="bg-slate-600 dark:bg-slate-100 px-4 py-2 ml-2">
                  GitHub
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ProjectDisplay;
