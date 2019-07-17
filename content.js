//---------------------------------------field variables-----------------------------------------------
var projectlist = [
  '<span style="color: burlywood">- motion -</span> <br>',
  '<div id="drone" class="items" onclick="projClick(1)">Drugged Drone</div>',
  '<div id="uncanny" class="items" onclick="projClick(2)">Portrait of the Uncanny</div>',
  '<div id="noche" class="items" onclick="projClick(3)">Sketches of a Trajedy</div>',
  '<div id="villisca" class="items" onclick="projClick(4)">Through their Eyes</div>',
  '<div id="trump"class="items"  onclick="projClick(5)">Darth Trump</div>',
  '<div id="stop" class="items" onclick="projClick(6)">Stop Motion Wars</div>',
  '<br> <span style="color: burlywood">- photography -</span> <br>',
  '<div id="growth" class="items" onclick="projClick(20)">Growth and Decay</div>',
  '<br> <span style="color: burlywood">-2d-</span> <br>',
  '<div id="madness" class="items" onclick="projClick(30)">Method to My Madness</div>',
  '<div id="print" class="items" onclick="projClick(31)">Print Magazine Cover</div>',
  '<br> <span style="color: burlywood">- interactive -</span> <br>',
  '<div id="lost" class="items" onclick="projClick(40)">Lost Between Realities</div>',
  '<div id="fortune" class="items" onclick="projClick(41)">The Unpredictable...</div>'
];

var idList = [
  "drone",
  "uncanny",
  "noche",
  "villisca",
  "trump",
  "stop",
  "growth",
  "madness",
  "print",
  "lost",
  "fortune"
];

var imageList = [
'assets/thumb_drone.png',
'assets/thumb_uncanny.png',
'assets/thumb_noche.png',
'assets/thumb_villisca.png',
'assets/thumb_trump.png',
'assets/thumb_stop.png',
'assets/thumb_growth.png',
'assets/thumb_madness.png',
'assets/thumb_print.png',
'assets/thumb_lost.png',
'assets/thumb_fortune.png'
];

var fadeDelay = 250;
var slideIndex = 1;
var prevProj;
var nextProj;

//----------------------------------------startup functions----------------------------------
/*$('.project_text')[0].innerHTML = makeSentence();
$('.project_text').click(function() { 
  $('.project_text')[0].innerHTML = makeSentence();
});*/
pT();


//-----------------------------------------clickables-------------------------------------
$('#title').click(function () {
  transition(function () {
    $('#links_projects').css('display', 'inherit');
    $('#seekBox').animate({top: '20px'});
    $('.project_text')[0].innerHTML = "";
    $('.slideshow-container').css('display', 'none');
    $('.info_text')[0].innerHTML = "<br>&nbsp &nbsp &nbsp Film, animation, illustration and photography are my passion. Mixing these provides opportunities to experiment with different mediums that I normally would not undertake, creating unique compositions and forms of art. This results in an exploration of the thought-provoking and mysterious nature of surrealism and other themes of interest, as a search to express and define myself.";
    
  })
});

$('#links_projects').click(function () {
  $('#links_projects').css('display', 'none');
  pT();
});

$('#home').click(function() {
  $('#seekBox').animate({top: '20px'});
  pT();
});

$('#prev').click(function() { 
  if(prevProj > 0)
    projClick(prevProj);
});

$('#next').click(function() { 
  if(nextProj > 0)
    projClick(nextProj);
});

//-----------------------------------------functions------------------------------------------

function transition(func) {
  $('.info_text').fadeOut(fadeDelay, func).fadeIn(fadeDelay);
  $('.project_text').fadeOut(fadeDelay).fadeIn(fadeDelay);
  $('.slideshow-container').fadeOut(fadeDelay);
}

function pT() {
  transition(function () {
    window.scrollTo(0,0);
    $('.info_text')[0].innerHTML = "";
    $('.project_text')[0].innerHTML = "";
    $('.slideshow-container').css('display', 'none');

    for (var counter = 0; counter < projectlist.length; counter++) {
      $('.project_text')[0].innerHTML += projectlist[counter];
    }
    loadImages();
  });
  
}

function loadImages(){
  for(var i = 0; i < idList.length; i++){ 
    document.getElementById(idList[i]).style.backgroundImage = "url(" + imageList[i] + ")"; 
  }
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

function projClick(selectedProject) {
  transition(function () {
    $('#seekBox').css("display", "inherit");
    $('#seekBox').animate({top: '60px'});
    window.scrollTo(0,0);
    
    switch (selectedProject) {
        
      case 1:
        prevProj = 41;
        nextProj = 2;
        
        $('.project_text')[0].innerHTML = '<br>Drugged Drone <iframe id="youtubeVid" src="https://www.youtube.com/embed/KA-JJa3-u54?version=3&amp;rel=0&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent" allowfullscreen="true" data-ratio="0.5625" data-width="1280" data-height="720"></iframe>';
        $('.info_text')[0].innerHTML = 'Illustrated, painted, animated, and created music to make a strange film as a metaphor for my experience through chemotherapy. An automated drone is being drugged by a machine tethered to itself and begins to go through a routine struggle, where it feels out of its own mind and hears music from an ordinary fan.';
        break;

      case 2:
        prevProj = 1;
        nextProj = 3;
        $('.project_text')[0].innerHTML = '<br>Portrait of the Uncanny <iframe id="youtubeVid" src="https://www.youtube.com/embed/7bf5jBEEQ94?version=3&amp;rel=0&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent" allowfullscreen="true" data-ratio="0.5625" data-width="1280" data-height="720"></iframe>';
        $('.info_text')[0].innerHTML = 'The theory of the uncanny valley is one of two inspirations for this project. As robots appear more lifelike, they seem to be more creepy and repulsive, as noted in 1970 by Japanese roboticist Masahiro Mori as the uncanny valley. The other is a strange collection of objects put into museums and shops called cabinets of curiosity; it was common for people to visit these to see many cultures that they would not normally see in their lifetime. <br> <br> These segmented pieces are a collection of different moving textures and objects arranged to resemble a face. Some effects are used to obscure the textures to a small degree of abstraction to resemble more objects than what they are. Ominous ambient sound is played over the duration of the film to put emphasis on the eerie aspect of the uncanny valley.';
        break;

      case 3:
        prevProj = 2;
        nextProj = 4;
        $('.project_text')[0].innerHTML = '<br>Sketches of a Trajedy <iframe id="youtubeVid" src="https://www.youtube.com/embed/gOX13LiVR-8?version=3&amp;rel=0&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent" allowfullscreen="true" data-ratio="0.5625" data-width="1280" data-height="720"></iframe>';
        $('.info_text')[0].innerHTML = 'Noche Acosador translated from Spanish is “night stalker,” a nickname for the infamous killer Richard Ramirez who hid for decades with 14 murders from the late ‘70s to mid ‘80s in California. <br> <br> The imagery seen are various views of a crime scene. Scenes like the cabin in the forest and the knife are drawn in to depict what is currently happening. The scenes undrawn refer to things happening after; the killer is removing his tracks. Later in the film, a hooded figure is smudged away and becomes a ghost, leaving no trace of a murder.';
        break;

      case 4:
        prevProj = 3;
        nextProj = 5;
        $('.project_text')[0].innerHTML = '<br>Through their Eyes <iframe id="youtubeVid" src="https://www.youtube.com/embed/6R-mHqvQOnk?version=3&amp;rel=0&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent" allowfullscreen="true" data-ratio="0.5625" data-width="1280" data-height="720"></iframe>';
        $('.info_text')[0].innerHTML = 'Villisca is a town in Iowa made infamous by an unsolved axe murder in the summer of 1912. The abstract visuals seen are referring to emotions of the murderer and victims: bubbling fire symbolizes to the intoxicating rage of the psycho, green and red bacteria-like particles represent an infection or sickness flowing through the blood, and strange squid-like fractals refer to a hallucinogenic dream state of mind. <br> <br> The film concludes with two points of view: looking at the eye of the killer, seeing green and red fractals moving quickly around the iris, resembling a bloodshot sickly-green eye; then looking through the eyes of the victim seeing their own blood slowly dripping off an axe in as they are passing out. <br> <br> This combination of abstract imagery and instrumental music are harmonious due to the nature of both mediums; they can be interpreted in many ways since they are both not exactly legible. There are no words or representational imagery (until the end) to explain what is going on. Only references to things, allowing the viewer to enjoy beautifully strange visuals with an amazing instrumental by John 5.';
        break;

      case 5:
        prevProj = 4;
        nextProj = 6;
        $('.project_text')[0].innerHTML = '<br>Darth Trump <iframe id="youtubeVid" src="https://www.youtube.com/embed/4qN3n-NNtDA?version=3&amp;rel=0&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent" allowfullscreen="true" data-ratio="0.5625" data-width="1280" data-height="720"></iframe>';
        $('.info_text')[0].innerHTML = "This animation explores multiple techniques while poking fun at one of the many things President Trump has said. Such as, rotoscoping, digital painting, and time remapping.";
        break;

      case 6:
        prevProj = 5;
        nextProj = 20;
        $('.slideshow-container').css('display', 'none');
        $('.project_text')[0].innerHTML = '<br>Stop Motion Wars <iframe id="youtubeVid" src="https://www.youtube.com/embed/Xw8K-Rc8cAg?version=3&amp;rel=0&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent" allowfullscreen="true" data-ratio="0.5625" data-width="1280" data-height="720"></iframe>';
        $('.info_text')[0].innerHTML = "This is a group project with Darien Campo and Rodney Cuda. The project was split between animating and photography; post-processing was my responsibility. Lego characters and vehicles were used as affordable props and fun characters to animate. A short encounter between a Jedi and a TIE fighter.";
        break;

      case 20:
        prevProj = 6;
        nextProj = 30;
        $('.project_text')[0].innerHTML = '<br>Growth and Decay <br>';
        showSlides(slideIndex);
        $('.slideshow-container').fadeIn(fadeDelay).css('display', 'block');
        $('.info_text')[0].innerHTML = "A photograph series exploring the growth and decay of plants and lost objects found years later.";
        break;

      case 30:
        prevProj = 20;
        nextProj = 31;
        $('.slideshow-container').css('display', 'none');
        $('.project_text')[0].innerHTML = '<br>Method to My Madness <a href="assets/madness_original.jpg" target="blank"><img src="assets/madness_mockup.jpg" id="youtubeVid"></a> <span style="font-size: 18pt; position: relative; top: -45px;">click to enlarge</span>';
        $('.info_text')[0].innerHTML = "This concept comes from the idiom “there is a method to their madness,” meaning the person has a plan or reason behind their strange behavior. The challenge was to find a literal but unique way of interpreting it. In this case, this page is a schematic for the monster from a fictional journal by Dr. Victor Frankenstein from Mary Shelley’s famous novel.";
        break;

      case 31:
        prevProj = 30;
        nextProj = 40;
        $('.project_text')[0].innerHTML = '<br>Print Magazine Cover <img src="assets/print_mag.png" style="margin-top: 50px; margin-bottom: 50px; width: 60%;">';
        $('.info_text')[0].innerHTML = "A cover to the history issue of Print magazine inspired an alternate history where Piet Mondrian’s and other de Stijl artists’ dream of a utopian society came to fruition. Using a grid basis for designing the planes and only primary colors (red, yellow, and blue) to fill in some surfaces are fundamentals aspects of de Stijl. Removing the black grid lines and extruding the squares into three-dimensional space changes the historical approach of de Stijl for a fresh view.";
        break;
        
      case 40:
        prevProj = 31;
        nextProj = 41;
        $('.project_text')[0].innerHTML = '<br>Lost Between Realities <a href="./assets/textproject/index.html" target="blank"> <img src="./assets/screen_lost.png" id="youtubeVid"> </a> <span style="font-size: 18pt; position: relative; top: -45px;">click to view project</span>';
        $('.info_text')[0].innerHTML = "A delve in to the mind of myself being confused between reality and fiction while being treated through six months of chemotherapy.";
        break;
        
      case 41:
        prevProj = 40;
        nextProj = 1;
        
        $('.project_text')[0].innerHTML = '<br>The Unpredictable Changing Factors of your Predictably Miniscule Life <a href="./assets/singleserve/fortune.html" target="blank"> <img src="./assets/screen_fortune.png" id="youtubeVid"> </a> <span style="font-size: 18pt; position: relative; top: -45px;">click to view project</span>';
        $('.info_text')[0].innerHTML = 'A group project with <a href="https://bjessica092.github.io/interactive324/project3/jessicaBrown.html" target="blank">Jessica Brown</a> where we created a single serving webpage to randomly generate fortunes to show how predictions can be wildly incorrect.';
        break;

      default:
        console.log("Something unexpected happened.");
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