function AnalysisResults() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Bandingkan Produk: Detail
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Spesifikasi</th>
              <th className="py-3 px-6 text-center">Samsung Smart TV</th>
              <th className="py-3 px-6 text-center">LG LED TV</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200">
              <td className="py-3 px-6 text-left">Gambar</td>
              <td className="py-3 px-6 text-center">
                <img
                  src="path/to/samsung-image"
                  alt="Samsung Smart TV"
                  className="w-32 mx-auto"
                />
              </td>
              <td className="py-3 px-6 text-center">
                <img
                  src="path/to/lg-image"
                  alt="LG LED TV"
                  className="w-32 mx-auto"
                />
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-6 text-left">Harga</td>
              <td className="py-3 px-6 text-center text-red-600">Rp12.625.225</td>
              <td className="py-3 px-6 text-center text-red-600">Rp10.500.000</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-6 text-left">Rating</td>
              <td className="py-3 px-6 text-center">
                <div className="flex justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.3l6.2 3.7-1.6-6.9L22 9.3l-7.1-.6L12 2.3 9.1 8.7 2 9.3l5.4 4.8-1.6 6.9L12 17.3z" />
                  </svg>
                  <span className="ml-1">4.5/5</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.3l6.2 3.7-1.6-6.9L22 9.3l-7.1-.6L12 2.3 9.1 8.7 2 9.3l5.4 4.8-1.6 6.9L12 17.3z" />
                  </svg>
                  <span className="ml-1">4.0/5</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-6 text-left">Deskripsi</td>
              <td className="py-3 px-6 text-center">
                Samsung Smart TV dengan layar besar 55 inci, dilengkapi dengan
                berbagai fitur modern dan kualitas gambar yang sangat baik.
              </td>
              <td className="py-3 px-6 text-center">
                LG LED TV dengan layar 50 inci, menawarkan pengalaman menonton
                yang tajam dan jernih dengan desain elegan.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-6 text-left">Dikirim dari</td>
              <td className="py-3 px-6 text-center">Bandung</td>
              <td className="py-3 px-6 text-center">Jakarta Utara</td>
            </tr>
            <tr>
              <td className="py-3 px-6"></td>
              <td className="py-3 px-6 text-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Tambah ke Keranjang
                </button>
              </td>
              <td className="py-3 px-6 text-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Tambah ke Keranjang
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnalysisResults;
