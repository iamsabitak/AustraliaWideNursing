import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 my-20 flex flex-wrap">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="text-primary mb-5 text-3xl leading-tight font-bold sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
                Australia Wide Nursing
              </h1>
              <h2 className="mb-12 text-base leading-relaxed! text-black sm:text-lg md:text-3xl dark:text-white">
                Excellence in Nursing, Compassion in Cares
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
