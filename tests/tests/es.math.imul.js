QUnit.test('Math.imul', assert => {
  const { imul } = Math;
  assert.isFunction(imul);
  assert.name(imul, 'imul');
  assert.arity(imul, 2);
  assert.looksNative(imul);
  assert.nonEnumerable(Math, 'imul');
  assert.same(imul(0, 0), 0);
  assert.strictEqual(imul(123, 456), 56088);
  assert.strictEqual(imul(-123, 456), -56088);
  assert.strictEqual(imul(123, -456), -56088);
  assert.strictEqual(imul(19088743, 4275878552), 602016552);
  assert.same(imul(false, 7), 0);
  assert.same(imul(7, false), 0);
  assert.same(imul(false, false), 0);
  assert.strictEqual(imul(true, 7), 7);
  assert.strictEqual(imul(7, true), 7);
  assert.strictEqual(imul(true, true), 1);
  assert.same(imul(undefined, 7), 0);
  assert.same(imul(7, undefined), 0);
  assert.same(imul(undefined, undefined), 0);
  assert.same(imul('str', 7), 0);
  assert.same(imul(7, 'str'), 0);
  assert.same(imul({}, 7), 0);
  assert.same(imul(7, {}), 0);
  assert.same(imul([], 7), 0);
  assert.same(imul(7, []), 0);
  assert.strictEqual(imul(0xFFFFFFFF, 5), -5);
  assert.strictEqual(imul(0xFFFFFFFE, 5), -10);
  assert.strictEqual(imul(2, 4), 8);
  assert.strictEqual(imul(-1, 8), -8);
  assert.strictEqual(imul(-2, -2), 4);
  assert.same(imul(-0, 7), 0);
  assert.same(imul(7, -0), 0);
  assert.same(imul(0.1, 7), 0);
  assert.same(imul(7, 0.1), 0);
  assert.same(imul(0.9, 7), 0);
  assert.same(imul(7, 0.9), 0);
  assert.strictEqual(imul(1.1, 7), 7);
  assert.strictEqual(imul(7, 1.1), 7);
  assert.strictEqual(imul(1.9, 7), 7);
  assert.strictEqual(imul(7, 1.9), 7);
});
