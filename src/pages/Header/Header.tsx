import Wrapper from '../../layout/Wrapper'
import { Stack } from '@mui/material';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['app__header']}>
        <div className={`head-text ${styles['app__header-headline']}`}>
          Join us to make Video Summerization <br/> 
          and shape the future of technology 
        </div>
    </div>
  )
}

export default Wrapper(Header, 'home');