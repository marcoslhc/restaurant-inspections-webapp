import {compose, pipe} from 'ramda';


export function isObject(target) { return typeof target === 'object' && !Array.isArray(target); }

export function map(fn) {
  return function (target) {
    return Array.isArray(target) ? target.map(fn)
            : isObject(target) ? Object.keys(target).map((key) => fn(key, target[key]))
            : [].map(fn);
  };
}

// Mixed a ~> a, a, a => (a) => a
export function toggleValue(option1, option2, initial) {
  return function (value) {
    return value === option1 ? option2
            : value === option2 ? option1
            : initial;
  };
}

// String a ~> (a, b) => a
function jointParam(key, value) {
  return [ encodeURIComponent(key), encodeURIComponent(value) ].join('=');
}

// Array a, String b ~> (a) => b
function jointQS(kv){
  return kv.join('&');
}

// Object a, String b ~> (a) => b
export function serializeQS(obj) {
  return '?'.concat(pipe(map(jointParam), jointQS)(obj));
}

// Number a, String b ~> (a) => b
export function formatDate(date) {
  return (new Date(date)).toISOString().split('T')[0];
}

export function mapReducer(fn) {
  return function (list, value) {
    return list.concat(fn(value));
  };
}
export function filterReducer(predicate) {
  return function (list, value) {
    if (predicate(value)) return list.concat(value); else return list;
  };
}

export default {
    compose,
    map,
    toggleValue,
    serializeQS,
    formatDate
};
