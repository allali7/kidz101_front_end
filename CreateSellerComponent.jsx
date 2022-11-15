import React, { Component } from 'react'
import SellerService from '../services/SellerService'


class CreateSellerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sFirstName: '',
            sLastName: '',
            email:'',
            password: ''
                 
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        
        this.saveProduct = this.saveProduct.bind(this);
        // this.onValueChange = this.onValueChange.bind(this);

    }


    saveProduct = (e) => {
        e.preventDefault();
        let seller = {sFirstName: this.state.sFirstName, sLastName: this.state.sLastName, email: this.state.email, password: this.state.password}
        console.log('seller => ' +JSON.stringify(seller));

        SellerService.createSeller(seller).then(res =>{
            this.props.history.push('/loginsellers');
        });

    }

    changeFirstNameHandler= (event) => {
        this.setState({sFirstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({sLastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    
    alreadyMember = (e) => {
        // e.preventDefault();
        // let seller = {sFirstName: this.state.sFirstName, sLastName: this.state.sLastName, email: this.state.email, password: this.state.password}
        // console.log('seller => ' +JSON.stringify(seller));

        this.props.history.push('/loginsellers');

    }

    render() {
        return (
       
                   <div>
                        <div className = "row">
                            <div className = "card col-md-10 ">
                            <br></br><br></br><br></br><br></br>
                                <h1 className="text-center">Seller Portal</h1>
                                <div className = "row">
                                 <div>
                                   <button className="btn btn-primary  btn-block offset-md-7 " id="btn" onClick={this.alreadyMember}> Already a Member</button>

                                 </div>
                                 <br></br><br></br>
                                <div className="card col-md-10 offset-md-1">
                                    <form>
                                         
                                        <h3> Create Account</h3>


                                         <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="sFirstName" className="form-control" 
                                                value={this.state.sFirstName} onChange={this.changeFirstNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="sLastName" className="form-control" 
                                                value={this.state.sLastName} onChange={this.changeLastNameHandler}/>
                                        </div>

                                         <div className = "form-group">
                                            <label> Email:</label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>


                                         <div className = "form-group">
                                            <label> Password:</label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>

                                       
                                        <div className = "centerButton">
                                           
                                            
                                            <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
                                            {/*<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>*/}
                                        </div>

                                    </form>
                                </div>

                                      

                                </div>


                            </div>
                        </div>
                    </div>
         
        )
    }
}

export default CreateSellerComponent