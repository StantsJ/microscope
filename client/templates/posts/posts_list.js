Template.postsList.helpers({
  posts: function() {
    return Posts.find({flagged: false});
  }
});
