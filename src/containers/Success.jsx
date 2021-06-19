import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Map from '../components/Map';
import useLeafLetAddress from '../hooks/useLeafLetAddress';
import '../styles/components/Success.css';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);
  const location = useLeafLetAddress(buyer[0].address);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">
          <Map data={location}/>
        </div>
      </div>
    </div>
  );
};

export default Success;
