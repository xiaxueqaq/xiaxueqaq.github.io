function groupPublications() {
    const container = document.querySelector('.publication-list');
    if (!container) return;

    // 清空容器，但保留原始 article 列表
    const articles = Array.from(container.querySelectorAll('.publication-item'));
    if (articles.length === 0) return;

    // 创建两个分组容器
    const publishedGroup = document.createElement('div');
    publishedGroup.className = 'publication-group';
    publishedGroup.innerHTML = '<h2 class="section-title">📖 Published </h2><div class="group-items"></div>';
    const preprintGroup = document.createElement('div');
    preprintGroup.className = 'publication-group';
    preprintGroup.innerHTML = '<h2 class="section-title">📄 Preprint </h2><div class="group-items"></div>';

    // 清空原容器
    container.innerHTML = '';

    articles.forEach(article => {
        const venueDiv = article.querySelector('.pub-venue');
        const isPreprint = venueDiv && venueDiv.textContent.includes('Preprint');
        const targetGroup = isPreprint ? preprintGroup : publishedGroup;
        targetGroup.querySelector('.group-items').appendChild(article);
    });

    // 如果某组没有文章，可以不显示该组（可选）
    if (publishedGroup.querySelector('.group-items').children.length > 0) {
        container.appendChild(publishedGroup);
    }
    if (preprintGroup.querySelector('.group-items').children.length > 0) {
        container.appendChild(preprintGroup);
    }
}

// 在 DOMContentLoaded 中调用
document.addEventListener('DOMContentLoaded', function() {
    // 其他初始化...
    groupPublications();
});

/**
     * 切换单篇文章摘要的展开/收起状态
     * @param {HTMLElement} titleRow - 被点击的标题行元素
     */
    function togglePublication(titleRow) {
        // 找到所属的 publication-item
        const publicationItem = titleRow.closest('.publication-item');
        if (!publicationItem) return;

        // 找到摘要wrapper
        const abstractWrapper = publicationItem.querySelector('.pub-abstract-wrapper');
        if (!abstractWrapper) return;

        const isCurrentlyOpen = abstractWrapper.classList.contains('open');
        const ariaExpanded = titleRow.getAttribute('aria-expanded');

        if (isCurrentlyOpen) {
            // 收起摘要
            abstractWrapper.classList.remove('open');
            publicationItem.classList.remove('expanded');
            titleRow.setAttribute('aria-expanded', 'false');
        } else {
            // 展开摘要
            // 动态计算实际高度以实现精确过渡
            abstractWrapper.style.maxHeight = '0';
            abstractWrapper.classList.add('open');
            // 获取实际内容高度
            const scrollHeight = abstractWrapper.scrollHeight;
            abstractWrapper.style.maxHeight = scrollHeight + 'px';
            publicationItem.classList.add('expanded');
            titleRow.setAttribute('aria-expanded', 'true');

            // 过渡结束后清理内联样式，以便响应窗口大小变化
            const onTransitionEnd = function() {
                abstractWrapper.style.maxHeight = '';
                abstractWrapper.removeEventListener('transitionend', onTransitionEnd);
            };
            abstractWrapper.addEventListener('transitionend', onTransitionEnd, { once: true });

            // 安全兜底：如果过渡事件未触发，1秒后清理
            setTimeout(() => {
                if (abstractWrapper.style.maxHeight) {
                    abstractWrapper.style.maxHeight = '';
                }
            }, 1000);
        }
    }

    /**
     * 初始化：为所有摘要wrapper设置过渡相关的初始状态
     */
    function initializeAbstracts() {
        const allWrappers = document.querySelectorAll('.pub-abstract-wrapper');
        allWrappers.forEach(wrapper => {
            // 确保初始状态正确
            wrapper.classList.remove('open');
            wrapper.style.maxHeight = '0';
        });
        // 更新aria属性
        const allTitleRows = document.querySelectorAll('.pub-title-row');
        allTitleRows.forEach(row => {
            row.setAttribute('aria-expanded', 'false');
            const parentItem = row.closest('.publication-item');
            if (parentItem) {
                parentItem.classList.remove('expanded');
            }
        });
    }

    /**
     * 键盘无障碍支持：Enter/Space键触发展开/收起
     */
    function setupKeyboardAccessibility() {
        const allTitleRows = document.querySelectorAll('.pub-title-row');
        allTitleRows.forEach(row => {
            row.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    togglePublication(this);
                }
            });
        });
    }

    /**
     * 阻止链接点击冒泡到标题行
     */
    function preventLinkBubbling() {
        const allLinks = document.querySelectorAll('.pub-links a, .pub-links span');
        allLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        });
    }

    // ========== 页面加载完成后初始化 ==========
    document.addEventListener('DOMContentLoaded', function() {
        initializeAbstracts();
        setupKeyboardAccessibility();
        preventLinkBubbling();

        // 更新统计数据
        updateStats();
    });

    /**
     * 更新统计栏数据
     */
    function updateStats() {
        const totalItems = document.querySelectorAll('.publication-item').length;
        const doiLinks = document.querySelectorAll('.pub-link-doi[href]').length;
        const arxivLinks = document.querySelectorAll('.pub-link-arxiv[href]').length;
        const githubLinks = document.querySelectorAll('.pub-link-github[href]').length;

        document.getElementById('totalCount').textContent = totalItems;
        document.getElementById('doiCount').textContent = doiLinks;
        document.getElementById('arxivCount').textContent = arxivLinks;
        document.getElementById('githubCount').textContent = githubLinks;
    }

    /**
     * 可选：全部展开/全部收起功能
     * 可通过浏览器控制台调用：
     *   expandAll()   - 全部展开
     *   collapseAll() - 全部收起
     */
    window.expandAll = function() {
        document.querySelectorAll('.pub-title-row').forEach(row => {
            const item = row.closest('.publication-item');
            const wrapper = item ? item.querySelector('.pub-abstract-wrapper') : null;
            if (wrapper && !wrapper.classList.contains('open')) {
                togglePublication(row);
            }
        });
    };
    window.collapseAll = function() {
        document.querySelectorAll('.pub-title-row').forEach(row => {
            const item = row.closest('.publication-item');
            const wrapper = item ? item.querySelector('.pub-abstract-wrapper') : null;
            if (wrapper && wrapper.classList.contains('open')) {
                togglePublication(row);
            }
        });
    };

    console.log('✅ Publications 页面已就绪');
    console.log('   💡 点击论文题目可展开/收起摘要');
    console.log('   ⌨️  支持键盘 Enter/Space 操作');
    console.log('   📋 控制台可用命令: expandAll() / collapseAll()');
