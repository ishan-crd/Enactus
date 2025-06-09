import React from "react";
import { Separator } from "../../components/ui/separator";
import { AchievementsSection } from "./sections/AchievementsSection";
import { CommunitiesSection } from "./sections/CommunitiesSection";
import { EventsSection } from "./sections/EventsSection";
import { NavbarSection } from "./sections/NavbarSection";
import { ProjectsSection } from "./sections/ProjectsSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      {/* Hero Section with Background Image that extends behind navbar */}
      <section className="relative w-full h-screen bg-[url(/image-1.png)] bg-cover bg-center bg-no-repeat">
        {/* NavbarSubsect - positioned absolutely to overlay the background */}
        <div className="relative z-10">
          <NavbarSection />
        </div>

        {/* Main hero content - positioned in upper-middle area like the reference */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4"
          style={{ marginTop: "0vh" }}
        >
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="font-['Julius_Sans_One',Helvetica] font-normal text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 tracking-wide">
              A HEAD FOR BUSINESS.
            </h1>
            <h1 className="font-['Julius_Sans_One',Helvetica] font-normal text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-wide">
              A HEART FOR THE WORLD.
            </h1>
          </div>
        </div>

        {/* Bottom section with "EXPLORE ENACTUS" */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 to-transparent">
          <div className="flex items-center justify-center py-6">
            <span className="font-['Julius_Sans_One',Helvetica] font-normal text-black text-lg tracking-wider uppercase">
              EXPLORE ENACTUS
            </span>
            <svg
              className="ml-2 w-4 h-4 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="relative w-full bg-[#efad33]/10 py-16">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center mb-8">
            <span className="font-['Julius_Sans_One',Helvetica] font-normal text-black text-2xl">
              Explore enactus
            </span>
            <img
              className="w-3 h-[13px] ml-2 object-cover"
              alt="Line"
              src="/line-1.svg"
            />
            <img className="w-3 h-[15px] ml-1" alt="Line" src="/line-2.svg" />
          </div>

          <h2 className="font-['Julius_Sans_One',Helvetica] font-normal text-black text-3xl md:text-4xl lg:text-5xl text-center mb-16">
            Our communities
          </h2>

          {/* ProjectsSubsect */}
          <ProjectsSection />
        </div>
      </section>

      {/* EventsSubsect */}
      <EventsSection />

      {/* AchievementsSubsect */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <AchievementsSection />

          <div className="flex justify-center mt-12">
            <Separator className="w-[411px] h-[3px]" />
          </div>
        </div>
      </section>
    </div>
  );
};
