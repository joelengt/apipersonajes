const sum = require('./suma');


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 5 to equal ˆ', () => {
    expect(sum(1, 5)).toBe(6);
});

test('adds 1 + 1 to be 2', () => {
    expect(sum(1, 1)).toBe(2);
});