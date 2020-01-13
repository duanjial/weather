import React, { Component } from 'react'

export class Form extends Component {
    state = {
        city: "",
        country: ""
    }
    
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" placeholder="city" id="city"></input>                        
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <input type="text" className="form-control" placeholder="country" id="country"></input>                        
                    </div>
                    <button className="btn btn-primary">Search</button>                   
                </form>
            </div>
        )
    }
}

export default Form
