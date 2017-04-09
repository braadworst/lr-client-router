module.exports = update => {

  // Event for back and forward through history
  window.onpopstate = function(request) {
    update({ matchValue : request.state.url }, request.state);
  };

  // Listen to all the elements on a page that have a relative path
  let links = [].slice.call(document.querySelectorAll('a'));
  // Add click events
  links
    .filter(link => link.getAttribute('href')[0] === '/')
    .forEach(link => {
      if (!link.hasAttribute('data-router-server')) {
        link.addEventListener('click', event => {
          event.preventDefault();
          const url = link.getAttribute('href');
          history.pushState({ url }, url, url);
          update({ matchValue : url }, { url });
        });
      }
    });

  return {
    redirect(url) {
      history.pushState({ url }, url, url);
      update({ matchValue : url }, { url });
    }
  };
}
