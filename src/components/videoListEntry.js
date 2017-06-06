angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    onClick: '<',
    index: '<'
  },
  
  controller: function() {
    
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
