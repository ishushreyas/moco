voiceList = document

 .querySelector(

  '#voiceList');

var synth = window

 .speechSynthesis;

var voices = [];

PopulateVoices();

if (speechSynthesis !==

 undefined) {

 speechSynthesis

  .onvoiceschanged =

  PopulateVoices;

}

function PopulateVoices() {

 voices = synth.getVoices();

 var selectedIndex = voiceList

  .selectedIndex < 0 ? 0 :

  voiceList

  .selectedIndex;

 voiceList.innerHTML = '';

 voices.forEach((voice) => {

  var listItem = document

   .createElement('option');

  listItem.textContent = voice

   .name;

  listItem.setAttribute(

   'data-lang',

   voice.lang);

  listItem.setAttribute(

   'data-name',

   voice.name);

  voiceList.appendChild(

   listItem);

 });

 voiceList.selectedIndex =

  selectedIndex;

}

var message = document

 .querySelector(

  '#message');

var SpeechRecognition =

 SpeechRecognition ||

 webkitSpeechRecognition;

var SpeechGrammarList =

 SpeechGrammarList ||

 webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;'

var recognition =

 new SpeechRecognition();

var speechRecognitionList =

 new SpeechGrammarList();

speechRecognitionList

 .addFromString(

  grammar, 1);

recognition.grammars =

 speechRecognitionList;

recognition.lang = 'en-US';

recognition.interimResults =

 false;

recognition.continuous = true;

recognition.onresult = function(

 event) {

 var last = event.results

  .length -

  1;

 var command = event.results[

   last][

   0

  ]

  .transcript;

 message.textContent = command;

 const

  mine = [

   ["hello" , "hey" , "hi"] ,
   ["how are you",

    "how are things",

    "what is going on",

    "what is up"

   ],

   ["happy",

    "good",

    "well",

    "fantastic",

    "cool"

   ],

   ["tell me story",

    "tell me joke"

   ],

   ["bad",

    "bored",

    "tired",

    "sad"

   ],

   ["thanks",

    "thank you"

   ],

   ["bye",

    "good bye",

    "goodbye"

   ],

   [

    "what's your name"

   ],

   [

    "show history"

   ],

   [

    "sing"

   ]

  ];

 const

  spk = [

   ["Hey, there" , "Hello"] ,
   ["Nothing much",

    "Exciting things!"

   ],

   [

    "Glad to hear it"

   ],

   ["What about?",

    "Once upon a time..."

   ],

   ["Why?",

    "Cheer up buddy"

   ],

   ["You're welcome",

    "No problem"

   ],

   ["Goodbye",

    "See you later"

   ],

   [

    "I am moco"

   ],

   [

    "showing, history"

   ],

   [

    "okay"

   ]

  ];

 const fcn = [okay, okay, okay,

  okay,

  okay, okay, okay, setm, sing

 ];

 for (

  var

   j =

   0; j <

  mine

  .length; j++

 ) {

  for (

   var

    i =

    0; i <

   mine[

    j

   ]

   .length; i++

  ) {

   if (

    command

    .toLowerCase()

    .includes(

     mine[

      j

     ]

     [

      i

     ]

    )

   ) {

    var

     speak =

     spk[

      j

     ]

     [

      Math

      .floor(

       Math

       .random() *

       spk[

        j

       ]

       .length

      )

     ];

    fcn

     [

      j

     ]

     ();

   }

  }

 }

 var toSpeak =

  new SpeechSynthesisUtterance(

   speak);

 var selectedVoiceName =

  voiceList

  .selectedOptions[0]

  .getAttribute(

   'data-name');

 voices.forEach((

  voice) => {

  if (voice.name ===

   selectedVoiceName) {

   toSpeak.voice = voice;

  }

 });

 synth.speak(toSpeak);

 var para = document

  .createElement(

   "p");

 para.innerHTML =

  "<b>You: </b><u class=\"you\">" +

  command + "</u>";

 document.querySelector(

   ".history")

  .appendChild(para);

 para.setAttribute("class",

  "command")

 var pra = document

  .createElement(

   "p");

 pra.innerHTML =

  "<b>Me: </b><u class=\"me\">" +

  speak;

 pra.setAttribute("class",

  "speak")

 document.querySelector(

   ".history")

  .appendChild(pra);

 var his = document

  .querySelector(

   ".history").innerHTML;

 var mode = document.body

  .classList;

 localStorage.setItem(

  "history",

  his);

 localStorage.setItem("mode",

  mode);

 document.querySelector(

   ".mouth")

  .style

  .animation =

  "speak .51s infinite";

 document.getElementById("syn")

  .textContent =

  speak;

 toSpeak.onend = function(e) {

  document.querySelector(

    ".mouth")

   .style.animation = "none";

 }

}

recognition.onerror =

 function() {

  message.textContent =

   'Error occurred in recognition: ' +

   event.error;

 }

document.querySelector(

  '#btnGiveCommand')

 .addEventListener(

  'click',

  function() {

   recognition.start();

  });

window.onload = function() {

 var h = localStorage.getItem(

  "history");

 document.querySelector(

   ".history")

  .innerHTML = h;

 var m = localStorage.getItem(

  "mode");

 document.body.classList = m;

 sttim();

}

function sttim() {

 const mycmdTimeout =

  setTimeout(

   strech, 13000);

 const mycmdbtnTimeout =

  setTimeout(

   short, 13000);

}

function sett() {

 document.querySelector(".dash")

  .classList.toggle("dash_o");

 document.querySelector(

   ".d_close")

  .classList.toggle(

   "d_close_o");

 s_down();

}

function setm() {

 document.querySelector(

   ".swipe_card")

  .classList.toggle(

   "swipe_card_o");

 document.querySelector(

   ".d_close_h")

  .classList = "d_close_h_o";

 s_down();

}

function nochild() {

 event.stopPropagation();

}

function strech() {

 document.querySelector(

   ".spkCmd").innerHTML =

  "try saying, ";

 var mic = document

  .getElementById(

   "btnGiveCommand");

 mic.style.transition =

  "all 1.5s ease";

 mic.classList.add("btnCmd");

 mic.style.borderRadius =

  "100px";

 sttim();

}

function short() {

 document.querySelector(

   ".spkCmd").innerHTML =

  "";

 var mic = document

  .getElementById(

   "btnGiveCommand");

 mic.classList.remove("btnCmd");

 mic.style.borderRadius = "20%";

}

function log_close() {

 document.querySelector(

   ".d_close_o")

  .classList = "d_close";

 document.querySelector(

   ".dash_o")

  .classList = "dash";

}

function s_down() {

 document.getElementById("s_m")

  .classList.toggle("s_n");

 document.getElementById(

   "setting_m")

  .classList.toggle(

   "setting_mn");

 document.querySelector(

   ".hed_nav")

  .classList.toggle(

   "setting_bn");

}

function seth() {

 document.querySelector(

   ".swipe_card_o")

  .classList = "swipe_card";

}

function abt() {

 alert("hello");

}

function dress() {

 const

  myTimeout =

  setTimeout(

   drs_chg,

   500

  );

 const

  mybtnTimeout =

  setTimeout(

   btn_chg,

   2000

  );

 document

  .getElementById(

   "drs_opt"

  )

  .disabled =

  true;

 document

  .getElementById(

   "curtain"

  )

  .classList

  .add(

   "container"

  );

 document

  .getElementById(

   "dress"

  )

  .classList

  .add(

   "dres"

  );

 document

  .getElementById(

   "chest1"

  )

  .classList

  .add(

   'dres'

  );

 document

  .getElementById(

   "chest2"

  )

  .classList

  .add(

   'dres'

  );

 setTimeout

  (() => {

    document

     .getElementById(

      "curtain"

     )

     .classList

     .remove(

      'container'

     );

    document

     .getElementById(

      "dress"

     )

     .classList

     .remove(

      'dres'

     );

    document

     .getElementById(

      "chest1"

     )

     .classList

     .remove(

      'dres'

     );

    document

     .getElementById(

      "chest2"

     )

     .classList

     .remove(

      'dres'

     );

   },

   1500

  )

}

function drs_chg() {

 var

  drs =

  document

  .getElementById(

   "drs_opt"

  );

 document

  .getElementById(

   "dress"

  )

  .classList =

  drs

  .value;

}

function light() {

 document

  .body

  .style

  .backgroundColor =

  "#faeded";

}

function dark() {

 document

  .body

  .style

  .backgroundColor =

  "#545454";

}

function okay() {

 console

  .log(

   "okay"

  );

}

function sing() {

 document

  .getElementById(

   "song"

  )

  .play();

}

function btn_chg() {

 document

  .getElementById(

   "drs_opt"

  )

  .disabled =

  false;

}

let touchloc = [0, 0]

let touchd = false

document.body.addEventListener(

 "touchmove",

 function(ev) {

  if (touchd == false) {

   for (i = 0; i < ev

    .targetTouches

    .length; i++) {

    let x = ev.touches[i]

     .pageX -

     touchloc[0]

    let y = ev.touches[i]

     .pageY -

     touchloc[1]

    if (x > 100) {

     document.querySelector(

       ".dash")

      .classList.toggle(

       "dash_o");

     document.querySelector(

       ".d_close")

      .classList.toggle(

       "d_close_o");

     touchd = true

    }

    if (x < -100) {

     console.log("Swipe Left")

     document.querySelector(

       ".d_close_o")

      .classList = "d_close";

     document.querySelector(

       ".dash_o")

      .classList = "dash";;

     touchd = true

    }

    if (y > 100) {

     console.log(

      "Swipe Bottom");

     touchd = true

    }

    if (y < -100) {

     console.log("Swipe Top");

     touchd = true

    }

   }

  }

 })

document.body.addEventListener(

 "touchstart",

 function(ev) {

  touchd = false;

  touchloc[0] = ev.touches[0]

   .pageX;

  touchloc[1] = ev.touches[0]

   .pageY;

 })

document.body.addEventListener(

 "touchend",

 function() {

  touchd = true

 })
