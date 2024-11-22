<?php
// 資料庫配置
define('DB_HOST', 'localhost');
define('DB_NAME', 'taiwan');
define('DB_USER', 'root');
define('DB_PASS', '');

// 允許跨域請求
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');