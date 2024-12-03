// اضافه کردن انیمیشن‌های ساده یا تعاملات کاربر در اینجا

// برای مثال: پیمایش نرم
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
