import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Pattern, Hex } from 'react-hexgrid';
import './Map.css';

class Map extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hexagons: this.props.hexagons,
            hexagonSize: this.props.hexagonSize,
            width: this.props.width,
            height: this.props.height,
            island: this.randomIsland()
        }
    }

    randomIsland() {
        while(true){
            var randomq = Math.round(Math.random() * 30);
            var randomr = Math.round(Math.random() * 30);
            var randoms = (randomr + randomq) * -1;
            var randomHex = new Hex(randomq, randomr, randoms);
            if(this.isIslandAllowed(randomHex)){
                return randomHex;
            }
        }
    }

    createHexagon(hex, i) {
        if (this.isIslandAllowed(hex) && this.isRandomIsland(hex)) {
            return <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} fill="tree" />;
        }
        return <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />;
    }

    isRandomIsland(hex) {
        return hex.q === this.state.island.q && hex.r === this.state.island.r && hex.s === this.state.island.s;
    }

    isIslandAllowed(hex) {
        var row = hex.r + (hex.q - (hex.q&1)) / 2;
        return (hex.q > 1 && hex.q < this.props.width - 2) && (row > 1 && row < this.props.height - 2);
    }

    render() {
        return (
            <div className="Map">
                <HexGrid width={1200} height={1000} viewBox="-10 -10 100 100">
                    <Layout size={this.state.hexagonSize}>
                        {this.state.hexagons.map((hex, i) => this.createHexagon(hex, i))}
                    </Layout>
                    <Pattern id="tree" link="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/48x48/tree.png" size={this.state.hexagonSize} />
                </HexGrid>
            </div>
        );
    }
}

export default Map;
