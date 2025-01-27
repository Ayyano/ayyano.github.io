const { createCanvas } = require('canvas');
const fs = require('fs');

// Function to generate a gradient background
function generateGradientImage(width, height, colors, filename) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    colors.forEach((color, index) => {
        gradient.addColorStop(index / (colors.length - 1), color);
    });

    // Fill background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add some modern design elements
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;
    
    // Draw geometric shapes
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(
            Math.random() * width,
            Math.random() * height,
            Math.random() * 50 + 20,
            0,
            Math.PI * 2
        );
        ctx.stroke();
    }

    // Save the image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filename, buffer);
}

// Generate profile image
generateGradientImage(400, 400, ['#2563eb', '#1e40af'], 'images/profile.jpg');

// Generate project images
generateGradientImage(800, 450, ['#3b82f6', '#1e40af'], 'images/project1.jpg');
generateGradientImage(800, 450, ['#f59e0b', '#d97706'], 'images/project2.jpg');
generateGradientImage(800, 450, ['#10b981', '#059669'], 'images/project3.jpg');
