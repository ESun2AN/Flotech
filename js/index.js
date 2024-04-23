// 스크롤 맨위로 올리는 이모지

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
  

//전체동영상
  function showAllVideos() {
    
      location.reload();
  
    
  }


// 태그값에 따른 동영상 보여주기
  function filter(tag) {
    var projects = document.getElementsByClassName('project');
    var projectsArray = Array.from(projects);
    var container = document.querySelector('.video');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(5, 1fr)'; 
    container.style.gridGap = '2rem'; 
  

    projectsArray.forEach(function (project) {
      project.style.display = 'none';
    });
  

    projectsArray.forEach(function (project) {
      var images = project.getElementsByClassName('p__img');
      var subtitles = project.getElementsByClassName('subtitle');
  

      var imagesArray = Array.from(images);
      var subtitlesArray = Array.from(subtitles);
  
      imagesArray.forEach(function (image) {
        var classNames = image.className.split(' ');
  
        if (classNames.indexOf(tag.toLowerCase()) !== -1) {
          image.style.display = 'block';
          project.style.display = 'grid'; 
        } else {
          image.style.display = 'none';
        }
      });
  
      subtitlesArray.forEach(function (subtitle) {
        var classNames = subtitle.className.split(' ');
  
        if (classNames.indexOf(tag.toLowerCase()) !== -1) {
          subtitle.style.display = 'block';
        } else {
          subtitle.style.display = 'none';
        }
      });
    });
    var titleElement = document.getElementById('title');
    titleElement.style.display = 'none';
  }
  
  function redirectToSite() {
    // 특정 사이트의 URL을 지정
    var targetSiteUrl = "main.html";
    
    // 현재 창에서 해당 사이트로 이동
    window.location.href = targetSiteUrl;
  }
  
  
  

  