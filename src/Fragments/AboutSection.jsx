const ListAlat = (props) => {
  return <li className="hover:text-primary cursor-pointer">{props.text}</li>;
};

const aboutSection = () => {
  return (
    <>
      <section id="about" className="pt-52 md:pt-16 pb-32">
        <div className="container">
          <div className="flex flex-wrap lg:ml-20 ">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-xl mb-3">
                Layanan Kami
              </h4>
              <h2 className="font-bold text-dark text-lg mb-5 max-w-md lg:text-2xl">
                Jasa Kalibrasi dan Maintenance Peralatan Laboratorium BatuBara
              </h2>
              <div className="w-full px-2 py-2 flex flex-wrap">
                <ul className="font-medium text-base text-secondary max-w-xl w-1/2 lg:text-lg">
                  <ListAlat text="- Sulfur Analyer"></ListAlat>
                  <ListAlat text="- CHN Analyzer "></ListAlat>
                  <ListAlat text="- Calorimeter"></ListAlat>
                  <ListAlat text="- Thermogravimeter"></ListAlat>
                  <ListAlat text="- HGI Machine"></ListAlat>
                </ul>
                <ul className="font-medium text-base text-secondary max-w-xl w-1/2 lg:text-lg">
                  <ListAlat text="- Laboratory MIll"></ListAlat>
                  <ListAlat text="- Oven "></ListAlat>
                  <ListAlat text="- Any of Balancer Tool"></ListAlat>
                  <ListAlat text="- Furnace"></ListAlat>
                  <ListAlat text="- Lainnya..."></ListAlat>
                </ul>
              </div>
            </div>
            <div className="w-full px-5 lg:w-1/2 mx-auto">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                Suplai Laboratorium
              </h3>
              <div className="w-full px-2 py-2 flex flex-wrap">
                <ul className="font-medium text-base text-secondary md:w-1/2 lg:text-lg">
                  <ListAlat text="- Pelalatan Dan Pengambilan Preparasi Batubara/Mineral"></ListAlat>
                  <ListAlat text="- Peralatan Analisa Umum Dan Lanjutan Batubara/Mineral"></ListAlat>
                  <ListAlat text="- Sparepart Peralatan Laboratorium Batubara/Mineral"></ListAlat>
                  <ListAlat text="- Consumable Peralatan Laboratorium Batubara"></ListAlat>
                  <ListAlat text="- Lainnya..."></ListAlat>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default aboutSection;
