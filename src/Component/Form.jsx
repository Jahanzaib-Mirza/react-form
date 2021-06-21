import React, { useState } from 'react';
import axios from 'axios';



function Form() {


    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDOB] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [homephone, setHomephone] = useState('');
    const [phone, setPhone] = useState('');
    const [postal, setPostal] = useState('');
    const [email, setEmail] = useState('');
    const [cnic, setCNIC] = useState('');

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
    const [gname, setGname] = useState('');
    const [gage, setGage] = useState('');
    const [gaddress, setGaddress] = useState('');
    const [gphone, setGphone] = useState('');
    const [gcnic, setGcnic] = useState('');
    const [ggender, setGgender] = useState('');
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
    const [refname, setRefname] = useState('');
    const [reftitle, setReftitle] = useState('');
    const [refcompany, setRefcompany] = useState('');
    const [refphone, setRefphone] = useState('');
    // const [terms, setTerms] = useState('');
    // const [description, setDescription] = useState('');
    // const [devicename, setDevname] = useState('');
    // const [nameaddress, setMakeaddress] = useState('');


    // const Data = {

    //     first_name: fname,
    //     last_name: lname,
    //     gender: gender,
    //     dob: dob,
    //     address: address,
    //     city: city,
    //     province: province,
    //     home_phone: homephone,
    //     cell_phome: phone,
    //     postal_code: postal,
    //     email: email,


    // };



    function sendData() {
        const response = axios.post('http://employee-portal-api.nastechltd.co/api/employee', {

            first_name: fname,
            last_name: lname,
            gender: gender,
            dob: dob,
            address: address,
            city: city,
            province: province,
            home_phone: homephone,
            cell_phone: phone,
            password: 'password',
            postal_code: postal,
            email: email,
            government_id: cnic



        })
            .then(response => console.log(response))
            .catch(error => console.log(error))


        const response2 = axios.post('http://employee-portal-api.nastechltd.co/api/employment', {

            employer: employer,
            address: workaddress,
            province: workprovince,
            city: workcity,
            work_phone: workphone,
            position: position,
            dates_employed: joindate,

            salary: salary,
            duties_performed: dutiesperformed,
            supervisors_name_and_title: supervisor,
            reason_for_leaving: reason,
            employee_id: 1



        })
            .then(response2 => console.log(response2))
            .catch(error => console.log(error))

        const response3 = axios.post('http://employee-portal-api.nastechltd.co/api/education', {

            school_name: schoolname,
            college_name: collegename,
            school_location: schooladdress,
            college_location: collegeaddress,
            years_attended: schoolduration,
            school_degree: schooldegree,
            college_degree: collegedegree,
            school_major: schoolmajor,
            college_major: collegemajor,
            others: others,
            employee_id: 1




        })
            .then(response3 => console.log(response3))
            .catch(error => console.log(error))

        const response4 = axios.post('http://employee-portal-api.nastechltd.co/api/guardian', {

            full_name: gname,
            gender: ggender,
            contact_no: gphone,
            age: gage,
            cnic: gcnic,
            address: gaddress,
            employee_id: 1






        })
            .then(response4 => console.log(response4))
            .catch(error => console.log(error))

        const response5 = axios.post('http://employee-portal-api.nastechltd.co/api/refrences', {

            name: refname,
            title: reftitle,
            company: refcompany,
            phone: refphone,
            employee_id: 1







        })
            .then(response5 => console.log(response5))
            .catch(error => console.log(error))

        // console.log(fname);
        // console.log(lname);
        // console.log(gender);
        // console.log(dob);
        // console.log(address);
        // console.log(city);
        // console.log(province);
        // console.log(homephone);
        // console.log(phone);
        // console.log(postal);
        // console.log(email);
        // console.log(schoolname);
        // console.log(schooladdress);
        // console.log(schoolduration);
        // console.log(schooldegree);
        // console.log(schoolmajor);
        // console.log(collegename);
        // console.log(collegeaddress);
        // console.log(others);
        // console.log(collegedegree);
        // console.log(collegemajor);
        // console.log(gname);
        // console.log(gage);
        // console.log(gaddress);
        // console.log(gphone);
        // console.log(gcnic);
        // console.log(ggender);
        // console.log(employer);
        // console.log(workaddress);
        // console.log(workprovince);
        // console.log(workcity);
        // console.log(workphone);
        // console.log(position);
        // console.log(joindate);
        // console.log(leavedate);
        // console.log(salary);
        // console.log(dutiesperformed);
        // console.log(supervisor);
        // console.log(reason);
        // console.log(permission);
        // console.log(refname);
        // console.log(reftitle);
        // console.log(refcompany);
        // console.log(refphone);
        // console.log(terms);

    }



    return (
        <>
            <div className="container">
                <h1 className="text-center text-white">EMPLOYEE DATA FORM</h1>
                <form onSubmit="return false" >


                    <fieldset>
                        <legend>Personal Information</legend>
                        <div className="row">
                            <div className="col">
                                <label for="name">First Name:</label>
                                <input id="name" type="text" className="form-control" placeholder="First Name" onChange={(e) => setFname(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="nameLast">Last Name:</label>
                                <input id="nameLast" type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="dob">Date Of Birth:</label>
                                <input id="dob" type="date" className="form-control" placeholder="Date Of Birth" onChange={(e) => setDOB(e.target.value)} />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="email">Email:</label>
                                <input id="email" type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="cellPhone">Cell Phone:</label>
                                <input id="cellPhone" type="number" className="form-control" placeholder="Cell Phone" onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="homePhone">Home Phone:</label>
                                <input id="homePhone" type="number" className="form-control" placeholder="Home Phone" onChange={(e) => setHomephone(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="postal">Postal Code:</label>
                                <input id="postal" type="number" className="form-control" placeholder="Postal Code" onChange={(e) => setPostal(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="province">Province:</label>
                                <input id="province" type="text" className="form-control" placeholder="Province" onChange={(e) => setProvince(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="city">City:</label>
                                <input id="city" type="text" className="form-control" placeholder="City" onChange={(e) => setCity(e.target.value)} />
                            </div>


                        </div>
                        <div className="row">
                            <div className="form-group col-8">
                                <label for="address">Address</label>
                                <textarea className="form-control" id="address" rows="1" onChange={(e) => setAddress(e.target.value)}></textarea>
                            </div>
                            <div className="col">
                                <label for="cnic">CNIC:</label>
                                <input id="cnic" type="number" className="form-control" placeholder="B-Form/CNIC" onChange={(e) => setCNIC(e.target.value)} />
                            </div>
                            <div className="col-4 mt-4">
                                <label>Gender:</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={(e) => setGender(e.target.value)} />
                                    <label className="form-check-label" for="male">
                                        Male
                            </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="female" value="female"
                                        onChange={(e) => setGender(e.target.value)} />
                                    <label className="form-check-label" for="female">
                                        Female
                            </label>
                                </div>

                            </div>

                        </div>

                    </fieldset>
                    <fieldset>
                        <legend>Guardian</legend>
                        <div className="row">
                            <div className="col">
                                <label for="guardname">Full Name:</label>
                                <input id="guardname" type="text" className="form-control" placeholder="Full Name" onChange={(e) => setGname(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="age">Age:</label>
                                <input id="age" type="number" className="form-control" placeholder="Age" onChange={(e) => setGage(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="guardPhone">Phone:</label>
                                <input id="guardPhone" type="number" className="form-control" placeholder="Phone" onChange={(e) => setGphone(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="guardCnic">CNIC:</label>
                                <input id="guardCnic" type="number" className="form-control" placeholder="CNIC Number" onChange={(e) => setGcnic(e.target.value)} />
                            </div>
                            <div className="form-group col">
                                <label for="guardAddress">Address</label>
                                <textarea className="form-control" id="guardAddress" rows="1" onChange={(e) => setGaddress(e.target.value)}></textarea>
                            </div>
                            <div className="col-4 mt-4">
                                <label>Gender:</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="guardGender" id="guardMale" value="male" onChange={(e) => setGgender(e.target.value)}
                                    />
                                    <label className="form-check-label" for="guardMale">
                                        Male
                            </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="guardGender" id="guardFemale"
                                        value="female" onChange={(e) => setGgender(e.target.value)} />
                                    <label className="form-check-label" for="guardFemale">
                                        Female
                            </label>
                                </div>

                            </div>



                        </div>

                    </fieldset>
                    <fieldset>
                        <legend>Education</legend>
                        <div className="row">
                            <div className="col">
                                <label for="schlName">School Name:</label>
                                <input id="schlName" type="text" className="form-control" placeholder="School Name" onChange={(e) => setSchlname(e.target.value)} />
                            </div>
                            <div className="form-group col">
                                <label for="schlAddress">Address</label>
                                <textarea className="form-control" id="schlAddress" placeholder="School Address" rows="1" onChange={(e) => setSchladdress(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="years">Years Attended:</label>
                                <input id="years" type="number" className="form-control" placeholder="years" onChange={(e) => setSchlduration(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="degree">Degree Recieved:</label>
                                <input id="degree" type="text" className="form-control" placeholder="Degree Recieved" onChange={(e) => setSchldegree(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="major">Major:</label>
                                <input id="major" type="text" className="form-control" placeholder="Major" onChange={(e) => setSchlmajor(e.target.value)} />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="colgName">College Name:</label>
                                <input id="colgName" type="text" className="form-control" placeholder="College Name" onChange={(e) => setColgname(e.target.value)} />
                            </div>
                            <div className="form-group col">
                                <label for="colgAddress">Address</label>
                                <textarea className="form-control" id="colgAddress" placeholder="College Address" rows="1" onChange={(e) => setColgaddress(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col">
                                <label for="degree">Degree Recieved:</label>
                                <input id="degree" type="text" className="form-control" placeholder="Degree Recieved" onChange={(e) => setColgdegree(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="major">Major:</label>
                                <input id="major" type="text" className="form-control" placeholder="Major" onChange={(e) => setColgmajor(e.target.value)} />
                            </div>
                            <div className="form-group col">
                                <label for="others">Others</label>
                                <textarea className="form-control" id="others" placeholder="Other training,certifications or licensed held:" rows="1" onChange={(e) => setOthers(e.target.value)}></textarea>
                            </div>

                        </div>

                    </fieldset>

                    {/* <fieldset>
                        <legend>Employee Portal</legend>
                        <div class="row">
                            <div className="col">
                                <label for="descrip">Description:</label>
                                <input id="descrip" type="text" className="form-control" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="devname">Device Name:</label>
                                <input id="devname" type="text" className="form-control" placeholder="Device Name" onChange={(e) => setDevname(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="makeAddress">Make Address:</label>
                                <input id="makeAddress" type="text" className="form-control" placeholder="Make Address" onChange={(e) => setMakeaddress(e.target.value)} />
                            </div>
                        </div>

                    </fieldset> */}

                    <fieldset className="mt-3">
                        <legend>Previous Employment</legend>
                        <div className="row">
                            <div className="col">
                                <label for="employer">Employer:</label>
                                <input id="employer" type="text" className="form-control" placeholder="Employer" onChange={(e) => setEmployer(e.target.value)} />
                            </div>

                            <div className="col">
                                <label for="workPhone">Work Phone:</label>
                                <input id="workPhone" type="number" className="form-control" placeholder="Work Phone" onChange={(e) => setWorkphone(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="position">Position:</label>
                                <input id="position" type="text" className="form-control" placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="joindate">Dates Employeed:</label>
                                <input id="joindate" type="text" className="form-control" placeholder="Dates Employeed" onChange={(e) => setJoinDate(e.target.value)} />
                            </div>
                            {/* <div className="col">
                                <label for="leavedate">Leaving Date:</label>
                                <input id="leavedate" type="date" className="form-control" placeholder="Leaving Date" onChange={(e) => setLeaveDate(e.target.value)} />
                            </div> */}
                            <div className="col">
                                <label for="salary">Salary:</label>
                                <input id="salary" type="text" className="form-control" placeholder="Salary" onChange={(e) => setSalary(e.target.value)} />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="workProvince">Province:</label>
                                <input id="workProvince" type="text" className="form-control" placeholder="Province" onChange={(e) => setWorkprovince(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="workCity">City:</label>
                                <input id="workCity" type="text" className="form-control" placeholder="City" onChange={(e) => setWorkcity(e.target.value)} />
                            </div>
                            <div className="form-group col">
                                <label for="workAddress">Address</label>
                                <textarea className="form-control" id="workAddress" rows="1" placeholder="Address" onChange={(e) => setWorkaddress(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label for="dutiesPerformed">Duties Performed</label>
                                <textarea className="form-control" id="dutiesPerformed" rows="1"
                                    placeholder="Duties Performed" onChange={(e) => setDutiesperformed(e.target.value)}></textarea>
                            </div>
                            <div className="form-group col">
                                <label for="supervisor">Supervisor Details</label>
                                <textarea className="form-control" id="supervisor" rows="1"
                                    placeholder="Supervisor's Name & Title" onChange={(e) => setSupervisor(e.target.value)}></textarea>
                            </div>
                            <div className="form-group col">
                                <label for="leaveReason">Reason</label>
                                <textarea className="form-control" id="workAddress" rows="1"placeholder="Reason For Leaving" onChange={(e) => setReason(e.target.value)}></textarea>
                            </div>

                        </div>

                       

                    </fieldset>
                    <fieldset>
                        <legend>References</legend>
                        <div className="row">
                            <div className="col">
                                <label for="refName">Name:</label>
                                <input id="refName" type="text" className="form-control" placeholder="Name" onChange={(e) => setRefname(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="refTitle">Title:</label>
                                <input id="refTitle" type="text" className="form-control" placeholder="Title" onChange={(e) => setReftitle(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="refCompany">Company:</label>
                                <input id="refCompany" type="text" className="form-control" placeholder="Company" onChange={(e) => setRefcompany(e.target.value)} />
                            </div>
                            <div className="col">
                                <label for="refPhone">Phone:</label>
                                <input id="refPhone" type="number" className="form-control" placeholder="Phone" onChange={(e) => setRefphone(e.target.value)} />
                            </div>


                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Acknowledgement and Authorization</legend>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="agreed" id="a1" /*onChange={(e) => setTerms(e.target.value)}*/ />
                            <label className="form-check-label" for="a1">
                                I certify that all answers given herein are true and complete to the best of my knowledge.
                    </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="agreed" id="a2" /*onChange={(e) => setTerms(e.target.value)}*/ />
                            <label className="form-check-label" for="a2">
                                I authorize investigation of all statements contained in the application for emplyoment as many
                                be necessary in arriving at an employement decision.
                    </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="agreed" id="a3" /*onChange={(e) => setTerms(e.target.value)}*/ />
                            <label className="form-check-label" for="a3">
                                I the event of employment, I understand that false or midsleading information given in my
                                application or interview(s) may result in discharge.
                    </label>
                        </div>


                    </fieldset>

                    <div className="btn text-center mx-auto w-100">
                        <button type="button" className="btn btn-success w-100" onClick={sendData}>Submit</button>
                    </div>

                </form>
            </div>

        </>);
};

export default Form;