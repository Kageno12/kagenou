<?php
/**
 * Functions for user registration system
 */

/**
 * Sanitize user input to prevent XSS
 * 
 * @param string $input Input to sanitize
 * @return string Sanitized input
 */
function sanitizeInput($input) {
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

/**
 * Validate email format
 * 
 * @param string $email Email to validate
 * @return bool Whether email is valid
 */
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Validate password strength
 * 
 * @param string $password Password to validate
 * @return bool Whether password is strong enough
 */
function isStrongPassword($password) {
    // At least 8 characters
    return strlen($password) >= 8;
    
    // For production, you might want to add more checks:
    // - Contains at least one uppercase letter
    // - Contains at least one lowercase letter
    // - Contains at least one number
    // - Contains at least one special character
}

/**
 * Display form error
 * 
 * @param array $errors Error array
 * @param string $field Field name
 * @return string Error message HTML
 */
function getFormError($errors, $field) {
    if (isset($errors[$field])) {
        return '<span class="error">' . sanitizeInput($errors[$field]) . '</span>';
    }
    return '';
}

/**
 * Redirect to URL
 * 
 * @param string $url URL to redirect to
 * @return void
 */
function redirect($url) {
    header("Location: $url");
    exit;
}

/**
 * Log system messages (for debugging)
 * 
 * @param string $message Message to log
 * @param string $level Log level (info, warning, error)
 * @return void
 */
function logMessage($message, $level = 'info') {
    // In a real application, you would write to a log file
    // For now, we'll just use error_log
    error_log("[$level] $message");
}
