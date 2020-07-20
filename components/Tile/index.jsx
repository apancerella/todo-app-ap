import React from 'react';
import proptypes from 'prop-types';
import './style.css';

const Tile = ({ children }) => (
    <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__body kt-portlet__body--fluid">
            { children }
        </div>
    </div>
);

export default Tile;
