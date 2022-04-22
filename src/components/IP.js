import { useState, useEffect } from "react";
import axios from "axios";

const CurrentLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { location },
        } = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`
        );
        setLocation(location);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
};

export default CurrentLocation;
