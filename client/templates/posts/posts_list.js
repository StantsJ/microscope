var postsData = [
  {
    title: 'Introducing Absolute Territory',
    url: 'www.absoluteterritory.net'
  },
  {
    title: 'Haru Haru',
    url: 'https://pbs.twimg.com/media/B4OXbPYCYAAbHSE.jpg:large'
  },
  {
    title: 'Cut Out',
    url: 'https://twitter.com/myakkomyako/status/540485949822468096/photo/1'
  }
];

Template.postsList.helpers({
  posts: postsData
});
