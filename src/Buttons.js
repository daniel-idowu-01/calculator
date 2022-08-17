import React, {Component} from "react";
import Screen from "./screen";

class Buttons extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="buttons">
                <div className="buttons1">
                    <button className="btn">7</button>
                    <button className="btn">8</button>
                    <button className="btn">9</button>
                    <button className="btn">+</button>
                </div>
                <div className="buttons2">
                    <button className="btn">4</button>
                    <button className="btn">5</button>
                    <button className="btn">6</button>
                    <button className="btn small-btn">-</button>
                </div>
                <div className="buttons3">
                    <button className="btn">1</button>
                    <button className="btn">2</button>
                    <button className="btn">3</button>
                    <button className="btn small-btn">*</button>
                </div>
                <div className="buttons4">
                    <button className="btn">C</button>
                    <button className="btn small-btn">.</button>
                    <button className="btn small-btn">/</button>
                    <button className="btn">=</button>
                </div>
            </div>
        )
    }
}

 export default Buttons 