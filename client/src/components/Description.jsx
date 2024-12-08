import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">
        Turn your text into stunning images in seconds
      </p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt="img"
          className="w-80 xl:w-96 rounded-lg"
        />
        <div className="">
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI-powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Easily bring your ideas to life with our AI-powered text to image
            generator. Whether you need stunning illustrations, captivating
            graphics, or unique designs, our platform has got you covered.
            Imagine it, describe it, and watch it come to life.
          </p>
          <p className="text-gray-600">
            Simply type in text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to creative
            illustrations, we&apos;ve got you covered. Powered by advanced AI
            technology, the creative possibilities are limitless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
