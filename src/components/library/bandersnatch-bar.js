import React, { Component } from "react";

class BandersnatchBar extends Component {
    state = {
        remainingTime: 100
    }

    componentDidMount() {
        setInterval(this.countDown, 100);
    }

    countDown = (percent, element) => {
        this.setState({ remainingTime: this.state.remainingTime - 1 })
    }


    render() {
        return (
            <div>
                        <div className="progressContainerTwo">
                            <div className="progress-barTwo" id="barTwo" style={{ width: `${this.state.remainingTime}%` }}></div>
                        </div>
            </div>
        );
    }
}

export default BandersnatchBar;