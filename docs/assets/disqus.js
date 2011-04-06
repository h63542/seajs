/**
 * DISQUS module for seajs.com
 */

module.declare(function(require, exports, module) {

  exports.init = function() {

    // create thread element
    var thread = document.createElement('div');
    thread.id = 'disqus_thread';
    var content = document.getElementById('content');
    var copyright = document.getElementById('copyright');
    content.insertBefore(thread, copyright);

    // configuration variables
    window.disqus_shortname = 'seajs';
    window.disqus_developer = 0;
    window.disqus_identifier = location.pathname;
    window.disqus_url = location.protocol + '//' + location.pathname;

    // load it
    module.load('http://' + disqus_shortname + '.disqus.com/embed.js');

  };

});