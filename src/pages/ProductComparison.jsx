import { PrinterIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

function ProductComparison() {
  return (
    <div>
      <nav className="text-gray-600 mb-4">
        <ol className="list-reset flex">
          <li>
            <a href="#">
              Beranda
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="font-medium text-gray-600">Bandingkan Produk</li>
        </ol>
      </nav>
      <div className="flex justify-end mb-3">
        <button className="border border-gray-500 text-gray-500 flex p-1 rounded-md hover:border-teal-600 hover:bg-teal-600 hover:text-white">
          <PrinterIcon className="size-6 mr-2"/>
          Cetak Perbandingan
        </button>
      </div>
      <div className="overflow-x-auto border border-gray-200 rounded-2xl">
        <table className="min-w-full table-auto">
          <tbody>
            <tr>
              <td className="relative px-4 py-2">
                <div className="absolute top-0 left-0">
                  <h1 className="text-xl font-bold p-4">
                    Bandingkan <br/> Produk
                  </h1>
                </div>
              </td>
              <td className="border px-4 py-2">
                <div className="flex justify-center">
                  <div>
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Samsung Smart TV"
                      className="w-64 mx-auto"
                    />

                    <h2 className="text-lg font-semibold text-center mt-4">
                      TV LED Samsung 43 Inch 43N5001
                    </h2>
                    <div className="flex justify-center items-center mt-8 mb-2">
                      <div className="flex items-center">
                        <button>
                          <TrashIcon className="size-7 text-gray-400 hover:text-red-500"/>
                        </button>
                        <button className="border border-teal-600 rounded-md p-1 w-48 ms-2 text-teal-500 font-medium text-center hover:bg-teal-600  hover:text-white">
                            <p>
                              +keranjang
                            </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="border px-4 py-2">
                <div className="flex justify-center">
                  <button className="border border-teal-600 text-teal-500 py-2 px-4 rounded-md font-medium hover:bg-teal-600 hover:text-white">
                    Cari Produk
                  </button>
                </div>
              </td>
              <td className="border px-4 py-2">
                <div className="flex justify-center">
                  <button className="border border-teal-600 text-teal-500 py-2 px-4 rounded-md font-medium hover:bg-teal-600 hover:text-white">
                    Cari Produk
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Harga</td>
              <td className="border px-4 py-2 text-center">
                Rp12.625.225
              </td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Dikirim dari</td>
              <td className="border px-4 py-2 text-center">Bandung</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Rating</td>
              <td className="border px-4 py-2 text-center">7,9/10</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Terjual</td>
              <td className="border px-4 py-2 text-center">21 Produk</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Pajak</td>
              <td className="border px-4 py-2 text-center">11%</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">TKDN</td>
              <td className="border px-4 py-2 text-center">-</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Stok</td>
              <td className="border px-4 py-2 text-center">87</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Kategori</td>
              <td className="border px-4 py-2 text-center">Televisi</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Brand</td>
              <td className="border px-4 py-2 text-center">Samsung</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Min Pembelian</td>
              <td className="border px-4 py-2 text-center">1 buah</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Berat Satuan</td>
              <td className="border px-4 py-2 text-center">21.7 kg</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Dimnesi Ukuran</td>
              <td className="border px-4 py-2 text-center">65"</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-left">Deskripsi</td>
              <td className="border px-4 py-2 text-center">
                Televisi ini ....
              </td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductComparison;
