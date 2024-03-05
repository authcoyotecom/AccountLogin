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
                    <a href='https://resources.coyote.com/coyotego-login-carrier/go-carrier-my-loads' target='_blank' className='reklam'>
                        <div className='phonerbox'>
                            <img className='phoner' src={peak}></img>
                        </div>
                        <p className='reklam_text'>Managing Your Active Loads: Carrier's Guide to CoyoteGO</p>
                        <div className='read'>Read Article
                            <img className='readimg' src={rightarrow}></img>
                        </div>
                    </a>
                    <a href='https://resources.coyote.com/coyotego-login-shipper/go-shipper-payment' target='_blank' className='reklam'>
                        <div className='phonerbox'>
                            <img className='phoner' src={supply}></img>
                        </div>
                        <p className='reklam_text'>Paying for Your Shipments Digitally: Shipper’s Guide to CoyoteGO</p>
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
