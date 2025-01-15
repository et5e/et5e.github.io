// 第一个图片缩放
const main = document.getElementById('main');
const img = document.getElementById('img');
main.addEventListener('mouseover',function(){
    main.style.transform= 'scale(1.05)';
    img.style.transform= 'scale(1.05)';
})
main.addEventListener('mouseout',function(){
    main.style.transform='scale(1)';
    img.style.transform= 'scale(1)';
})
// 导航栏缩放
const menuItems = document.querySelectorAll('.s1');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)'; 
    });
});
// 第二个图片缩放
const secaElements = document.querySelectorAll('.seca');
secaElements.forEach(item => {
    const img = item.querySelector('img'); 
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.15)';
        img.style.transform = 'scale(1.15)'; 
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        img.style.transform = 'scale(1)'; 
    });
});
//循环遍历放入图片
const smallBoxes = document.querySelectorAll('.healtha');
const imageLinks = ['https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/home_page/living-healthy-mental-health.png?resize=484px:*&output-quality=70', 
    'https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/home_page/living-healthy-diet-weight-management.png?resize=484px:*&output-quality=70',
  'https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/home_page/living-healthy-healthy-aging.png?resize=484px:*&output-quality=70', 
  'https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/home_page/living-healthy-sex-relationships.png?resize=484px:*&output-quality=70',
   'https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/home_page/living-healthy-fitness-exercise.png?resize=484px:*&output-quality=70'];

smallBoxes.forEach((box, index) => {
  box.style.backgroundImage = `url('${imageLinks[index]}')`;
});
// 第三个图片缩放
smallBoxes.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform ='scale(1.15)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform ='scale(1)';});
});
