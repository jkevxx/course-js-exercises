const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
  },
};

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1);

const productOrder = {
  customer: {
    name: 'Kevin',
  },
  deliveryDate: new Date(255),
  notes: new Set(['Message']),
};

const orderClone = structuredClone(productOrder);

productOrder.customer.name = 'Keitaro';
console.log('original', productOrder);

console.log('clone', orderClone);
