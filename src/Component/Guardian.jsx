import React, { useState } from 'react';
import axios from 'axios';
import './personal.css';
import { useHistory } from 'react-router-dom';

const Guardian = () => {
    const [gname, setGname] = useState('');
    const [gage, setGage] = useState('');
    const [gaddress, setGaddress] = useState('');
    const [gphone, setGphone] = useState('');
    const [gcnic, setGcnic] = useState('');
    const [ggender, setGgender] = useState('');
    const history = useHistory();
    const id = localStorage.getItem('user_id');

    
    
    const SendDataAgain = () => {
       
    
        axios.post('http://employee-portal-api.nastechltd.co/api/guardian', {
    
            full_name: gname,
            gender: ggender,
            contact_no: gphone,
            age: gage,
            cnic: gcnic,
            address: gaddress,
            employee_id: id
    
    
    
    
    
    
        })
            .then(response => { 
                console.log(response);
                history.push('/employment')

            }) 
            .catch(error => console.log(error))
    }
    return (
        <div className="container register">
            <div className="row">
                <div className="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h3>Welcome</h3>
                    <p>You are 30 seconds away from earning your own money!</p>
                    <input type="submit" name="" value="Login" /><br />
                </div>
                <div className="col-md-9 register-right">

                    {/* <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            <Link className="nav-link " id="home-tab" data-toggle="tab" to="/" role="tab" aria-controls="home" aria-selected="true">Employee</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" id="profile-tab" data-toggle="tab" to="/guardian" role="tab" aria-controls="profile" aria-selected="false">Guardian</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" id="profile-tab" data-toggle="tab" to="/employment" role="tab" aria-controls="profile" aria-selected="false">Employment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="profile-tab" data-toggle="tab" to="/education" role="tab" aria-controls="profile" aria-selected="false">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " id="profile-tab" data-toggle="tab" to="/reference" role="tab" aria-controls="profile" aria-selected="false">Reference</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " id="profile-tab" data-toggle="tab" to="/device" role="tab" aria-controls="profile" aria-selected="false">Device</Link>
                        </li>
                    </ul> */}
                    {/* <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">

                            <NavLink activeclassName="nav-link " to="/">Employee</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassName="nav-link active " to="/profile"> Hirer</NavLink>
                        </li>
                    </ul> */}

                    <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <h3 className="register-heading">Guardian</h3>
                        <div className="row register-form">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Full Name *" onChange={(e) => setGname(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" placeholder="Age *" onChange={(e) => setGage(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" placeholder="Contact No. *" onChange={(e) => setGphone(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <div className="maxl mt-4">
                                        <label className="radio inline">
                                            <input type="radio" name="gender" value="male" onChange={(e) => setGgender(e.target.value)}/>
                                            <span> Male </span>
                                        </label>
                                        <label className="radio inline">
                                            <input type="radio" name="gender" value="female" onChange={(e) => setGgender(e.target.value)}/>
                                            <span>Female </span>
                                        </label>
                                    </div>
                                </div>



                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="number" className="form-control" placeholder="CNIC No. *" onChange={(e) => setGcnic(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Full Address *" rows="1" onChange={(e) => setGaddress(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <input type="number" className="form-control" placeholder={id} />
                                </div>
                                <button className="btnRegister" onClick={SendDataAgain} >Next</button>
                               

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



)
};
export default Guardian;