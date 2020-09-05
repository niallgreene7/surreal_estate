import React, { useState, useEffect } from "react";
import Alert from './Alert';
import PropertyCard from './PropertyCard';
const axios = require('axios');

const Properties = () => {
  
    const [allProperties, setallProperties] = useState([]);
    const [alert, setAlert] = useState({ message: "" });

    useEffect(() => {
        const fetchData = async () => {
          await axios
            .get("http://localhost:4000/api/v1/PropertyListing")
            .then(({ data }) => setallProperties(data))
            .catch(() =>
                setAlert({ message: "Server error. Please try again later." })
            );
        };
        fetchData();
      }, []);

    return (
        <div className="Properties">
        {allProperties.map((property) => (
          <div key={property.id} className="item">
            <PropertyCard {...property} />
            <br></br>
          </div>
        ))}
      </div>
  )
};

export default Properties;
