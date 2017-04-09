module.exports = update => {

  document.addEventListener('click', event => {
    if (event.target.nodeName.toLowerCase() === 'a' && event.target.pathname[0] === '/') {
      event.preventDefault();
      const url = event.target.pathname;
      history.pushState({ url }, url, url);
      update({ matchValue : url }, { url });
    }
  });

  // Event for back and forward through history
  window.onpopstate = function(request) {
    update({ matchValue : request.state.url }, request.state);
  };

  return {
    redirect(url) {
      history.pushState({ url }, url, url);
      update({ matchValue : url }, { url });
    }
  };
}
