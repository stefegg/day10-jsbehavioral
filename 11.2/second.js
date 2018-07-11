user = {
  username: 'stefegg',
  firstName: 'Stef',
  lastName: 'Egg',
  email: 'Stef@egg.org'
}

post = {
  title: 'Stef Rules',
  content: 'He is a really cool guy!',
  image: 'images/' + 'me.jpg'
}

var x = document.getElementById('postTitle');
x.innerHTML = post.title;

var y = document.getElementById('postContent');
y.innerHTML = post.content;

var z = document.getElementById('postImage');
z.src = post.image;

var x2 = document.getElementById('createdBy');
x2.innerHTML = 'Shared by ' + user.username;

var y2 = document.getElementById('pageTitle');
y2.innerHTML = user.firstName;
