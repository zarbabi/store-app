const Product = ({ product, selectGroup }) => {
  return (
    <div  className="boxProduct">
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
    </div>
  );
};

export default Product;
