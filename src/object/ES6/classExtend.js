class Base {
    constructor () {
        this.handles = {};
    }
    on(name, fn) {
        this.handles[name] = fn.bind(this);
    }
    trigger(name, params) {
        if (!this.handles[name]) return;
        this.handles[name](params);
    }
}
module.exports = Base