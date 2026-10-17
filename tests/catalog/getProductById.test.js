const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  //test.todo('ID 1 возвращает products[0]');
  test('ID 1 возвращает products[0]', () => {
    const product = getProductById(products, 1);
    expect(product).toEqual(products[0]);
  });
  //test.todo('ID 4 возвращает products[3]');
  test('ID 4 возвращает products[3]', () => {
    const product = getProductById(products, 4);
    expect(product).toEqual(products[3]);
  });
  //test.todo('ID 6 возвращает products[5]');
  test('ID 6 возвращает products[5]', () => {
    const product = getProductById(products, 6);
    expect(product).toEqual(products[5]);
  });
  //test.todo('ID 0 возвращает null');
  test('ID 0 возвращает null', () => {
    const product = getProductById(products, 0);
    expect(product).toBeNull();
  });
  //test.todo('ID 999 возвращает null');
  test('ID 999 возвращает null', () => {
    const product = getProductById(products, 999);
    expect(product).toBeNull();
  });
  //test.todo('ID -1 возвращает null');
  test('ID -1 возвращает null', () => {
    const product = getProductById(products, -1);
    expect(product).toBeNull();
  });
  //test.todo("строковый ID '1' возвращает null");
  test("строковый ID '1' возвращает null", () => {
    const product = getProductById(products, '1');
    expect(product).toBeNull();
  });
  //test.todo('ID undefined возвращает null');
  test('ID undefined возвращает null', () => {
    const product = getProductById(products, );
    expect(product).toBeNull();
  });
  //test.todo('ID NaN возвращает null');
  test('ID NaN возвращает null', () => {
    const product = getProductById(products, NaN);
    expect(product).toBeNull();
  });
});
