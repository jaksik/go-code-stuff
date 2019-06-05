import React, { Component } from 'react';

class Canvas extends Component {
    constructor() {
        super();
        this.state = {
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
            },
            context: null
        }
    }

    componentDidMount() {
        const context = this.refs.canvas.getContext('2d');
        this.setState({ context: context });
        this.startGame();
    }

    startGame() {
        requestAnimationFrame(() => { this.update() });
    }

    update() {
        const context = this.state.context;
        context.save();
        // context.scale(this.state.screen.ratio, this.state.screen.ratio);
        // context.globalAlpha = 0.001;
        context.rect(20, 20, 150, 100);
        context.stroke();
        context.restore();
        requestAnimationFrame(() => { this.update() });
    }

    render() {
        return (
            <div>
                <canvas ref="canvas"
                    width={this.state.screen.width}
                    height={this.state.screen.height}
                />
            </div>
        )
    }
}

export default Canvas;