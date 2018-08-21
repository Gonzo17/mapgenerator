import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator, Pattern } from 'react-hexgrid';
import './MapGenerator.css';

class MapGenerator extends Component {
  render() {
    const hexagons = GridGenerator.rectangle(20, 20);
    const hexagonSize = { x: 2, y: 2 };

    return (
      <div className="MapGenerator">
        <h1>Map Generator for a hexgrid map</h1>
        <HexGrid width={1200} height={1000} viewBox="-50 -10 100 100">
          <Layout size={hexagonSize}>
            { hexagons.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} fill="tree" />) }
          </Layout>
          <Pattern id="tree" link="https://classroomclipart.com/images/gallery/Clipart/Trees/TN_seasonal-tree-green-summer-clipart-720.jpg" size={hexagonSize} />
        </HexGrid>
      </div>
    );
  }
}

export default MapGenerator;
