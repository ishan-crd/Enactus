import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AchievementsSection = (): JSX.Element => {
  // Data for achievement cards
  const achievementCards = [
    {
      id: 1,
      image: "/image-9.png",
      likes: 315,
      comments: 20,
    },
    {
      id: 2,
      image: "/image-8.png",
      likes: 315,
      comments: 20,
    },
    {
      id: 3,
      image: "/image-7.png",
      likes: 315,
      comments: 20,
    },
  ];

  return (
    <section className="w-full py-16">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-normal mb-16 font-['Julius_Sans_One',Helvetica]">
        Achievements
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {achievementCards.map((card) => (
          <Card
            key={card.id}
            className="w-80 rounded-3xl shadow-lg overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative">
                <img
                  className="w-full h-80 object-cover"
                  alt="Achievement"
                  src={card.image}
                />

                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-7 object-cover"
                      alt="Likes"
                      src="/image-removebg-preview--49--1-5.png"
                    />
                    <span className="ml-2 font-['IBM_Plex_Mono',Helvetica] font-normal text-[#6f6b6b] text-sm">
                      {card.likes}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <span className="font-['IBM_Plex_Mono',Helvetica] font-normal text-[#6f6b6b] text-sm mr-2">
                      {card.comments}
                    </span>
                    <img
                      className="w-6 h-6 object-cover"
                      alt="Comments"
                      src="/image-removebg-preview--50--1-5.png"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
