<?php
/**
 * Configuration file for the registration system
 */

// Set error reporting for development (should be turned off in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Application settings
define('APP_NAME', 'نظام التسجيل');
define('APP_VERSION', '1.0.0');

// Timezone settings
date_default_timezone_set('Asia/Riyadh');

// Session configuration
ini_set('session.cookie_httponly', 1); // Prevent XSS via cookies
ini_set('session.use_only_cookies', 1); // Forces sessions to only use cookies
ini_set('session.cookie_secure', 0); // Enable this in production with HTTPS

// Character encoding
mb_internal_encoding('UTF-8');

// Path constants
define('ROOT_DIR', dirname(__DIR__));
define('INCLUDES_DIR', ROOT_DIR . '/includes');
