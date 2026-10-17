const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  //test.todo("'Наушники' возвращает товар с ID 1");
  test("'Наушники' возвращает товар с ID 1", () => {
    const filteredProduct = searchProducts(products, 'Наушники')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([1]);
  });
  //test.todo("'Чистый код' возвращает товар с ID 6");
  test("'Чистый код' возвращает товар с ID 6", () => {
    const filteredProduct = searchProducts(products, 'Чистый код')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([6]);
  });
  //test.todo("'Настольная лампа' возвращает товар с ID 4");
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const filteredProduct = searchProducts(products, 'Настольная лампа')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([4]);
  });
  //test.todo("'javascript' возвращает товар с ID 3");
  test("'javascript' возвращает товар с ID 3", () => {
    const filteredProduct = searchProducts(products, 'javascript')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([3]);
  });
  //test.todo("'ЧЕХОЛ' возвращает товар с ID 5");
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const filteredProduct = searchProducts(products, 'ЧЕХОЛ')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([5]);
  });
  //test.todo("'наушники' возвращает товар с ID 1");
  test("'наушники' возвращает товар с ID 1", () => {
    const filteredProduct = searchProducts(products, 'наушники')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([1]);
  });
  //test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredProduct = searchProducts(products, '')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });
  //test.todo("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredProduct = searchProducts(products, ' ')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });
  //test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredProduct = searchProducts(products, '\t\n')
    const ids = filteredProduct.map((product) => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
