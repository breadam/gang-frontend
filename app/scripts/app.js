(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    var navicon = document.getElementById('navicon');
    var drawerPanel = document.getElementById('drawerPanel');
    navicon.addEventListener('click', function() {
        drawerPanel.togglePanel();
    });
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
