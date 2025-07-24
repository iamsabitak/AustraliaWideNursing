import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about our mission and values at Australia Wide Nursing.",
};
const AboutPage = () => {
  return (
    <section id="about" className="pt-[92px]">
      <div className="-mx-4 flex items-center">
        <div className="mx-auto space-y-20 px-4">
          <div className="bg-opacity-80 relative h-100 overflow-hidden bg-black">
            <Image
              src="/Images/healthcare+workers+(1)-1920w.webp"
              alt="CTA Background"
              fill
              className="absolute inset-0 z-0 object-cover object-center opacity-30"
            />
            <h3 className="mt-20 p-20 text-center text-2xl font-bold text-white md:text-5xl">
              About Us
            </h3>
          </div>
          {/* Top Section */}

          <div className="mx-25 my-18 grid grid-cols-1 items-center gap-20 md:grid-cols-2">
            <div className="w-full">
              <Image
                src="/About/jeshoots-com-l0j0DHVWcIE-unsplash.jpg"
                alt="Director"
                width={500}
                height={350}
                className="h-auto w-full rounded object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-black md:text-3xl">
                Connecting Hearts and Hands in Healthcare:
                <br />
                <span className="font-bold">Australia Wide Nursing Agency</span>
              </h2>
              <p className="mb-4 leading-relaxed text-black">
                As a seasoned director and registered nurse, I, Swastika
                Neupane, bring over 5 years of invaluable experience and passion
                for healthcare to the forefront with the launch of Australia
                Wide Nursing Agency. My journey in the healthcare sector has
                been diverse and enriching – from working as an Assistant in
                Nursing for 3 years in aged care facilities to expanding my
                horizons as a Registered Nurse in various settings including
                hospitals and travel agency contracts across Queensland.
              </p>
              <p className="leading-relaxed text-black">
                This wide-ranging experience has inspired me to establish a
                nursing agency that prioritises quality care and supports
                healthcare professionals. At Australia Wide Nursing, our mission
                is to bridge the gap between exceptional nursing professionals
                and top-tier healthcare facilities in Australia. As a premier
                nurse staffing agency specialising in aged care and hospital
                settings, we are dedicated to enhancing the quality of care
                through our commitment to excellence and compassion.
              </p>
            </div>
          </div>

          {/* Healthcare Managers Section */}
          <div className="mx-25 my-18 grid grid-cols-1 items-center gap-20 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-3xl font-semibold text-black">
                For Healthcare Managers
              </h3>
              <p className="mb-6 text-black">
                We understand the critical need for reliable, skilled, and
                compassionate nursing staff to ensure the smooth operation of
                your facilities. Australia Wide Nursing is here to support you
                by providing a robust pool of qualified nurses ready to meet
                your diverse staffing needs. We take pride in our rigorous
                selection process, ensuring that every nurse we place is not
                only highly competent but also aligns with your organisational
                values and standards.
              </p>
              <button className="rounded bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500">
                Hire Expert Nurses Now
              </button>
            </div>
            <div>
              <Image
                src="/Images/healthcare+worker-1920w.webp"
                alt="Healthcare Managers"
                width={500}
                height={350}
                className="h-auto w-full rounded object-cover shadow-lg"
              />
            </div>
          </div>

          {/* For Nurses Section */}
          <div className="mx-25 my-18 grid grid-cols-1 items-center gap-20 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Image
                src="/Images/Nurse-1920w.webp"
                alt="For Nurses"
                width={500}
                height={350}
                className="h-auto w-full rounded object-cover shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="mb-3 text-3xl font-semibold text-black">
                For Nurses
              </h3>
              <p className="mb-6 text-black">
                We offer a supportive and enriching environment where your
                expertise and dedication are valued. Our goal is to put our
                nurses first by providing the support and work environment they
                deserve. We connect you with opportunities that match your
                skills and career aspirations, allowing you to thrive
                professionally while making a meaningful impact on patients'
                lives.
              </p>
              <button className="rounded bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500">
                Join Our Community
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-opacity-80 relative h-90 overflow-hidden bg-black p-15 text-white">
            <Image
              src="/Images/healthcare+worker-1920w.webp"
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
              <Link href={"/contact"}>
                <button className="rounded bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
