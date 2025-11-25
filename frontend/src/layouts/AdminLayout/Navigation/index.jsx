import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faGauge,
  faFont,
  faPalette,
  faIcons,
  faUserPlus,
  faRightToBracket,
  faFile,
  faLayerGroup,
  faBan
} from '@fortawesome/free-solid-svg-icons';

// project imports
import NavContent from './NavContent';
import { ConfigContext } from '../../../contexts/ConfigContext';
import useWindowSize from '../../../hooks/useWindowSize';
import navigation from '../../../menu-items';
import navitemcollapse from '../../../menu-items-collapse';
import * as actionType from '../../../store/actions';
import './index.css';

// assets
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import Logo from '../../../assets/images/logo.svg';

// -----------------------|| NAVIGATION ||-----------------------//

export default function Navigation() {

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <img src={Logo} alt="Company Logo" className="sidebar-logo" />

        <div className="sidebar-section">
          <h4>Navigation</h4>         
          <Link to=""><FontAwesomeIcon icon={faHouse} />Home</Link>
          <Link to="/dashboard/sales"> <FontAwesomeIcon icon={faGauge} /> Dashboard / Sales</Link>
        </div>

        <div className="sidebar-section">
          <h4>Elements</h4>
          <p>Ui Components</p>
          <Link to="/typography"><FontAwesomeIcon icon={faFont} />Typography</Link>
          <Link to="/color"><FontAwesomeIcon icon={faPalette} /> Color</Link>
          <Link to=""><FontAwesomeIcon icon={faIcons} />Icons</Link>
        </div>

        <div className="sidebar-section">
          <h4>Pages</h4>
          <p>15+ Readymade Pages</p>
          <Link to="/register"><FontAwesomeIcon icon={faUserPlus} />Register</Link>
          <Link to="/login"><FontAwesomeIcon icon={faRightToBracket} />Login</Link>
        </div>

        <div className="sidebar-section">
          <h4>Other</h4>
           <p>Extra More Things</p>
          <Link to="/sample-page"><FontAwesomeIcon icon={faFile} />Sample Pages</Link>
          <Link to=""><FontAwesomeIcon icon={faLayerGroup} />Menu Levels</Link>
          <Link to=""><FontAwesomeIcon icon={faBan} />Disabled Menu</Link>
        </div>
      </div>
    </div>
  );
}
