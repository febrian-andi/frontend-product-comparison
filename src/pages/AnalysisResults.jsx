import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import formattedDescription from "../utils/formattedDescription";
import ProductCard from "../components/product-list-modal/ProductCard";
import CrownImage from "../assets/crown.png";
import RobotImage from "../assets/robot.png";
import AnalysisProcess from "./AnalysisProcess";
import PurchaseCard from "../components/analysis-results/PurchaseCard";
import axios from "axios";

function AnalysisResults() {
  const [products, setProducts] = useState([]);
  const [analysisResults, setAnalysisResults] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("product_id")?.split(",") || [];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productPromises = productId.map(async (id) => {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`, {
            headers: {
              'ngrok-skip-browser-warning': 'true',
            },
          });
          return response.data;
        });
  
        const productData = await Promise.all(productPromises);
        setProducts(productData);
        setError(null);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError("Failed to load product data. Please try again later.");
      }
    };
  
    if (productId.length > 0) {
      fetchProducts();
    }
  }, []);
  

  useEffect(() => {
    const fetchAnalysisResults = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/ai-best-products`, {
          headers: {
            'ngrok-skip-browser-warning': 'true',
          },
          product_ids: productId,
        });
        setAnalysisResults(response.data);
        setError(null);
      } catch (error) {
        console.log(error)
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (productId.length > 0) {
      fetchAnalysisResults();
    }
  }, []);

  if (isLoading) {
    return <AnalysisProcess />;
  }

  if (error) {
    return <div className="text-red-600 text-center">Terjadi kesalahan.<br/> Silahkan muat ulang halaman</div>;
  }

  return (
    <>
    {!isLoading && analysisResults &&
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
              Hasil Analisis Produk
            </li>
          </ol>
        </nav>
        <div className="grid md:grid-cols-3 gap-x-3 w-fit justify-items-center mx-auto">
          {products?.map((product, index) => (
            <div className="mb-3" key={product.product_id}>
              {/* <div className="flex justify-center">
                {product.product_id == analysisResults.best_product_id ?
                  <img src={CrownImage} style={{ width: "55px" }} alt="Crown" />
                  : <div style={{ width: "55px" }}></div>
                }{product.product_id == analysisResults.best_product_id ?
                  <p>Rekomendasi</p>
                  : <p>Bukan</p>
                }
              </div> */}
              <div className="border border-cyan-600 p-2 pt-0 bg-cyan-600 rounded-md w-fit">
                <h2 className="text-sm text-center text-white font-medium my-0.5">
                  Produk {index + 1}
                </h2>
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="sm:grid sm:grid-cols-3 lg:grid-cols-4 justify-items-center px-4 md:px-0">
            <div className="flex justify-center items-center mb-4 lg:mb-0 ">
              <img src={RobotImage} style={{ height: "180px" }} alt="Robot" />
            </div>
            <div className="col-span-2 px-4">
              <div
                className="text-justify"
                dangerouslySetInnerHTML={{
                  __html: formattedDescription(analysisResults.comparison_result),
                }}
              />
            </div>
            <div className="w-full hidden lg:block px-4 pb-4 my-auto">
              <PurchaseCard />
            </div>
          </div>
          <div className="w-full block lg:hidden p-4 mx-auto">
            <PurchaseCard />
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default AnalysisResults;
