// Fixture data
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var booksscoreid1 = Posts.insert({
    title: 'Yaroslav Mudryy',
    userId: tom._id,
    author: tom.profile.name,
    url: '',
    submitted: now - 7 * 3600 * 1000
  });

  var booksscoreid2 = Posts.insert({
    title: 'Book-ye',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://book-ye.com.ua/shop/',
    submitted: now - 7 * 3600 * 1000
  });

  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Some bookshop #' + i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: now - i * 3600 * 1000,
      commentsCount: 0
    });
  }
}