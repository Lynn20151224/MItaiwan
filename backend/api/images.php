<?php
require_once '../includes/config.php';
require_once '../includes/Database.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    $db = new Database();
    $conn = $db->getConnection();

    // 分頁參數
    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 12;
    $offset = ($page - 1) * $limit;

    // 獲取圖片列表
    $stmt = $conn->prepare(
        "SELECT * FROM images 
         ORDER BY upload_date DESC 
         LIMIT ? OFFSET ?"
    );
    $stmt->execute([$limit, $offset]);
    $images = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 獲取總數
    $stmt = $conn->query("SELECT COUNT(*) FROM images");
    $total = $stmt->fetchColumn();

    echo json_encode([
        'success' => true,
        'data' => [
            'images' => $images,
            'total' => $total,
            'page' => $page,
            'limit' => $limit
        ]
    ]);
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
