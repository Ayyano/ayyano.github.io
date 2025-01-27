// Three.js Background Animation
let scene, camera, renderer, particles;

function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg-canvas'),
        alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 30;

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: '#2563eb'
    });

    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
}

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.x += 0.0001;
    particles.rotation.y += 0.0001;
    renderer.render(scene, camera);
}

// Initialize Three.js
initThree();
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Navigation Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// 3D Tilt Effect for Service Cards
const cards = document.querySelectorAll('.card-3d');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Floating Shapes Animation
function createFloatingShapes() {
    const shapes = document.querySelector('.floating-shapes');
    const shapeCount = 50;
    
    for(let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.classList.add('floating-shape');
        shape.style.cssText = `
            position: absolute;
            width: ${Math.random() * 20 + 10}px;
            height: ${Math.random() * 20 + 10}px;
            background: rgba(37, 99, 235, ${Math.random() * 0.3});
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        shapes.appendChild(shape);
    }
}

createFloatingShapes();

// Scroll Animation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Portfolio Image Loading Animation
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.portfolio-overlay').style.transform = 'translateY(0)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('.portfolio-overlay').style.transform = 'translateY(100%)';
    });
});
