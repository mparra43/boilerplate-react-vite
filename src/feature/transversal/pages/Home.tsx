import { Layout } from "../components";
import background from "../assets/tripp.jpg";

export const Home = () => {
  return <div>
    <Layout>
      <div style={{backgroundImage: `url(${background})`,}}>
        <div className="mx-auto no-repeat-background border-rounder" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',  backgroundSize:'auto', height: '50rem', width: '95%' }}>
          <div className="container">
          <div className="row text-white text-left fixed-bottom ml-4" style={{marginBottom:'13%'}} >
            <div className="col-4">
            <h3 className="text-white font-weight-bold">Sobre nosotros</h3>
            <p className=" text-white ">
              Trippter es la plataforma de tecnología de turismo líder en el mundo. Ofrece una amplia gama de servicios basados ​​en aplicaciones en mercados que incluyen Asia-Pacífico, América Latina y África, incluidos servicios de experiencias compartidas.
            </p>

            </div>
          </div>

          </div>
        </div>
      </div>

    </Layout>
  </div>;
};
