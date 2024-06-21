const listGalery=(props)=> {

}
const galerySection = () => {
  return (
    <>
      <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="font-bold text-primary text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Galeri Kerja
              </h2>
              <p className="font-medium text-md text-secondary mb-4 md:text-lg">
                Beberapa Dokumentasi Kerja Dari Tim kami
              </p>

              <ul className="lg:flex lg:w-full mx-auto border-b pb-4 border-secondary justify-center">
                <li className="group">
                  <a
                    href="./galeri_pages/Furnace.html#portfolio"
                    className="text-base text-dark py-2 mx-5 flex border-b-4 border-b-primary">
                    Suhu
                  </a>
                </li>
                <li className="group">
                  <a
                    href="./galeri_pages/Kalorimeter.html#portfolio"
                    className="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary">
                    Instrument
                  </a>
                </li>
                <li className="group">
                  <a
                    href="./galeri_pages/LaboratoryMill.html#portfolio"
                    className="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary">
                    LaboratoryMill
                  </a>
                </li>
                <li className="group">
                  <a
                    href="./galeri_pages/Timbangan.html#portfolio"
                    className="text-base text-dark py-2 mx-5 flex group-hover:border-b-4 group-hover: border-b-primary">
                    Massa
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- card start --> */}
          <div className="w-full pb-12 px-4 flex flex-wrap justify-center xl:mx-auto">
            
          </div>
          {/* <!-- card end --> */}
        </div>
      </section>
    </>
  );
};

export default galerySection;
