import React, { Component } from 'react';

class Forms extends Component {
constructor(props) {
    super(props)
    this.state = {
        fullName: ''
    }
}

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.setState
        console.log(data)

    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        // const {fullName} = this.state
        return (
            <div className="forms">
            <p>Full name is: {this.state.fullName} </p>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='text' placeholder="Your Name Here" name='fullName' onChange={this.handleInputChange}/></p>
                    <p><button>Send It</button></p>
                </form>
            </div>
      
        );
    }
}

export default Forms;
