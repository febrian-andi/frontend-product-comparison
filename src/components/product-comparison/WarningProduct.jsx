import {
  ChevronDownIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import axios from "axios";

function WarningProduct({ productId }) {
  const [warningProduct, setWarningProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/${productId}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
        // console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, []);

  const checkProductRating = () => {
    if (product?.rating === 0) {
      return "Belum ada nilai rating";
    } else if (product?.rating < 3) {
      return `Nilai rating cukup rendah yaitu ${product?.rating}`;
    }
    return null;
  };

  const checkProductSold = () => {
    if (product?.jumlah_terjual === 0) {
      return "Belum ada barang terjual";
    } else if (product?.jumlah_terjual < 9) {
      return `Barang yang terjual cukup sedikit yaitu ${product.jumlah_terjual}`;
    }
    return null;
  };

  useEffect(() => {
    const ratingWarning = checkProductRating();
    const productSoldWarning = checkProductSold();

    if (ratingWarning || productSoldWarning) {
      setWarningProduct({
        productRating: ratingWarning,
        productSold: productSoldWarning,
      });
    } else {
      setWarningProduct(null);
    }
  }, [product]);

  return (
    <>
      {!isLoading && warningProduct && (
        <div
            className={`bg-yellow-400 p-1 px-2 w-48 rounded-t-2xl rounded-b-2xl relative ${
            isOpen ? "rounded-b-none" : ""
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ExclamationTriangleIcon className="size-6 mr-1" />
            <h2 className="text-lg font-bold">Perhatian</h2>
            <ChevronDownIcon
              className={`size-6 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isOpen && (
            <ul className="absolute left-0 w-48 mt-2 pl-5 bg-yellow-400 opacity-80 rounded-b-2xl shadow-md transition-all duration-300 z-10 p-2">
              {warningProduct.productRating && (
                <li className="text-sm font-medium">
                  - {warningProduct.productRating}
                </li>
              )}
              {warningProduct.productSold && (
                <li className="text-sm font-medium">
                  - {warningProduct.productSold}
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default WarningProduct;
