import React from "react";


const PropertyCard = ({
    title,
    type,
    bathrooms,
    bedrooms,
    price,
    city,
  }) => {
    return (
    <div>
        <div>{title}</div>
        <div>{type} - {city}</div>
        <div>{bathrooms}</div>
        <div>{bedrooms}</div>
        <div>{price}</div>
    </div>  
   )
 }


export default PropertyCard;
