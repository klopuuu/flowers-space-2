import styles from './Logo.module.css';
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../utils/consts';

export default function HeaderHome() {
  return (
    <div className={styles.header}>
      <Link to={HOME_ROUTE}><img src={logo} /></Link>
    </div>
  );
}

