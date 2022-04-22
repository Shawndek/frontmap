import { useState, useEffect } from "react";
import axios from "axios";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const getFromIpify = async () => {
        const {
          data: {
            location: { lat, lng, ...rest },
          },
        } = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`
        );
        setLocation([lat, lng]);
      };
      try {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            (pos) => setLocation([pos.coords.latitude, pos.coords.longitude]),
            async () => await getFromIpify()
          );
        } else {
          await getFromIpify();
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return location;
};

export default useLocation;
