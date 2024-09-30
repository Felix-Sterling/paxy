    // 获取元素
    const privacyOverlay = document.getElementById('privacy-overlay');
    const privacyAgreeButton = document.getElementById('privacy-agree-button');
    const privacyDenyButton = document.getElementById('privacy-deny-button');
    const deviceOverlay = document.getElementById('device-overlay');
    const deviceMessage = document.getElementById('device-message');
    const deviceConfirmButton = document.getElementById('device-confirm-button');
    const deviceDenyButton = document.getElementById('device-deny-button');
    let countdownTimer;

    // 检查用户隐私条款同意状态
    if (!localStorage.getItem('privacy-agreed')) {
        // 显示隐私条款弹窗
        privacyOverlay.style.display = 'flex';

        // 隐私条款弹窗计时器
        let countdown = 10;
        privacyAgreeButton.disabled = true; // 禁用“同意并继续”按钮
        privacyAgreeButton.style.backgroundColor = '#ccc'; // 改为灰色
        privacyAgreeButton.style.opacity = 0.6; // 透明度
        privacyAgreeButton.textContent = `同意并继续 (${countdown}s)`; // 初始文本

        // 启动计时器
        countdownTimer = setInterval(() => {
            countdown--;
            privacyAgreeButton.textContent = `同意并继续 (${countdown}s)`;
            if (countdown <= 0) {
                clearInterval(countdownTimer);
                privacyAgreeButton.disabled = false; // 启用“同意并继续”按钮
                privacyAgreeButton.style.backgroundColor = '#00c8b0'; // 恢复颜色
                privacyAgreeButton.style.opacity = 1; // 恢复透明度
                privacyAgreeButton.textContent = `同意并继续`; // 恢复文本
            }
        }, 1000);

        // 用户点击“同意并继续”按钮
        privacyAgreeButton.addEventListener('click', function() {
            privacyOverlay.style.display = 'none'; // 隐藏隐私条款弹窗
            localStorage.setItem('privacy-agreed', 'true'); // 记录用户同意状态
            handleDeviceDetection(); // 进行设备检测
        });

        // 用户点击“不同意并退出”按钮
        privacyDenyButton.addEventListener('click', function() {
            window.open('https://google.com'); // 在新标签页中打开
        });

    } else if (!localStorage.getItem('device-detected')) {
        // 用户已同意隐私条款，但未进行设备检测
        handleDeviceDetection();
    }

    // 处理设备检测
    function handleDeviceDetection() {
        let deviceType = '未知设备';
        const androidSound = document.getElementById('android-sound');
        const iosSound = document.getElementById('ios-sound');
        const otherSound = document.getElementById('other-sound');

        if (navigator.userAgent.match(/Android/i)) {
            deviceType = '安卓机';
            androidSound.play(); // 播放安卓设备音频
            deviceMessage.innerHTML = `
                <p>检测到设备类型为: ${deviceType}.卡死我了.安卓妹禁止进入哈.</p>
                <p>请注意，我们的服务专为安卓机优化。</p>
            `;
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            deviceType = '苹果机';
            iosSound.play(); // 播放苹果设备音频
            deviceMessage.innerHTML = `
                <p>检测到设备类型为: ${deviceType}.哇塞,安卓小弟拜见苹果女王</p>
                <p>请注意，我们的服务专为iPhone优化。</p>
            `;
        } else {
            deviceType = '这是什么东西';
            otherSound.play(); // 播放其他设备音频
            deviceMessage.innerHTML = `
                <p>检测到.... ${deviceType}.</p>
                <p>某些功能可能不适用于此设备。</p>
            `;
        }

        // 显示设备检测弹窗
        deviceOverlay.style.display = 'flex';

        // 用户点击确定按钮
        deviceConfirmButton.addEventListener('click', function() {
            deviceOverlay.style.display = 'none'; // 隐藏设备检测弹窗
            localStorage.setItem('device-detected', 'true'); // 记录设备检测状态
        });

        // 用户点击不同意并退出按钮
        deviceDenyButton.addEventListener('click', function() {
            window.open('https://hanyu.baidu.com/s?wd=%E6%BB%9A&device=pc&from=home', '_blank'); // 在新标签页中打开
        });
        
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOM fully loaded and parsed');
            const typingElement = document.querySelector('.typing-wrapper');
            
            if (!typingElement) {
                console.error('Element with class .typing-wrapper not found');
                return;
            }
        
            console.log('Element found:', typingElement);
            const text = typingElement.textContent;
            typingElement.textContent = ''; // 清空文本内容
            let index = 0;
        
            // 添加光标闪烁效果
            typingElement.classList.add('cursor-blink');
        
            function type() {
                if (index < text.length) {
                    typingElement.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, 100); // 每100ms打下一个字符
                }
            }
        
            type(); // 启动打字效果
        });
        
        
    }
    