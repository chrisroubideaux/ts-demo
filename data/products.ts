
type Products = {
  id: number;
  name: string;
  title: string;
};

const products: Products[] = [ // Fix: Change the type to an array of Products objects
  {
    id: 1,
    name: "Product 1",
    title: "test 1",
  },
  {
    id: 2,
    name: "Product 2",
    title: "test 2",
  },
  {
    id: 3,
    name: "Product 3",
    title: "test 3",
  },
];

export default products;
