import ProductCard from "../components/ProductCard";
import CrownImage from "../assets/crown.png";
import RobotImage from "../assets/robot.png";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

function AnalysisResults() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center">
            <img src={CrownImage} style={{ width: "55px" }} />
          </div>
          <div className="border border-cyan-600 p-2 pt-0 bg-cyan-600 rounded-md mx-2">
            <h2 className="text-sm text-center text-white font-medium my-0.5">
              Rekomendasi 1
            </h2>
            <ProductCard />
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <div style={{ height: "55px" }}></div>
          </div>
          <div className="border border-cyan-600 p-2 pt-0 bg-cyan-600 rounded-md mx-2">
            <h2 className="text-sm text-center text-white font-medium my-0.5">
              Rekomendasi 2
            </h2>
            <ProductCard />
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <div style={{ height: "55px" }}></div>
          </div>
          <div className="border border-cyan-600 p-2 pt-0 bg-cyan-600 rounded-md mx-2">
            <h2 className="text-sm text-center text-white font-medium my-0.5">
              Rekomendasi 3
            </h2>
            <ProductCard />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-center items-center">
          <img src={RobotImage} style={{ height: "180px" }} />
          <div className="ml-4">
            <p className="text-justify">
              Setelah menganalisis kedua produk TV Samsung, berikut adalah
              beberapa alasan mengapa TV 2 bisa menjadi pilihan yang lebih tepat
              untuk kamu.
              <br /> Rekomendasi 1 dengan harga Rp7.900.901 menawarkan layar 50"
              yang pas untuk ruang tamu atau kamar tidur, serta berat 17,7 kg
              yang lebih ringan dan mudah dipindahkan. Menariknya, meskipun
              harganya lebih terjangkau, TV ini memiliki rating lebih tinggi,
              yaitu 8,1/10, dibandingkan TV 1, yang hanya mendapat 7,9/10.
              Selain itu, TV 2 juga telah terjual sebanyak 54 unit, menunjukkan
              bahwa lebih banyak orang memilih dan puas dengan performanya.
              <br /> Rekomendasi 2 memang memiliki layar yang lebih besar, yaitu
              65", dan berat 21,7 kg, namun dengan harga Rp12.625.225, kamu
              perlu mengeluarkan budget hampir dua kali lipat dari TV 2. Dari
              segi popularitas dan kepuasan pengguna, TV 2 lebih unggul dengan
              rating dan jumlah penjualan yang lebih tinggi.
              <br /> Jika kamu mencari TV berkualitas dengan harga yang lebih
              ramah di kantong dan tetap mendapatkan ulasan positif dari
              pengguna, Rekmendasi ke 1 adalah pilihan yang cerdas.
            </p>
          </div>
          <div class="p-3 ml-4 rounded-lg border border-red-800 shadow-md w-full max-w-md mx-auto">
            <h2 class="text-base font-bold mb-4">Atur Pembelian</h2>
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-xs text-gray-500 mb-2">Jumlah Pembelian</p>
                <div class="flex items-center">
                  <button class="border shadow-md hover:bg-gray-400 text-gray-800 font-bold p-2 rounded inline-flex items-center">
                    <MinusIcon className="size-5"/>
                  </button>
                  <span class="text-gray-900 font-bold mx-2">1</span>
                  <button class="border shadow-md hover:bg-gray-400 text-gray-800 font-bold p-2 rounded inline-flex items-center">
                    <PlusIcon className="size-5"/>
                  </button>
                  <p class="text-gray-700 ml-4">Stok: 30</p>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <h3 class="text-sm font-bold mb-1">Total Harga</h3>
              <p class="text-2xl font-bold text-cyan-600">Rp7.900.901</p>
              <div className="mt-1 flex justify-between">
                <p class="text-sm text-gray-500">Rp7.900.901</p>
                <p class="text-sm text-gray-500">(inc. PPN)</p>
              </div>
            </div>
            <div class="flex justify-between">
              <button class="border border-cyan-600 text-cyan-600 text-xs rounded">
                Chat Penjual
              </button>
              <button class="flex items-center bg-cyan-600 hover:bg-cyan-700 text-white  rounded">
                <PlusIcon className="size-4"/>
                Keranjang
              </button>
            </div>
            <button class="border border-cyan-600 text-cyan-600 text-xs rounded">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalysisResults;
