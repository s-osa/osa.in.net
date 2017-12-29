document.addEventListener('DOMContentLoaded', function() {
  var path = window.location.pathname;

  if (path.match(/\/$/)) {
    path = path.replace(/\/$/, '');
    history.replaceState(null, null, path);
  }
});