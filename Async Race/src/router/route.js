export default class Route {
  constructor(name, element, script, index) {
    this.name = name;
    this.element = element;
    this.index = index;
    this.script = script;
  }

  isActive() {
    const { hash } = window.location;
    return hash.replace('#', '') === this.name;
  }
}
