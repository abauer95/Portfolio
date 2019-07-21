var info = {
  title: 'Growth and Decay',
  thumbnailImage: 'assets/thumb_growth.png',
  description: 'A photograph series exploring the growth and decay of plants and lost objects found years later.',
  type: 'slideshow',
  folderLink: '/images',
  link: '/gallery.html',
  size: 21
};

var fade_delay = 250;
var selected_image;
var in_fullimg = null;

//-------------------------------------------------------startup-------------------------------------------------------
$(document).ready(function () {
  $('.left')[0].innerHTML = '<';
  $('.right')[0].innerHTML = '>';
  if (window.location.hash) {
    loadFull(parseHash());
    in_fullimg = 2;
  } else {
    unloadImage();
  }
});

//-------------------------------------------------------clickables-------------------------------------------------------

$('.close').click(function () {
  unloadImage();
  closeFullscreen();//throwing error
  history.replaceState("", document.title, window.location.pathname);
});

$('.fullscreen').click(function () {
  openFullscreen();
});

$('.right').click(function () {
  nextImage();
});

$('.left').click(function () {
  prevImage();
});

//-------------------------------------------------------functions-------------------------------------------------------
function parseHash() {
  var str = window.location.hash.replace(/[\D]/g, '');
  return parseInt(str);
}

function doc_keyUp(e) {
  switch (e.keyCode) {
    case 27://escape key
      if (in_fullimg == true){
        unloadImage();
        closeFullscreen();
        history.replaceState("", document.title, window.location.pathname);
      }
      break;
    case 37://left arrow
      prevImage();
      break;
    case 39://right arrow
      nextImage();
      break;

  }
}

function nextImage() {
  var num = parseHash();
  if (num + 1 <= info.size) {
    //history.replaceState("", document.title, window.location.pathname + "#" + (num + 1));
    loadImage(num + 1);
  } else {
    
    loadImage(1);
  }
  //$(window).trigger('hashchange', "");
}

function prevImage() {
  var num = parseHash();
  if (num - 1 > 0) {
    //history.replaceState("", document.title, window.location.pathname + "#" + (num - 1));
    loadImage(num - 1);
  } else {
    //history.replaceState("", document.title, window.location.pathname + "#" + info.size);
    loadImage(info.size);
  }
  //$(window).trigger('hashchange', "");
}

function loadGrid() {
  for (var i = 1; i <= info.size; i++) {
    $('.content').append("<a href='#" + i + "'><div class='thumbnail_image' style='background-image: url(" + info.folderLink + "/thumbnails/thumb_" + i + ".jpg')></div></a>");
  } //onclick='loadFull(" + i + ")'
}

function loadFull(num) {
  in_fullimg = true;
  history.pushState("", document.title, window.location.pathname + "#" + num);
  $('.text').fadeOut(fade_delay);
  $('.full').fadeIn(fade_delay);
  $('.content')[0].innerHTML = "";
  loadImage(num);
}

function loadImage(num) {
  $('.large_image').attr("src", "" + info.folderLink + "/large/large_" + num + ".jpg");
  //$('.large_image').css("background-image", 'url("' + info.folderLink + '/large/large_' + num + '.jpg")');
  history.replaceState("", document.title, window.location.pathname + "#" + num);
}

function unloadImage() {
  $('.full').fadeOut(fade_delay);
  $('.text').fadeIn(fade_delay);
  if($('.content')[0].innerHTML == ""){
    loadGrid();
    //console.log('unloadImage: loading grid.');
  }
  window.scrollTo(0, 0);
  in_fullimg = false;
}

function openFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.Fullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

//-------------------------event listeners-----------------------------------

document.addEventListener('keyup', doc_keyUp, false);

$(window).on('hashchange', function () {
  if (window.location.hash) {
    loadFull(parseHash());
  } else {
    unloadImage();
  }
  window.scrollTo(0, 0);
});

window.addEventListener('popstate', function (e) {
  if (in_fullimg == true) {
    unloadImage();
    history.replaceState("", document.title, window.location.pathname);
  }
  in_fullimg = false;

});
