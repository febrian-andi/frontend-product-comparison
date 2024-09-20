import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import CrownImage from "../assets/crown.png";
import RobotImage from "../assets/robot.png";
import AnalysisProcess from "./AnalysisProcess";
import PurchaseCard from "../components/PurchaseCard";

function AnalysisResults() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Show AnalysisProcess for 2 seconds, then switch to main content
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!showMainContent) {
    return <AnalysisProcess />;
  }

  return (
    <div>
      <nav className="text-gray-600 mb-4">
        <ol className="list-reset flex">
          <li className="text-xs md:text-sm">Beranda</li>
          <li>
            <span className="mx-1">/</span>
          </li>
          <li className="text-xs md:text-sm text-gray-600">
            <a href="/">Bandingkan Produk</a>
          </li>
          <li>
            <span className="mx-1">/</span>
          </li>
          <li className="text-xs md:text-sm font-bold text-gray-600">
            Hasil Analisa Produk
          </li>
        </ol>
      </nav>
      <div className="grid md:grid-cols-3 gap-x-3 w-fit justify-items-center  mx-auto">
        <div className="mb-3">
          <div className="flex justify-center">
            <img src={CrownImage} style={{ width: "55px" }} />
          </div>
          <div className="border border-cyan-600 p-2 pt-0 bg-cyan-600 rounded-md w-fit">
            <h2 className="text-sm text-center text-white font-medium my-0.5">
              Rekomendasi 1
            </h2>
            <ProductCard />
          </div>
        </div>
        <div className="mb-3">
          <div className="flex justify-center hidden md:block">
            <div style={{ height: "55px" }}></div>
          </div>
          <div className="border border-cyan-600 p-2 pt-0 bg-cyan-600 rounded-md w-fit">
            <h2 className="text-sm text-center text-white font-medium my-0.5">
              Rekomendasi 2
            </h2>
            <ProductCard />
          </div>
        </div>
        <div className="mb-3">
          <div className="flex justify-center hidden md:block">
            <div style={{ height: "55px" }}></div>
          </div>
          <div className="border border-cyan-600 p-2 pt-0 bg-cyan-600 rounded-md w-fit">
            <h2 className="text-sm text-center text-white font-medium my-0.5">
              Rekomendasi 3
            </h2>
            <ProductCard />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="sm:grid sm:grid-cols-3 lg:grid-cols-4 justify-items-center px-4 md:px-0">
          <div className="flex justify-center items-center mb-4 lg:mb-0 ">
            <img src={RobotImage} style={{ height: "180px" }} />
          </div>
          <div className=" col-span-2 px-4">
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
          <div className="w-full hidden lg:block px-4 pb-4">
            <PurchaseCard />
          </div>
        </div>
        <div className="w-full block lg:hidden p-4">
          <PurchaseCard />
        </div>
      </div>
    </div>
  );
}

export default AnalysisResults;
