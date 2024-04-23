// 리뷰수 카운트 업
let interval = 5000;


let reviewNumber = document.getElementById('review_number');
let startValueInt = 0;
let endValueInt = parseInt(reviewNumber.getAttribute('data-val'));
let durationInt = Math.floor(interval / (endValueInt - startValueInt));
let counterInt = setInterval(function () {
    startValueInt += 1;
    reviewNumber.textContent = startValueInt;
    if (startValueInt == endValueInt) {
        clearInterval(counterInt);
    }
}, durationInt);

// 평점과 추가 수강의사율
let elements = document.querySelectorAll('.num');
elements.forEach((element) => {
    let startValue = 0;
    let endValue = parseFloat(element.getAttribute('data-val'));
    let duration = Math.floor(interval / (endValue * 10));
    let step = endValue / duration;

    let counter = setInterval(function () {
        startValue += step;
        element.textContent = startValue.toFixed(1);
        if (startValue >= endValue) {
            element.textContent = endValue.toFixed(1);
            clearInterval(counter);
        }
    }, interval / duration);
});
// 투명도 0이였다가 h1제목들 등장
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        }
    });
});

const h1Element = document.querySelector('.review_content h1');
observer.observe(h1Element);

function redirectToSite() {
    // 특정 사이트의 URL을 지정
    var targetSiteUrl = "main.html";
    
    // 현재 창에서 해당 사이트로 이동
    window.location.href = targetSiteUrl;
  }
  
  
  

  