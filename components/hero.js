import Image from "next/image";
import Container from "./container";

const Hero = () => {
  return (
    <>
<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    </div>
</section>
      <Container className="flex flex-wrap ">
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
