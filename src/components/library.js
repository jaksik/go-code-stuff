import React, { Component } from "react"
import PreviewRoll from '../components/preview-roll'
import "./library.css"

class Library extends Component {
    constructor(props) {
        super(props)
        this.data = props.data.allMarkdownRemark
        this.state = {
            selected: "",
        }
        this.handleClick = this.handleClick.bind(this);
        console.log(this.data)
    }

    handleClick(e) {
        console.log(e);
        this.setState({ selected: e });
    }

    render() {
        return (
            <div className="library">
                <div class="sidenav">
                    <h3>Library</h3>
                    {this.data.edges.map(({ node }) => {
                        return (
                            <a onClick={() => this.handleClick(node)}>
                                <p>{node.frontmatter.title}</p>
                            </a>
                        )
                    })}
                </div>

                <div className="component-view">
                    <div className="component-body">
                        <h3>{this.state.selected ? this.state.selected.frontmatter.title : "Click a link in the library to begin."}</h3>
                        <div dangerouslySetInnerHTML={{ __html: this.state.selected.html }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Library;