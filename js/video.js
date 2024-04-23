
$(() => {
  $('.main2_2').hide();
  $('.main2_3').hide();
  $('.main2_4').hide();
  $('#home1').click(function () {
    $('.main2_1').show();
    $('.main2_2').hide();
    $('.main2_3').hide();
    $('.main2_4').hide();
  });
  $('#about1').click(function () {
    $('.main2_1').hide();
    $('.main2_2').show();
    $('.main2_3').hide();
    $('.main2_4').hide();
  });


  $('.nav-link').on('click', function (event) {
    var video = $('#player')[0]; 
    if ($(this).text().trim() == "1.오리엔테이션") {
      video.src = "video/BrunchCookingClassCr1.mp4";
    }
    if ($(this).text().trim() == "2.재료소개") {
      console.log($(this).text().trim());
      let src = "video/BrunchCookingClassCr_2.mp4";
      video.src = src; 
    }
    if ($(this).text().trim() == "3.재료손질") {
      console.log($(this).text().trim());
      let src = "video/BrunchCookingClassCr_3.mp4";
      video.src = src;
    }
    if ($(this).text().trim() == "4.조리") {
      let src = "video/BrunchCookingClassCr_4.mp4";
      video.src = src; 
    }
    if ($(this).text().trim() == "5.플레이팅") {
      alert($(this).text());
    }
    if ($(this).text().trim() == "6.시식 및 정리") {
      alert($(this).text());
    }
    if ($(this).text().trim() == "이전 페이지로") {
      location.replace('detail.html');
    }
    video.load();
  })
});

$('.btn-open').each(function () {
  var modalID = $(this).attr('href');
  var modalBg = $('.modal-bg');

  $(this).on('click', function (e) {
    e.preventDefault();

    modalBg.fadeIn();

    $(modalID).show();

    $('html').css({ overflow: 'hidden' });
  });

  $('.modal-bg, .modal-close').on('click', function () {
    modalBg.fadeOut();
    $(modalID).hide();
    $(modalID).removeAttr('style');

    $('html').removeAttr('style');
  });
});

const navBar = document.querySelector("nav"),
  menuBtns = document.querySelectorAll(".menu-icon"),
  overlay = document.querySelector(".overlay");
menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});
overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});