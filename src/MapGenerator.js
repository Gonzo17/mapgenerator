import React, { Component } from 'react';
import Map from './Map'

class MapGenerator extends Component {
  render() {
    return (
      <div className="MapGenerator">
        <h1>Map Generator for a hexgrid map</h1>
        <Map/>  
      </div>
    );
  }
}

export default MapGenerator;
