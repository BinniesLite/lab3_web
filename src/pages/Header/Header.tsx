import Wrapper from '../../layout/Wrapper'
import { Stack } from '@mui/material';
import styles from './Header.module.scss';

import { useLocation } from 'react-router-dom';


const Header = () => {

  const isContact = location.pathname === '/contact';
  return (
    <div className={styles['app__wrapper-img']}>
      <div style={{color: `${isContact ? 'black' : 'white'}`}} className={styles['app__header']}>
        {/* <video className={styles['app__header-video']} autoPlay loop muted>
          <source src={headerVideo} type="video/mp4" />
          </video> */}
          <div className={`head-text ${styles['app__header-headline']}`}>
            Join us to make Video Summerization <br/>
            and shape the future of technology
          </div>
    </div>
    </div>
  )
}

export default Wrapper(Header, 'home');