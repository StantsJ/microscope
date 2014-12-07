if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Absolute Territory',
    url: 'www.absoluteterritory.net'
  });

  Posts.insert({
    title: 'Haru Haru',
    url: 'https://pbs.twimg.com/media/B4OXbPYCYAAbHSE.jpg:large'
  });
  
  Posts.insert({
    title: 'Cut Out',
    url: 'https://twitter.com/myakkomyako/status/540485949822468096/photo/1'
  });
}
