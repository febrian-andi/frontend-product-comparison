import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      });
      setData(response.data);
    } catch (err) {
      console.log(err)
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};

export default useGetData;
