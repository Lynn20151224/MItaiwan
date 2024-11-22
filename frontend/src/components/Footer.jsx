import styles from '../css/components/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.globalContainer}>
                <div className={styles.footerNav}>

                    <div className={styles.footerTop}>
                        <div className={styles.footerLogo}>
                            <img src="./img/logo.png" alt="美映台灣" />
                        </div>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialIcon}><img src="./img/IG_light.png" alt="Instagram" /></a>
                            <a href="#" className={styles.socialIcon}><img src="./img/line_light.png" alt="Line" /></a>
                            <a href="#" className={styles.socialIcon}><img src="./img/FB_light.png" alt="Facebook" /></a>
                        </div>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>關於我們</h4>
                        <ul>
                            <li><a href="#">關於美映</a></li>
                            <li><a href="#">關於典匠</a></li>
                            <li><a href="#">關於創意王</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>關於投稿</h4>
                        <ul>
                            <li><a href="#">投稿須知</a></li>
                            <li><a href="#">Badge機制</a></li>
                            <li><a href="#">分潤機制</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>客服聯繫</h4>
                        <ul>
                            <li><a href="#">常見問題</a></li>
                            <li><a href="#">聯絡我們</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>法務規範</h4>
                        <ul>
                            <li><a href="#">隱私權</a></li>
                            <li><a href="#">使用條款</a></li>
                            <li><a href="#">稅務中心</a></li>
                            <li><a href="#">同意書下載</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerContact}>
                        <div className={styles.languageSelect}>
                            <select>
                                <option>繁體中文</option>
                            </select>
                        </div>
                        <div className={styles.contactInfo}>
                            <p>
                                <FontAwesomeIcon icon="phone" className={styles.contactIcon}/>
                                +886-2-8978-1616
                            </p>
                            <p>
                                <FontAwesomeIcon icon="envelope" className={styles.contactIcon}/>
                                info@imagedj.com
                            </p>
                            <p>
                                <FontAwesomeIcon icon="location-dot" className={styles.contactIcon}/>
                                106台北市大安區信義路四段380號8樓之21
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© ImageDJ Corporation, All Rights Reserved. 典匠資訊股份有限公司 版權所有</p>
                </div>
            </div>
        </footer>
    );
}