export const compose = (...fns) => (arg) => fns.reduceRight((composed, fn)=> fn(composed),arg);
export const map     = (fn) => (target) => target && target.map ? target.map(fn) : [].map(fn);

export default {
    compose,
    map
};
