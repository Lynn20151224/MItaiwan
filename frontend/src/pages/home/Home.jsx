import { Search } from 'lucide-react';
import styles from '../../css/pages/home/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <button className={styles.categoryButton}>
              類別
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ marginLeft: '8px' }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <input
              type="text"
              className={styles.searchBar}
              placeholder="搜尋台灣美景..."
            />
            <div className={styles.searchIcon}>
              <Search size={20} />
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>#台灣</span>
            <span className={styles.tag}>#夜市</span>
            <span className={styles.tag}>#九份老街</span>
            <span className={styles.tag}>#台北101</span>
            <span className={styles.tag}>#珍珠奶茶</span>
          </div>
        </div>
      </div>

      <section className={styles.contentSection}>
        <div className={styles.globalContainer}>
          <div className="row align-items-center">
            <div className="col-md-5">
              <h2 className={styles.sectionTitle_01}>徵集以台灣為主的視覺內容</h2>
              <p className={styles.sectionDescription}>
                美映台灣已匯集台灣元素的創作為起點、服務對台灣有高度認同的創作者，進而在使用者心目中和國際間美映台灣已匯集台灣元素的創作為起點、服務對台灣有高度認同的創作者，進而在使用者心目中和國際間美映台灣已匯集。
              </p>
            </div>
            <div className="col-md-7 text-center">
              <img
                src="./img/placeholder_1.png"
                alt="視覺內容展示"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.globalContainer}>
          <h2 className={styles.sectionTitle_02}>你最聰明的選擇</h2>
          <div className={styles.featureGrid}>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}><span className={styles.featureNumber}>1</span>主推台灣優質創意製作品</h3>
              <p className={styles.featureDescription}>
                美映台灣已匯集台灣元素的創作為起點、服務對台灣有高度認同的創作者，進而在使用者心目中和國際間              </p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}><span className={styles.featureNumber}>2</span>與多家圖庫平台合作</h3>
              <p className={styles.featureDescription}>
                凡是投稿Mytourstock的創作人，都必須審閱且同意遵守「創作者合約書」之相關規定。
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}><span className={styles.featureNumber}>3</span>高分潤</h3>
              <p className={styles.featureDescription}>
                Mytourstock重視您的作品智財權，因此創作人投稿賺版稅的同時，Mytourstock必須與創作人簽訂投稿者合約書              </p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}><span className={styles.featureNumber}>4</span>可以看自己作品的數據</h3>
              <p className={styles.featureDescription}>
                服務對台灣有高度認同的創作者，在國際間強化「美映台灣」本身就是「台灣製造的代表品牌」形象。              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.globalContainer}>
          <div className="row mb-4">
            <div className="col">
              <h2 className={styles.sectionTitle_02}>探索熱門精選視覺內容</h2>
              <p className={styles.sectionSubTitle}>3月最熱門的視覺內容</p>
            </div>
            <div className="col text-end">
              <div className="btn-group">
                <button className="btn btn-link active">最受歡迎</button>
                <button className="btn btn-link">熱門推薦</button>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className={styles.galleryCard}>
                <div className={styles.galleryImages}>
                  <img src="../../img/red1.jpg" alt="紅色心情" className="img-fluid" />
                  <div className={styles.imageGrid}>
                    <img src="../../img/red2.jpg" alt="紅色心情" />
                    <img src="../../img/red3.jpg" alt="紅色心情" />
                    <img src="../../img/red4.jpg" alt="紅色心情" />
                  </div>
                </div>
                <h3 className={styles.galleryTitle}>紅色心情</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.galleryCard}>
                <div className={styles.galleryImages}>
                  <img src="./img/xmas1.jpg" alt="聖誕氛圍" className="img-fluid" />
                  <div className={styles.imageGrid}>
                    <img src="./img/xmas2.jpg" alt="聖誕氛圍" />
                    <img src="./img/xmas3.jpg" alt="聖誕氛圍" />
                    <img src="./img/xmas4.jpg" alt="聖誕氛圍" />
                  </div>
                </div>
                <h3 className={styles.galleryTitle}>聖誕氣圖</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.galleryCard}>
                <div className={styles.galleryImages}>
                  <img src="./img/buisness1.jpg" alt="商業攝影" className="img-fluid" />
                  <div className={styles.imageGrid}>
                    <img src="./img/buisness2.jpg" alt="商業攝影" />
                    <img src="./img/buisness3.jpg" alt="商業攝影" />
                    <img src="./img/buisness4.jpg" alt="商業攝影" />
                  </div>
                </div>
                <h3 className={styles.galleryTitle}>商業攝影</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* <ImageGallery />   */}

      <section className={styles.contentSection}>
        <div className={styles.globalContainer}>
          <div className="row">
            <div className="col">
              <h2 className={styles.sectionTitle_02}>依照顏色分類</h2>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-2">
              <div className={styles.galleryCard}>
                <div className={styles.galleryImagesColor}>
                  <img src="./img/red1.jpg" alt="紅" className="img-fluid" />
                  <div className={styles.imageGrid}>
                    <img src="./img/red2.jpg" alt="紅" />
                    <img src="./img/red3.jpg" alt="紅" />
                    <img src="./img/red4.jpg" alt="紅" />
                  </div>
                </div>
                <h3 className={styles.galleryTitle}>紅</h3>
              </div>
            </div>

            <div className="col-md-2">
              <div className={styles.galleryCard}>
                <div className={styles.galleryImagesColor}>
                  <img src="./img/gr1.jpg" alt="綠" className="img-fluid" />
                  <div className={styles.imageGrid}>
                    <img src="./img/gr2.jpg" alt="綠" />
                    <img src="./img/gr3.jpg" alt="綠" />
                    <img src="./img/gr4.jpg" alt="綠" />
                  </div>
                </div>
                <h3 className={styles.galleryTitle}>綠</h3>
              </div>
            </div>

            <div className="col-md-2">
              <div className={styles.galleryCard}>
                <div className={styles.galleryImagesColor}>
                  <img src="./img/ye1.jpg" alt="黃" className="img-fluid" />
                  <div className={styles.imageGrid}>
                    <img src="./img/ye2.jpg" alt="黃" />
                    <img src="./img/ye3.jpg" alt="黃" />
                    <img src="./img/ye4.jpg" alt="黃" />
                  </div>
                </div>
                <h3 className={styles.galleryTitle}>黃</h3>
              </div>
            </div>
            <div className="col-md-2">
              <div className={styles.galleryCard}>
                <div className={styles.galleryImagesColor}>
                  <img src="./img/bl1.jpg" alt="藍" className="img-fluid" />
                  <div className={styles.imageGrid}>
                    <img src="./img/bl2.jpg" alt="藍" />
                    <img src="./img/bl3.jpg" alt="藍" />
                    <img src="./img/bl4.jpg" alt="藍" />
                  </div>
                </div>
                <h3 className={styles.galleryTitle}>藍</h3>
              </div>
            </div>

            <div className="col-md-2">
              <div className={styles.galleryCard}>
                <div className={styles.galleryImagesColor}>
                  <img src="./img/wh1.jpg" alt="白" className="img-fluid" />
                  <div className={styles.imageGrid}>
                    <img src="./img/wh2.jpg" alt="白" />
                    <img src="./img/wh3.jpg" alt="白" />
                    <img src="./img/wh4.jpg" alt="白" />
                  </div>
                </div>
                <h3 className={styles.galleryTitle}>白</h3>
              </div>
            </div>

            <div className="col-md-2">
              <div className={styles.galleryCard}>
                <div className={styles.galleryImagesColor}>
                  <img src="./img/black1.jpg" alt="黑" className="img-fluid" />
                  <div className={styles.imageGrid}>
                    <img src="./img/black2.jpg" alt="黑" />
                    <img src="./img/black3.jpg" alt="黑" />
                    <img src="./img/black4.jpg" alt="黑" />
                  </div>
                </div>
                <h3 className={styles.galleryTitle}>黑</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.globalContainer}>
          <div className="row mb-4">
            <div className="col">
              <h2 className={styles.sectionTitle_02}>新手教學指南</h2>
              <p className={styles.sectionSubTitle}>教導新創作者圖庫的一切</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className={styles.galleryCard}>
                <div className={styles.galleryImagesTutor}>
                  <img src="./img/tutor01.jpg" alt="tutor01" className="img-fluid" />
                </div>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>著作權懶人包</h3>
                  <p className={styles.featureDescription}>
                    Mytourstock重視您的作品智財權，因此創作人投稿賺版稅的同時，Mytourstock必須與創作人簽訂投稿者合約書，同意Mytourstock擁有投稿作品著作權之專屬授權。凡是投稿Mytourstock的創作人，都必須審閱且同意遵守「創作者合約書」之相關規定。                  
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className={styles.galleryCard}>
                <div className={styles.galleryImagesTutor}>
                  <img src="./img/tutor02.jpg" alt="tutor02" className="img-fluid" />
                </div>
                <div className={styles.featureCard}>
                  <h3 className={styles.featureTitle}>如何下關鍵字，讓您的作品被看到！</h3>
                  <p className={styles.featureDescription}>
                    市場上長期缺乏以東方元素為主的素材，以台灣為主的元素更是稀缺。美映台灣已匯集台灣元素的創作為起點、服務對台灣有高度認同的創作者，進而在使用者心目中和國際間，強化「美映台灣」本身就是「台灣製造的代表品牌」形象。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.globalContainer}>
          <div className="row mb-4">
            <div className="col">
              <h2 className={styles.sectionTitle_02}>我們的合作夥伴</h2>
              <img src="./img/parner.png" alt="合作夥伴" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}