<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PT.Nepatech Akurasindo Utama</title>
    <script>
      function hideParameters() {
        var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({path: newUrl}, '', newUrl);
      }
    </script>
    <link
      rel="icon"
      type="image/png"
      href="../dist/img/carousel/hero/ntau2.png" />
    <link href="../dist/output.css" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script type="text/javascript">
      (function () {
        emailjs.init("6P6waYRK-rdapEak5");
      })();
    </script>
  </head>
  <body>
    <!-- npx tailwindcss -i ./src/input.css -o ./../dist/output.css --watch -->

    <div class="w-full fixed flex justify-end bottom-5 right-5">
      <a
        href="https://api.whatsapp.com/send?phone=6281267084525"
        target="_blank"
        ><img
        src="../dist/img/logoWA.png"
          class="w-[50px] md:w-[70px] lg:w-[80px] hover:w-[55px] hover:md:w-[75px] hover:lg:w-[85px] transition ease-in-out duration-500"
          alt=""
      /></a>
    </div>
    <!-- Header Start -->
    <header
      class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="px-4">
            <a href="#home" class="font-bold text-lg text-primary block"
              ><img
                src="./../dist/img/logoNTAU.png"
                class="w-[120px] py-2"
                alt=""
            /></a>
          </div>
          <div class="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              class="block absolute right-4 lg:hidden">
              <span
                class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span
                class="hamburger-line transition duration-300 ease-in-out"></span>
              <span
                class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav
              id="nav-menu"
              class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-2 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
              <ul class="block lg:flex">
                <li class="group">
                  <a
                    href="#home"
                    class="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary"
                    >Beranda</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#about"
                    class="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary"
                    >Tentang Kami</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#portfolio"
                    class="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary"
                    >Galeri Kerja</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#clients"
                    class="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary"
                    >Pelanggan</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#contact"
                    class="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary"
                    >Hubungi Kami</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- Header End -->

    <!-- Hero Section Start -->
    <section id="home" class="pt-36 pb-10">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full self-center px-4 md:w-1/2">
            <h1
              class="text-sm font-semibold text-primary md:text-sm lg:text-xl">
              Welcome to our Company Profile Website
              <h1 class="block font-bold text-dark text-[40px] lg:text-[80px]">
                PT.NEPATECH
              </h1>
              <h1
                class="block font-bold text-dark text-[25px] -mt-4 lg:-mt-6 lg:text-[50px]">
                AKURASINDO UTAMA
              </h1>
            </h1>
            <h2 class="font-thin text-secondary text-sm mb-5 lg:text-xl">
              Maintenance | Calibration | Laboratory Supplier
            </h2>
            <p class="font-medium text-secondary mb-10 leading-relaxed">
              Terakreditasi ISO/IEC 17025:2017
            </p>

            <div class="flex w-full">
              <a
                href="https://drive.google.com/file/d/1yJblUHYLyUX6QVpOTUR0HneuXz67QENs/view?usp=share_link"
                target="_blank"
                class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out lg:text-xl"
                download="">
                Download Company Profile
              </a>
            </div>
          </div>
          <div class="w-full self-end px-4 md:w-1/2 mb-10">
            <div class="container">
              <div class="relative mt-3 md:-mt-[280px] lg:-mt-[450px]">
                <div class="carousel">
                  <div class="carousel-item absolute opacity-0" id="slide-1">
                    <img
                      src="./../dist/img/carousel/hero/1.png"
                      alt="Slide 1" />
                  </div>
                  <div class="carousel-item absolute opacity-0" id="slide-2">
                    <img
                      src="./../dist/img/carousel/hero/ntau2.png"
                      alt="Slide 2" />
                  </div>
                  <!-- <div
                    class="carousel-item absolute opacity-0 lg:w-[450px] lg:mt-[80px]"
                    id="slide-3">
                    <img
                      src="./../dist/img/carousel/hero/3.png"
                      alt="Slide 3" />
                  </div> -->
                  <div
                    class="carousel-item absolute opacity-0 lg:w-[450px] lg:mt-[80px]"
                    id="slide-3">
                    <img
                      src="./../dist/img/carousel/hero/4.png"
                      alt="Slide 3" />
                  </div>
                </div>
                <div class="carousel-navigation absolute w-full">
                  <label for="slide-1" class="carousel-navigation-item"></label>
                  <label for="slide-2" class="carousel-navigation-item"></label>
                  <label for="slide-3" class="carousel-navigation-item"></label>
                  <label for="slide-4" class="carousel-navigation-item"></label>
                </div>
              </div>
            </div>
            <!-- <img
                src="../dist/img/logoNGS.png"
                alt="PT.Nepatech"
                class="max-w-full w-[250px] md:w-[400px] lg:w-[500px] mx-auto" /> -->
          </div>
        </div>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- About Section Start -->
    <section id="about" class="pt-52 md:pt-16 pb-32">
      <div class="container">
        <div class="flex flex-wrap lg:ml-14">
          <div class="w-full px-4 mb-10 lg:w-1/2">
            <h4 class="font-bold uppercase text-primary text-xl mb-3">
              Layanan Kami
            </h4>
            <h2 class="font-bold text-dark text-lg mb-5 max-w-md lg:text-2xl">
              Jasa Kalibrasi dan Maintenance Peralatan Laboratorium BatuBara
            </h2>
            <div class="w-full px-2 py-2 flex flex-wrap">
              <ul
                class="font-medium text-base text-secondary max-w-xl w-1/2 lg:text-lg">
                <li class="hover:text-primary cursor-pointer">
                  - Sulfur Analyzer
                </li>
                <li class="hover:text-primary cursor-pointer">
                  - CHN Analyzer
                </li>
                <li class="hover:text-primary cursor-pointer">- Calorimeter</li>
                <li class="hover:text-primary cursor-pointer">- HGI Machine</li>
                <li class="hover:text-primary cursor-pointer">
                  - Thermogravimeter Analyzer
                </li>
              </ul>
              <ul
                class="font-medium text-base text-secondary max-w-xl w-1/2 lg:text-lg">
                <li class="hover:text-primary cursor-pointer">
                  - Laboratory Mill
                </li>
                <li class="hover:text-primary cursor-pointer">- Oven</li>
                <li class="hover:text-primary cursor-pointer">- Furnace</li>
                <li class="hover:text-primary cursor-pointer">- Balance</li>
                <li class="hover:text-primary cursor-pointer">- Lainnya ...</li>
              </ul>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 mx-auto">
            <h3
              class="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
              - Suplai Laboratorium
            </h3>
            <div class="w-full px-2 py-2 flex flex-wrap">
              <ul
                class="font-medium text-base text-secondary max-w-xl md:w-1/2 lg:text-lg">
                <li class="hover:text-primary cursor-pointer">
                  - Peralatan Dan Pengambilan Dan Preparasi BatuBara
                </li>
                <li class="hover:text-primary cursor-pointer">
                  - Peralatan Analisa Umum Dan Lanjutan BatuBara
                </li>
                <li class="hover:text-primary cursor-pointer">
                  - SparePart Peralatan Laboratorium BatuBara
                </li>
                <li class="hover:text-primary cursor-pointer">
                  - Consumable Peralatan Laboratorium BatuBara
                </li>
                <li class="hover:text-primary cursor-pointer">- Lainnya ...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section End -->

    <!-- Galery Section Start -->
    <section id="portfolio" class="pt-36 pb-16 bg-slate-100">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h2
              class="font-bold text-primary text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Galeri Kerja
            </h2>
            <p class="font-medium text-md text-secondary mb-4 md:text-lg">
              Beberapa Dokumentasi Kerja Dari Tim kami
            </p>

            <ul
              class="lg:flex lg:w-full mx-auto border-b pb-4 border-secondary justify-center">
              <li class="group">
                <a
                  href="./Furnace.html#portfolio"
                  class="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary"
                  >Suhu</a
                >
              </li>
              <li class="group">
                <a
                  href="./Kalorimeter.html#portfolio"
                  class="text-base border-b-4 border-b-primary text-dark py-2 mx-5 flex group-hover:border-b-4"
                  >Intrument</a
                >
              </li>
              <li class="group">
                <a
                  href="./LaboratoryMill.html#portfolio"
                  class="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary"
                  >LaboratoryMill</a
                >
              </li>
              <li class="group">
                <a
                  href="./Timbangan.html#portfolio"
                  class="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary"
                  >Massa</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- card start -->
        <div class="w-full pb-12 px-4 flex flex-wrap justify-center xl:mx-auto">
          <div class="p-6 md:w-1/2 lg:w-1/3">
            <div class="rounded-md shadow-md overflow-hidden">
              <img
                class="hover:scale-110 ease-in duration-150"
                src="../dist/img/galery/Kalorimeter/1.jpg"
                alt="E-Commerce"
                width="w-full" />
            </div>
          </div>
          <div class="p-6 md:w-1/2 lg:w-1/3">
            <div class="rounded-md shadow-md overflow-hidden">
              <img
                class="hover:scale-110 ease-in duration-150"
                src="../dist/img/galery/Kalorimeter/2.jpg"
                alt="E-Commerce"
                width="w-full" />
            </div>
          </div>
          <div class="p-6 md:w-1/2 lg:w-1/3">
            <div class="rounded-md shadow-md overflow-hidden">
              <img
                class="hover:scale-110 ease-in duration-150"
                src="../dist/img/galery/Kalorimeter/3.jpg"
                alt="E-Commerce"
                width="w-full" />
            </div>
          </div>
          <div class="p-6 md:w-1/2 lg:w-1/3">
            <div class="rounded-md shadow-md overflow-hidden">
              <img
                class="hover:scale-110 ease-in duration-150"
                src="../dist/img/galery/Kalorimeter/4.jpg"
                alt="E-Commerce"
                width="w-full" />
            </div>
          </div>
          <div class="p-6 md:w-1/2 lg:w-1/3">
            <div class="rounded-md shadow-md overflow-hidden">
              <img
                class="hover:scale-110 ease-in duration-150"
                src="../dist/img/galery/Kalorimeter/5.jpg"
                alt="E-Commerce"
                width="w-full" />
            </div>
          </div>
          <div class="p-6 md:w-1/2 lg:w-1/3">
            <div class="rounded-md shadow-md overflow-hidden">
              <img
                class="hover:scale-110 ease-in duration-150"
                src="../dist/img/galery/Kalorimeter/6.jpg"
                alt="E-Commerce"
                width="w-full" />
            </div>
          </div>
          <div class="p-6 md:w-1/2 lg:w-1/3">
            <div class="rounded-md shadow-md overflow-hidden">
              <img
                class="hover:scale-110 ease-in duration-150"
                src="../dist/img/galery/Kalorimeter/7.jpg"
                alt="E-Commerce"
                width="w-full" />
            </div>
          </div>
          <div class="p-6 md:w-1/2 lg:w-1/3">
            <div class="rounded-md shadow-md overflow-hidden">
              <img
                class="hover:scale-110 ease-in duration-150"
                src="../dist/img/galery/Kalorimeter/8.jpg"
                alt="E-Commerce"
                width="w-full" />
            </div>
          </div>
          <div class="p-6 md:w-1/2 lg:w-1/3">
            <div class="rounded-md shadow-md overflow-hidden">
              <img
                class="hover:scale-110 ease-in duration-150"
                src="../dist/img/galery/Kalorimeter/9.jpg"
                alt="E-Commerce"
                width="w-full" />
            </div>
          </div>
          <!-- <div class="p-6 md:w-1/2 lg:w-1/3">
            <div class="rounded-md shadow-md overflow-hidden">
              <img
                class="hover:scale-110 ease-in duration-150"
                src="../dist/img/galery/Kalorimeter/10.jpg"
                alt="E-Commerce"
                width="w-full" />
            </div>
          </div> -->
        </div>
        <!-- card end -->
      </div>
    </section>
    <!-- Galery Section End -->

    <!-- Clients Section Start -->
    <section id="clients" class="pt-36 pb-32 bg-slate-200">
      <div class="container">
        <div class="w-full px-4">
          <div class="mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-primary mb-2">Perusahaan</h4>
            <h2
              class="font-bold text-secondary text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Yang Pernah Bekerjasama
            </h2>
          </div>
        </div>

        <div class="w-full px-4">
          <div class="flex flex-wrap items-center justify-center">
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/atq.png" alt="Google" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/Aetra.png" alt="Google" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/Antam.png" alt="Gojek" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/BP.png" alt="Tokopedia" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/BSA.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/CGR.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/Geomin.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/Geoservices.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/IBIS.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/IP.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/Krakatau.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/LBE.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/MA.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/MSK.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/Nusantara Power.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/PJB.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/PLN.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/SCCI.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/Sucofindo.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img
                src="../dist/img/PNG/Surveyor Indonesia.png"
                alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/Tek-MIRA.png" alt="traveloka" />
            </a>
            <a
              href="#"
              class="max-w-[60px] md:max-w-[100px] lg:max-w-[120px] mx-4 py-4 lg:mx-6 xl:mx-8">
              <img src="../dist/img/PNG/TOP.png" alt="traveloka" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Clients Section End -->

    <!-- Blog Section Start -->
    <!-- <section id="blog" class="pt-36 pb-32 bg-slate-100">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-primary mb-2">Blog</h4>
            <h2
              class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Tulisan Terkini
            </h2>
            <p class="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              quisquam perspiciatis blanditiis dolores?
            </p>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="https://source.unsplash.com/360x200?programming"
                alt="Programming"
                class="w-full" />
              <div class="py-8 px-6">
                <h3>
                  <a
                    href="#"
                    class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >Tips Belajar Programming</a
                  >
                </h3>
                <p class="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Placeat officia beatae quisquam?
                </p>
                <a
                  href="#"
                  class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >Baca Selengkapnya</a
                >
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="https://source.unsplash.com/360x200?mechanical+keyboard"
                alt="Mechanical Keyboard"
                class="w-full" />
              <div class="py-8 px-6">
                <h3>
                  <a
                    href="#"
                    class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >Review Keyboard GMMK Pro</a
                  >
                </h3>
                <p class="font-medium text-base text-secondary mb-6">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  facilis illum in.
                </p>
                <a
                  href="#"
                  class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >Baca Selengkapnya</a
                >
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="https://source.unsplash.com/360x200?coffee"
                alt="Coffee"
                class="w-full" />
              <div class="py-8 px-6">
                <h3>
                  <a
                    href="#"
                    class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >Menikmati Secangkir Kopi</a
                  >
                </h3>
                <p class="font-medium text-base text-secondary mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, totam ipsum ea quam sequi velit sunt.
                </p>
                <a
                  href="#"
                  class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >Baca Selengkapnya</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Blog Section End -->

    <!-- Contact Section Start -->
    <section id="contact" class="pt-36 pb-32">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-primary mb-2">Contact</h4>
            <h2
              class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Hubungi Kami
            </h2>
          </div>
        </div>

        <form>
          <div class="w-full lg:w-2/3 lg:mx-auto">
            <div class="w-full px-4 mb-8">
              <label for="name" class="text-base font-bold text-primary"
                >Nama</label
              >
              <input
                type="text"
                id="name"
                class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            </div>
            <div class="w-full px-4 mb-8">
              <label for="email" class="text-base font-bold text-primary"
                >Email</label
              >
              <input
                type="email"
                id="email"
                class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            </div>
            <div class="w-full px-4 mb-8">
              <label for="message" class="text-base font-bold text-primary"
                >Pesan</label
              >
              <textarea
                type="message"
                id="message"
                class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
            </div>
            <div class="w-full px-4">
              <button
                class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
                id="sendButton"
                onclick="sendMail()">
                Kirim
              </button>
              <button
                class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full opacity-80 hover:shadow-lg transition duration-500 hidden"
                id="loadingIcon">
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-6 h-6 mr-2 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB" />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor" />
                </svg>
              </button>
              <button
                class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full opacity-60 hover:shadow-lg transition duration-500 hidden"
                id="sendButtonDone">
                Berhasil DIkirim
              </button>
              <!-- <button
            class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 mr-3 text-white "
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor" />
            </svg>
            Dikirim
          </button> -->
            </div>
          </div>
        </form>
      </div>
    </section>
    <!-- Contact Section End -->

     <!-- Footer Start -->
   <footer class="bg-dark pt-24 pb-12">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
          <h3 class="font-bold text-4xl mb-4 text-white">Hubungi Kami</h3>
          <p>nepatech1@gmail.com</p>
          <p></p>
          <p class="mt-2">
            Paris Square Kom. B2-02, Jl. Letnan Sutopo No.8, Lengkong Gudang
            Tim., Kec. Serpong, Kota Tangerang Selatan, Banten 15310,
            Indonesia
          </p>
        </div>
        <div class="max-w-full px-4 mb-12 md:w-1/3">
          <h3 class="font-semibold text-xl text-white mb-5">Galeri Kerja</h3>
          <ul class="text-slate-300">
            <li>
              <a
                href="./Furnace.html#portfolio"
                class="inline-block text-base hover:text-primary mb-3"
                >Suhu</a
              >
            </li>
            <li>
              <a
                href="./Kalorimeter.html#portfolio"
                class="inline-block text-base hover:text-primary mb-3"
                >Instrument</a
              >
            </li>
            <li>
              <a
                href="./LaboratoryMill.html#portfolio"
                class="inline-block text-base hover:text-primary mb-3"
                >Laboratory Mill</a
              >
            </li>
            <li>
              <a
                href="./Timbangan.html#portfolio"
                class="inline-block text-base hover:text-primary mb-3"
                >Massa</a
              >
            </li>
          </ul>
        </div>
        <div class="w-full px-4 mb-12 md:w-1/3">
          <h3 class="font-semibold text-xl text-white mb-5">Tautan</h3>
          <ul class="text-slate-300">
            <li>
              <a
                href="#home"
                class="inline-block text-base hover:text-primary mb-3"
                >Beranda</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="inline-block text-base hover:text-primary mb-3"
                >Tentang Kami</a
              >
            </li>
            <li>
              <a
                href="#portfolio"
                class="inline-block text-base hover:text-primary mb-3"
                >Galeri Kerja</a
              >
            </li>
            <li>
              <a
                href="#clients"
                class="inline-block text-base hover:text-primary mb-3"
                >Pelanggan</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="inline-block text-base hover:text-primary mb-3"
                >Hubungi Kami</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- icon Dari https://simpleicons.org/ -->

      <div class="w-full pt-10 border-t border-slate-700">
        <div class="flex items-center justify-center mb-5">
          <!-- Youtube -->
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzDsclzgHSWdlmDFXMtkzgCSckMPMMhSGpvtNQjhfpbjPpZVZZVvZmPzdWdHCVVZbcsvWJC"
            target="_blank"
            class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
            <svg
              role="img"
              width="20"
              class="fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <svg>
                <title>Gmail</title>
                <path
                  d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </svg>
          </a>

          <!-- Instagram -->
          <a
            href="https://instagram.com/nepatechglobal.id?igshid=ZDdkNTZiNTM="
            target="_blank"
            class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
            <svg
              role="img"
              width="20"
              class="fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <path
                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </a>

          <!-- LinkedIn -->
          <a
            href=""
            target="_blank"
            class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
            <svg
              role="img"
              width="20"
              class="fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <title>LinkedIn</title>
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
        <p class="font-medium text-xs text-slate-500 text-center">
          PT.Nepatech Akurasindo Utama © Copyright 2023-2024. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
  <!-- Footer End -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

    <!-- Initialize Swiper -->

    <script src="../dist/js/script.js"></script>
  </body>
</html>
