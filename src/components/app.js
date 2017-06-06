angular.module('video-player', [])

.component('app', {
  
  controller: function() {
  //Create list of video objects and pass into scope
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
  //   console.log(this.videos);
  },

  templateUrl: 'src/templates/app.html'
});
