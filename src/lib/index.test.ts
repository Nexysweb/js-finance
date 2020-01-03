import * as Index from './index';

test('Index', () => {
  expect(typeof Index.Math).toEqual('object');
  expect(typeof Index.Timevalue).toEqual('object');
  expect(typeof Index.Bond).toEqual('object');
});
