user = {
  firstName: 'Broly',
  lastName: 'the Legendary Super Saiyan',
  email: 'KAKAROT@FUCKKAKAROT.ORG',
  bio: 'We do not talk about Bio Broly'
}

post = {
  title: 'Welcome to Hell',
  content: 'I am a living nightnamre. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'images/' + 'broly.jpg'
}


var fullName = user.firstName + ' ' + user.lastName;

var x = document.getElementById('postTitle');
x.innerHTML = post['title'];

var y = document.getElementById('postContent');
y.innerHTML = post['content'];

var z = document.getElementById('postImage');
z.src = post['image'];

var x2 = document.getElementById('createdBy');
x2.innerHTML = 'Posted by ' + fullName;

var y2 = document.getElementById('pageTitle');
y2.innerHTML = user.firstName;

var divs = document.getElementsByTagName('div');

var pTags = document.getElementsByTagName('p');

// this is dom manipulation

for (var i = 0; i < divs.length; i++){
  divs[i].style.border = '3px solid red';
}

for (var i = 0; i < pTags.length; i++){
  pTags[i].style.border = '3px solid black';
}

var spoilerDiv = document.getElementById('spoiler-section');
//with a click !
// function revealSpoilers() {
//   spoilerDiv.style.backgroundColor = 'red';
//   spoilerDiv.style.color = 'black';
//
// }
//
// document.addEventListener('click', revealSpoilers);
//with a mouse over / mouseout
spoilerDiv.addEventListener('mouseover', function() {
  x = document.getElementById('spoiler-section');
  x.style.color = 'black';
  x.style.backgroundColor = 'white';
});

spoilerDiv.addEventListener('mouseout', function() {
  x = document.getElementById('spoiler-section');
  x.style.color = '#333';
  x.style.backgroundColor = '#000'
});
