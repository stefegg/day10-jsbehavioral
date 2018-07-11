user = {
  firstName: 'R2',
  lastName: 'D2',
  userName: 'Artoo Rules',
  email: 'r2@rebelalliance.org',
}

post = {
  title: 'Beep boop beep beep boop',
  content: 'Wooop woooop wooop beeop boop boop beeop',
  image: 'images/' + 'r2.jpg'
}

var x= document.getElementById('postTitle');
x.innerHTML = post.title;

var y= document.getElementById('postContent');
y.innerHTML = post.content;

var z = document.getElementById('postImage');
z.src = post.image;

var x2 = document.getElementById('createdBy');
x2.innerHTML = 'Created by ' + user.userName;
