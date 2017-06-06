angular.module('video-player')
.service('youTube', function($http) {

  this.getData = (searchQuery, callback) => {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: window.YOUTUBE_API_KEY,
        q: searchQuery,
        type: 'video',
        part: 'snippet',
        maxResults: 5,
        videoEmbeddable: 'true'
      }
    }).then(function successCallback() {
      console.log('this workedd');
      callback();
    }, function errorCallBack() {
      console.log('this didnt work');
    });    
  };
});
