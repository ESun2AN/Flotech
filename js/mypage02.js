
$('.idMsg').css('fontSize','12px');
$('.idMsg').css('color','red');
$('.idMsg').css('fontWeight','bold');

function mypage02_1(){
    let press = document.getElementsByClassName('mypage02__head__click')[0];
    press.style.color='#2a69fa';
}

function oninputPw(){
    let mypagepw1 = document.getElementsByClassName('mypage02__input__pw')[0];
    let mypagepw1Msg = document.getElementById('d');
    let size = mypagepw1.value.length;
    if(size>=6 && size<=14){
        mypagepw1Msg.textContent='비밀번호 길이가 적정합니다.'
        mypagepw1Msg.style.color='#2a69fa';
        mypagepw1Msg.style.fontSize='12px';
        mypagepw1Msg.style.fontWeight='bold';
    }else{
        mypagepw1Msg.textContent='비밀번호 길이가 부적정합니다!'
        mypagepw1Msg.style.color='red';
        mypagepw1Msg.style.fontSize='12px';
        mypagepw1Msg.style.fontWeight='bold';
    }
}


function oninputPwCon(){
    let pw1 = document.getElementsByClassName('mypage02__input__pw')[0];
    let pw2 = document.getElementsByClassName('mypage02__input__pw')[1];
    let pwMsg = document.getElementById('c');
    console.log(pw1.value);
    console.log(pw2.value);
    if(pw1.value == pw2.value){
        pwMsg.textContent='비밀번호가 일치합니다.'
        pwMsg.style.color='#2a69fa';
        pwMsg.style.fontSize='12px';
        pwMsg.style.fontWeight='bold';
    }else{
        pwMsg.textContent='비밀번호 불일치! 다시 입력해주세요! '
        pwMsg.style.color='red';
        pwMsg.style.fontSize='12px';
        pwMsg.style.fontWeight='bold';
    };  
}

$('select').eq(0).change(()=>{

    let select = $('select > option:selected').eq(0).val();
    $('input[name=address]').val(select);

})


function change(){
    if(!confirm('정말로 수정하시겠습니까?')){
        return;
    }else{
        setTimeout(function() {
            window.location.href = "./main.html";
        }, 500);
    }
        
}


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