// 等待图标数据加载
document.addEventListener('DOMContentLoaded', function() {
    // 检查图标数据是否已加载
    if (typeof window.iconsData === 'undefined') {
        console.error('图标数据未加载');
        return;
    }

    const iconsGrid = document.getElementById('iconsGrid');
    const searchInput = document.getElementById('searchInput');
    const toast = document.getElementById('toast');

    let filteredIcons = [...window.iconsData];

    // 渲染图标
    function renderIcons(icons) {
        iconsGrid.innerHTML = '';
        
        if (icons.length === 0) {
            iconsGrid.innerHTML = '<div class="no-results">没有找到匹配的图标</div>';
            return;
        }

        icons.forEach(icon => {
            const iconCard = document.createElement('div');
            iconCard.className = 'icon-card';
            iconCard.innerHTML = `
                <svg class="icon-svg" viewBox="0 0 80 80" fill="currentColor">
                    ${icon.svg}
                </svg>
                <div class="icon-name">${icon.name}</div>
                <div class="icon-import">${icon.importCode}</div>
            `;

            // 添加点击事件
            iconCard.addEventListener('click', () => {
                copyToClipboard(icon.importCode, icon.name);
            });

            iconsGrid.appendChild(iconCard);
        });
    }

    // 复制到剪贴板
    async function copyToClipboard(text, iconName) {
        try {
            await navigator.clipboard.writeText(text);
            showToast(`已复制 ${iconName} 的导入代码`);
        } catch (err) {
            // 降级方案
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showToast(`已复制 ${iconName} 的导入代码`);
        }
    }

    // 显示提示信息
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    // 搜索功能
    function filterIcons(searchTerm) {
        if (!searchTerm.trim()) {
            filteredIcons = [...window.iconsData];
        } else {
            filteredIcons = window.iconsData.filter(icon => 
                icon.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        renderIcons(filteredIcons);
    }

    // 搜索输入事件
    searchInput.addEventListener('input', (e) => {
        filterIcons(e.target.value);
    });

    // 初始渲染
    renderIcons(filteredIcons);

    // 添加键盘快捷键
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K 聚焦搜索框
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // ESC 清空搜索
        if (e.key === 'Escape') {
            searchInput.value = '';
            filterIcons('');
            searchInput.blur();
        }
    });

    // 添加搜索框提示
    searchInput.setAttribute('title', '按 Ctrl+K (或 Cmd+K) 快速搜索，按 ESC 清空搜索');
});

// 复制代码功能
function copyCode(button) {
    const codeBlock = button.parentElement;
    const code = codeBlock.querySelector('code').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        // 临时改变按钮文本
        const originalText = button.textContent;
        button.textContent = '已复制!';
        button.style.background = 'rgba(76, 175, 80, 0.8)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'rgba(255, 255, 255, 0.1)';
        }, 2000);
    }).catch(err => {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // 临时改变按钮文本
        const originalText = button.textContent;
        button.textContent = '已复制!';
        button.style.background = 'rgba(76, 175, 80, 0.8)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'rgba(255, 255, 255, 0.1)';
        }, 2000);
    });
} 