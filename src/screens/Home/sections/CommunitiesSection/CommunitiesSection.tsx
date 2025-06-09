import React from "react";

export const CommunitiesSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="relative">
        {/* Text with shadow effect created by layering two identical texts */}
        <h1 className="[font-family:'Julius_Sans_One',Helvetica] font-normal text-white text-4xl md:text-5xl lg:text-6xl tracking-[0] leading-[normal] whitespace-nowrap">
          A heart for the world.
        </h1>

        <h1 className="absolute top-0 left-1.5 [font-family:'Julius_Sans_One',Helvetica] font-normal text-white text-4xl md:text-5xl lg:text-6xl tracking-[0] leading-[normal] whitespace-nowrap">
          A heart for the world.
        </h1>
      </div>
    </section>
  );
};
