import {Link} from 'react-router-dom';
import React,{useState} from 'react';
import ClassCards from './ClassCards';

const Classes = () => {
    const [data, setData]=useState(ClassCards);
    const filterResult=(item)=>{
        const result=ClassCards.filter((currentData)=>{
            return currentData.classcard===item;
        });
        setData(result);
    }


    return (  
        <div className="classes">
            <h1>Select a Class</h1>
            
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3" id="filters">
                        <h3 className='mb-3'>Filters</h3>
                        <h4>Type</h4>
                        <div className="form-check">
                            <input className="form-check-input" onClick={() => filterResult("Painting")} type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                Painting
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                Sculpting
                            </label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                Drawing
                            </label>
                        </div>

                        <h4>Level</h4>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                Beginner
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                Intermediate
                            </label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                Advanced
                            </label>
                        </div>


                        <h4>Course Length</h4>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                1 day
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                2 days
                            </label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                5 days
                            </label>
                        </div>


                        <h4>Class Size</h4>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                Small (5 students)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                Medium (10 students)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                Large (20 students)
                            </label>
                        </div>


                    </div>
                    <div className="col-md-9">
                        <div className="row">
                        {data.map((values)=>{
                            const {id,title,image,level,rating,instructor,length,size,dateTime1,dateTime2,dateTime3}=values;
                            return(
                                
                                <>
                                    <div className="col-md-4 mb-4" key={id}>
                                        <div className="card">
                                            <img className="card-img-top img-fluid" src={image} alt="Card image cap"></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{title}</h5>
                                                <table id="class_details">
                                                    <tr><th>Level:</th><td>{level}</td></tr>
                                                    <tr><th>Rating:</th><td>{rating}</td></tr>
                                                    <tr><th>Instructor:</th><td>{instructor}</td></tr>
                                                    <tr><th>Course Length:</th><td>{length}</td></tr>
                                                    <tr><th>Class Size:</th><td>{size}</td></tr>
                                                    <tr><th>Dates/Times:</th><td>{dateTime1}</td></tr>
                                                    <tr><th></th><td>{dateTime2}</td></tr>
                                                    <tr><th></th><td>{dateTime3}</td></tr>
                                                </table>
                                                <Link class="btn btn-dark" id="register_btn" to="/seg3125_project2_final/register">Register</Link>
                                            </div>
                                        </div>
                                    </div>
                                
                                </>
                            )

                        })}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default Classes;