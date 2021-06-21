import React, { useState } from 'react';
import './personal.css';
import axios from 'axios';
// import {SendDataAgain} from './Guardian';
// import {SendData} from './Personal';
// import {SendDataE} from './Employment';
// import {SendDataEdu} from './Education';
// import {SendDataRef} from './Reference';



const Device = () => {
    const [devName, setDevName] = useState('');
    const [hostName, setHostName] = useState('');
    const [IPaddress, setIPaddress] = useState('');
    const [MACaddress, setMACaddress] = useState('');
    const id = localStorage.getItem('user_id');


    const SendDataDev = () => {
         axios.post('http://employee-portal-api.nastechltd.co/api/device', {

            device_name: devName,
            host_name: hostName,
            ip_address: IPaddress,
            mac_address: MACaddress,

            employee_id: id




        })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    


        return (
            <>
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
                                    <Link className="nav-link " id="profile-tab" data-toggle="tab" to="/guardian" role="tab" aria-controls="profile" aria-selected="false">Guardian</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link " id="profile-tab" data-toggle="tab" to="/employment" role="tab" aria-controls="profile" aria-selected="false">Employment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " id="profile-tab" data-toggle="tab" to="/education" role="tab" aria-controls="profile" aria-selected="false">Education</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " id="profile-tab" data-toggle="tab" to="/reference" role="tab" aria-controls="profile" aria-selected="false">Reference</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active " id="profile-tab" data-toggle="tab" to="/device" role="tab" aria-controls="profile" aria-selected="false">Device</Link>
                                </li>

                            </ul> */}
                            {/* <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">

                                <Link className="nav-link " id="home-tab" to="/">Employee</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " id="profile-tab" to="/profile"> Hirer</Link>
                            </li>
                        </ul> */}

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3 className="register-heading">Device</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input  type="text" className="form-control" placeholder="Device Name" onChange={(e) => setDevName(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <input  type="text" className="form-control" placeholder="Host Name" onChange={(e) => setHostName(e.target.value)} />
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input  type="number" className="form-control" placeholder="IP Address" onChange={(e) => setIPaddress(e.target.value)} />

                                            </div>
                                            <div className="form-group">
                                                <input  type="number" className="form-control" placeholder="MAC Address" onChange={(e) => setMACaddress(e.target.value)} />

                                            </div>
                                          <button className="btnRegister" onClick={SendDataDev} >Submit</button>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </>
        );

    };
    export default Device;