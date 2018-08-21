import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator, Pattern } from 'react-hexgrid';
import './Map.css';

class Map extends Component {
  render() {
    const hexagons = GridGenerator.orientedRectangle(30, 20);
    const hexagonSize = { x: 2, y: 2 };

    return (
      <div className="Map">
        <HexGrid width={1200} height={1000} viewBox="-10 -10 100 100">
          <Layout size={hexagonSize}>
            { hexagons.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} fill="tree" />) }
          </Layout>
          <Pattern id="tree" link="https://classroomclipart.com/images/gallery/Clipart/Trees/TN_seasonal-tree-green-summer-clipart-720.jpg" size={hexagonSize} />
        </HexGrid>
      </div>
    );
  }
}

export default Map;
