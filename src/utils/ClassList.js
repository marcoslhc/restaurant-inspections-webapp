const applyOverValue = functor => fn => (...args) => fn.apply(functor.join(), args);

function ClassList(classes = []) {
  this._classes = classes && classes.length > 0 ? classes.filter((className) => typeof className === 'string')
                  : null;

  return this;
}

ClassList.of = function(classes) {
  return new ClassList(classes);
};

ClassList.prototype.getString = function () {
  const join = Array.prototype.join.bind(this._classes);

  return this.isNothing() ? ''
         : applyOverValue(this)(join)(' ');
};

ClassList.prototype.map = function(fn) {
  return this.isNothing() ? ClassList.of()
         : ClassList.of(this._classes.map(fn));
};

ClassList.prototype.filter = function(re) {
  const filter = Array.prototype.filter.bind(this._classes);
  const value = this.isNothing() ? []
                : applyOverValue(this)(filter)((className) => re.test(className));

  return ClassList.of(value);
};

ClassList.prototype.mapFilter = function(re, fn) {
  return ClassList.of(this._classes).filter(re).map(fn);
};

ClassList.prototype.addClass = function(additionalClass) {
  const concat = Array.prototype.concat.bind(this._classes);
  const classesToAdd = additionalClass instanceof ClassList ? additionalClass.join()
                       : Array.isArray(additionalClass) ? additionalClass
                       : [additionalClass];

  const value = this.isNothing() ? []
                : applyOverValue(this)(concat)(classesToAdd);

  return ClassList.of(value);
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

ClassList.prototype.concat = ClassList.prototype.addClass;

const defaultClass = deftClass => cl => !cl.isNothing() ? cl
                                        : Array.isArray(deftClass) ? ClassList.of(deftClass)
                                        : ClassList.of([deftClass]);

const initialClass = initClass => cl => ClassList.of(initClass).concat(cl);

export { defaultClass, initialClass };

export default ClassList;
