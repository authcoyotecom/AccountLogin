import '../HomePgae/homepage.css';
import FormFk from '../Form/formfk';
import peak from '../../img/peak.jpg';
import supply from '../../img/supply.jpg';
import rightarrow from '../../img/right-arrow-svgrepo-com.svg';

function HomePage() {
  return (
    <section className="body">
          <div className="photo_section">
             <div className='photo_text'>
                <p>COYOTE LOGISTICS</p>
                <h1>Drive Your Business Forward</h1>
             </div>
          </div>
          <div className="phone_section"></div>
          <div className="form_section">
             <div className='form_block'>
                <FormFk />    
                <div className='reklam_big'>
                    <a href='https://resources.coyote.com/source/peak-season-101' target='_blank' className='reklam'>
                        <div className='phonerbox'>
                            <img className='phoner' src={peak}></img>
                        </div>
                        <p className='reklam_text'>How to Get UPS Peak Season Freight in 2023: Everything Carriers Need to Know</p>
                        <div className='read'>Read Article
                            <img className='readimg' src={rightarrow}></img>
                        </div>
                    </a>
                    <a href='https://resources.coyote.com/coyotego-login-shipper/master-series-on-demand' target='_blank' className='reklam'>
                        <div className='phonerbox'>
                            <img className='phoner' src={supply}></img>
                        </div>
                        <p className='reklam_text'>Supply Chain Master Series: Preparing for Peak From Border to Border Is Now On Demand</p>
                        <div className='read'>Read Article
                            <img className='readimg' src={rightarrow}></img>
                        </div>
                    </a>
                </div>
             </div>
          </div>
    </section>
  );
}

export default HomePage;
