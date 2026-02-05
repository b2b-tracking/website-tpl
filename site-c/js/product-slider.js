// 产品轮播功能
document.addEventListener('DOMContentLoaded', function() {
    const productWrapper = document.getElementById('productSlideWrapper');
    const productCards = document.querySelectorAll('.product-slide-card');
    const prevBtnProduct = document.querySelector('.prev-btn-product');
    const nextBtnProduct = document.querySelector('.next-btn-product');
    let currentProductIndex = 0;

    if (productCards.length > 0 && productWrapper) {
        // 计算一个产品卡片的宽度（包括 gap）
        const getCardWidth = () => {
            const card = productCards[0];
            const cardWidth = card.offsetWidth;
            const gap = 30; // CSS 中定义的 gap
            return cardWidth + gap;
        };

        // 计算最大可滚动的索引（保证至少显示4个产品）
        const getMaxIndex = () => {
            return Math.max(0, productCards.length - 4);
        };

        // 切换产品轮播
        function switchProductSlide(index) {
            const maxIndex = getMaxIndex();

            // 限制索引范围
            if (index < 0) {
                currentProductIndex = 0;
            } else if (index > maxIndex) {
                currentProductIndex = maxIndex;
            } else {
                currentProductIndex = index;
            }

            const cardWidth = getCardWidth();
            const offset = currentProductIndex * cardWidth;
            productWrapper.style.transform = `translateX(-${offset}px)`;

            // 更新按钮状态
            updateButtonStates();
        }

        // 更新按钮状态
        function updateButtonStates() {
            if (prevBtnProduct && nextBtnProduct) {
                prevBtnProduct.style.opacity = currentProductIndex === 0 ? '0.3' : '1';
                prevBtnProduct.style.cursor = currentProductIndex === 0 ? 'not-allowed' : 'pointer';

                const maxIndex = getMaxIndex();
                nextBtnProduct.style.opacity = currentProductIndex >= maxIndex ? '0.3' : '1';
                nextBtnProduct.style.cursor = currentProductIndex >= maxIndex ? 'not-allowed' : 'pointer';
            }
        }

        // 上一个产品
        if (prevBtnProduct) {
            prevBtnProduct.addEventListener('click', () => {
                if (currentProductIndex > 0) {
                    switchProductSlide(currentProductIndex - 1);
                }
            });
        }

        // 下一个产品
        if (nextBtnProduct) {
            nextBtnProduct.addEventListener('click', () => {
                const maxIndex = getMaxIndex();
                if (currentProductIndex < maxIndex) {
                    switchProductSlide(currentProductIndex + 1);
                }
            });
        }

        // 初始化按钮状态
        updateButtonStates();

        // 窗口大小改变时重新计算
        window.addEventListener('resize', () => {
            switchProductSlide(currentProductIndex);
        });
    }


   
});
