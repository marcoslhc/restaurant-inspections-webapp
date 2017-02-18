const compose = (...fns) => (arg) => fns.reduceRight((composed, fn)=> fn(composed),arg);

export default {
    compose
};
