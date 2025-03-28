// This script handles the particles animation in the background

document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas element for particles
    const particlesContainer = document.getElementById('particles');
    
    // Class to handle creating and animating particles
    class ParticleSystem {
        constructor(container, particleCount) {
            this.container = container;
            this.particles = [];
            this.particleCount = particleCount || 50;
            this.colors = ['#bb86fc', '#3700b3', '#6200ea', '#ffffff'];
            this.init();
        }
        
        init() {
            // Create and add particles to the background
            for (let i = 0; i < this.particleCount; i++) {
                this.createParticle();
            }
            
            // Start animation loop
            this.animate();
            
            // Add window resize listener
            window.addEventListener('resize', () => this.handleResize());
        }
        
        createParticle() {
            const particle = document.createElement('div');
            
            // Random positioning and styling
            const size = Math.random() * 5 + 1;
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 50 + 10;
            const delay = Math.random() * 5;
            
            // Apply styles
            particle.style.position = 'absolute';
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;
            particle.style.borderRadius = '50%';
            particle.style.left = `${x}%`;
            particle.style.top = `${y}%`;
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
            
            // Add animation properties
            particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
            
            // Add to container and store reference
            this.container.appendChild(particle);
            this.particles.push({
                element: particle,
                x,
                y,
                size,
                xVelocity: (Math.random() - 0.5) * 0.2,
                yVelocity: (Math.random() - 0.5) * 0.2
            });
        }
        
        animate() {
            // Update each particle position
            this.particles.forEach(particle => {
                particle.x += particle.xVelocity;
                particle.y += particle.yVelocity;
                
                // Wrap around edges
                if (particle.x > 100) particle.x = 0;
                if (particle.x < 0) particle.x = 100;
                if (particle.y > 100) particle.y = 0;
                if (particle.y < 0) particle.y = 100;
                
                // Update DOM
                particle.element.style.left = `${particle.x}%`;
                particle.element.style.top = `${particle.y}%`;
            });
            
            // Continue animation loop
            requestAnimationFrame(() => this.animate());
        }
        
        handleResize() {
            // Reset positions on window resize
            this.particles.forEach(particle => {
                particle.x = Math.random() * 100;
                particle.y = Math.random() * 100;
            });
        }
    }
    
    // Create floating particles animation
    new ParticleSystem(particlesContainer, 30);
    
    // Form animations
    const form = document.getElementById('registrationForm');
    if (form) {
        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
        
        inputs.forEach(input => {
            // Add focus effects
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
            
            // Add validation visual feedback
            input.addEventListener('input', function() {
                if (this.value.trim() !== '') {
                    this.classList.add('has-value');
                } else {
                    this.classList.remove('has-value');
                }
            });
        });
        
        // Submit button animation
        const submitBtn = form.querySelector('.btn-submit');
        if (submitBtn) {
            submitBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            submitBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
            
            submitBtn.addEventListener('mousedown', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            submitBtn.addEventListener('mouseup', function() {
                this.style.transform = 'scale(1.05)';
            });
        }
    }
});

// Define keyframes for floating animation
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerHTML = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
        }
        25% {
            transform: translateY(-10px) translateX(5px);
        }
        50% {
            transform: translateY(5px) translateX(-5px);
        }
        75% {
            transform: translateY(10px) translateX(10px);
        }
    }
`;
document.head.appendChild(styleSheet);
