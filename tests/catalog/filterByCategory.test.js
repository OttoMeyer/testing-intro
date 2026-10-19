const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredProduct = filterByCategory(products, 'all')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredProduct = filterByCategory(products, undefined)
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredProduct = filterByCategory(products, '')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const filteredProduct = filterByCategory(products, 'electronics')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const filteredProduct = filterByCategory(products, 'books')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const filteredProduct = filterByCategory(products, 'home')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const filteredProduct = filterByCategory(products, 'clothes')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const filteredProduct = filterByCategory(products, 'toys')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const filteredProduct = filterByCategory(products, 'sports')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([]);
  });
});
