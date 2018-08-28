import React, { Component } from 'react';
import { GridGenerator } from 'react-hexgrid';
import Map from './Map';
import ExtendedHex from './ExtendedHex';

class MapGenerator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: 30,
      height: 20,
      extendedHexagons: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
  }

  createRandomMap() {
    const hexagons = GridGenerator.orientedRectangle(this.state.width, this.state.height);
    return this.fillHexagons(hexagons);
  }

  fillHexagons(hexagons) {
    const randomIsland = this.randomIsland();
    return hexagons.map(hex => new ExtendedHex(hex.q, hex.r, hex.s, this.isHexEqual(hex, randomIsland) ? "tree" : null));
  }

  randomIsland() {
    while (true) {
      var randomq = Math.round(Math.random() * this.state.height);
      var randomr = Math.round(Math.random() * this.state.width);
      var randoms = (randomr + randomq) * -1;
      var randomHex = new ExtendedHex(randomq, randomr, randoms);
      if (this.isIslandAllowed(randomHex)) {
        return randomHex;
      }
    }
  }

  isIslandAllowed(hex) {
    var row = hex.r + (hex.q - (hex.q & 1)) / 2;
    return (hex.q > 1 && hex.q < this.state.width - 2) && (row > 1 && row < this.state.height - 2);
  }

  isHexEqual(hex1, hex2) {
    return hex1.q === hex2.q && hex1.r === hex2.r && hex1.s === hex2.s;
  }

  render() {
    const hexagonSize = { x: 2, y: 2 };

    return (
      <div className="MapGenerator">
        <h1>Map Generator for a hexgrid map</h1>
        Width: <input type="number" name="width" min="5" max="30" value={this.state.width} onChange={this.handleWidthChange}></input>
        <br />
        Height: <input type="number" name="height" min="5" max="25" value={this.state.height} onChange={this.handleHeightChange}></input>
        <br />
        <button onClick={this.handleClick}>Generate Map</button>
        <Map hexagons={this.state.extendedHexagons} hexagonSize={hexagonSize} />
      </div>
    );
  }

  handleClick() {
    this.setState({ extendedHexagons: this.createRandomMap() });
  }

  handleWidthChange(event) {
    this.setState({ width: event.target.value })
  }

  handleHeightChange(event) {
    this.setState({ height: event.target.value })
  }
}

export default MapGenerator;
