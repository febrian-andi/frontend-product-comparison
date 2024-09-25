import formatCurrency from "../../utils/formatCurrency";
import formattedDescription from "../../utils/formattedDescription";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

function ProductTable({ products, toggleModal, onRemove }) {
  return (
    <>
      <div className="overflow-x-auto border border-gray-200 rounded-2xl max-w-screen-sm sm:max-w-full">
        <table className="min-w-full table-auto">
          <tbody>
            <tr className="h-48">
              <td className="relative px-4 py-2">
                <div className="absolute top-0 left-0">
                  <h1 className="text-xl font-bold p-4">
                    Bandingkan <br /> Produk
                  </h1>
                </div>
              </td>
              {products.map((product) => (
                <ProductItem
                  key={product.product_id}
                  product={product}
                  onRemove={onRemove}
                />
              ))}
              {products.length < 3 && (
                <td className="border px-4 py-2">
                  <div className="flex justify-center">
                    <button
                      onClick={toggleModal}
                      className="text-xs border border-cyan-600 text-cyan-500 py-2 px-4 rounded-md font-medium hover:bg-cyan-600 hover:text-white"
                    >
                      Cari Produk
                    </button>
                  </div>
                </td>
              )}
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 text-left font-medium">Harga</td>
              {products.map((product, index) => (
                <td key={index} className="border px-4 py-2 text-center">
                  {formatCurrency(product.product_price)}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left font-medium">Dikirim dari</td>
              {products.map((product, index) => (
                <td key={index} className="border px-4 py-2 text-center">
                  {product.dikirim_dari}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 text-left font-medium">Rating</td>
              {products.map((product, index) => (
                <td key={index} className="border px-4 py-2 text-center">
                  {product.rating ? `${product.rating}/10` : "-"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left font-medium">Terjual</td>
              {products.map((product, index) => (
                <td key={index} className="border px-4 py-2 text-center">
                  {product.jumlah_terjual} Produk
                </td>
              ))}
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 text-left font-medium">Stok</td>
              {products.map((product, index) => (
                <td key={index} className="border px-4 py-2 text-center">
                  {product.stok !== null ? product.stok : "-"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left font-medium">Kategori</td>
              {products.map((product, index) => (
                <td key={index} className="border px-4 py-2 text-center">
                  {product.kategori !== null ? product.kategori : "-"}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 text-left font-medium">Dimensi Ukuran</td>
              {products.map((product, index) => (
                <td key={index} className="border px-4 py-2 text-center">
                  {product.dimensi_ukuran !== null
                    ? `${product.dimensi_ukuran}`
                    : "-"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left font-medium">Min Pembelian</td>
              {products.map((product, index) => (
                <td key={index} className="border px-4 py-2 text-center">
                  {product.min_pembelian !== null
                    ? `${product.min_pembelian} pcs`
                    : "-"}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 text-left font-medium">Brand</td>
              {products.map((product, index) => (
                <td key={index} className="border px-4 py-2 text-center">
                  {product.brand !== null && product.brand !== "Unknown"
                    ? product.brand
                    : "-"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left font-medium">Penjual</td>
              {products.map((product, index) => (
                <td key={index} className="border px-4 py-2 text-center">
                  {product.penjual !== null ? product.penjual : "-"}
                </td>
              ))}
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2 text-left font-medium">Deskripsi</td>
              {products.map((product, index) => (
                <td
                  key={index}
                  className="border px-4 py-2 text-center w-64 relative"
                >
                  <div className="line-clamp-5 overflow-hidden">
                    <div
                      className="line-clamp-5"
                      dangerouslySetInnerHTML={{
                        __html: formattedDescription(product.description),
                      }}
                    />
                  </div>
                  {/* <div className="absolute inset-0 bg-white z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="bg-white p-2"
                    dangerouslySetInnerHTML={{
                      __html: formattedDescription(product.description),
                    }}
                  />
                </div> */}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-3">
        <Link
          to={
            products.length >= 2
              ? {
                  pathname: "/analysis-results",
                  search: `?product_ids=${products
                    .map((product) => product.product_id)
                    .join(",")}`,
                }
              : "#"
          }
          className={`flex border border-cyan-600 text-white bg-cyan-600 rounded-md p-1 ${
            products.length < 2
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-cyan-800"
          }`}
          onClick={(e) => {
            if (products.length < 2) {
              e.preventDefault();
            }
          }}
        >
          Cek Analisis Lengkap
        </Link>
      </div>
    </>
  );
}

export default ProductTable;
