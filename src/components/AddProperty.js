import React, { useState } from "react";
import Alert from './Alert';
const axios = require('axios');


const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert:{
        message: "",
        isSuccess: false,
    }
  };

const AddProperty = () => {

    const [fields, setFields] = useState(initialState.fields);
    const [alert, setAlert] = useState(initialState.alert);

    const handleAddProperty = (event) => {
        event.preventDefault();
        setAlert({ message: "", isSuccess: false });

        axios.post('http://localhost:4000/api/v1/PropertyListing', fields)
          .then(response =>{
            setAlert({
                message: "Property Added",
                isSuccess: true,
            })
            console.log(response);
          })
          .catch(error =>{
            setAlert({
                message: "Server error. Please try again later.",
                isSuccess: true,
            })
            console.log(error);
          });
    };

    const handleFieldChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value });
    };
    
    return(
    <div className="AddProperty">Add a Property
            <form onSubmit={handleAddProperty}>
                {alert.message && (
                    <Alert message={alert.message} success={alert.isSuccess} />
                )}
                <label htmlFor="title">
                    Title <input id="title" name="title" value={fields.title} onChange={handleFieldChange}/>
                </label>
                <br></br>
                <label htmlFor="city">City
                    <select id="city" name="city" value={fields.city} onChange={handleFieldChange}>
                        <option value="Manchester">Manchester</option>
                        <option value="Leeds">Leeds</option>
                        <option value="Sheffield">Sheffield</option>
                        <option value="London">London</option>
                    </select>
                </label>
                <br></br>
                <label htmlFor="type">Property Type
                    <select id="type" name="type" value={fields.type} onChange={handleFieldChange}>
                        <option value="Flat">Flat</option>
                        <option value="Detached">Detached</option>
                        <option value="Semi-Detached">Semi-Detached</option>
                        <option value="Terraced">Terraced</option>
                        <option value="End of Terrace">End of Terrace</option>
                        <option value="Cottage">Cottage</option>
                        <option value="Bungalow">Bungalow</option>
                    </select>
                </label>
                <br></br>
                <label htmlFor="bedrooms">
                    Bedrooms <input id="bedrooms" name="bedrooms" value={fields.bedrooms} onChange={handleFieldChange}/>
                </label>
                <br></br>
                <label htmlFor="bathrooms">
                    Bathrooms <input id="bathrooms" name="bathrooms" value={fields.bathrooms} onChange={handleFieldChange}/>
                </label>
                <br></br>
                <label htmlFor="price">
                    Price <input id="price" name="price" value={fields.price} onChange={handleFieldChange}/>
                </label>
                <br></br>
                <label htmlFor="email">
                    E-mail <input id="email" name="email" value={fields.email} onChange={handleFieldChange}/>
                </label>
                <br></br>
                <button type="submit" onClick={handleAddProperty}>Submit</button>
            </form>

        </div>
    )
}
export default AddProperty;