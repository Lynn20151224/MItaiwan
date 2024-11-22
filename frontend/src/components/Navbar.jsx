import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from '../css/components/Navbar.module.css';

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          台灣
        </Link>
        <div className={styles.navRight}>
          <Link to="/gallery" className={styles.navLink}>
            探索
          </Link>
          {user ? (
            /* 用戶資訊和下拉選單 */
            <div className={styles.dropdown}>
              <button className={styles.userButton}>
                <span className={styles.userEmail}>{user.email}</span>
                <span className={styles.dropdownArrow}>▼</span>
              </button>
              <div className={styles.dropdownContent}>
                <Link to="/gallery" className={styles.dropdownItem}>
                  個人圖庫
                </Link>
                <Link to="/upload" className={styles.dropdownItem}>
                  上傳作品
                </Link>
                <hr className={styles.dropdownDivider} />
                <button
                  onClick={handleLogout}
                  className={styles.dropdownItem}
                >
                  登出
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* 未登入狀態 */}
              <Link to="/Register" className={styles.navLink}>
                註冊
              </Link>
              <Link to="/Login" className={styles.uploadButton}>
                登入
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}