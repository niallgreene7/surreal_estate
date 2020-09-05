import React from 'react';
import PropTypes from "prop-types";


const Alert = ({ message, success }) => {
  
    Alert.defaultProps = {
        success: false,
    };

    return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    success: PropTypes.bool,
  };

export default Alert;