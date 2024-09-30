// 获取表单和结果显示区域
const form = document.getElementById('input-form');
const resultDiv = document.getElementById('result');

// 表单提交事件处理
form.addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表单默认提交

    // 获取输入值
    const userInput = document.getElementById('user-input').value;

    // 查找4到6位连续数字
    const match = userInput.match(/\b\d{4,6}\b/);

    if (match) {
        const studentID = match[0];
        const newUrl = `https://paxy.xiaoaitong.com/mb-device:phone_book/student_id-${studentID}`; // 创建新链接

        // 显示提示信息和复制按钮
        resultDiv.innerHTML = `
            检测到studentID：${studentID}<br>
            即将跳转到电话本...
            <br><br>
            剩余时间：<span id="countdown">5</span> 秒
            <br><br>
            <button id="copy-button">复制studentID,以便下次使用</button>
        `;

        let countdown = 5; // 倒计时时间（秒）
        const countdownElement = document.getElementById('countdown');
        const copyButton = document.getElementById('copy-button');

        // 每秒更新倒计时
        const interval = setInterval(function() {
            countdown--;
            countdownElement.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(interval);
                window.location.href = newUrl; // 倒计时结束后跳转
            }
        }, 1000); // 每秒更新一次

        // 复制按钮点击事件
        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(studentID).then(function() {
                alert('studentID已复制到剪贴板！');
            }, function() {
                alert('复制失败，请手动复制。');
            });
        });
    } else {
        resultDiv.textContent = '未检测到studentID';
    }
});
