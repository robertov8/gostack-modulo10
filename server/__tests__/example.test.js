function soma(a, b) {
  return a + b;
}

test('if i call soma function with 4 and 5 it should return 9', () => {
  const result = soma(4, 5);

  console.log(process.env.NODE_ENV);
  expect(result).toBe(9);
});
