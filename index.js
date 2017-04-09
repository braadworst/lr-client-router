module.exports = update => {

  document.addEventListener('click', event => {
    if (event.target.nodeName.toLowerCase() === 'a' &&
        event.target.getAttribute('href') &&
        event.target.getAttribute('href')[0] === '/') {
      event.preventDefault();
      const url = event.target.getAttribute('href');
      history.pushState({ url }, url, url);
      update({ matchValue : url }, { url });
    }
  });

  // Event for back and forward through history
  window.onpopstate = function(request) {
    if (request && request.state && request.state.url) {
      update({ matchValue : request.state.url }, request.state);
    }
  };

  return {
    redirect(url) {
      history.pushState({ url }, url, url);
      update({ matchValue : url }, { url });
    }
  };
}
