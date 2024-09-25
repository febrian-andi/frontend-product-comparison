import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import ProductCard from "../components/product-list-modal/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductListModal({ isOpenModal, toggleModal }) {
  if (!isOpenModal) return null;

  const [inputProductName, setInputProductName] = useState("");
  const [searchProduct, setSearchProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState(10);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (event) => {
    setInputProductName(event.target.value);
  };

  const productList = JSON.parse(localStorage.getItem("product-list")) || [];

  const handleSearchSubmit = async () => {
    if (inputProductName.trim()) {
      setSearchProduct(inputProductName.trim());
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/search?product_name=${inputProductName}`
        );
        // console.log(response.data);
        let data = response.data;
        if (typeof data === "string") {
          try {
            data = JSON.parse(data.replace(/NaN/g, "null"));
            console.log(typeof data);
            setError("");
          } catch (parseError) {
            // console.error("Gagal mengurai data JSON:", parseError);
            setError("Data tidak valid.");
            setIsLoading(false);
            return;
          }
        }
        setProducts(data);
        setError("");
        setProductsToShow(20);
      } catch (error) {
        // console.log(error.response.data.message);
        setProducts([]);
        if (
          error.response?.data?.message ===
          "No products found matching the search term."
        ) {
          setError("Tidak ada produk yang cocok dengan kata kunci pencarian");
        } else {
          setError(error.response?.data?.message || "Terjadi Kesalahan");
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      setIsLoading(true);
      try {
        if (!searchProduct && productList.length > 0) {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/product_similarity/${
              productList[0].product_id
            }`
          );
          console.log(response.data);
          setProducts(response.data);
        } else if (!searchProduct && productList.length === 0) {
          setProducts([]);
        }
      } catch (error) {
        // console.log(error);
        setError(error.response?.data?.message || "Terjadi Kesalahan");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSimilarProducts();
  }, [productList[0]?.product_id]);

  const loadMoreProducts = () => {
    setProductsToShow((prev) => prev + 20);
  };

  const handleProductClick = (product) => {
    console.log(productList.length);
    if (productList.length >= 3) {
      toast.warn("Kolom perbandingan produk sudah penuh", {
        position: "top-center",
      });
      return;
    }
    const isDuplicate = productList.some(
      (item) => item.product_id === product.product_id
    );
    if (isDuplicate) {
      toast.warn("Produk sudah ada di kolom perbandingan", {
        position: "top-center",
      });
      return;
    }
    const updatedProductList = [...productList, product];
    localStorage.setItem("product-list", JSON.stringify(updatedProductList));
    window.location.reload();
  };

  const renderLoading = () => (
    <div className="flex justify-center items-center">
      <ArrowPathIcon className="w-10 h-10 animate-spin text-gray-500" />
      <p className="text-center my-auto ml-1">Memuat data...</p>
    </div>
  );

  const renderError = () => (
    <div className="flex justify-center items-center">
      <p className="text-gray-500">{error}</p>
    </div>
  );

  const renderEmptyState = () => (
    <div className="flex justify-center items-center">
      <p className="text-gray-500">Silakan cari produk terlebih dahulu</p>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl h-9/10 mx-4 p-4">
          <div className="flex justify-between mb-2">
            <h1 className="text-md font-semibold mb-2">Pilih Produk</h1>
            <XMarkIcon
              onClick={toggleModal}
              className="size-7 text-gray-700 cursor-pointer"
            />
          </div>
          <div className="sm:flex justify-between items-center mb-6">
            <div className="w-80 mb-3 sm:mb-0 mx-auto sm:mx-0 flex items-center">
              <input
                type="text"
                placeholder="Cari produk"
                value={inputProductName}
                onChange={handleSearchChange}
                className="w-full p-2 border rounded-l-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
                required
              />
              <button
                onClick={handleSearchSubmit}
                className={`p-2 text-white rounded-r-lg focus:outline-none ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-teal-500 hover:bg-teal-700"
                }`}
                disabled={isLoading}
              >
                <span className="flex items-center">
                  <MagnifyingGlassIcon className="size-7 text-white" />
                </span>
              </button>
            </div>
            {/* <div className="flex justify-center">
            <button className="text-gray-700">Urutkan</button>
            <select className="border ml-2 rounded-lg p-2">
              <option>Urutkan Berdasarkan</option>
            </select>
          </div> */}
          </div>

          {isLoading && renderLoading()}
          {inputProductName && error && renderError()}
          {products.length < 1 &&
            !error &&
            !searchProduct &&
            renderEmptyState()}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-2 overflow-y-auto h-4/6 md:max-h-full justify-items-center">
            {!isLoading &&
              products
                ?.slice(0, productsToShow)
                .map((product) => (
                  <ProductCard
                    key={product.product_id}
                    product={product}
                    onClick={() => handleProductClick(product)}
                  />
                ))}
          </div>
          {!isLoading && products?.length > 0 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={loadMoreProducts}
                className={`text-white font-medium p-1 px-2 rounded-2xl ${
                  productsToShow >= products.length
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-teal-500 hover:bg-teal-700"
                }`}
                disabled={productsToShow >= products.length}
              >
                {productsToShow >= products.length
                  ? "Tidak Ada Data Lagi"
                  : "Tampilkan Lebih Banyak"}
              </button>
            </div>
          )}
        </div>
      </div>
      <ToastContainer autoClose={2700}/>
    </>
  );
}

export default ProductListModal;
