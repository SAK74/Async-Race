export default class Route {
  constructor(name, script, index) {
    this.name = name;
    this.index = index;
    this.script = script;
  }

  isActive() {
    const { hash } = window.location;
    return hash.replace('#', '') === this.name;
  }
}
