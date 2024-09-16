    // 获取当前页面的 URL 路径
    const currentPage = window.location.pathname;

    // 获取所有的 footer-item 链接
    const footerLinks = document.querySelectorAll('.footer-item');

    // 遍历所有 footer-item 链接
    footerLinks.forEach(link => {
        // 获取链接的 href 属性
        const href = link.getAttribute('href');

        // 如果 href 与当前页面路径相同，则禁用链接
        if (currentPage.endsWith(href)) {
            link.classList.add('disabled');
            link.addEventListener('click', (e) => {
                e.preventDefault(); // 禁用默认行为
            });
        }
    });