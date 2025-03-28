<?php
// معلومات الاتصال بقاعدة البيانات
$host = 'sql102.infinityfree.com';      // عنوان السيرفر
$dbname = 'if0_38613195_registration'; // اسم قاعدة البيانات
$username = 'if0_38613195';       // اسم المستخدم
$password = 'vishnusubraa152';           // كلمة المرور

try {
    // إنشاء اتصال PDO
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    
    // تعيين وضع الخطأ إلى استثناءات
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch(PDOException $e) {
    // في حالة وجود خطأ
    die("فشل الاتصال بقاعدة البيانات: " . $e->getMessage());
}
?>