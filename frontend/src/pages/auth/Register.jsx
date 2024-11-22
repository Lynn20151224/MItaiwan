import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../css/pages/auth/Register.module.css';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // 基本驗證
        if (password.length < 6) {
            setError('密碼必須至少6個字符');
            return;
        }

        try {
            const response = await fetch('http://localhost/taiwan/backend/api/auth.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'register',
                    email,
                    password
                })
            });

            const data = await response.json();

            if (data.success) {
                // 註冊成功，導向到登入頁
                navigate('/login');
            } else {
                setError(data.error || '註冊失敗');
            }
        } catch (err) {
            setError('網路錯誤，請稍後再試');
            console.error('Registration error:', err);
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <div className="row g-0">
                    {/* 左側圖片牆 */}
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className={styles.imageGrid}>
                            {/* 設置背景圖片 */}
                        </div>
                    </div>
                    
                    {/* 右側註冊表單 */}
                    <div className="col-lg-6">
                        <div className={styles.formSection}>
                            <div className={styles.logoSection}>
                                <img src="/img/logo.png" alt="美映台灣" className={styles.logo} />
                            </div>
                            
                            <h2 className={styles.title}>成為美映的一員</h2>
                            <p className={styles.subtitle}>
                                已經有帳號？ <Link to="/login" className={styles.link}>Sign in</Link>
                            </p>

                            {error && (
                                <div className="alert alert-danger" role="alert">
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
                                        placeholder="estherhuang5417@gmail.com"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Create a password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="至少6個字符"
                                        required
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className={styles.signUpButton}
                                    disabled={!email || !password}
                                >
                                    註冊
                                </button>

                                <div className={styles.divider}>
                                    <span>或</span>
                                </div>

                                <button 
                                    type="button" 
                                    className={styles.googleButton}
                                    disabled
                                >
                                    使用 Google 帳號註冊
                                </button>

                                <p className={styles.terms}>
                                    註冊即表示您同意本網站的
                                    <Link to="/terms">使用條款</Link>、
                                    <Link to="/privacy">隱私權政策</Link>和
                                    <Link to="/copyright">智財權政策</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}