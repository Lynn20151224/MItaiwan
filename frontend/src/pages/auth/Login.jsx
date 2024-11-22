// src/pages/auth/Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from '../../css/pages/auth/Login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            const response = await fetch('http://localhost/taiwan/backend/api/auth.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'login',
                    email,
                    password,
                    remember: rememberMe
                })
            });

            const data = await response.json();

            if (data.success) {
                login(data.user);
                navigate('/');
            } else {
                setError(data.error || '登入失敗');
            }
        } catch (err) {
            setError('網路錯誤，請稍後再試');
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <div className="row g-0">
                    {/* 左側圖片牆 */}
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className={styles.imageGrid}>
                            {/* 圖片網格會透過 CSS 背景顯示 */}
                        </div>
                    </div>
                    
                    {/* 右側登入表單 */}
                    <div className="col-lg-6">
                        <div className={styles.formSection}>
                            <div className={styles.logoSection}>
                                <img src="/img/logo.png" alt="美映台灣" className={styles.logo} />
                            </div>
                            
                            <h2 className={styles.title}>成為美映的一員</h2>
                            <p className={styles.subtitle}>
                                還沒有帳號？ <Link to="/register" className={styles.link}>Sign Up</Link>
                            </p>

                            {error && (
                                <div className={styles.error}>
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3 d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="rememberMe"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="rememberMe">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="/forgot-password" className={styles.link}>
                                        Forgot Password?
                                    </Link>
                                </div>

                                <button type="submit" className={styles.signInButton}>
                                    Sign in
                                </button>

                                <div className={styles.divider}>
                                    <span>or</span>
                                </div>

                                <button type="button" className={styles.googleButton} disabled>
                                    使用Google帳號登入
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}