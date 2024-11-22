<?php
require_once '../includes/config.php';
require_once '../includes/Database.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

class Auth {
    private $conn;
    
    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function register($email, $password) {
        try {
            // 檢查郵箱是否已存在
            $stmt = $this->conn->prepare("SELECT id FROM users WHERE email = ?");
            $stmt->execute([$email]);
            if ($stmt->fetch()) {
                return ['success' => false, 'error' => 'Email already exists'];
            }

            // 密碼加密
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            
            // 插入用戶數據
            $stmt = $this->conn->prepare(
                "INSERT INTO users (email, password, created_at) VALUES (?, ?, NOW())"
            );
            $stmt->execute([$email, $hashedPassword]);

            return ['success' => true, 'message' => 'Registration successful'];
        } catch (PDOException $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    public function login($email, $password) {
        try {
            $stmt = $this->conn->prepare(
                "SELECT id, email, password FROM users WHERE email = ?"
            );
            $stmt->execute([$email]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($user && password_verify($password, $user['password'])) {
                // 創建 session
                session_start();
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['email'] = $user['email'];

                return ['success' => true, 'user' => [
                    'id' => $user['id'],
                    'email' => $user['email']
                ]];
            }

            return ['success' => false, 'error' => 'Invalid credentials'];
        } catch (PDOException $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }
}

// 處理請求
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $auth = new Auth();
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (isset($data['action'])) {
        switch ($data['action']) {
            case 'register':
                echo json_encode($auth->register($data['email'], $data['password']));
                break;
            case 'login':
                echo json_encode($auth->login($data['email'], $data['password']));
                break;
        }
    }
}