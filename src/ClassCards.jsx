import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import image from './images/painting.jpeg';

const mockProducts=[

    {
        id:1,
        title:"Introduction to Painting",
        image: './images/painting.jpeg',
        type:"Painting",
        level:"Beginner",
        rating:"5 stars",
        instructor:"Evelyn",
        classLength:"1 day",
        size:"Small (5 students)",
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
    },

    {
        id:2,
        title:"Introduction to Sculpture",
        image:'./images/sculpting.jpeg',
        type:"Sculpting",
        level:"Beginner",
        rating:"4 stars",
        instructor:"Suzan",
        classLength:"2 days",
        size:"Medium (10 students)",
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
    },

    {
        id:3,
        title:"Introduction to Drawing",
        image:'./images/drawing.jpeg',
        type:"Drawing",
        level:"Beginner",
        rating:"4.5 stars",
        instructor:"Felix",
        classLength:"1 day",
        size:"Medium (10 students)",
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
    },

    {
        id:4,
        title:"Explore Drawing",
        image:'./images/drawing.jpeg',
        type:"Drawing",
        level:"Intermediate",
        rating:"4 stars",
        instructor:"Suzan",
        classLength:"2 days",
        size:"Medium (10 students)",
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
    }, 

    {
        id: 5,
        title:"Explore Painting",
        image:'./images/painting.jpeg',
        type:"Painting",
        level:"Intermediate",
        rating:"3.5 stars",
        instructor:"Felix",
        classLength:"2 days",
        size:"Large (20 students)",
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
    },

    {
        id:6,
        title:"Explore Sculpting",
        image:'./images/sculpting.jpeg',
        type:"Sculpting",
        level:"Intermediate",
        rating:"5 stars",
        instructor:"Evelyn",
        classLength:"5 days",
        size:"Small (5 students)",
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
    },

    {
        id:7,
        title:"Advanced Sculpting",
        image:'./images/sculpting.jpeg',
        type:"Sculpting",
        level:"Advanced",
        rating:"4.5 stars",
        instructor:"Felix",
        classLength:"5 days",
        size:"Medium (10 students)",
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
    }, 

    {
        id: 8,
        title:"Advanced Drawing",
        image:'./images/drawing.jpeg',
        type:"Drawing",
        level:"Advanced",
        rating:"5 stars",
        instructor:"Evelyn",
        classLength:"2 days",
        size:"Large (20 students)",
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
    },

    {
        id:9,
        title:"Advanced Painting",
        image:'./images/painting.jpeg',
        type:"Painting",
        level:"Advanced",
        rating:"4 stars",
        instructor:"Suzan",
        classLength:"5 days",
        size:"Small (5 students)",
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
    },

]

const Product = ({ product}) => {

    return(
            <div className="product-card col-md-4 mb-4">
                <div className="card">
                    <img src={image} alt={product.title}></img>    
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <table id="class_details">
                            <tr><th>Type:</th><td>{product.type}</td></tr>
                            <tr><th>Level:</th><td>{product.level}</td></tr>
                            <tr><th>Rating:</th><td>{product.rating}</td></tr>
                            <tr><th>Instructor:</th><td>{product.instructor}</td></tr>
                            <tr><th>Course Length:</th><td>{product.classLength}</td></tr>
                            <tr><th>Class Size:</th><td>{product.size}</td></tr>
                            <tr><th>Dates/Times:</th><td>{product.dateTime1}</td></tr>
                            <tr><th></th><td>{product.dateTime2}</td></tr>
                            <tr><th></th><td>{product.dateTime3}</td></tr>
                        </table>
                        <Link className="btn btn-dark" id="register_btn" to="/seg3125_project2_final/register">Register</Link>
                    </div>
                </div>
            </div>
    )
};






const Filter = ({ types, levels, lengths, sizes, handleTypeChange, handleLevelChange, handleLengthChange, handleSizeChange }) => (
    <div className="filter col-md-3" id="filters">
        <h3 className='mb-3'>Filters</h3>
        <h4>Type</h4>
        {types.map((type, index) => (
            <div className="form-check" key={index}>
                <input className="form-check-input" onChange={() => handleTypeChange({type})} type="checkbox" id={type}></input>
                <label className="form-check-label" htmlFor={type}>{type}</label>
            </div>
        ))}

        <h4>Level</h4>
        {levels.map((level, index) => (
            <div className="form-check" key={index}>
                <input className="form-check-input" onChange={() => handleLevelChange({level})} type="checkbox" id={level}></input>
                <label className="form-check-label" htmlFor={level}>{level}</label>
            </div>
        ))}


        <h4>Course Length</h4>
        {lengths.map((classLength, index) => (
            <div className="form-check" key={index}>
                <input className="form-check-input" onChange={() => handleLengthChange({classLength})} type="checkbox" id={classLength}></input>
                <label className="form-check-label" htmlFor={classLength}>{classLength}</label>
            </div>
        ))}

        <h4>Class Size</h4>
        {sizes.map((size, index) => (
            <div className="form-check" key={index}>
                <input className="form-check-input" onChange={() => handleSizeChange({size})} type="checkbox" id={size}></input>
                <label className="form-check-label" htmlFor={size}>{size}</label>
            </div>
        ))}
    </div>
);

const ClassesList = () => {
    const [typesFilters, setTypes] = useState([]);
    const [levelsFilters, setLevels] = useState([]);
    const [lengthsFilters, setLengths] = useState([]);
    const [sizesFilters, setSizes] = useState([]);

    const uniqueTypes = Array.from(new Set(mockProducts.map(product => product.type)));
    const uniqueLevels = Array.from(new Set(mockProducts.map(product => product.level)));
    const uniqueLengths = Array.from(new Set(mockProducts.map(product => product.classLength)));
    const uniqueSizes = Array.from(new Set(mockProducts.map(product => product.size)));

    const handleTypeChange = (type) => {
        
        if (typesFilters.includes(type)) {
            setTypes(typesFilters.filter(tp => tp !== type));
        } else {
            setTypes([...typesFilters, type]);
        }
    };

    const handleLevelChange = (level) => {
        if (levelsFilters.includes(level)) {
        setLevels(levelsFilters.filter(lvl => lvl !== level));
        } else {
        setLevels([...levelsFilters, level]);
        }
    };

    const handleLengthChange = (classLength) => {
        if (lengthsFilters.includes(classLength)) {
        setLengths(lengthsFilters.filter(lgt => lgt !== classLength));
        } else {
        setLengths([...lengthsFilters, classLength]);
        }
    };

    const handleSizeChange = (size) => {
        if (sizesFilters.includes(size)) {
        setSizes(sizesFilters.filter(sz => sz !== size));
        } else {
        setSizes([...sizesFilters, size]);
        }
    };

    console.log(typesFilters.length);
    
    let filteredProducts =  typesFilters.length ? mockProducts.filter(product => typesFilters.includes(product.type)) : mockProducts;
    //filteredProducts = levelsFilters.length ? filteredProducts.filter(product => levelsFilters.includes(product.level)) : filteredProducts;
    //filteredProducts = lengthsFilters.length ? filteredProducts.filter(product => lengthsFilters.includes(product.classLength)) : filteredProducts;
    //filteredProducts = sizesFilters.length ? filteredProducts.filter(product => sizesFilters.includes(product.size)) : filteredProducts;
    console.log(mockProducts);
    console.log(filteredProducts);
            

    return (
        <div className="productList container-fluid mx-2">
            <div className="row mt-5 mx-2">
                <Filter 
                    types={uniqueTypes} 
                    levels={uniqueLevels} 
                    lengths={uniqueLengths} 
                    sizes={uniqueSizes} 
                    handleTypeChange={handleTypeChange} 
                    handleLevelChange={handleLevelChange}
                    handleLengthChange={handleLengthChange} 
                    handleSizeChange={handleSizeChange}
                />

                <div className="products col-md-9">
                    <div className="row">   
                        {filteredProducts.map(product => (
                            <Product product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ClassCards = () => (
    <div>
        <ClassesList />
    </div>
);

export default ClassCards;