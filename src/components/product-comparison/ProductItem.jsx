import { TrashIcon } from "@heroicons/react/24/outline";

function ProductItem({ product, onRemove }) {
  const handleRemove = () => {
    const storedProducts = JSON.parse(localStorage.getItem("product-list")) || [];
    if (storedProducts.length > 0) {
      const updatedProducts = storedProducts.filter(
        (item) => item.product_id !== product.product_id
      );
      localStorage.setItem("product-list", JSON.stringify(updatedProducts));
      
      onRemove(product.product_id);
    }
  };

  return (
    <td className="border px-4 py-2">
      <div className="flex flex-col items-center">
        <img
          src={product.image_srcset}
          alt={product.product_name}
          className="w-32 h-32 object-cover"
        />
        <h2 className="font-semibold text-center mt-2 h-24 w-64 line-clamp-4">
          {product.product_name}
        </h2>
        <div className="flex justify-center items-center mt-4 mb-2">
          <div className="flex items-center">
            <button>
              <TrashIcon onClick={handleRemove} className="size-7 text-gray-400 hover:text-red-500" />
            </button>
            <button className="border border-cyan-600 rounded-md p-1 w-48 ms-2 text-cyan-500 font-medium text-center hover:bg-cyan-600 hover:text-white">
              <p className="text-sm">+keranjang</p>
            </button>
          </div>
        </div>
      </div>
    </td>
  );
}

export default ProductItem;
