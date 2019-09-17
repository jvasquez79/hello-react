import React from 'react';

import './styles/Navbar.css';

class BadgeForm extends React.Component {
    /* state = {
        jobTitle: 'Designer'
    }; */
    /* handleChange = e => {
        // console.log({name: e.target.name, value: e.target.value});
        this.setState({ [e.target.name]: e.target.value });
    } */
    handleClick = e => {
        console.log('Button was clicked');
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="firstName" value={this.props.formValues.firstName} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="lastName" value={this.props.formValues.lastName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} type="email" className="form-control" name="email" value={this.props.formValues.email} />
                    </div>
                    <div className="form-group">
                        <label>Job Description</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="jobTitle" value={this.props.formValues.jobTitle} />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" name="twitter" value={this.props.formValues.twitter} />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
                
            </div>
        );
    }
}

export default BadgeForm;
