//로그인 확인 
let videocheck = document.getElementsByClassName('start')[0];
videocheck.addEventListener("click",function(){
  if(id == null){
    alert("로그인이 필요합니다.");
  }else{
    var targetSiteUrl = "video.html";
    // 현재 창에서 해당 사이트로 이동
    window.location.href = targetSiteUrl;
  }
});
// 로그인 관련 끝


function heart(){
  
     var heartElement = document.getElementById("heart");
     heartElement.style.color = "tomato";

    alert("찜하기 성공!");
  }

function Share() { 
  var currentUrl = window.location.href;

  var userInput = prompt('이 페이지의 URL:', currentUrl);

  if (userInput !== null) {
  
      var tempInput = document.createElement('input');
      tempInput.value = currentUrl;
      document.body.appendChild(tempInput);

      tempInput.select();
      tempInput.setSelectionRange(0, 99999); 

      document.execCommand('copy');

      document.body.removeChild(tempInput);


      alert('페이지의 URL이 복사되었습니다.: ' + currentUrl);
  }
}

function redirectToSite() {
  // 특정 사이트의 URL을 지정
  var targetSiteUrl = "main.html";
  
  // 현재 창에서 해당 사이트로 이동
  window.location.href = targetSiteUrl;
}