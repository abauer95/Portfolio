//---------------------------------------field variables-----------------------------------------------
var fadeDelay = 250;
var slideIndex = 1;
var selectedProject;

//---------------------------------------startup functions----------------------------------
loadTiles();

//---------------------------------------clickables-------------------------------------
/*
$('#title').click(function () {
  transition(function () {
    $('#links_projects').css('display', 'inherit');
    $('#seekBox').animate({
      top: '-40px'
    });
    $('.project_title')[0].innerHTML = "";
    $('#youtube').fadeOut(fadeDelay);
    $('.slideshow_container').css('display', 'none');
    $('.info_text')[0].innerHTML = "<br>&nbsp &nbsp &nbsp Film, animation, illustration and photography are my passion. Mixing these provides opportunities to experiment with different mediums that I normally would not undertake, creating unique compositions and forms of art. This results in an exploration of the thought-provoking and mysterious nature of surrealism and other themes of interest, as a search to express and define myself.";

  })
});
*/

/*$('#links_projects').click(function () {
  $('#links_projects').css('display', 'none');
  loadTiles();
});*/

$('#home').click(function () {
  /*$('#seekBox').animate({
    top: '-40px'
  });*/
  $('#seekBox').css('display', 'none');
  $('#youtube').fadeOut(fadeDelay);
  loadTiles();
});

$('#prev').click(function () {

  do {
    if (selectedProject > 0) {
      selectedProject--;
    } else {
      selectedProject = projects.length - 1;
    }
  } while (projects[selectedProject].type === "header");

  loadProject(selectedProject);
});

$('#next').click(function () {
  do {
    if (selectedProject < projects.length - 1) {
      selectedProject++;
    } else {
      selectedProject = 0;
    }
  } while (projects[selectedProject].type === "header");

  loadProject(selectedProject);
});

//-----------------------------------------functions------------------------------------------

function transition(func) {
  $('.info_text').fadeOut(fadeDelay, func).fadeIn(fadeDelay);
  $('.project_title').fadeOut(fadeDelay).fadeIn(fadeDelay);
  $('#youtube').fadeOut(fadeDelay*2);
  $('.slideshow_container').fadeOut(fadeDelay).css('display', 'none');
  $('.project_image').fadeOut(fadeDelay);
}

function loadTiles() {
  transition(function () {
    window.scrollTo(0, 0);
    $('.project_title')[0].innerHTML = "";
    $('.info_text')[0].innerHTML = "";
    $('.project_container').css('display', 'none');

    var i = 0;
    for (const project of projects) {
      if (project.type === "header") {
        $('.project_title').append(`<br> <span style="color: burlywood">- ${project.title} -</span> <br>`);
      } else {
        $('.project_title').append(`<div class="items" onclick="loadProject(${i})" style="background-image:url(${project.thumbnailImage})">${project.title}</div>`);
      }
      i++;
    }
  });
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $('.slides');
  if (n > slides.length) {
    slideIndex = 1
  } else if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


function loadProject(projectNumber) {
  transition(function () {

    var project = projects[projectNumber];

    $('#seekBox').css('display', 'block');
    window.scrollTo(0, 0);
    selectedProject = projectNumber;

    $('.project_title')[0].innerHTML = '<br>' + project.title;
    $('.info_text')[0].innerHTML = project.description;

    switch (project.type) {
      case "youtube":

        $('.project_container').css('display', 'block');
        $('#youtube').attr('src', project.videoLink).fadeIn(fadeDelay*2);
        break;

      case "slideshow":

        $('.project_container').css('display', 'none');
        var num = Math.floor(Math.random() * (project.size - 2)) + 1;
        $('#ss1').attr('src', project.folderLink + '/thumbnails/thumb_' + num + '.jpg');
        $('#ss2').attr('src', project.folderLink + '/thumbnails/thumb_' + (num + 1) + '.jpg');
        $('#ss3').attr('src', project.folderLink + '/thumbnails/thumb_' + (num + 2) + '.jpg');
        $('#ss_link').attr('href', project.link);
        $('.slideshow_container').fadeIn(fadeDelay);
        break;

      case "image":

        $('.project_container').css('display', 'block');
        $('.project_image a img').attr('src', project.image);
        $('.project_image a').attr('href', project.link);
        $('.project_image').fadeIn(fadeDelay);
        break;
    }
  });
}

function initCapWave(ele) {
  var t = ele[0].innerHTML;

  ele.mouseover(function (e) {
    e.currentTarget.isMouseOver = true;
    CapWave(0, t, e.currentTarget);
  });

  ele.mouseout(function (e) {
    e.currentTarget.isMouseOver = false;
  });
}

function CapWave(pos, word, element) {
  var temp = word.substr(0, pos) + word.charAt(pos).toUpperCase() + word.substr(pos + 1, word.length);
  element.innerHTML = temp;

  if (!element.isMouseOver)
    element.innerHTML = word;
  else if (pos < word.length)
    setTimeout(CapWave, 100, pos + 1, word, element);
  else if (element.isMouseOver)
    setTimeout(CapWave, 100, 0, word, element);
}

$('.capWave').each(function (index, item) {
  initCapWave($(item));
});
