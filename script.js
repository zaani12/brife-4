var li_elements = document.querySelectorAll("nav ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(item) {
      item.style.display = "none";
    });
    if (li_value == "EXERCICE1") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "EXERCICE2") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "EXERCICE3") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "EXERCICE4") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "EXERCICE5") {
        document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "EXERCICE6") {
        document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "EXERCICE7") {
        document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "EXERCICE8") {
        document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "EXERCICE9") {
        document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "EXERCICE10") {
        document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}

// Exercice 1
function permuter(){
   x=document.form.a.value;
   document.form.a.value=document.form.b.value;
   document.form.b.value=x;
}
// Exercice 2

function main() {
  let RESULTS = document.getElementById("RESULTS");
  let j = document.getElementById("day").value;
  let m = document.getElementById("month").value;
  let a = document.getElementById("year").value;
  var bissextille = true;
  var cas1;
  var cas2;
  var cas3;
  var cas4;
  bissextille = a % 400 != 0 && a % 4 != 0 && a % 100 == 0;
  cas1 = a > 0 && (m === 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && (j >= 1 && j <= 31);
  cas2 = a > 0 && (m == 4 || m == 6 || m == 9 || m == 11) && (j >= 1 && j <= 30);
  cas3 = a > 0 && m == 2 && !bissextille && (j >= 1 && j <= 28);
  cas4 = a > 0 && m == 2 && bissextille && (j >= 1 && j <= 29);
      if (cas1 || cas2 || cas3 || cas4) {
          RESULTS.innerHTML="est valide"
      }
      else {
          RESULTS.innerHTML="est in valide"
      }
  }
// Exercice 3

function addNumbers() {
  var number;
  var result = "";

  number = Number(document.getElementById("number").value);

  for(var i = 1; i<= 10; i++){
    result = result + "<p>"+number + "*" + i + "=" + number * i+"</p>";
  }

  document.getElementById("result").innerHTML = result;
}

// Exercice 4
var randomNr = Math.floor(Math.random() *100) + 1 ;
const hestorique = document.getElementById('top');
const resultat = document.getElementById('resultat');
const essayer = document.getElementById('essayer');
const button = document.getElementById('button');
var geussNr = 1

function tester(){
    var Nruser = Number(essayer.value);
    if (geussNr === 1){
        hestorique.textContent = 'vos teste:  '  ;
    }
    hestorique.textContent += Nruser + ' ';
    if (Nruser === randomNr)  resultat.textContent = 'bravo '
    else if (geussNr === 10)  { resultat.textContent = 'le bon Nr : ' +randomNr;button.disable=true;}
    geussNr++
    essayer.value = '';
}
// Exercice 5
function pernumb(){
  let invalid = document.getElementById('invalid');
  let n = document.getElementById('n').value;
if(n % 2 == 0 ){
invalid.innerHTML="est in valide"
}
else{
lons()
}

function lons(){
let n = document.getElementById('n').value
let string = "";
// Upside pyramid
for (let i = 1; i <= n - 2; i++) {
// printing spaces
for (let j = n; j > i; j--) {
string += " ";
}
// printing star
for (let k = 0; k < i * 2 - 1; k++) {
string += "*";
}
string += "\n";
}
// downside pyramid
for (let i = 1; i <= n  ; i++) {
// printing spaces
for (let j = 0; j < i; j++) {
string += " ";
}
// printing star
for (let k = (n - i) * 2 - 1; k > 0; k--) {
string += "*";
}
string += "\n";
}

document.getElementById("lonsonge").innerHTML=(`<pre>${string}</pre>`);
}
}

// Exercice 6
function calculatrice(op){
  let nombre1=document.calculatri.nubr1.value;
  let nombre2=document.calculatri.nubr2.value;
  let resultat;
   switch(op){
      case "add": resultat=parseFloat(nombre1)+parseFloat(nombre2); break;
      case "sou": resultat=nombre1-nombre2; break;
      case "mul": resultat=nombre1*nombre2; break;
      case "div": {
         if(nombre2!=0)
            resultat=nombre1/nombre2;
         else
            resultat="Erreur!";
      }
   }
   document.calculatri.rescalc.value=resultat;
}


// Exercice 7
function filtered1(){
  var phrase = document.getElementById('phrase').value
  var mot = document.getElementById('mot').value
  var p = document.getElementById('p')
  if (  phrase.includes(mot) ){
      return p.innerHTML= ("bravo:" +""+ mot +" "+ "est se trouve dans la phrase")
      }
  else {
      p.innerHTML= ("Erreur aucun resultat " )
  }
}
function deleted(){
  var phrase = document.getElementById('phrase').value
  var mot = document.getElementById('mot').value

  phrase.replace(mot,"")
  return document.getElementById('p').innerHTML= ( phrase.replace(mot,""))
}

// Exercice 8

function test(){
    let number = 0
    let str = document.getElementById('p1').value
    let paragraph = document.getElementById('paragraph1')
    
    for(const el of str){

        if(el === 'a' ||el === 'e' ||el === 'i' ||el === 'o' ||el=== 'u'||el=== 'y'){

            number++

        }  
    }
    return paragraph.innerHTML= ('la phrase que vous avez saisi contient '+ number + ' voyelles' )
}

// Exercice 9 
function table() {

  let row = document.form1.row.value;

  for (let i = 1; i <= row; i++) {
      let addInput = document.createElement("input");
      addInput.type = "text";
      addInput.name = "unsorteddNumbers[]"
      addInput.size = 2;
      document.getElementById("table").appendChild(addInput);

  }
}

function bubleSort(inputNodes) {

  let values = [];

  for (let i = 0; i < inputNodes.length; i++) {
      values.push(inputNodes[i].value);
  }


  for (let i = 0; i < values.length; i++) {
      for (j = i + 1; j < values.length; j++) {
          if (values[i] > values[j]) {
              temp = values[i];
              values[i] = values[j];
              values[j] = temp;
          }
      }
  }

  return values;

}

function trie() {
  console.log(document.getElementsByName("unsorteddNumbers[]"));

  let sortedValues = bubleSort(document.getElementsByName("unsorteddNumbers[]"));

  sortedValues.forEach(function (inputValue) {

      let newInput = document.createElement("input");
      newInput.type = "text";
      newInput.size = 2;
      newInput.name = "sorteddNumbers[]";
      newInput.value = inputValue;

      document.getElementById("table2").appendChild(newInput);

  });
}
// Exercice 10
function AddTable() {
  let row = document.getElementById('Row').value;
  
  for (let i = 1; i <= row; i++) {
      let addInput = document.createElement("input");
      addInput.type = "text";
      addInput.name = "unsorteddNumbers[]";
      addInput.size = 1;
      document.getElementById("Table").appendChild(addInput);
  }
  }
  //   chercher dans le Tableau

function filtered() {

  let inputValue = document.getElementById("search-value").value;
  let sortedValues = document.getElementsByName("unsorteddNumbers[]");
  let founded = false;
  sortedValues.forEach(function(element) {

  if(element.value == inputValue) {
  founded = true;

  }
  });

  if(founded) {
document.getElementById('rslt').innerHTML= `your search is found: ${inputValue} `
  } else {

document.getElementById('rslt').innerHTML= `the value  ${inputValue} not found`

  }

  
}