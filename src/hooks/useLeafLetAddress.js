import { useState, useEffect } from 'react';
import axios from 'axios';

const useLeafLetAddress = (address) => {
  const [map, setMap] = useState([]);
  const API = `https://api.positionstack.com/v1/forward?access_key=a4ae61d4827753050d74492193b43df1&query=${address}`;

  useEffect(async () => {
    //   FIXME: La api no esta funcionando
    await axios.get(API);
    setMap([51.505, -0.09]);
  }, []);
  return map;
};

export default useLeafLetAddress;
