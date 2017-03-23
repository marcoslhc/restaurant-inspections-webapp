const applyOverValue = functor => fn => (...args) => fn.apply(functor.join(), args);

function ClassList(classes = []) {
  this._classes = classes.filter((className) => typeof className === 'string');
}

ClassList.of = function(classes) {
  return new ClassList(classes);
};

ClassList.prototype.getString = function () {
  const join = Array.prototype.join.bind(this._classes);
  return applyOverValue(this)(join)(' ');
};

ClassList.prototype.map = function(fn) {
  return ClassList.of(this._classes.map(fn));
};

ClassList.prototype.filter = function(re) {
  const filter = Array.prototype.filter.bind(this._classes);
  const value = applyOverValue(this)(filter)((className) => re.test(className));

  return ClassList.of(value);
};

ClassList.prototype.mapFilter = function(re, fn) {
  return ClassList.of(this._classes).filter(re).map(fn);
};

ClassList.prototype.addClass = function(className) {
  const concat = Array.prototype.concat.bind(this._classes);
  const value = applyOverValue(this)(concat)([className]);

  return ClassList.of(value);
};

ClassList.prototype.join = function () {
  return this._classes;
};

ClassList.prototype.chain = function (fn) {
  return ClassList.of(this._classes).map(fn).join();
};

ClassList.prototype.concat = ClassList.prototype.addClass;

export default ClassList;
