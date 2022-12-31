function goTo(route, script) {
  const rootElem = document.getElementById('root');
  fetch(`${__dirname}src/views/${route}`)
    .then((resp) => resp.text())
    .then((html) => {
      rootElem.innerHTML = html;
      if (script) {
        script();
      }
    });
}

export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.init();
  }

  init() {
    (function start(router) {
      window.addEventListener('hashchange', router.hasChanged.bind(router));
    }(this));
    this.hasChanged();
  }

  hasChanged() {
    const { hash } = window.location;
    if (hash.length) {
      for (let i = 0; i < this.routes.length; i += 1) {
        if (this.routes[i].isActive()) {
          goTo(this.routes[i].element, this.routes[i].script);
        }
      }
    } else {
      for (let i = 0; i < this.routes.length; i += 1) {
        if (this.routes[i].index) {
          goTo(this.routes[i].element, this.routes[i].script);
          window.location.hash = this.routes[i].name;
        }
      }
    }
  }
}
