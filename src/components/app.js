angular.module('video-player')

.component('app', {
  
  controller: function() {
  //Create list of video objects and pass into scope
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
  //   console.log(this.videos);
    this.onClick = (index) => {
      this.video = this.videos[index];

    };

    this.searchResults = (data) => {
      // this.video = this.data[0];
      // this.videos = this.data;
      // console.log(this.service);
      console.log(data);
    };
  },

  

  templateUrl: 'src/templates/app.html'
});

