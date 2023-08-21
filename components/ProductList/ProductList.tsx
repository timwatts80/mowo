import { useProductList } from './useProductList';
import { Product } from '../Product/Product';

export function ProductList() {
  const { products } = useProductList();

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}