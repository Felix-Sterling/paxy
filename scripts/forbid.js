    // 获取元素
    const forbidOverlay = document.getElementById('forbid-overlay');
    const forbidAgreeButton = document.getElementById('forbid-agree-button');
    const forbidDenyButton = document.getElementById('forbid-deny-button');
    let countdownTimer;

    // 拒绝
    if (!localStorage.getItem('fotbid-agreed')) {
        // 显示拒绝弹窗
        forbidOverlay.style.display = 'flex';

        // 用户点击“退出”按钮
        forbidDenyButton.addEventListener('click', function() {
            window.open('index.html'); // 在新标签页中打开
        });

    }