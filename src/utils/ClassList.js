import {compose} from 'ramda';
import {filterReducer, mapReducer} from './';

function ClassList(fn) {
  this.getClasses = fn;
}

ClassList.of = function (classes) {
  return new ClassList(() => {
    const justStrings = (className) => typeof className === 'string';

    return classes.constructor === ClassList ? classes
            : classes.constructor === Array ? classes.filter(justStrings)
            : [];
  });
};

ClassList.prototype.toString = function() {
  return `ClassList(${this.getClasses().toString()})`;
};

ClassList.prototype.inspect = function () {
  return this.toString();
};

ClassList.isInstance = function(instance) {
  return instance && instance instanceof ClassList;
};

ClassList.prototype.map = function(fn) {
  return ClassList.of(fn(this.getClasses()));
};

ClassList.prototype.reduce = function(fn, initial) {
  return this.isNothing() ? ClassList.of()
         : ClassList.of(this.getClasses().reduce(fn, initial));
};

ClassList.prototype.filter = function (predicate){
  const reducer = (fn) => (newList, currentClass) => {
    if (fn(currentClass)) newList.push(currentClass);
    return newList;
  };

  return this.isNoting() ? ClassList.of()
         : ClassList.of(this.getClasses()).reduce(reducer(predicate), []);
};

ClassList.prototype.filterMap = function(predicate, fn) {
  const reducer = compose(filterReducer(predicate), mapReducer(fn));
  return ClassList.of(this.getClasses()).reduce(reducer, []);
};

ClassList.prototype.filterReduce = function (predicate, fn) {
  const reducer = filterReducer(predicate);
  return ClassList.of(this.getClasses()).reduce(reducer, []);
};

ClassList.prototype.concat = function(otherClassList) {

  return this.isNothing() ? ClassList.of()
         : ClassList.of(this.getClasses().concat(otherClassList.getClasses()));

};

ClassList.prototype.join = function () {
  return new ClassList(() => this.getClasses().getClasses());
};

ClassList.prototype.chain = function (fn) {
  return ClassList.of(this.getClasses()).map(fn).join();
};

ClassList.prototype.ap = function (other) {
  return other.map(this.getClasses.bind(this));
};

ClassList.prototype.isNothing = function () {
  return this.getClasses() === undefined ||
         this.getClasses() === null ||
         this.getClasses().length === 0;
};

ClassList.prototype.getString = function () {
  return this.getClasses().join(' ');
};

ClassList.prototype.removeClass = function(className) {
  const predicate = (currentCls) => currentCls !== className;

  return ClassList.of(this.getClasses()).reduce(filterReducer(predicate), []);
};

ClassList.prototype.toggleClass = function (className) {
  return this.getClasses().includes(className) ? ClassList.of(this.getClasses()).removeClass(className)
         : ClassList.of(this.getClasses()).addClass(className);
};

ClassList.prototype.addClass = function (additionalClass) {
  const classesToAdd = Array.isArray(additionalClass) ? additionalClass
                       : [additionalClass];

  return ClassList.of(this.getClasses()).concat(ClassList.of(classesToAdd));
};

export default ClassList;
