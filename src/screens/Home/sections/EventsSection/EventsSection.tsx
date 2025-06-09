import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Event data for mapping
const eventData = [
  {
    id: 1,
    image: "/image-4-1.png",
    likes: 315,
    views: 20,
  },
  {
    id: 2,
    image: "/image-5.png",
    likes: 315,
    views: 20,
  },
  {
    id: 3,
    image: "/image-6.png",
    likes: 315,
    views: 20,
  },
];

export const EventsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 flex flex-col items-center">
      <h2 className="mb-12 font-['Julius_Sans_One',Helvetica] text-3xl md:text-4xl lg:text-5xl text-center">
        Events
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        {eventData.map((event) => (
          <Card
            key={event.id}
            className="w-80 rounded-3xl shadow-lg overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative">
                <img
                  className="w-full h-80 object-cover"
                  alt="Event image"
                  src={event.image}
                />

                <div className="flex justify-between p-4">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-7 object-cover"
                      alt="Likes icon"
                      src="/image-removebg-preview--49--1-5.png"
                    />
                    <span className="ml-2 font-['IBM_Plex_Mono',Helvetica] font-normal text-[#6f6b6b] text-sm">
                      {event.likes}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <span className="mr-2 font-['IBM_Plex_Mono',Helvetica] font-normal text-[#6f6b6b] text-sm">
                      {event.views}
                    </span>
                    <img
                      className="w-6 h-6 object-cover"
                      alt="Views icon"
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
