import { useEffect, useState } from "react";
import ProductTable from "../components/product-comparison/ProductTable";
import ProductListModal from "./ProductListModal";
import axios from "axios";

function ProductComparison() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [products, setProducts] = useState([]);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("product-list"));
    if (storedProducts) {
      const fetchProductDetails = async () => {
        try {
          const productDetailsPromises = storedProducts.map(product => 
            axios.get(`${import.meta.env.VITE_API_URL}/products/${product.product_id}`)
          );
          const results = await Promise.all(productDetailsPromises);
          const details = results.map(result => result.data);
          setProducts(details.filter(Boolean));
        } catch (err) {
          console.error(err);
        }
      };     

      fetchProductDetails();
    }
  }, []);

  const handleRemoveProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.product_id !== productId)
    );
  };
   
  return (
    <>
      <div>
        <nav className="text-gray-600 mb-4">
          <ol className="list-reset flex">
            <li className="text-xs md:text-sm">Beranda</li>
            <li><span className="mx-1">/</span></li>
            <li className="text-xs md:text-sm font-bold text-gray-600">Bandingkan Produk</li>
          </ol>
        </nav>
        <ProductTable products={products} toggleModal={toggleModal} onRemove={handleRemoveProduct}/>
      </div>
      <ProductListModal isOpenModal={isOpenModal} toggleModal={toggleModal}/>
    </>
  );
}

export default ProductComparison;
