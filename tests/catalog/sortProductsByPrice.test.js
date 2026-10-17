const products = require('../../src/data/products');
const { sortProductsByPrice, getProductById } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  //test.todo("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]");
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const sortedProducts = sortProductsByPrice(products, 'asc')
    const ids = sortedProducts.map((product) => product.id);
    expect(ids).toEqual([3, 6, 5, 4, 2, 1]);
  });
  //test.todo('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]');
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const sortedProducts = sortProductsByPrice(products)
    const ids = sortedProducts.map((product) => product.id);
    expect(ids).toEqual([3, 6, 5, 4, 2, 1]);
  });
  //test.todo("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]");
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const mask = [1, 3, 4];
    const someProducts = [];
    mask.forEach(element => {
      someProducts.push(getProductById(products, element));
    });
    const sortedProducts = sortProductsByPrice(someProducts, 'asc')
    const ids = sortedProducts.map((product) => product.id);
    expect(ids).toEqual([3, 4, 1]);
  });
  //test.todo("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]");
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const sortedProducts = sortProductsByPrice(products, 'desc')
    const ids = sortedProducts.map((product) => product.id);
    expect(ids).toEqual([1, 2, 4, 5, 6, 3]);
  });
  //test.todo("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]");
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const mask = [3, 1, 4];
    const someProducts = [];
    mask.forEach(element => {
      someProducts.push(getProductById(products, element));
    });
    const sortedProducts = sortProductsByPrice(someProducts, 'desc')
    const ids = sortedProducts.map((product) => product.id);
    expect(ids).toEqual([1, 4, 3]);
  });
  //test.todo("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]");
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const mask = [5, 2, 6];
    const someProducts = [];
    mask.forEach(element => {
      someProducts.push(getProductById(products, element));
    });
    const sortedProducts = sortProductsByPrice(someProducts, 'desc')
    const ids = sortedProducts.map((product) => product.id);
    expect(ids).toEqual([2, 5, 6]);
  });
  //test.todo("'asc' не меняет исходный массив [1, 3, 4]");
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const mask = [1, 3, 4];
    const someProducts = [];
    mask.forEach(element => {
      someProducts.push(getProductById(products, element));
    });
    const copyArray = [...someProducts];
    sortProductsByPrice(someProducts, 'asc');
    expect(someProducts).toEqual(copyArray);
  });
  //test.todo("'desc' не меняет исходный массив [1, 3, 4]");
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const mask = [1, 3, 4];
    const someProducts = [];
    mask.forEach(element => {
      someProducts.push(getProductById(products, element));
    });
    const copyArray = [...someProducts];
    sortProductsByPrice(someProducts, 'desc');
    expect(someProducts).toEqual(copyArray);
  });
  //test.todo('направление по умолчанию не меняет исходный массив всех товаров');
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const mask = [1, 3, 4];
    const someProducts = [];
    mask.forEach(element => {
      someProducts.push(getProductById(products, element));
    });
    const copyArray = [...someProducts];
    sortProductsByPrice(someProducts);
    expect(someProducts).toEqual(copyArray);
  });
});
