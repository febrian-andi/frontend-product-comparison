import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import ProductCard from "../components/product-list-modal/ProductCard";
import useGetData from "../hooks/useGetData";
import { useState } from "react";

function ProductListModal({ isOpenModal, toggleModal }) {
  if (!isOpenModal) return null;
  
  const [searchProduct, setSearchProduct] = useState("");
  const [url, setUrl] = useState(null);
  const { data, loading, error, refetch } = useGetData(url);

  const handleSearchChange = (event) => setSearchProduct(event.target.value);

  const handleSearchSubmit = () => {
    if (searchProduct.trim()) {
      setUrl(`${import.meta.env.VITE_API_URL}/search?product_name=${searchProduct}`);
      refetch();
    }
  };

  const handleProductClick = (product) => {
    const productList = JSON.parse(localStorage.getItem('product-list')) || [];
    if (productList.length < 3) {
      localStorage.setItem('product-list', JSON.stringify([...productList, product]));
      window.location.reload();
    } else {
      alert('Kolom perbandingan produk sudah penuh');
    }
  };

  const renderLoading = () => (
    <div className="flex justify-center items-center">
      <ArrowPathIcon className="w-10 h-10 animate-spin text-gray-500" />
      <p className="text-center my-auto ml-1">Loading data...</p>
    </div>
  );

  const renderError = () => (
    <div className="flex justify-center items-center">
      <p className="text-red-600">Error: {error.message}</p>
    </div>
  );

  const renderEmptyState = () => (
    <div className="flex justify-center items-center">
      <p className="text-gray-500">Silakan cari produk terlebih dahulu</p>
    </div>
  );

  const renderNoData = () => (
    <div className="flex justify-center items-center">
      <p>Data tidak ditemukan.</p>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl h-9/10 mx-4 p-4">
        <div className="flex justify-between mb-2">
          <h1 className="text-md font-semibold mb-2">Pilih Produk</h1>
          <XMarkIcon onClick={toggleModal} className="size-7 text-gray-700 cursor-pointer" />
        </div>
        <div className="sm:flex justify-between items-center mb-6">
          <div className="w-80 mb-3 sm:mb-0 mx-auto sm:mx-0 flex items-center">
            <input
              type="text"
              placeholder="Cari produk"
              value={searchProduct}
              onChange={handleSearchChange}
              className="w-full p-2 border rounded-l-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
            />
            <button
              onClick={handleSearchSubmit}
              className="p-2 bg-gray-300 text-white rounded-r-lg hover:bg-teal-700 focus:outline-none"
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

        {loading && renderLoading()}
        {/* {url && error && renderError()} */}
        {!url && renderEmptyState()}
        {data && data.length === 0 && renderNoData()}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-2 overflow-y-auto h-4/6 md:max-h-full justify-items-center">
          {data?.map((product) => (
            <ProductCard key={product.product_id} product={product}  onClick={() => handleProductClick(product)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListModal;