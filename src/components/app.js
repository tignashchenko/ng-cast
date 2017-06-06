angular.module('video-player', [])

.component('app', {
  
  controller: function() {
  //Create list of video objects and pass into scope
    this.videos = window.exampleVideoData;
  //   console.log(this.videos);
  },

  templateUrl: 'src/templates/app.html'
});
