// 导航栏动画
const menuItems = document.querySelectorAll('.s1');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// 内容区域动画
const contentItems = document.querySelectorAll('.article-section, .slider-section, .news-section');
contentItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.02)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// 轮播图功能
const slides = document.querySelectorAll('.slide-img');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.opacity = '0');
    slides[index].style.opacity = '1';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// 初始化轮播图
if (slides.length > 0) {
    showSlide(0);
    setInterval(nextSlide, 3000);
}

// 时钟功能
const timeDisplay = document.querySelector('.time-display');
const colors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
    '#800080', '#FFA500', '#808000', '#008080', '#800000', '#008000'
];
let currentColorIndex = 0;

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    if (timeDisplay) {
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        timeDisplay.style.color = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }
}

// 初始化并每秒更新时钟
if (timeDisplay) {
    updateClock();
    setInterval(updateClock, 1000);
}

// 新闻列表滚动效果
const newsItems = document.querySelectorAll('.scroll-content h4');
let currentNewsIndex = 0;

function scrollNews() {
    newsItems.forEach(item => item.style.color = '#333');
    newsItems[currentNewsIndex].style.color = '#00157c';
    currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
}

// 如果存在新闻列表则启动滚动效果
if (newsItems.length > 0) {
    scrollNews();
    setInterval(scrollNews, 2000);
}

// 页面滚动动画
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.article-section, .slider-section, .news-section');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);
        
        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// 底部导航动画
const footerSections = document.querySelectorAll('.footer-section');
footerSections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.transform = 'scale(1.1)';
    });
    section.addEventListener('mouseout', () => {
        section.style.transform = 'scale(1)';
    });
});