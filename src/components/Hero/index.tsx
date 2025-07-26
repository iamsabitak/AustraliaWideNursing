import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section id="about" className="pt-[92px] pb-[20px]">
        <div className="bg-opacity-80 relative h-200 overflow-hidden bg-black">
          <Image
            src="/Images/healthcare+workers-1920w.webp"
            alt="CTA Background"
            fill
            className="absolute inset-0 z-0 object-cover object-center opacity-30"
          />
          <div className="mx-auto mt-50 max-w-[800px] text-center">
            <h1 className="text-primary mb-5 text-3xl leading-tight font-bold sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
              Australia Wide Nursing
            </h1>
            <h2 className="mb-12 text-base leading-relaxed! text-white sm:text-lg md:text-3xl">
              Excellence in Nursing, Compassion in Cares
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
