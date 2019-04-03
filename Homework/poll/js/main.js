function poll() {
  var human = {};

human.name = prompt ('What is your name?','');
human.lastName = prompt ('What is your last name?','');
human.age = parseInt (prompt('Your age?',''));
human.gender = prompt ('Your gender?','');
human.height = parseInt (prompt('Your height?Cm',''));
human.weight = parseInt (prompt('Your weight?Kg',''));
human.married = confirm ('Are you married?');
human.haveChildren = confirm ('Do you have any children?');

if (human.haveChildren) {
  human.childrenNames = [];

  human.amountOfChildren = parseInt (prompt ('How many kids do you have?',''));
    
  if (human.amountOfChildren === 1) {
    human.childrenNames.push(prompt("Enter your child's name",""));
  } else {
      for (var i = 0; i < human.amountOfChildren; i++) {
        
        if (i === 0) {
          human.childrenNames.push(prompt("Enter your child's name",""));
        } else {
          human.childrenNames.push(prompt("Enter your next child's name",""));
        }
      }
  }  
}

var humanName = document.getElementById('human-name');
humanName.innerText += ' ' + human.name;
var humanLastName = document.getElementById('human-last-name');
humanLastName.innerText += ' ' + human.lastName;
var humanAge = document.getElementById('human-age');
humanAge.innerText += ' ' + human.age;
var humanGender = document.getElementById('human-gender');
humanGender.innerText += ' ' + human.gender;
var humanHeight = document.getElementById('human-height');
humanHeight.innerText += ' ' + human.height;
var humanWeight = document.getElementById('human-weight');
humanWeight.innerText += ' ' + human.weight;
var humanMarried = document.getElementById('human-married');
if (human.married) {
  humanMarried.innerText += ' Yes';
} else {
  humanMarried.innerText += ' No';
}
var humanHaveChildren = document.getElementById('human-have-children');
if (human.haveChildren) {
  humanHaveChildren.innerText += ' Yes';
} else {
  humanHaveChildren.innerText += ' No';
}
var humanChildrenNames = document.getElementById('human-children-names');
humanChildrenNames.innerText += ' ' + human.childrenNames;
var divPoll = document.getElementById('poll');
divPoll.style.display = 'block';
}
