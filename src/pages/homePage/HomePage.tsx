import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

import GreenAppleSVG from '../../assets/img/green_apple.svg';
import RedAppleSVG from '../../assets/img/red_apple.svg';

const HomePage = (): JSX.Element => {
    return(
        <div className={styles.root}>
            <div className={styles.title}> Selecciona tu tipo de manzana </div>
            <div className={styles.redSection}>
                <div className={styles.sectionContent}>
                    <div style={{width: '100%'}}>
                        <img className={styles.img} src={GreenAppleSVG} alt="Green Apple"/>
                    </div>
                    <Link style={{textDecoration: 'none' , color: '#20821B', border: '2px solid #20821B', padding: '10px'}} to={'/content01'}>Manzana Verde!</Link>
                </div>
            </div>
            <div className={styles.blueSection}>
                <div className={styles.sectionContent}>
                    <div style={{width: '100%'}}>
                        <img className={styles.img} src={RedAppleSVG} alt="Red Apple"/>
                    </div>
                    <Link style={{textDecoration: 'none', color: '#BA364A', border: '2px solid #BA364A', padding: '10px'}} to={'/content02'}>Manzana Roja!</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;