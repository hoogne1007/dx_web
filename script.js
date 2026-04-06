// Товчлуур болон гарчгийг сонгож авах
const button = document.getElementById('colorBtn');
const title = document.getElementById('title');

// Товчлуур дээр дарах үед ажиллах функц
button.addEventListener('click', () => {
    // Санамсаргүй өнгө үүсгэх
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Гарчигны өнгийг өөрчлөх
    title.style.color = randomColor;
    
    // Мөн товчлуурын өнгийг өөрчилж үзье
    button.style.backgroundColor = randomColor;
});