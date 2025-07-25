const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="shadow-three mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>
              <p className="text-body-color mb-12 text-base font-medium">
                We’d love to hear from you. Call us at 1300 501 036 or send us a
                message using the form below and we’ll get back to you as soon
                as we can.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="text-dark mb-3 block text-sm font-medium"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-black outline-hidden"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="text-back mb-3 block text-sm font-medium"
                      >
                        Phone
                      </label>
                      <input
                        type="number"
                        placeholder="Enter your number"
                        className="border-stroke focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-black outline-hidden"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    {" "}
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="text-back mb-3 block text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-black outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="text-back mb-3 block text-sm font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke text-blackr focus:border-primary d w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="bg-primary shadow-submit hover:bg-primary/90 cursor-pointer rounded-xs px-9 py-4 text-base font-medium">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
