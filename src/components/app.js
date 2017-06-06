angular.module('video-player')

.component('app', {
  
  controller: function(youTube) {
  //Create list of video objects and pass into scope
  //   console.log(this.videos);
    this.onClick = (index) => {
      this.video = this.videos[index];

    };

    this.searchResults = (data) => {
      this.video = data[0];
      this.videos = data;
    };

    this.search = (data) => {
      youTube.getData(data, (videos) => {
        this.searchResults(videos);
      });
    };
    // this.searchResults(window.exampleVideoData);
  },
  

  templateUrl: 'src/templates/app.html'
});

