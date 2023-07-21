import React from 'react';
import ClassCards from './ClassCards';

const Classes = ( props) => {


    return (  
        <div className="classes">
            <h1>Select a Class</h1>
                
                    <ClassCards data={props.data} setData={props.setData}/> 
                
        </div>

        
    );
}



export default Classes;