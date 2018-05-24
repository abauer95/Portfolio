//verb (future) array
//verb (present)
var verb = ["eat", "sit on", "touch", "run towards", "attack", "accommodate", "respect", "answer", 
            "modify", "freak out", "write on", "reflect", "vote for", "breathe on", "validate", "injure", 
            "invest in", "burn", "generate", "illuminate", "stare at", "attack", "admire", "buy", 
            "change", "stop", "wash"];
var pastV = ["ate", "lied to", "shook", "laughed at",   
            "broke", "sang to", "exploded", "surprised"];
var ingV = ["breaking", "erupting", "slouching", "coloring", 
            "performing surgery", "climbing", "freaking out", "flying", "dancing", "laughing"];
var noun = ["cat", "donkey", "car", "table", "tree", "potato", "tomato", "boat", "mouse", 
            "tap-dance", "factory", "network", "waiver", "submarine", "puddle", "waffle",
            "sponge", "grain of salt", "ninja", "planet", "soul", "doppelganger", "fire", "meteorite", "homework", "knowledge", "touchdown", "parrot", "chain", "senator",
            "beast", "news", "hotel", "hoax", "soap", 
            "snowflake", "hippo", "dodo bird", "bubble wrap", "popcorn", "rain", "teddy-bear", 
            "blanket", "coffee", "bark", "slushy", "sidewalk", "basket", "turtle", "snail", "paint"];
var pluralN =["recyclables", "paradoxes", "volts", "maps", "flakes", "volunteers", "barley", "bubbles",
            "earphones", "postage rates", "olives", "people", "fans", "sunglasses", "whales"];
var adj = ["green", "neon", "hairy", "giant", "minuscule", "dangerous", "spunky", "deep", "bright",             "twisted", "fake", "massive", "predictable", 
          "spikey", "counterintuitive", "frozen", "mesmerizing", "new", "globular", "burgundy", "spirited",
          "dramatic", "orange", "illegal", "dark", "soft", "dripping", "messy", "stressed", "cute"];
var org = ["NASA", "the FBI", "Hollywood", "Nike", "your dentist", "Chris Pratt", "Jessica", "Austin", "the Queen", "Wonder Woman",
          "Harry Potter", "George Washington", "Princess Leia", "Beyonce", "Indiana Jones", "Iluminate"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


$('video').click(function () {
  findSentence()
});

function findSentence() {
  var x = Math.floor(Math.random() * 11) + 1;

  switch (x) {
    case 1:
      changeText("Tomorrow your " + findWord(noun) + " will " + findWord(verb) + " your " + findWord(noun) + ".");
      break;

    case 2:
      changeText("You will discover your " + findWord(adj) + " " + findWord(noun) + " on " + findDate() + ".");
      break;

    case 3:
      changeText("Your " + findWord(noun) + " will " + findWord(verb) + " a " + findWord(noun) + " for the next " + findNumber() + " years.");
      break;

    case 4:
      changeText("You will " + "never be " + findWord(adj) + " again. " + "Never. Unless you see "+ findNumber() + " " + findWord(pluralN) + ".");
      break;

    case 5:
      changeText("You " + findWord(pastV) + " " + findWord(org) + ". And you never will again.");
      break;
          
    case 6: 
      changeText("You will see a " + findWord(noun) + " " + findWord(ingV) + " on a " + findWord(adj) + " " + findWord(noun) + ".");
      break;

    case 7: 
      changeText("When you see the " + findWord(adj) + " " + findWord(adj) + " " + findWord(noun) + " " + findWord(ingV) + ", run.");
      break;
    
    case 8:
      changeText("If " + findWord(adj) + " " + findWord(pluralN) + " attack your " + findWord(noun) + ", you'll know it's the end.");
      break;
    
    case 9:
      changeText("A " + findWord(adj) + " " + findWord(noun) + " will " + findWord(verb) + " all the " + findWord(pluralN) + " in your " + findWord(noun) + ".");
      break;

    case 10:
      changeText("The last thing you " + findWord(pastV) + " is your new " + findWord(noun) + ".");
      break;

    case 11:
      changeText(findDate() + " is the day you " + " " + findWord(verb) + " your " + findWord(adj) + " fears.");
      break;

    default:
      console.log("Someting unexpected happened.");
  }
}

function findDate() {
  var m = findWord(month);
  var day = Math.floor(Math.random() * 28) + 1;
  var year = Math.floor(Math.random() * 3000) + 1;
  return m + " " + day + ", " + year;
}
    
function findNumber() {
  var n = Math.floor(Math.random() * 100,000) + 2;
  return n;
}

function findWord(wordList) {
  var i = Math.floor(Math.random() * wordList.length);
  return wordList[i];
}

function changeText(fortune) {
  var element = $("<div class=\"text\">" + fortune + "</div>");
  rPosition(element);
  $('#fortunes').append(element);
  element.fadeIn(500).delay(5000).fadeOut(7000, function(){
    $(this).remove();
  });
}

function rPosition(element) {
  var x = Math.floor(Math.random() * 65);
  var y = Math.floor(Math.random() * 40) + 30;
  var r = Math.floor(Math.random() * 360);
  element.css("top", y + '%');
  element.css("left", x + '%');

  element.css({
    'transform': 'rotate(' + r + 'deg)'
  });
}
