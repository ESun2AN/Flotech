// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhqHiM_UML4j9GSG5OXHSWB0Xr50t3wk8",
    authDomain: "khsemiproject-fb643.firebaseapp.com",
    databaseURL: "https://khsemiproject-fb643-default-rtdb.firebaseio.com",
    projectId: "khsemiproject-fb643",
    storageBucket: "khsemiproject-fb643.appspot.com",
    messagingSenderId: "996107715849",
    appId: "1:996107715849:web:3124f015e9ebd1489d3fd8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 데이터베이스 변수
const database = firebase.database();
const dbRef = database.ref('users');


function oninputloginid(){
    
    let loginid = document.getElementsByClassName('login__input__box')[0];
    //console.log(loginid);
    let loginidMsg = document.getElementById('c');
    if( loginid.value == null || loginid.value == '' || loginid.value == undefined ){
        loginidMsg.textContent='아이디를 입력하세요.'
        loginidMsg.style.color='#2a69fa';
        loginidMsg.style.fontSize='11px';
        loginidMsg.style.fontWeight='bold';
        loginidMsg.style.marginBottom='5px';
        loginidMsg.style.fontFamily='none';
    }else{
        loginidMsg.textContent='';
    }

}

function oninputloginpw(){
    
    let loginpw = document.getElementsByClassName('login__input__box')[1];
    console.log(loginpw);
    //let pw2 = document.getElementsByClassName('join__input__pw')[1];
    let loginpwMsg = document.getElementById('d');
    if( loginpw.value == null || loginpw.value == '' || loginpw.value == undefined ){
        loginpwMsg.textContent='비밀번호를 입력하세요.'
        loginpwMsg.style.color='#2a69fa';
        loginpwMsg.style.fontSize='12px';
        loginpwMsg.style.fontWeight='bold';
        loginpwMsg.style.marginBottom='5px';
        loginpwMsg.style.fontFamily='none';
    }else{
        loginpwMsg.textContent='';
    }

}

function loginbtn(){
    let inputbox = document.getElementsByClassName('login__input__box');
    
    
    
        if(inputbox[0].value==null||inputbox[0].value==''||inputbox[0].value==undefined){
            alert('아이디 또는 비밀번호를 입력해주세요');
            inputbox[0].value='';
            inputbox[0].focus();
            
            
            
        }else if(inputbox[1].value==null||inputbox[1].value==''||inputbox[1].value==undefined){
            alert('아이디 또는 비밀번호를 입력해주세요');
            inputbox[1].value='';
            inputbox[1].focus();
            
            
        }else{
            dbRef.child(inputbox[0].value).child('pw').get().then((snapshot) => {
                if (snapshot.exists()) {
                  console.log(snapshot.val());
                  console.log(typeof snapshot.val());
                  if(inputbox[1].value == snapshot.val() ){
                    alert('로그인성공');
                    sessionStorage.setItem("id", inputbox[0].value);
                    setTimeout(function() {
                        window.location.href = "./main.html";
                    }, 500);
                 }else{
                    alert('비밀번호가 틀렸습니다');
                    inputbox[1].value='';
                    inputbox[1].focus();
                 }
                } else {
                    alert('존재하지 않는 아이디 입니다');
                    inputbox[0].value='';
                    inputbox[0].focus();
                }
              }).catch((error) => {
                console.error(error);
              });
            

            
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