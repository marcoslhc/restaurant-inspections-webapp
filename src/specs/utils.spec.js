import utils from '../utils';

test('it should exist', () => {
    expect(utils).toBeDefined();
});

test('compose should compose the function', () => {
    const f1 = (n) => (x) => x + n;
    const f2 = (n) => (x) => x * n;

    let f3;

    f3 = utils.compose(f1(2), f2(2));

    expect(f3(1)).toBe(4);

    f3 = utils.compose(f2(2), f1(2));

    expect(f3(1)).toBe(6);
})
