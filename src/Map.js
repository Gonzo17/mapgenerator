import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Pattern } from 'react-hexgrid';
import './Map.css';

class Map extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hexagons: this.props.hexagons,
            hexagonSize: this.props.hexagonSize
        }
    }

    createHexagon(hex, i) {
        var fill = Math.random() >= 0.5;
        if (fill) {
            return <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} fill="tree" />;
        }
        return <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />;
    }

    render() {
        return (
            <div className="Map">
                <HexGrid width={1200} height={1000} viewBox="-10 -10 100 100">
                    <Layout size={this.state.hexagonSize}>
                        {this.state.hexagons.map((hex, i) => this.createHexagon(hex, i))}
                    </Layout>
                    <Pattern id="tree" link="https://classroomclipart.com/images/gallery/Clipart/Trees/TN_seasonal-tree-green-summer-clipart-720.jpg" size={this.state.hexagonSize} />
                </HexGrid>
            </div>
        );
    }
}

export default Map;
