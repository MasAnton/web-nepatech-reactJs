import LogoNavbar from "../assets/img/logoNTAU.png/";

// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector("#nav-menu");

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("hidden");
// });

const navBar = () => {
  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#home" className="font-bold text-lg text-primary block">
                <img src={`${LogoNavbar}`} className="w-[120px] py-2" alt="" />
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden">
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-2 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary">
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary">
                      Tentang Kami
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary">
                      Galeri Kerja
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary">
                      Pelanggan
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary">
                      Hubungi Kami
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default navBar;
