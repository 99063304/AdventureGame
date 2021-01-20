
createButtons('button1', 'STORY');
createButtons('button2', 'START GAME');
createButtons('button3', 'INSTRUCTIONS');


var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');


var bcharmander = document.createElement('IMG');
var bivysaur = document.createElement('IMG');

var backpackdiv = document.createElement('DIV');


var pokemon = null;
button1.addEventListener('click', story);
button2.addEventListener('click', level);
button3.addEventListener('click', instructions);


function createButtons(buttonid,text) {
  var menu1 =  document.getElementById('menu1');
  var button = document.createElement('BUTTON');
  button.id = buttonid;
  text = document.createTextNode(text);
  button.appendChild(text);
  Append(button);


}

function menu() {
  var een = document.getElementById('een');
  var startknop = document.getElementById('startknop');
  een.style.display = 'none';
  startknop.style.display = 'none';
  menu1.style.display = 'inline';
  menu1.style.left = '275px';
  menu1.style.zIndex = '1';
}


function level() {
  button1.style.display = 'none';
  button2.style.display = 'none';
  button3.style.display = 'none';


  menu1.style.backgroundImage = "url('../afbeeldingen/choose.png')";
  var vraag = document.createElement('DIV');
  vraag.style.backgroundColor = 'white';
  vraag.style.width = '500px';
  vraag.style.height = '100px';
  vraag.style.position = 'absolute';
  vraag.style.top = '0px';
  vraag.style.left = '250px';
  vraag.style.border = '2px solid black';
  vraag.style.borderRadius = '25px';

  var vraagtext = document.createElement('H1');
  var vraagtext1 = document.createTextNode('Choose Your Pokemon');

  vraagtext.style.color = 'black';
  vraagtext.style.fontSize = '50px';

  vraagtext.appendChild(vraagtext1);
  vraag.appendChild(vraagtext);

  vraag.id = 'vraag1';


  menu1.appendChild(vraag);

  var charmander = document.createElement('IMG');
  var bulbasaur = document.createElement('IMG');
  var squirtle = document.createElement('IMG');

  charmander.id = 'charmander';
  bulbasaur.id = 'bulbasaur';
  squirtle.id = 'squirtle';

  charmander.onclick = battle;
  charmander.addEventListener('click', function () {
    bcharmander.setAttribute("src", "../afbeeldingen/Charmander1.png");
  })
  squirtle.onclick = battle;
  squirtle.addEventListener('click', function () {
    bcharmander.setAttribute("src", "../afbeeldingen/squirtle1.png");
  })
  bulbasaur.onclick = battle;
  bulbasaur.addEventListener('click', function () {
    bcharmander.setAttribute("src", "../afbeeldingen/bulbasaur1.png");
  })

  charmander.setAttribute("src", "../afbeeldingen/charmander.png");
  squirtle.setAttribute("src", "../afbeeldingen/squirtle.png");
  bulbasaur.setAttribute('src', '../afbeeldingen/bulbasaur.png');

  bulbasaur.style.top = '190px';
  bulbasaur.style.left = '100px';

  squirtle.style.left = '450px';
  squirtle.style.top = '190px';

  charmander.style.top = '190px';
  charmander.style.left = '800px';

  Append(charmander);
  Append(squirtle);
  Append(bulbasaur);
}
var width1 = 350;
var width2 = 350;
var minus = 50;
var minus2 = 10;
var somcounter = 0;

function battle(level) {
  var charmander = document.getElementById('charmander');
  var bulbasaur = document.getElementById('bulbasaur');
  var squirtle = document.getElementById('squirtle');
  var vraagtext = document.getElementById('vraagtext1');
  var vraag = document.getElementById('vraag1');

  vraag.style.display = 'none';
  charmander.style.display = 'none';
  bulbasaur.style.display = 'none';
  squirtle.style.display = 'none';

  var levelbar1 = document.createElement('DIV');
  var levelbar2 = document.createElement('DIV');

  var atackbar1 = document.createElement('DIV');
  var defensebar2 = document.createElement('DIV');

  var atacktext = document.createTextNode('Attack');
  var atacktextp = document.createElement('P');
  var defensetext = document.createTextNode('Defense');
  var defensetextp = document.createElement('P');

  var backpack = document.createElement('IMG');
  backpack.setAttribute('src','../afbeeldingen/Backpack.png');
  backpack.style.height = '100px';
  backpack.style.width = '100px';
  backpack.id = 'backpackBag';
  backpack.onclick = backPack
   ;

  Append(backpack);

  backpack.style.display = 'none';


  atackbar1.style.backgroundColor = 'red';
  atackbar1.style.width = '200px';
  atackbar1.style.height = '100px';
  atackbar1.style.position = 'absolute';
  atackbar1.style.top = '200px';
  atackbar1.style.left = '580px';
  atackbar1.style.marginTop = '300px'
  atackbar1.style.borderRadius = '25px';
  atackbar1.style.border = '2px solid black';



  atackbar1.onclick =   function () {

    if (width1 <= 350 ) {
        width1 -= minus;
    }
      innerhealth2.style.width = width1 + 'px';

    if (width1 <= 230){
      innerhealth2.style.backgroundColor = 'orange';
    }
    if (width2 <= 230) {
      innerhealth1.style.backgroundColor = 'orange';
    }
    if (width1 <= 120){
      innerhealth2.style.backgroundColor = 'red';
    }
    if (width2 <= 120) {
      innerhealth1.style.backgroundColor = 'red';

    }
    if (width1 >= 350 ) {
        width1 -= minus;
    }
      innerhealth2.style.width = width1 + 'px';



    if (width1 -= minus) { setTimeout(function () {
        width2 -= minus2;
        innerhealth1.style.width = width2 + 'px';
    }, 1000)}

     if (width1 <= 5) {
        alert('You have catched the Pokemon your allowed to the next Stage');
        width1 = 350;
        width2 = 350;
        innerhealth1.style.width = width2 + 'px';
        innerhealth2.style.width = width1 + 'px';
        innerhealth1.style.backgroundColor = 'green';
        innerhealth2.style.backgroundColor = 'green';
        som();
        pokeAdder();
        OponontChoice();
    }
    if (width2 <= 0) {
      alert('You lose');
      lost();
    }
}


  defensebar2.style.backgroundColor = 'white';
  defensebar2.style.width = '200px';
  defensebar2.style.height = '100px';
  defensebar2.style.position = 'absolute';
  defensebar2.style.top = '200px';
  defensebar2.style.left = '800px';
  defensebar2.style.marginTop = '300px';
  defensebar2.style.border = '2px solid black';
  defensebar2.style.borderRadius = '25px';

  defensebar2.onclick = function () {
    width2 += 20;
    innerhealth1.style.width = width2 + 'px'

  };

  atacktextp.style.marginLeft = '30px';
  atacktextp.style.fontSize = '40px';

  defensetextp.style.fontSize = '40px'
  defensetextp.style.marginLeft = '30px';

  Append(atackbar1);
  Append(defensebar2);

  atacktextp.appendChild(atacktext);
  atackbar1.appendChild(atacktextp);

  defensetextp.appendChild(defensetext);
  defensebar2.appendChild(defensetextp)

  var innerhealth1 = document.createElement('DIV');
  var health1 = document.createElement('DIV');


  var health2 = document.createElement('DIV');
  var innerhealth2 = document.createElement('DIV');


  health1.style.marginTop = '10px';
  health1.style.marginBottom = '10px';
  health1.style.position = 'relative';

  health2.style.marginTop = '10px';
  health2.style.marginBottom = '10px';

  health1.style.backgroundColor = 'white';
  health1.style.border = '2px solid black';
  health1.style.height = '20px';
  health1.style.zIndex = '1'

  health2.style.backgroundColor = 'white';
  health2.style.border = '2px solid black';
  health2.style.height = '20px';

  innerhealth1.style.height = '20px';
  innerhealth1.style.width = '350px';

  innerhealth1.style.marginTop = '10px';
  innerhealth1.style.marginBottom = '10px';
  innerhealth1.style.position = 'absolute';
  innerhealth1.style.backgroundColor = 'green';
  innerhealth1.style.border = '2px solid black';
  innerhealth1.style.zIndex = '2';
  innerhealth1.id = 'innerhealth1';
  innerhealth2.style.height = '20px';
  innerhealth2.style.width = '350px';

  innerhealth2.style.marginTop = '10px';
  innerhealth2.style.marginBottom = '10px';
  innerhealth2.style.position = 'absolute';
  innerhealth2.style.backgroundColor = 'green';
  innerhealth2.style.border = '2px solid black';

  levelbar2.appendChild(innerhealth2);
  levelbar1.appendChild(innerhealth1);

  health1.style.width = '350px';
  health2.style.width = '350px';

  levelbar1.appendChild(health1);
  levelbar2.appendChild(health2);

  var levelbartext1 = document.createElement('P');
  var levelbartext2 = document.createElement('P');

  levelbartext1.style.fontSize = '20px';
  levelbartext2.style.fontSize = '20px';
  //
  // var text1 = document.createTextNode('Lv '+ somcounter + '');
  // var text2 = document.createTextNode('Lv '+ somcounter + '');
  // text1.id = 'text1';
  levelbartext1.id = 'levelbartext1';
  levelbartext1.style.color = 'white';
  levelbartext2.id = 'levelbartext2'
  levelbartext2.style.color = 'white';
  somcounter++;
  levelbartext1.innerHTML = 'Lv ' + somcounter;
  levelbartext2.innerHTML = 'Lv ' + somcounter;
  // levelbartext1.appendChild(text1);
  // levelbartext2.appendChild(text2);

  levelbar1.appendChild(levelbartext1);
  levelbar2.appendChild(levelbartext2);

  levelbar1.style.position = 'absolute';
  levelbar1.style.bottom = '150px';
  levelbar1.style.left = '600px';

  levelbar2.style.position = 'absolute';
  levelbar2.style.top = '100px';


  levelbar2.style.backgroundColor = 'gray';
  levelbar1.style.backgroundColor = 'gray';

  levelbar1.style.height = '100px';
  levelbar2.style.width = '400px';
  levelbar2.style.height = '100px';
  levelbar1.style.width = '400px';

  levelbar1.style.border = '2px solid white';
  levelbar2.style.border = '2px solid white';

  levelbar1.style.borderRadius = ('1px');
  levelbar2.style.borderRadius = ('1px');

  Append(levelbar1);
  Append(levelbar2);

  menu1.style.backgroundImage = "url('../afbeeldingen/grassground.png')";

  bcharmander.id = bcharmander;
  bivysaur.id = bivysaur;


  bivysaur.setAttribute('src', '../afbeeldingen/Ivysaur.png');
  bivysaur.style.width = '600px';
  bivysaur.style.height = '600px';

  bcharmander.style.width = '600px';
  bcharmander.style.height = '600px';
  bcharmander.style.top = '100px';


  bivysaur.style.bottom = '140px';
  bivysaur.style.left = '500px';
  bcharmander.style.left = '0px';


  // bsquirtle.setAttribute("src", "../afbeeldingen/Squirtle1.png");
  // bbulbasaur.setAttribute('src', '../afbeeldingen/Bulbasaur1.png');

  Append(bcharmander);
  Append(bivysaur);

}


function OponontChoice() {

  menu1.style.display = 'none';

  var opononts = document.getElementById('opononts');

  if (opononts !== null) {
    opononts.style.display = 'grid';
  };


  if (document.getElementById('opononts') === null) {
    var opononts = document.createElement('DIV');

    opononts.id = 'opononts';
    opononts.style.backgroundImage = "url('../afbeeldingen/menubackground.png')";
    opononts.style.backgroundSize = 'cover';
    opononts.style.height = '600px';
    opononts.style.width = '1000px';
    opononts.style.position = 'absolute';
    opononts.style.marginTop = '20px';
    opononts.style.marginLeft = '215px';
    opononts.style.display = 'grid';
    opononts.style.gridTemplateColumns = '200px 200px 200px	200px 100px';
    opononts.style.gridTemplateRows = '300px 300px 300px';
  }


  var section = document.getElementById('section');



  if (document.getElementById('section') === null) {
    var section = document.createElement('SECTION');
    var charmeleon = document.createElement('IMG');




    Artibute(charmeleon,'charmeleon');
    charmeleon.onclick = function () {

      standaard();
      levels('charmeleon','charmeleon1');

      charmeleon.style.display = 'none';
      pokemon = 'charmeleon';
      // checkArray('charmeleon');
    };
    var blastoise = document.createElement('IMG');
    Artibute(blastoise,'blastoise');

    blastoise.onclick = function () {

      standaard();
      levels('blastoise','blastoise1');
      blastoise.style.display = 'none';
      pokemon = 'blastoise';
    };

    var wartotle1 = document.createElement('IMG');
    Artibute(wartotle1,'wartortle');
    wartotle1.onclick = function () {

      standaard();
      levels('wartortle','wartotle1');
      wartotle1.style.display = 'none';
      pokemon = 'wartotle';
    };
    var venusaur = document.createElement('IMG');
    Artibute(venusaur,'venusaur');
    venusaur.onclick = function () {

      standaard();
      levels('venusaur','venusaur1');
      venusaur.style.display = 'none';
      pokemon = 'venusaur';
    };
    var charizard = document.createElement('IMG');
    Artibute(charizard,'charizard');
    charizard.onclick = function () {

      standaard();
      levels('charizard','charizard1');
      charizard.style.display = 'none';
      pokemon = 'charizard';

    };
    var zapdos = document.createElement('IMG');
    Artibute(zapdos,'zapdos');
    zapdos.onclick = function () {

      standaard();
      levels('zapdos','zapdos1');
      zapdos.style.display = 'none';
      pokemon = 'zapdos';
    };
    var moltres = document.createElement('IMG');
    Artibute(moltres,'moltres');
    moltres.onclick = function () {

      standaard();
      levels('moltres','moltres1');
      moltres.style.display = 'none';
      pokemon = 'moltres'
    };
    var articuno = document.createElement('IMG');
    Artibute(articuno,'articuno');
    articuno.onclick = function () {

      standaard();
      levels('articuno','articuno1');
      articuno.style.display = 'none';
      pokemon = 'articuno';

    };
    var mewtwoEindbaas = document.createElement('IMG');
    Artibute(mewtwoEindbaas,'mewtwoEindbaas');
    mewtwoEindbaas.onclick = function () {

      standaard();
      levels('mewtwoEindbaas','mewtwoEindbaas1');
      mewtwoEindbaas.style.display = 'none';
      pokemon = 'mewtwoEindbaas';
    };

      section.style.gridRow = '1/2';
      section.style.gridColumn = '1/2';
      section.id = 'section';
      opononts.style.zIndex = '2';

      opononts.appendChild(section);
      container.appendChild(opononts);

      AppendSection(charmeleon);
      AppendSection(wartotle1);
      AppendSection(venusaur);
      AppendSection(charizard);
      AppendSection(blastoise);
      AppendSection(zapdos);
      AppendSection(articuno);
      AppendSection(moltres);
      AppendSection(mewtwoEindbaas);


  }
}
function standaard() {
  menu1.style.display = 'inline';
  opononts.style.display = 'none';
}
function levels(naam,background) {
  bivysaur.src = '../afbeeldingen/' + naam + '.png';
  menu1.style.backgroundImage = "url('../afbeeldingen/" + background + ".png')";
  if (naam == 'charmeleon' || naam == 'wartotle') {
    minus = 15;
  }
  if (naam == 'charizard' || naam == 'blastoise' || naam == 'venusaur') {
    minus = 10;
    minus2 = 20;
  }
  else if (naam == 'articuno' || naam == 'zapdos' || naam == 'moltres'){
    minus = 5;
    minus2 = 40;
  }
  else if (naam == 'mewtwoEindbaas'){
    minus = 5;
    minus2 = 80;
  }
}

function levels2 (naam) {
  bcharmander.src = '../afbeeldingen/myPokemon/' + naam + 'B.png';




  if (naam == 'Charmeleon' || naam == 'Wartotle') {
    minus = 15;
  }
  else if (naam == 'Charizard' || naam == 'Blastoise' || naam == 'Venusaur') {
    minus = 20;
    minus2 = 20;
  }
  else if (naam == 'Articuno' || naam == 'Zapdos' || naam == 'Moltres'){
    minus = 25;
    minus2 = 40;
  }
  else if (naam == 'Mewtwo'){
    minus = 40;
    minus2 = 60;
  }
}

function lost() {
  menu1.style.display = 'none';
  backpackdiv.style.display = 'none';
 var lost1 = document.createElement('DIV');
 var youlose = document.createTextNode('You Lose');
 var paralose = document.createElement('P');

 paralose.style.color = 'white';
 paralose.style.fontSize = '100px';
 paralose.style.lineHeight = '600px';
 paralose.style.paddingLeft = '300px' ;

 lost1.style.marginTop = '20px';
 lost1.style.width = '1000px';
 lost1.style.height = '600px';
 lost1.style.position = 'absolute';
 lost1.style.backgroundColor = 'black';
 lost1.style.border = '2px solid black';
 lost1.style.marginLeft ='225px' ;

 paralose.appendChild(youlose);
 lost1.appendChild(paralose);
 container.appendChild(lost1);

}
function backPack() {
 menu1.style.display = 'none';
 backpackdiv.style.backgroundImage = "url('../afbeeldingen/backpackbackground.jpg";
 backpackdiv.style.width = '1000px';
 backpackdiv.style.height = '600px';
 backpackdiv.style.backgroundSize = 'cover';
 backpackdiv.id = 'backPack';
 backpackdiv.style.marginLeft = '215px';
 backpackdiv.style.paddingTop = '20px';

 backpackdiv.onclick = standaard;




 container.appendChild(backpackdiv);
}


function story() {
  menu1.style.display = 'none';
  button1.style.display = 'none';
  button2.style.display = 'none';
  button3.style.display = 'none';

  var story = document.createElement('DIV')
  var pastP = document.createElement('P');
  var past  = document.createTextNode('Past');

  var paststoryp = document.createElement('P');
  var paststory = document.createTextNode('When you were 6 years old, your mother fell ill with a rare disease. And you heard about a legendary Pokémon that can heal any disease. To save your mother, you went looking for these legendary Pokémon. You entered the Pokémon battle forest where it is located but soon saw your Pokémon was not strong enough. And decided to come back in 10 years. ')

  var presentP = document.createElement('P');
  var present  = document.createTextNode('Present');

  var presentstoryP = document.createElement('P');
  var presentstory = document.createTextNode('You are now 16 years old and you think you are ready for the Pokémon battle forest to save your mother.');

  var futureP = document.createElement('P');
  var future = document.createTextNode('Future....');

  var targetP = document.createElement('P');
  var target  = document.createTextNode('Target');

  var targetstoryP = document.createElement('P');
  var targetstory = document.createTextNode('You have been caught in the Pokémon battle. Defeat and catch all the Pokémon and use them to get to the Legendary Pokémon so it can save your mother. And return home with your Pokémon.');

  // var present = document.createElement('Present');
  // var presentverhaal
 paststoryp.style.color = 'white';
 pastP.style.color = 'white';
 presentP.style.color = 'white';
 presentstoryP.style.color = 'white';
 futureP.style.color = 'white';
 targetP.style.color = 'white';
 targetstoryP.style.color = 'white';

 story.style.width = '1000px';
 story.style.height = '600px';
 story.style.backgroundColor = 'black';


story.id = 'story';
story.appendChild(pastP);
story.appendChild(paststoryp);
story.appendChild(presentP);
story.appendChild(presentstoryP);
story.appendChild(futureP);
story.appendChild(targetP);
story.appendChild(targetstoryP);

pastP.appendChild(past);
paststoryp.appendChild(paststory);

presentP.appendChild(present);
presentstoryP.appendChild(presentstory);

futureP.appendChild(future);

targetP.appendChild(target);
targetstoryP.appendChild(targetstory);

container.appendChild(story);

}
function instructions() {
 menu1.style.display = 'inline';
 menu1.style.backgroundImage = "url('../afbeeldingen/instructions/instruct.png";
 menu1.style.width = '1500px';
 menu1.style.marginLeft = '0px';
 menu1.style.left = '10px';

 button1.style.display = 'none';
 button2.style.display = 'none';
 button3.style.display = 'none';

}
function som() {
  var levelbartext1 = document.getElementById('levelbartext1')
  somcounter++;
  levelbartext1.innerHTML = 'Lv ' + somcounter;

  var levelbartext2 = document.getElementById('levelbartext2')
  levelbartext2.innerHTML = 'Lv ' + somcounter;
  var backpack = document.getElementById('backpackBag')
  if (somcounter == 2) {
  backpack.style.display = 'inline';
}
  if (somcounter == 10) {
  alert('This will be your final battle good luck');

  }
  if (somcounter == 11) {
  alert('You have won the game and got the cure to save your mother ....');

  }


}

function pokeAdder() {

  var charmeleon2 = document.createElement('IMG');
  Artibute(charmeleon2,'charmeleon');
  charmeleon2.style.display = 'none';

  var blastoise2 = document.createElement('IMG');
  Artibute(blastoise2,'blastoise');
  blastoise2.style.display = 'none';

  var wartotle2 = document.createElement('IMG');
  Artibute(wartotle2,'wartortle');
  wartotle2.style.display = 'none';

  var venusaur2 = document.createElement('IMG');
  Artibute(venusaur2,'venusaur');
  venusaur2.style.display = 'none';

  var charizard2 = document.createElement('IMG');
  Artibute(charizard2,'charizard');
  charizard2.style.display = 'none';

  var zapdos2 = document.createElement('IMG');
  Artibute(zapdos2,'zapdos');
   zapdos2.style.display = 'none';

  var moltres2 = document.createElement('IMG');
  Artibute(moltres2,'moltres');
  moltres2.style.display = 'none';

  var articuno2 = document.createElement('IMG');
  Artibute(articuno2,'articuno');
  articuno2.style.display = 'none';

  var mewtwoEindbaas2 = document.createElement('IMG');
  Artibute(mewtwoEindbaas2,'mewtwoEindbaas');
   mewtwoEindbaas2.style.display = 'none';



  if (pokemon == 'charmeleon') {

    charmeleon2.style.display = 'inline';
    charmeleon2.onclick = function () {

      standaard();
      levels2('Charmeleon');
      charmeleon2.style.display = 'none';


    };
  }
  else if (pokemon == 'wartotle') {
    wartotle2.style.display = 'inline';
    wartotle2.onclick = function () {

      standaard();
      levels2('Wartortle');
      wartotle2.style.display = 'none';

    };
  }
  else if (pokemon == 'zapdos') {
    zapdos2.style.display = 'inline';
    zapdos2.onclick = function () {

   standaard();
   levels2('Zapdos');
   zapdos2.style.display = 'none';
 }

  }
  else if (pokemon == 'articuno') {

    articuno2.style.display = 'inline';
    articuno2.onclick = function () {
    standaard();
    levels2('Articuno');
    articuno2.style.display = 'none';
  };

  }
  else if (pokemon == 'charizard') {
    charizard2.style.display = 'inline'
    charizard2.onclick = function () {

    standaard();
    levels2('Charizard');
    charizard2.style.display = 'none';
 }
  }
  else if (pokemon == 'blastoise') {
    blastoise2.style.display = 'inline';
    blastoise2.onclick = function () {
      standaard();
      levels2('Blastoise');
       blastoise2.style.display = 'none';

    };
  }
  else if (pokemon == 'venusaur') {

    venusaur2.style.display = 'inline';
    venusaur2.onclick = function () {

    standaard();
    levels2('Venusaur');
    venusaur2.style.display = 'none';
  }
  }
  else if (pokemon == 'mewtwoEindbaas') {
    mewtwoEindbaas2.style.display = 'inline';
    mewtwoEindbaas2.onclick = function () {
    somcounter++;
    standaard();
    levels2('Mewtwo');
    mewtwoEindbaas.style.display = 'none';
  }
  }
  else if (pokemon == 'moltres') {

    moltres2.style.display = 'inline';
  moltres2.onclick = function () {

    standaard();
    levels2('Moltres');
    moltres2.style.display = 'none';
  }

}
    AppendSection1(charmeleon2);
    AppendSection1(wartotle2);
    AppendSection1(venusaur2);
    AppendSection1(charizard2);
    AppendSection1(blastoise2);
    AppendSection1(articuno2);
    AppendSection1(moltres2);
    AppendSection1(mewtwoEindbaas2);
    AppendSection1(zapdos2);
}
function Append(naam) {
  menu1.appendChild(naam)
}
function AppendSection(naam) {
  var section1 = document.getElementById('section');
  section1.appendChild(naam);

}
function AppendSection1(naam) {
  backpackdiv.appendChild(naam);
}
function Artibute(object, naam) {
  object.setAttribute('src', '../afbeeldingen/'+ naam +'.png');
  object.id = 'choice-' + naam;
}

console.dir(menu1);
console.log(menu1);
