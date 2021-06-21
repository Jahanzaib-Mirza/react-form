import React, { useState } from 'react';
import './personal.css';
import { useHistory} from 'react-router-dom';
import axios from 'axios';


const Education = () => {
    const [schoolname, setSchlname] = useState('');
    const [schooladdress, setSchladdress] = useState('');
    const [schoolduration, setSchlduration] = useState('');
    const [schooldegree, setSchldegree] = useState('');
    const [schoolmajor, setSchlmajor] = useState('');
    const [collegename, setColgname] = useState('');
    const [collegeaddress, setColgaddress] = useState('');
    const [collegedegree, setColgdegree] = useState('');
    const [collegemajor, setColgmajor] = useState('');
    const [others, setOthers] = useState('');
    const history = useHistory();
    const id = localStorage.getItem('user_id');


    
    const SendDataEdu = () => {
        
    
    axios.post('http://employee-portal-api.nastechltd.co/api/education',
        {  
            school_name:schoolname,
            college_name:collegename,
            school_location:schooladdress,
            college_location:collegeaddress,
            years_attended:schoolduration,
            school_degree:schooldegree,
            college_degree:collegedegree,
            school_major:schoolmajor,
            college_major:collegemajor,
            others: others,
            employee_id:id
        }) .then(response => {
            console.log(response);
           history.push('/reference')
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
                                <Link className="nav-link " id="profile-tab" data-toggle="tab" to="/employment" role="tab" aria-controls="profile" aria-selected="false">Employment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" id="profile-tab" data-toggle="tab" to="/education" role="tab" aria-controls="profile" aria-selected="false">Education</Link>
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
                                <h3 className="register-heading">Education</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="schlName" type="text" className="form-control" placeholder="School Name" onChange={(e) => setSchlname(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="schlAddress" placeholder="School Address" rows="1" onChange={(e) => setSchladdress(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <input id="years" type="number" className="form-control" placeholder="years" onChange={(e) => setSchlduration(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <input id="schldegree" type="text" className="form-control" placeholder="Degree Recieved" onChange={(e) => setSchldegree(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <input id="schlmajor" type="text" className="form-control" placeholder="Major" onChange={(e) => setSchlmajor(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="colgName" type="text" className="form-control" placeholder="College Name" onChange={(e) => setColgname(e.target.value)} />

                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="colgAddress" placeholder="College Address" rows="1" onChange={(e) => setColgaddress(e.target.value)} />

                                        </div>
                                        <div className="form-group">
                                            <input id="colgdegree" type="text" className="form-control" placeholder="Degree Recieved"  onChange={(e) => setColgdegree(e.target.value)} />


                                        </div>
                                        <div className="form-group">
                                            <input id="colgmajor" type="text" className="form-control" placeholder="Major" onChange={(e) => setColgmajor(e.target.value)} />

                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="others" placeholder="Other training,certifications or licensed held:" rows="1" onChange={(e) => setOthers(e.target.value)} />

                                        </div>
                                        <button className="btnRegister" onClick={SendDataEdu}>Next</button>

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
export default Education;