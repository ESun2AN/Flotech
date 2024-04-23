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

function oninputId(){
   
    
    let joinid = document.getElementById('joinid');
    let joinidMsg = document.getElementById('a');
    let size = joinid.value.length;
    if(size>=6 && size<=14){
        joinidMsg.textContent='아이디 길이가 적정합니다.'
        joinidMsg.style.color='#2a69fa';
        joinidMsg.style.fontSize='12px';
        joinidMsg.style.fontWeight='bold';


        dbRef.child(joinid.value).child('id').get().then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              console.log(typeof snapshot.val());
              if(joinid.value != snapshot.val() ){
                joinidMsg.textContent='사용 가능한 아이디입니다.';
                joinidMsg.style.color='#2a69fa';
                joinidMsg.style.fontSize='12px';
                joinidMsg.style.fontWeight='bold';
             }else{
                joinidMsg.textContent='아이디가 이미 존재합니다.';
                joinidMsg.style.color='red';
                joinidMsg.style.fontSize='12px';
                joinidMsg.style.fontWeight='bold';
             }
            } else {
            }
          }).catch((error) => {
            console.error(error);
          });

    }else{
        joinidMsg.textContent='아이디 길이가 부적정합니다!'
        joinidMsg.style.color='red';
        joinidMsg.style.fontSize='12px';
        joinidMsg.style.fontWeight='bold';
    }

    
}

function oninputPwNew(){
    let joinpw = document.getElementsByClassName('join__input__pw')[0];
    let joinpwMsg = document.getElementById('c');
    let size = joinpw.value.length;
    if(size>=6 && size<=14){
        joinpwMsg.textContent='비밀번호 길이가 적정합니다.'
        joinpwMsg.style.color='#2a69fa';
        joinpwMsg.style.fontSize='12px';
        joinpwMsg.style.fontWeight='bold';
    }else{
        joinpwMsg.textContent='비밀번호 길이가 부적정합니다!'
        joinpwMsg.style.color='red';
        joinpwMsg.style.fontSize='12px';
        joinpwMsg.style.fontWeight='bold';
    }
}

function oninputPw(){
    let pw1 = document.getElementsByClassName('join__input__pw')[0];
    let pw2 = document.getElementsByClassName('join__input__pw')[1];
    let pwMsg = document.getElementById('b');
    console.log(pw1);
    console.log(pw2);
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
    }
}


$('select').eq(0).change(()=>{

    let select = $('select > option:selected').eq(0).val();
    $('input[name=address]').val(select);

})

function joinbtn(){
    let joinform = document.forms[0];
    let vals = [
        joinform.id.value,
        joinform.pw.value,
        joinform.pwcon.value,
        joinform.name.value,
        joinform.mail.value,
        joinform.address.value,
        joinform.phone.value
    ]
    

    for(let i=0; i<vals.length; i++){
        let val = vals[i];
        if(val == null || val == '' || val == undefined){
            switch (i) {
                case 0:
                    alert('아이디를 입력하세요');
                    joinform.id.value='';
                    joinform.id.focus();
                    break;
                case 1:
                    alert('비밀번호를 입력하세요');
                    joinform.pw.value='';
                    joinform.pw.focus();
                    break;
                case 2:
                    alert('비밀번호를 재입력하세요');
                    joinform.pwcon.value='';
                    joinform.pwcon.focus();
                    break;
                case 3:
                    alert('이름을 입력하세요');
                    joinform.name.value='';
                    joinform.name.focus();
                    break;
                case 4:
                    alert('이메일을 입력하세요');
                    joinform.mail.value='';
                    joinform.mail.focus();
                    break;
                case 5:
                    alert('메일주소 뒷자리를 입력하세요');
                    joinform.address.value='';
                    joinform.address.focus();
                    break;
                case 6:
                    alert('전화번호를 입력하세요');
                    joinform.phone.value='';
                    joinform.phone.focus();
                    break;
            }
            return;
            }
        }// for문 끝

        while(true){
            let checkbox = document.querySelector('input[name="agr"]');
            if(!checkbox.checked){
                alert('약관에 동의해주세요.');
                break;
            }
            database.ref("users/"+joinform.id.value).set({
                "id": joinform.id.value,
                "pw": joinform.pw.value,
                "name":joinform.name.value,
                "email":joinform.mail.value+'@'+joinform.address.value,
                "ph":joinform.phone.value
            });
            alert('가입성공!');
            
            setTimeout(function() {
                window.location.href = "./main.html";
            }, 500);
            break;
        
        }


    }

   /* 스크롤버튼 */
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