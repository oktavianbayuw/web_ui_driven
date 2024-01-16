import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/taman-tugu-muda.jpg";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div
          className="flex items-center w-full lg:w-1/2 "
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-2xl mb-8">
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 relative z-10 bg-white bg-opacity-50">
              Nextly is a free landing page & marketing website template for
              startups and indie projects. Its built with Next.js & TailwindCSS.
              And its completely open-source.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Lihat selengkapnya
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 mx-auto mb-8 w-1/2 rounded-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-lg text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
          />
        </div>
      </Container>
    </>
  );
};

export default Hero;
