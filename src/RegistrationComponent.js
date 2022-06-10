import React, { Component } from "react";
import axios from 'axios';

class RegistrationComponent extends Component{
  
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            phonenumber:'',
            emailId:'',
            idnumber:'',
            krapin:'',
            nationality:'',
            county:'',
            city:'',
            postaladdress:'',
            physicaladdress:'',
            occupation:'',
            accounttype:''
            

        }

        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changePhoneNumberHandler=this.changePhoneNumberHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changeIDNumberHandler=this.changeIDNumberHandler.bind(this);
        this.changeKRAPINHandler=this.changeKRAPINHandler.bind(this);
        this.changeNationalityHandler=this.changeNationalityHandler.bind(this);
        this.changeCountyHandler=this.changeCountyHandler.bind(this);
        this.changeCityHandler=this.changeCityHandler.bind(this);
        this.changePostalAddressHandler=this.changePostalAddressHandler.bind(this);
        this.changePhysicalAddressHandler=this.changePhysicalAddressHandler.bind(this);
        this.changeOccupationHandler=this.changeOccupationHandler.bind(this);
        this.changeAccountTypeHandler=this.changeAccountTypeHandler.bind(this);
        this.saveCustomer=this.saveCustomer.bind(this);

    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }

    changePhoneNumberHandler=(event)=>{
        this.setState({phonenumber: event.target.value});
    }

    changeEmailIdHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }


    
    changeIDNumberHandler=(event)=>{
        this.setState({idnumber: event.target.value});
    }

    changeKRAPINHandler=(event)=>{
        this.setState({krapin: event.target.value});
    }

    changeNationalityHandler=(event)=>{
        this.setState({nationality: event.target.value});
    }

    changeCountyHandler=(event)=>{
        this.setState({county: event.target.value});
    }

    changeCityHandler=(event)=>{
        this.setState({city: event.target.value});
    }

    changePostalAddressHandler=(event)=>{
        this.setState({postaladdress: event.target.value});
    }

    changePhysicalAddressHandler=(event)=>{
        this.setState({physicaladdress: event.target.value});
    }

    changeOccupationHandler=(event)=>{
        this.setState({occupation: event.target.value});
    }

    changeAccountTypeHandler=(event)=>{
        this.setState({accounttype: event.target.value});
    }

    saveCustomer=(e)=>{
        e.preventDefault();
        let customer={firstName: this.state.firstName,lastName: this.state.lastName,phonenumber: this.state.phonenumber,emailId: this.state.emailId,idnumber: this.state.idnumber,krapin: this.state.krapin,nationality: this.state.nationality,county: this.state.county,city: this.state.city,postaladdress: this.state.postaladdress,physicaladdress: this.state.physicaladdress,occupation: this.state.occupation,accounttype: this.state.accounttype};
        console.log('Customer=>'+JSON.stringify(customer));
    }

    cancel=(e)=>{
        e.target.reset();
    }
    render(){
        return(
        <div>
            <div className="container">
                <div className="row">
                    <br></br>
                    <h1 className="text-center">Customer Registration Form</h1>
                    <br></br>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                    value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Phone Number:</label>
                                    <input placeholder="Phone Number" name="phonenumber" className="form-control"
                                    value={this.state.phonenumber} onChange={this.changePhonenumberHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input placeholder="Email" name="emailId" className="form-control"
                                    value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>ID Number:</label>
                                    <input placeholder="ID Number" name="idnumber" className="form-control"
                                    value={this.state.idnumber} onChange={this.changeIDNumberHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>KRA PIN:</label>
                                    <input placeholder="KRA PIN" name="krapin" className="form-control"
                                    value={this.state.krapin} onChange={this.changeKRAPINHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Nationality:</label>
                                    <input placeholder="Nationality" name="nationality" className="form-control"
                                    value={this.state.nationality} onChange={this.changeNationalityHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>County:</label>
                                    <input placeholder="County" name="county" className="form-control"
                                    value={this.state.county} onChange={this.changeCountyHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>City:</label>
                                    <input placeholder="City" name="city" className="form-control"
                                    value={this.state.city} onChange={this.changeCityHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Postal Address:</label>
                                    <input placeholder="Postal Address" name="postaladdress" className="form-control"
                                    value={this.state.postaladdress} onChange={this.changePostalAddressHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Physical Address:</label>
                                    <input placeholder="Physical Address" name="physicaladdress" className="form-control"
                                    value={this.state.physicaladdress} onChange={this.changePhysicalAddressHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Occupation:</label>
                                    <input placeholder="Occupation" name="occupation" className="form-control"
                                    value={this.state.occupation} onChange={this.changeOccupationHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Account Type:</label>
                                    <input placeholder="Account Type" name="accounttype" className="form-control"
                                    value={this.state.accounttype} onChange={this.changeAccountTypeHandler}/>
                                </div>
                                <br></br>
                                <br></br>
                                <button className="btn btn-success" onClick={this.saveCustomer}>Save</button>
                                <button className="btn btn-danger" onClick={this.changeCityHandler.bind} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default RegistrationComponent