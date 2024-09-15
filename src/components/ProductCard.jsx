import { MapPinIcon } from "@heroicons/react/24/solid";
import TvSamsungImage from "../assets/tv-samsung.jpg";

function ProductCard() {
  return (
    <div className="bg-white rounded-lg py-3 shadow w-44 border border-gray-200">
      <div>
        <div className="flex justify-center py-2">
          <img
            src={TvSamsungImage}
            alt="Samsung Smart TV"
            className="h-20 rounded-lg"
          />
        </div>
        <div>
          <div className="flex items-center my-1">
            <p className="bg-cyan-600 text-white text-xs p-0.5 rounded-tr-md">
              UMKM
            </p>
          </div>
          <div className="px-2">
            <h2 className="font-light text-sm line-clamp-2">
              SAMSUNG SMART TV TKDN UHD 4K 65 INCH
            </h2>
            <p className="font-semibold text-sm mt-2">Rp12.625.225</p>
            <div className="flex mt-1">
              <p className="text-red-600 text-xs bg-red-100 p-0.5 rounded">
                2%
              </p>
              <p className="text-xs text-gray-400 line-through ml-2">
                Rp12.882.883
              </p>
            </div>
            <p className="flex items-center text-xs text-gray-600 mt-1">
              <span>
                <MapPinIcon className="size-3 mr-0.5 text-sky-500" />
              </span>
              Jakarta Utara
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
