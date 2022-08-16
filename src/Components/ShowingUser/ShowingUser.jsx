import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'

function ShowingUser() {
    const [user, setUser] = useState({fName: "",sName: ""});
    function getUser({ target }) {
        //get old user and add changes on it
        setUser({ ...user, [target.name]: target.value });
    }
    let navigation=useNavigate();
    function addUser(e) {
        e.preventDefault();
        localStorage.setItem("userName",`${user.fName} ${user.sName}`);
        navigation('/pageTwo');
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={addUser}>
                    <div className="row mt-3">
                        <div className="col-md-6 col-sm-12">
                            <input className='form-control m-2' name='fName' onChange={getUser} type='text' placeholder='first name'></input>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <input className='form-control m-2' name='sName' onChange={getUser} type='text' placeholder='second name'></input>
                        </div>
                        <div className="col-12 text-center">
                            <button className='btn btn-outline-dark my-3'>Show</button>
                        </div>
                    </div>
                </form>
                <h3 className='text-center'>Hello {user.fName} {user.sName}</h3>
            </div>
        </>
    )
}

export default ShowingUser

