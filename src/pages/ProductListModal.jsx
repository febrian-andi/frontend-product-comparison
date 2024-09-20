import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ProductCard from "../components/ProductCard";

function ProductListModal({ isOpenModal, toggleModal }) {
  if (!isOpenModal) return null;

  const products = Array(20).fill(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl h-9/10 mx-4 p-4">
        <div className="flex justify-between mb-2">
          <h1 className="text-md font-semibold mb-2">Pilih Produk</h1>
          <XMarkIcon onClick={toggleModal} className="size-7 text-gray-700 cursor-pointer"/>
        </div>
        <div className="sm:flex justify-between items-center mb-6">
          <div className="relative w-80 mb-3 sm:mb-0 mx-auto sm:mx-0">
            <input
              type="text"
              placeholder="Cari produk, jasa, atau vendor"
              className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
            />
            <span className="absolute inset-y-0 left-3 flex items-center">
              <MagnifyingGlassIcon className="size-7 text-gray-500" />
            </span>
          </div>
          <div className="flex justify-center">
            <button className="text-gray-700">Urutkan</button>
            <select className="border ml-2 rounded-lg p-2">
              <option>Urutkan Berdasarkan</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-2 overflow-y-auto h-4/6 md:max-h-full justify-items-center">
          {products.map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListModal;
