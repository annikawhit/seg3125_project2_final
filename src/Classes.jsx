import {Link} from 'react-router-dom';
import React,{useState} from 'react';
import ClassCards from './ClassCards';

const Classes = () => {


    return (  
        <div className="classes">
            <h1>Select a Class</h1>
                
                    <ClassCards /> 
                
        </div>

        
    );
}



export default Classes;