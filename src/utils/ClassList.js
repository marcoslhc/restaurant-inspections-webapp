function ClassList(classes = []) {
  this._classes = classes.filter((className) => typeof className === 'string');
}

ClassList.of = function(classes) {
  return new ClassList(classes);
};

ClassList.prototype.getString = function() {
  return this._classes.join(' ');
};

ClassList.prototype.map = function(fn) {
  return ClassList.of(this._classes.map(fn));
};

ClassList.prototype.filter = function(re) {
  return ClassList.of(this._classes.filter((className) => re.test(className)));
};

ClassList.prototype.mapFilter = function(re, fn) {
  return ClassList.of(this._classes).filter(re).map(fn);
};

ClassList.prototype.addClass = function(className) {
  return ClassList.of(this._classes.concat([className]));
};

export default ClassList;
