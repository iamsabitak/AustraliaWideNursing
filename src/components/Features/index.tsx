"use client";
import Image from "next/image";
const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Title and Subtitle */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-blue-700 md:text-4xl">
              Welcome to Australia Wide Nursing
            </h2>
            <p className="mt-2 text-black">
              Your Trusted Partner in Providing Exceptional Nurse Staffing
              Solutions for Aged Care and Hospital Settings Across Australia.
            </p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center gap-15 pt-5 lg:flex-row">
            {/* Text */}
            <div className="lg:w-1/2">
              <div className="border-primary mb-4 border-l-4 pl-4">
                <h3 className="text-2xl font-bold">
                  Why choose Australia Wide Nursing Agency?
                </h3>
              </div>
              <p className="leading-relaxed text-gray-700">
                At Australia Wide Nursing Agency, we pride ourselves on being
                your premier choice for healthcare staffing solutions. Our
                competitive fees make us an attractive option for both
                healthcare facilities and professionals alike. With an extensive
                database of experienced staff across Queensland, Western
                Australia, and Victoria, we're well-equipped to meet your
                staffing needs promptly and efficiently. We specialise in
                placing a wide range of healthcare roles, including Registered
                Nurses (RNs), Enrolled Nurses (ENs), and Assistants in Nursing
                (AINs).
              </p>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <Image
                src="/Images/26-1920w.webp"
                alt="Nursing Care"
                width={600}
                height={400}
                className="h-auto w-full rounded object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
