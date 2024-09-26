import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/outline";
import formatCurrency from "../../utils/formatCurrency";
function PurchaseCard({ product }) {
  const [count, setCount] = useState(1);

  const handleIncrementCount = () => {
    if (product.stok === null || product.stok === 0) {
      alert("Stok Habis")
    }
    if (count < product.stok) {
      setCount(count + 1);
    }
  };
  const handleDecrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (product.stok === null || product.stok === 0) {
      alert("Stok Habis")
    } else {
      alert("Produk ditambahkan ke keranjang")
    }
  };

  const handleBuyNow = () => {
    if (product.stok === null || product.stok === 0) {
      alert("Stok Habis");
    } else {
      alert("Lanjutkan proses pembelian")
    }
  };

  return (
    <>
      {product && (
        <div className="p-3 border rounded-lg shadow-md">
          <h2 className="text-base font-bold mb-4">Atur Pembelian</h2>
          <p className="text-md mb-4 font-medium line-clamp-3">{product.product_name}</p>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500 mb-2">Jumlah Pembelian</p>
              <div className="flex items-center">
                <button
                  onClick={handleDecrementCount}
                  className="border shadow-md hover:bg-gray-400 text-gray-800 font-bold p-2 rounded inline-flex items-center"
                >
                  <MinusIcon className="size-5" />
                </button>
                <span className="text-gray-900 font-bold mx-2">{count}</span>
                <button
                  onClick={handleIncrementCount}
                  className="border shadow-md hover:bg-gray-400 text-gray-800 font-bold p-2 rounded inline-flex items-center"
                >
                  <PlusIcon className="size-5" />
                </button>
                {product.stok === null || product.stok === 0 ? (
                  <p className="text-sm text-gray-700 ml-4">Stok: 0</p>
                ) : (
                  <p className="text-sm text-gray-700 ml-4">
                    Stok: {product.stok}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-1">Total Harga</h3>
            <p className="text-xl font-bold text-cyan-600">
              {formatCurrency(product.product_price * count)}
            </p>
            {/* <div className="mt-1 flex justify-between">
              <p className="text-sm text-gray-500">Rp7.900.901</p>
              <p className="text-sm text-gray-500">(inc. PPN)</p>
            </div> */}
          </div>
          <div className="flex items-center mb-4">
            <PencilIcon className="size-3 text-cyan-600 mr-1" />
            <p className="text-xs text-cyan-600 font-semibold">
              Catatan Untuk Penjual
            </p>
          </div>
          <div className="flex justify-between mb-3">
            <button className="py-2 w-1/2 mr-2 border border-cyan-600 text-cyan-600 text-sm font-medium rounded hover:bg-cyan-700 hover:text-white">
              Chat Penjual
            </button>
            <button
              onClick={handleAddToCart}
              className="py-2 w-1/2 flex items-center justify-center bg-cyan-600 text-white text-sm font-medium rounded hover:bg-cyan-700"
            >
              <PlusIcon className="size-4" />
              Keranjang
            </button>
          </div>
          <button
            onClick={handleBuyNow}
            className="py-2 w-full border border-cyan-600 text-cyan-600 text-sm font-medium rounded hover:bg-cyan-700 hover:text-white"
          >
            Beli Sekarang
          </button>
        </div>
      )}
    </>
  );
}

export default PurchaseCard;
