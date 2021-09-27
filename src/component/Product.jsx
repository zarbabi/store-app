const Product = ({ product, selectGroup }) => {
  return (
    <ul>
      {product
        .filter((product) => product.groupName === selectGroup)
        .map((p) => (
          <div key={p.id}>
            <li key={p.id}>
              {p.productName} - {p.groupName}
            </li>
          </div>
        ))}
    </ul>
  );
};

export default Product;
