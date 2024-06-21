import HeroCarousel from "../Component/Carousel/Hero/HeroCarousel.jsx";

const heroSection = () => {
  return (
    <>
      <section id="home" className="pt-36 pb-10">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 md:w-1/2">
              <h1 className="text-sm mb-10 font-semibold text-primary md:text-sm lg:text-xl">
                Welcome to our Company Profile Website
                <h1 className="block font-bold mt-5 mb-[55px] text-dark text-[40px] lg:text-[80px]">
                  PT.NEPATECH
                </h1>
                <h1 className="block font-bold text-dark text-[25px] -mt-4 lg:text-[50px]">
                  AKURASINDO UTAMA
                </h1>
              </h1>
              <h2 className="font-thin -mt-5 text-secondary text-sm mb-5 lg:text-xl">
                Maintenance | Calibration | Laboratory Supplier
              </h2>
              <p className="font-medium text-secondary mb-5 leading-relaxed">
                Terakreditasi ISO/IEC 17025:2017
              </p>

              <div className="flex w-full">
                <a
                  href="https://drive.google.com/file/d/1yJblUHYLyUX6QVpOTUR0HneuXz67QENs/view?usp=share_link"
                  target="_blank"
                  className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out lg:text-xl"
                  download="">
                  Download Company Profile
                </a>
              </div>
            </div>
            <div className="w-full self-end px-4 md:w-1/2 mb-10">
              <div className="container">
                <div className="relative">
                  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <HeroCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default heroSection;
