import '../Header/header.css';
import headerlogo from '../../img/header_logo.png';

function Header() {
  return (
    <header>
        <div className="headerTop">
          <div className='page-wrapper-new'>
            <a href="">
              <img className="brand-png" src={headerlogo} alt="Coyote Logistics" />
            </a>
          </div>
        </div>
    </header>
  );
}

export default Header;