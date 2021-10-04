import React, { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./servicesData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])
    return (
        <div>
        <h2 className='m-3'>All services here: </h2>
        <Row xs={1} md={3} className="g-4 w-75 m-auto">
  {
                 services.map(service => <Service serviceName={service.name}
                 serviceImg={service.img}
                 servicePrice={service.price}></Service>)
             }
        </Row>
        </div>
        
    );
};

export default Services;