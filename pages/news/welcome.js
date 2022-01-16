import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>It's Class Component {this.props.name} and {this.props.name}</h1>
            </div>
        )
    }
}

export default Welcome