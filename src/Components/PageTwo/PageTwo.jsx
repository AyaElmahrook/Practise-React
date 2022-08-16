import React, { useContext, useState, useEffect } from 'react'
import {userContext} from '../Context/Store'

function PageTwo() {
    let {user, changeUser}=useContext(userContext)
    useEffect(() => {
        changeUser();
    }, [user])
    
    return (
        <>
        <div className='container mt-3'>
        <h3 className='text-center'>{user}</h3>
            <p className='text-center p-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum illo impedit omnis quis ut eligendi magnam dolorum dignissimos, maxime dicta ea cupiditate repudiandae possimus ad odit animi velit dolores?</p>
        </div>
        </>
    )
}

export default PageTwo
