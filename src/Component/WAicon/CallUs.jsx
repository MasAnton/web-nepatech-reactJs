import logoWA from "./logoWA.png";

const callUs = () => {
  return (
    <>
      <div className="w-full fixed flex justify-end bottom-5 right-5">
        <a
          href="https://api.whatsapp.com/send?phone=6281267084525"
          target="_blank">
          <img
            src={`${logoWA}`}
            className="w-[50px] md:w-[70px] lg:w-[80px] hover:w-[55px] hover:md:w-[75px] hover:lg:w-[85px] transition ease-in-out duration-500"
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default callUs;
