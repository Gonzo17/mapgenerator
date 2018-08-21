import React, { Component } from 'react';
import { GridGenerator } from 'react-hexgrid';
import Map from './Map'

class MapGenerator extends Component {
  render() {
    
    const hexagons = GridGenerator.orientedRectangle(30, 20);
    const hexagonSize = { x: 2, y: 2 };

    return (
      <div className="MapGenerator">
        <h1>Map Generator for a hexgrid map</h1>
        <Map hexagons={hexagons} hexagonSize={hexagonSize} />  
      </div>
    );
  }
}

export default MapGenerator;
