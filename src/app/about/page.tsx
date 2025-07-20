import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about our mission and values at Australia Wide Nursing.",
};
const AboutPage = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <section className="py-16">
            <div className="container mx-auto space-y-20 px-4">
              <div className="bg-opacity-80 relative overflow-hidden rounded-lg bg-black p-10 text-white">
                <Image
                  src="/file.svg" // ✅ Replace with actual image path
                  alt="CTA Background"
                  fill
                  className="absolute inset-0 z-0 object-cover object-center opacity-20"
                />
                <h3 className="text-center text-2xl font-bold md:text-5xl p-20">
                  About Us
                </h3>
              </div>
              
              {/* Top Section */}
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                <div className="w-full">
                  <Image
                    src="/file.svg" // ✅ Replace with actual image path
                    alt="Director"
                    width={500}
                    height={500}
                    className="h-auto w-full rounded object-cover shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                    Connecting Hearts and Hands in Healthcare:
                    <br />
                    <span className="font-bold">
                      Australia Wide Nursing Agency
                    </span>
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    As a seasoned director and registered nurse, I, Swastika
                    Neupane, bring over 5 years of invaluable experience and
                    passion for healthcare to the forefront with the launch of
                    Australia Wide Nursing Agency. My journey in the healthcare
                    sector has been diverse and enriching – from working as an
                    Assistant in Nursing for 3 years in aged care facilities to
                    expanding my horizons as a Registered Nurse in various
                    settings including hospitals and travel agency contracts
                    across Queensland.
                  </p>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    This wide-ranging experience has inspired me to establish a
                    nursing agency that prioritises quality care and supports
                    healthcare professionals. At Australia Wide Nursing, our
                    mission is to bridge the gap between exceptional nursing
                    professionals and top-tier healthcare facilities in
                    Australia. As a premier nurse staffing agency specialising
                    in aged care and hospital settings, we are dedicated to
                    enhancing the quality of care through our commitment to
                    excellence and compassion.
                  </p>
                </div>
              </div>

              {/* Healthcare Managers Section */}
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-3xl font-semibold text-gray-800 dark:text-white">
                    For Healthcare Managers
                  </h3>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    We understand the critical need for reliable, skilled, and
                    compassionate nursing staff to ensure the smooth operation
                    of your facilities. Australia Wide Nursing is here to
                    support you by providing a robust pool of qualified nurses
                    ready to meet your diverse staffing needs. We take pride in
                    our rigorous selection process, ensuring that every nurse we
                    place is not only highly competent but also aligns with your
                    organisational values and standards.
                  </p>
                  <button className="rounded bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500">
                    Hire Expert Nurses Now
                  </button>
                </div>
                <div>
                  <Image
                    src="/file.svg"
                    alt="Healthcare Managers"
                    width={500}
                    height={350}
                    className="h-auto w-full rounded object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* For Nurses Section */}
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <Image
                    src="/file.svg"
                    alt="For Nurses"
                    width={500}
                    height={350}
                    className="h-auto w-full rounded object-cover shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="mb-3 text-3xl font-semibold text-gray-800 dark:text-white">
                    For Nurses
                  </h3>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    We offer a supportive and enriching environment where your
                    expertise and dedication are valued. Our goal is to put our
                    nurses first by providing the support and work environment
                    they deserve. We connect you with opportunities that match
                    your skills and career aspirations, allowing you to thrive
                    professionally while making a meaningful impact on patients'
                    lives.
                  </p>
                  <button className="rounded bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500">
                    Join Our Community
                  </button>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-opacity-80 relative overflow-hidden rounded-lg bg-black p-10 text-white">
                <Image
                  src="/file.svg" // ✅ Replace with actual image path
                  alt="CTA Background"
                  fill
                  className="absolute inset-0 z-0 object-cover object-center opacity-20"
                />
                <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
                  <h3 className="text-2xl font-bold md:text-3xl">
                    We specialise in delivering exceptional nursing services
                    tailored to meet the diverse needs of our clients.
                  </h3>
                  <p className="text-lg">
                    Our mission is to deliver excellence in nursing and
                    compassionate care across Australia. Together, we can make a
                    difference in the lives of those we serve.
                  </p>
                  <button className="rounded bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
