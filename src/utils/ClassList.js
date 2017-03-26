function ClassList(classes = []) {
  const justStrings = (className) => typeof className === 'string';
  this._classes = classes instanceof ClassList ? classes.join()
                  : classes && classes.length > 0 ? classes.filter(justStrings)
                  : [];
}

ClassList.of = function (classes = []) {
  return new ClassList(classes);
};

ClassList.isInstance = function(instance) {
  return instance && (instance instanceof ClassList || instance.constructor === ClassList);
};

ClassList.prototype.map = function(fn) {
  return ClassList.of(this.classes.map(fn));
};

ClassList.prototype.reduce = function(fn, initial) {
  return this.isNothing() ? ClassList.of()
         : ClassList.of([this._classes.reduce(fn, initial)]);
};

ClassList.prototype.filter = function (predicate){
  const reducer = (fn) => (newList, currentClass) => {
    if (fn(currentClass)) newList.push(currentClass);
    return newList;
  };

  return this.isNoting() ? ClassList.of()
         : ClassList.of(this._classes).reduce(reducer(predicate), []);
};

ClassList.prototype.mapFilter = function(predicate, fn) {
  return ClassList.of(this._classes).filter(predicate).map(fn);
};

ClassList.prototype.filterReduce = function (predicate, fn) {
  return ClassList.of(this._classes).filter(predicate).reduce(fn);
};

ClassList.prototype.concat = function(otherClassList) {

  return this.isNothing() ? ClassList.of()
         : ClassList.of(this._classes.concat(otherClassList.join()));

};

ClassList.prototype.join = function () {
  return this._classes;
};

ClassList.prototype.chain = function (fn) {
  return ClassList.of(this._classes).map(fn).join();
};

ClassList.prototype.isNothing = function () {
  return this._classes === undefined ||
         this._classes === null ||
         this._classes.length === 0;
};

ClassList.prototype.getString = function () {
  const reduceFn = (str, nextClass) => str.concat(' ').concat(nextClass);
  const initialValue = '';
  return ClassList.of(this._classes).reduce(reduceFn, initialValue).join();
};

ClassList.prototype.removeClass = function(className) {
  const predicate = (currentCls) => currentCls !== className;

  return ClassList.of(this._classes).filter(predicate);
};

ClassList.prototype.toggleClass = function (className) {
  const predicate = (currentCls) => currentCls === className;

  return ClassList.of(this.__classes).filter(predicate) > 1 ? ClassList.of(this.__classes).removeClass(className)
         : ClassList.of(this.__classes).addClass(className);
};

ClassList.prototype.addClass = function (additionalClass) {
  const classesToAdd = Array.isArray(additionalClass) ? additionalClass
                       : [additionalClass];

  return ClassList.of(this._classes).concat(classesToAdd);
};

const defaultClass = deftClass => cl => ClassList.isInstance(cl) && !cl.isNothing() ? cl
                                        : Array.isArray(deftClass) ? ClassList.of(deftClass)
                                        : ClassList.of([deftClass]);

const initialClass = initClass => cl => defaultClass(initClass)(null).addClass(cl);

export { defaultClass, initialClass };

export default ClassList;
