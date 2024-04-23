// 스크롤버튼


window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
  
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }
  
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function redirectToSite() {
    // 특정 사이트의 URL을 지정
    var targetSiteUrl = "main.html";
    
    // 현재 창에서 해당 사이트로 이동
    window.location.href = targetSiteUrl;
  }