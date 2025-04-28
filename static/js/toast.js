document.addEventListener('DOMContentLoaded', function () {
    // 创建一个 toast 容器
    var toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  
    // 显示 toast 提示
    function showToast(message) {
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(function () {
        toast.classList.remove('show');
      }, 2000); // 2秒后自动消失
    }
  
    // 找到所有 pre 块
    document.querySelectorAll('pre').forEach(function (preBlock) {
      // 创建按钮
      var button = document.createElement('button');
      button.className = 'copy-button';
      button.type = 'button';
      button.innerText = '复制';
  
      // 把按钮加到 pre
      preBlock.appendChild(button);
  
      // 点击按钮时复制
      button.addEventListener('click', function () {
        var code = preBlock.querySelector('code');
        if (!code) return;
  
        // 创建一个临时 textarea 来复制内容
        var textArea = document.createElement('textarea');
        textArea.value = code.innerText;
        document.body.appendChild(textArea);
        textArea.select();
  
        try {
          var successful = document.execCommand('copy');
          if (successful) {
            showToast('复制成功！');
          } else {
            showToast('复制失败！');
          }
        } catch (err) {
          console.error('复制失败', err);
          showToast('复制失败！');
        }
        document.body.removeChild(textArea);
      });
    });
  });