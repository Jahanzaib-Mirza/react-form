import React, { useState } from 'react';
import './personal.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Employment = () => {
    const [employer, setEmployer] = useState('');
    const [workphone, setWorkphone] = useState('');
    const [dateEmployed, setDateEmployed] = useState('');
    const [salary, setSalary] = useState('');
    const [workcity, setWorkcity] = useState('');
    const [workprovince, setWorkprovince] = useState('');
    const [workaddress, setWorkaddress] = useState('');
    const [dutiesperformed, setDutiesperformed] = useState('');
    const [supervisor, setSupervisor] = useState('');
    const [reason, setReason] = useState('');
    const [position, setPosition] = useState('');
    const history = useHistory();
    const id = localStorage.getItem('user_id');



    const SendDataE = () => {


        axios.post('http://employee-portal-api.nastechltd.co/api/employment', {

            employer: employer,
            address: workaddress,
            province: workprovince,
            city: workcity,
            work_phone: workphone,
            position: position,
            years_of_experience: dateEmployed,

            salary: salary,
            duties_performed: dutiesperformed,
            supervisors_name_and_title: supervisor,
            reason_for_leaving: reason,
            employee_id: id



        })
            .then(response => {
                console.log(response);
                history.push('/education')

            })
            .catch(error => console.log(error))

    };
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
                                <Link className="nav-link active" id="profile-tab" data-toggle="tab" to="/employment" role="tab" aria-controls="profile" aria-selected="false">Employment</Link>
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

                                <Link className="nav-link " id="home-tab" to="/">Employee</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " id="profile-tab" to="/profile"> Hirer</Link>
                            </li>
                        </ul> */}

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Previous Employment</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="employer" type="text" className="form-control" placeholder="Employer" onChange={(e) => setEmployer(e.target.value)} />

                                        </div>
                                        <div className="form-group">
                                            <input id="workPhone" type="number" className="form-control" placeholder="Work Phone" onChange={(e) => setWorkphone(e.target.value)} />


                                        </div>
                                        <div className="form-group">
                                            <input id="position" type="text" className="form-control" placeholder="Position" onChange={(e) => setPosition(e.target.value)} />


                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="dutiesPerformed" rows="1" placeholder="Duties Performed" onChange={(e) => setDutiesperformed(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="supervisor" rows="1" placeholder="Supervisor's Name & Title" onChange={(e) => setSupervisor(e.target.value)} />
                                        </div>
                                        <textarea className="form-control" id="workAddress" rows="1" placeholder="Reason For Leaving" onChange={(e) => setReason(e.target.value)} />

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="joindate" type="text" className="form-control" placeholder="Dates Employeed" onChange={(e) => setDateEmployed(e.target.value)} />

                                        </div>
                                        <div className="form-group">
                                            <input id="salary" type="text" className="form-control" placeholder="Salary" onChange={(e) => setSalary(e.target.value)} />

                                        </div>
                                        <div className="form-group">
                                            <input id="workProvince" type="text" className="form-control" placeholder="Province" onChange={(e) => setWorkprovince(e.target.value)} />


                                        </div>
                                        <div className="form-group">
                                            <input id="workCity" type="text" className="form-control" placeholder="City" onChange={(e) => setWorkcity(e.target.value)} />

                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="workAddress" rows="1" placeholder="Address" onChange={(e) => setWorkaddress(e.target.value)} />

                                        </div>
                                        <button className="btnRegister" onClick={SendDataE}>Next</button>

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
export default Employment;