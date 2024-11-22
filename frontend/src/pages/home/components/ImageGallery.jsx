import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';  
import styles from '../../../css/ImageGallery.module.css';

export default function ImageGallery() {
    const [activeTab, setActiveTab] = useState('popular'); // 'popular' 或 'recommended'
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);


    // 圖片資料（可以根據需求擴充）
    const popularImages = [
        {
            id: 1,
            title: '紅色心情',
            images: [
                './img/red1.jpg',
                './img/red2.jpg',
                './img/red3.jpg',
                './img/red4.jpg'
            ]
        },
        {
            id: 2,
            title: '聖誕氛圍',
            images: [
                './img/christmas1.jpg',
                './img/christmas2.jpg',
                './img/christmas3.jpg',
                './img/christmas4.jpg'
            ]
        },
        {
            id: 3,
            title: '商業攝影',
            images: [
                './img/commercial1.jpg',
                './img/commercial2.jpg',
                './img/commercial3.jpg',
                './img/commercial4.jpg'
            ]
        }
    ];

    const recommendedImages = [
        {
            id: 4,
            title: '商業攝影4',
            images: [
                './img/rec1.jpg',
                './img/rec2.jpg',
                './img/rec3.jpg',
                './img/rec4.jpg'
            ]
        },
        {
            id: 5,
            title: '商業攝影5',
            images: [
                './img/rec1.jpg',
                './img/rec2.jpg',
                './img/rec3.jpg',
                './img/rec4.jpg'
            ]
        },
        {
            id: 6,
            title: '商業攝影6',
            images: [
                './img/rec1.jpg',
                './img/rec2.jpg',
                './img/rec3.jpg',
                './img/rec4.jpg'
            ]
        }
    ];
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentIndex(0);  // 切換標籤時重置索引
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = 0;  // 重置滾動位置
        }
    };

    const handleSlide = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(prev => Math.max(0, prev - 1));
        } else {
            const maxIndex = currentImages.length - 3;
            setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
        }
    };

    const currentImages = activeTab === 'popular' ? popularImages : recommendedImages;
    const visibleImages = currentImages.slice(currentIndex, currentIndex + 3);  // 一次只顯示3張卡片

    return (
        <section className={styles.gallerySection}>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h2 className={styles.sectionTitle}>探索熱門精選視覺內容</h2>
                        <div className={styles.tabButtons}>
                            <button
                                className={`${styles.tabButton} ${activeTab === 'popular' ? styles.active : ''}`}
                                onClick={() => handleTabChange('popular')}
                            >
                                最受歡迎
                            </button>
                            <button
                                className={`${styles.tabButton} ${activeTab === 'recommended' ? styles.active : ''}`}
                                onClick={() => handleTabChange('recommended')}
                            >
                                熱門推薦
                            </button>
                        </div>
                    </div>
                </div>

                <div className="position-relative">
                    <button
                        type="button"  // 添加 type
                        className={`${styles.sliderButton} ${styles.prev}`}
                        onClick={() => handleSlide('prev')}
                        disabled={currentIndex === 0}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />  
                    </button>

                    <div className="row g-4">
                        {visibleImages.map(item => (
                            <div key={item.id} className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <div className="ratio ratio-16x9 mb-3">
                                            <img
                                                src={item.images[0]}
                                                alt={item.title}
                                                className="object-fit-cover rounded"
                                            />
                                        </div>
                                        <div className="row g-2">
                                            {item.images.slice(1).map((img, index) => (
                                                <div key={index} className="col-4">
                                                    <div className="ratio ratio-1x1">
                                                        <img
                                                            src={img}
                                                            alt={`${item.title} ${index + 2}`}
                                                            className="object-fit-cover rounded"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <h3 className="h5 mt-3 text-center">{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"  // 添加 type
                        className={`${styles.sliderButton} ${styles.next}`}
                        onClick={() => handleSlide('next')}
                        disabled={currentIndex >= currentImages.length - 3}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />  
                    </button>
                </div>
            </div>
        </section>
    );
}
