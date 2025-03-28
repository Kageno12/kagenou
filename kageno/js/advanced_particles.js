/**
 * ملف الجزيئات المتقدم للخلفية
 * يضيف تأثيرات متقدمة وتفاعلية للجزيئات في الخلفية
 */

document.addEventListener('DOMContentLoaded', function() {
    // تهيئة الجزيئات بإعدادات متقدمة
    initParticles();
    
    // إضافة تأثيرات حركة للعناصر
    initAnimations();
});

/**
 * تهيئة الجزيئات في الخلفية
 */
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#bb86fc", "#c586fc", "#a572e4", "#9175d6"]
            },
            "shape": {
                "type": ["circle", "triangle", "polygon"],
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.6,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.3,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#bb86fc",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.8
                    }
                },
                "bubble": {
                    "distance": 200,
                    "size": 6,
                    "duration": 0.3,
                    "opacity": 0.8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
}

/**
 * إضافة تأثيرات حركة للعناصر
 */
function initAnimations() {
    // تطبيق تأثير fadeInUp على العناصر
    const animatedElements = document.querySelectorAll('.container, .form-description, h2, .login-options');
    
    animatedElements.forEach((element, index) => {
        element.classList.add('animated-element');
        element.style.animationDelay = `${index * 0.15}s`;
    });
    
    // إضافة تأثير توهج لأزرار الارسال
    const submitButtons = document.querySelectorAll('input[type="submit"]');
    submitButtons.forEach(button => {
        button.classList.add('button-glow');
    });
    
    // إضافة تأثير حركة للروابط
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // تأثير النبض على العناصر المهمة
    const pulseElements = document.querySelectorAll('.admin-label, .membership-badge');
    pulseElements.forEach(element => {
        element.style.animation = 'glow 2s infinite';
    });
}