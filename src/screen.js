import React, {Component} from "react";
import Buttons from "./Buttons";

class Screen extends Component {
    constructor() {
        super();
        this.state = {
            calculation: ''
        };
        this.change = this.change.bind(this);
    }

    change = () => {
        this.setState({
            calculation: this.state.calculation + 1
        })
    }

    render() {
        return (
            <div>
                <div className="screen">{this.state.calculation}</div>
            </div>
            
        )
    }
}

export default Screen