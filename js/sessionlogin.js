let id = sessionStorage.getItem('id');
let a = document.getElementsByClassName('loginlink')[0];
let b = document.getElementsByClassName('loginlink')[1];
let c = document.getElementsByClassName('dropdown-item')[12];
console.log(id);
if(id != null){
  a.innerText=id;
  b.innerText='로그아웃';
  console.log(a.innerText);
}
b.addEventListener("click",function(){
  if(b.innerText=='로그아웃'){
    sessionStorage.removeItem('id');
    location.reload();
  }else{
    var targetSiteUrl = "join.html";

    // 현재 창에서 해당 사이트로 이동
    window.location.href = targetSiteUrl;
  }
});

c.addEventListener("click",function(){
  if(id != null){
    var targetSiteUrl = "mypage02.html";

    // 현재 창에서 해당 사이트로 이동
    window.location.href = targetSiteUrl;
  }else{
    alert('로그인이 필요합니다');
  }
});
