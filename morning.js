userOne = {
  name: 'Stephen',
  email: 'stephenegbert@gmail.com',
  bio: 'Stephen is a cool guy, with some cool shades.',
  postOne : {
    postone: 'Today I bought some cool shades!',
    postcaption: 'Check out my new glasses!'
  }
}


  for(x in userOne){
    var x = document.getElementById('outPut');
    x.innerHTML = 'Posted 7.9.18 @ 10:10 AM: ' + userOne.postOne.postone + '\nPosted By: ' + userOne.name;
  };




  for(x in userOne){
    document.getElementById('image').src="images/glasses.jpg"
    var x = document.getElementById('outPut3');
    x.innerHTML = 'Posted 7.14.18 @ 9:38 AM: ' + userOne.postOne.postcaption + '\nPosted By: ' + userOne.name;
  };
