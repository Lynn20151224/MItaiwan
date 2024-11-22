
<?php
require_once '../includes/config.php';
require_once '../includes/Database.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

try {
    if (!isset($_FILES['image'])) {
        throw new Exception('No file uploaded');
    }

    $file = $_FILES['image'];
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    $fileError = $file['error'];
    $fileType = $file['type'];
    $title = $_POST['title'] ?? '';
    $description = $_POST['description'] ?? '';

    // 檢查檔案類型
    $allowed = ['image/jpeg', 'image/png', 'image/gif'];
    if (!in_array($fileType, $allowed)) {
        throw new Exception('Invalid file type');
    }

    // 檢查檔案大小 (5MB)
    if ($fileSize > 5000000) {
        throw new Exception('File too large');
    }

    // 產生唯一檔名
    $fileNameNew = uniqid('', true) . "." . pathinfo($fileName, PATHINFO_EXTENSION);
    $fileDestination = "../uploads/" . $fileNameNew;

    if (!move_uploaded_file($fileTmpName, $fileDestination)) {
        throw new Exception('Error saving file');
    }

    // 儲存到資料庫
    $db = new Database();
    $conn = $db->getConnection();


    $stmt = $conn->prepare("INSERT INTO images (filename, upload_date, file_type, file_size, title, description) VALUES (?, NOW(), ?, ?, ?, ?)");
    $stmt->execute([$fileNameNew, $fileType, $fileSize, $title, $description]);

    echo json_encode([
        'success' => true,
        'filename' => $fileNameNew
    ]);
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
