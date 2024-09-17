import { Link } from "react-router-dom";
import { PrinterIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import TvSamsungImage from "../assets/tv-samsung.jpg";
import { useState } from "react";
import ProductListModal from "./ProductListModal";

function ProductComparison() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <div>
        <nav className="text-gray-600 mb-4">
          <ol className="list-reset flex">
            <li className="text-sm">Beranda</li>
            <li>
              <span className="mx-1">/</span>
            </li>
            <li className="text-sm font-bold text-gray-600">
              Bandingkan Produk
            </li>
          </ol>
        </nav>
        <div className="flex justify-end mb-3">
          <button className="border border-gray-500 text-gray-500 flex p-1 rounded-md hover:border-cyan-600 hover:bg-cyan-600 hover:text-white">
            <PrinterIcon className="size-6 mr-2" />
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
                      Bandingkan <br /> Produk
                    </h1>
                  </div>
                </td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center">
                    <div>
                      <img
                        src={TvSamsungImage}
                        alt="Samsung Smart TV"
                        className="w-64 mx-auto"
                      />

                      <h2 className="text-lg font-semibold text-center mt-4">
                        TV LED Samsung 43 Inch 43N5001
                      </h2>
                      <div className="flex justify-center items-center mt-8 mb-2">
                        <div className="flex items-center">
                          <button>
                            <TrashIcon className="size-7 text-gray-400 hover:text-red-500" />
                          </button>
                          <button className="border border-cyan-600 rounded-md p-1 w-48 ms-2 text-cyan-500 font-medium text-center hover:bg-cyan-600  hover:text-white">
                            <p>+keranjang</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center">
                    <button
                      onClick={toggleModal}
                      className="border border-cyan-600 text-cyan-500 py-2 px-4 rounded-md font-medium hover:bg-cyan-600 hover:text-white"
                    >
                      Cari Produk
                    </button>
                  </div>
                </td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center">
                    <button
                      onClick={toggleModal}
                      className="border border-cyan-600 text-cyan-500 py-2 px-4 rounded-md font-medium hover:bg-cyan-600 hover:text-white"
                    >
                      Cari Produk
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left">Harga</td>
                <td className="border px-4 py-2 text-center">Rp12.625.225</td>
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
        <div className="flex justify-center mt-3">
          <Link
            to="/analysis-results"
            className="flex border border-cyan-600 text-white bg-cyan-600 rounded-md p-1 hover:bg-cyan-800"
          >
            <ClipboardIcon className="size-5 mr-1" />
            Cek Analisis Lengkap
          </Link>
        </div>
      </div>
      <ProductListModal isOpenModal={isOpenModal} toggleModal={toggleModal} />
    </>
  );
}

export default ProductComparison;
