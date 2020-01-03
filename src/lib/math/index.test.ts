import * as Index from './index';

test('Index', () => {
  expect(typeof Index.Series).toEqual('object');
  expect(typeof Index.Zeros).toEqual('object');
  expect(typeof Index.Misc).toEqual('object');
});