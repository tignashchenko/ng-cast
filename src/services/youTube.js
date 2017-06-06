angular.module('video-player')
.service('youTube', function($http) {

  this.getData = (searchQuery, callback) => {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: window.YOUTUBE_API_KEY,
        q: searchQuery,
        type: 'video',
        part: 'snippet',
        maxResults: 5,
        videoEmbeddable: 'true'
      }
    }).then(function successCallback(data) {
      // console.log(data.data.items);
      callback(data.data.items);
    }, function errorCallBack() {
      console.log('this didnt work');
    });    
  };
});
