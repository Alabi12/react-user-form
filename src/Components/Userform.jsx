import React, { Component } from 'react';
import "./styles.css";

class Userform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gen: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: "",
            email: "",
            gen: ""
        })
    }

    render() {
        return (
            <>
            <h1>ADD USER FORM</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="gen">Gen</label>
                    <input
                        type="number"
                        name="gen"
                        placeholder="gen"
                        value={this.state.gen}
                        onChange={this.handleChange}
                    />
                </div><br />
                <div className="form-control">
                    <button type="submit">Add user</button>
                </div>
            </form>
            </>
        );
    }
}

export default Userform;