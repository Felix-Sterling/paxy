    // 获取元素
    const forbidOverlay = document.getElementById('forbid-overlay');
    const forbidAgreeButton = document.getElementById('forbid-agree-button');
    const forbidDenyButton = document.getElementById('forbid-deny-button');
    let countdownTimer;

    // 检查用户隐私条款同意状态
    if (!localStorage.getItem('fotbid-agreed')) {
        // 显示隐私条款弹窗
        forbidOverlay.style.display = 'flex';

        // 用户点击“退出”按钮
        forbidDenyButton.addEventListener('click', function() {
            window.open('index.html'); // 在新标签页中打开
        });

    }