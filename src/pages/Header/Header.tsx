import Wrapper from '../../layout/Wrapper'
import { Stack } from '@mui/material';
import styles from './Header.module.scss';
import headerVideo from '../../assets/video/header.mp4'

const Header = () => {
  return (
    <div className={styles['app__header']}>
      {/* <video className={styles['app__header-video']} autoPlay loop muted> 
        <source src={headerVideo} type="video/mp4" />
        </video> */}
        <div className={`head-text ${styles['app__header-headline']}`}>
          Join us to make Video Summerization <br/> 
          and shape the future of technology 
        </div>
    </div>
  )
}

export default Wrapper(Header, 'home');