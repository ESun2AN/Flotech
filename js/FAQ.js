// faq슬라이드
(function () {
    

    $('.title').click(function () {
        $(this).siblings('.content').slideUp();
        $(this).next().stop().slideToggle(300);
        
    });
})();
// faq +버튼회전
$(() => {
    let rotated = false;

    $('.xi-plus-thin.xi-2x').click(function () {
        rotated = !rotated;
        const rotateValue = rotated ? '45deg' : '0deg';
        $(this).css('transform', 'rotate(' + rotateValue + ')');
    });
});