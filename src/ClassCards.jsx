import React, {useState, useEffect} from 'react';
import painting from './images/painting.jpeg';
import sculpting from './images/sculpting.jpeg';
import drawing from './images/drawing.jpeg';
import { useNavigate } from 'react-router-dom';


const classes=[

    {
        id:1,
        title:"Introduction to Painting",
        image: painting,
        type:"Painting",
        level:"Beginner",
        rating:"5 stars",
        instructor:"Evelyn",
        classLength:"1 day",
        size:"Small (5 students)",
        dateTime1:"Aug 4th @ 2pm",
        dateTime2:"Aug 9th @ 1pm",
        dateTime3:"Aug 18th @ 3pm"
    },

    {
        id:2,
        title:"Introduction to Sculpture",
        image:sculpting,
        type:"Sculpting",
        level:"Beginner",
        rating:"4 stars",
        instructor:"Suzan",
        classLength:"2 days",
        size:"Medium (10 students)",
        dateTime1:"Aug 16th @ 12pm",
        dateTime2:"Aug 18th @ 1pm",
        dateTime3:"Aug 24th @ 10am"
    },

    {
        id:3,
        title:"Introduction to Drawing",
        image:drawing,
        type:"Drawing",
        level:"Beginner",
        rating:"4.5 stars",
        instructor:"Felix",
        classLength:"1 day",
        size:"Medium (10 students)",
        dateTime1:"Aug 12th @ 2pm",
        dateTime2:"Aug 17th @ 1pm",
        dateTime3:"Aug 19th @ 2pm"
    },

    {
        id:4,
        title:"Explore Drawing",
        image:drawing,
        type:"Drawing",
        level:"Intermediate",
        rating:"4 stars",
        instructor:"Suzan",
        classLength:"2 days",
        size:"Medium (10 students)",
        dateTime1:"Aug 20th @ 1pm",
        dateTime2:"Aug 24th @ 4pm",
        dateTime3:"Aug 28th @ 2pm"
    }, 

    {
        id: 5,
        title:"Explore Painting",
        image:painting,
        type:"Painting",
        level:"Intermediate",
        rating:"3.5 stars",
        instructor:"Felix",
        classLength:"2 days",
        size:"Large (20 students)",
        dateTime1:"Aug 13th @ 12pm",
        dateTime2:"Aug 18th @ 1pm",
        dateTime3:"Aug 22th @ 2pm"
    },

    {
        id:6,
        title:"Explore Sculpting",
        image:sculpting,
        type:"Sculpting",
        level:"Intermediate",
        rating:"5 stars",
        instructor:"Evelyn",
        classLength:"5 days",
        size:"Small (5 students)",
        dateTime1:"Aug 7th @ 6pm",
        dateTime2:"Aug 12th @ 12pm",
        dateTime3:"Aug 20th @ 3pm"
    },

    {
        id:7,
        title:"Advanced Sculpting",
        image:sculpting,
        type:"Sculpting",
        level:"Advanced",
        rating:"4.5 stars",
        instructor:"Felix",
        classLength:"5 days",
        size:"Medium (10 students)",
        dateTime1:"Aug 5th @ 5pm",
        dateTime2:"Aug 20th @ 11am",
        dateTime3:"Aug 27th @ 11am"
    }, 

    {
        id: 8,
        title:"Advanced Drawing",
        image:drawing,
        type:"Drawing",
        level:"Advanced",
        rating:"5 stars",
        instructor:"Evelyn",
        classLength:"2 days",
        size:"Large (20 students)",
        dateTime1:"Aug 1th @ 3pm",
        dateTime2:"Aug 4th @ 4pm",
        dateTime3:"Aug 9th @ 10am"
    },

    {
        id:9,
        title:"Advanced Painting",
        image:painting,
        type:"Painting",
        level:"Advanced",
        rating:"4 stars",
        instructor:"Suzan",
        classLength:"5 days",
        size:"Small (5 students)",
        dateTime1:"Aug 4th @ 10am",
        dateTime2:"Aug 13th @ 1pm",
        dateTime3:"Aug 18th @ 4pm"
    },

]

const AClass = (props) => {
    const navigate = useNavigate();

    function registerClass(classes){
        const obj = {...props.data, ['title']: classes.title, ['instructor']: classes.instructor, ['dateTime1']: classes.dateTime1, ['dateTime2']: classes.dateTime2, ['dateTime3']: classes.dateTime3}
        props.setData(obj);
        navigate("/seg3125_project2_final/register");
    }

    return(
            <div className="product-card col-md-4 mb-4">
                <div className="card">
                    <img src={props.aClass.image} alt={props.aClass.title}></img>    
                    <div className="card-body">
                        <h5 className="card-title">{props.aClass.title}</h5>
                        <table id="class_details">
                            <tr><th>Type:</th><td>{props.aClass.type}</td></tr>
                            <tr><th>Level:</th><td>{props.aClass.level}</td></tr>
                            <tr><th>Rating:</th><td>{props.aClass.rating}</td></tr>
                            <tr><th>Instructor:</th><td>{props.aClass.instructor}</td></tr>
                            <tr><th>Course Length:</th><td>{props.aClass.classLength}</td></tr>
                            <tr><th>Class Size:</th><td>{props.aClass.size}</td></tr>
                            <tr><th>Dates/Times:</th><td>{props.aClass.dateTime1}</td></tr>
                            <tr><th></th><td>{props.aClass.dateTime2}</td></tr>
                            <tr><th></th><td>{props.aClass.dateTime3}</td></tr>
                        </table>
                        <button onClick={() => registerClass(props.aClass)} className="btn btn-secondary border-0">Register</button>
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

const ClassesList = (props) => {
    const [typesFilters, setTypes] = useState([]);
    const [levelsFilters, setLevels] = useState([]);
    const [lengthsFilters, setLengths] = useState([]);
    const [sizesFilters, setSizes] = useState([]);

    const uniqueTypes = Array.from(new Set(classes.map(aClass => aClass.type)));
    const uniqueLevels = Array.from(new Set(classes.map(aClass => aClass.level)));
    const uniqueLengths = Array.from(new Set(classes.map(aClass => aClass.classLength)));
    const uniqueSizes = Array.from(new Set(classes.map(aClass => aClass.size)));

    let filteredProducts = classes.filter(aClass => {
        const typeMatch = typesFilters.length === 0 || typesFilters.includes(aClass.type);
        const levelMatch = levelsFilters.length === 0 || levelsFilters.includes(aClass.level);
        const lengthMatch = lengthsFilters.length === 0 || lengthsFilters.includes(aClass.classLength);
        const sizeMatch = sizesFilters.length === 0 || sizesFilters.includes(aClass.size);

        return typeMatch && levelMatch && lengthMatch && sizeMatch;
    });

    const handleTypeChange = (type) => {
        const { type: selectedType } = type; 
        if (typesFilters.includes(selectedType)) {
            setTypes(typesFilters.filter(tp => tp !== selectedType));
        } else {
            setTypes([...typesFilters, selectedType]);
        }
    };
    
    const handleLevelChange = (level) => {
        const { level: selectedLevel } = level; 
        if (levelsFilters.includes(selectedLevel)) {
            setLevels(levelsFilters.filter(lvl => lvl !== selectedLevel));
        } else {
            setLevels([...levelsFilters, selectedLevel]);
        }
    };
    
    const handleLengthChange = (classLength) => {
            const { classLength: selectedLength } = classLength; 
        if (lengthsFilters.includes(selectedLength)) {
            setLengths(lengthsFilters.filter(lgt => lgt !== selectedLength));
        } else {
            setLengths([...lengthsFilters, selectedLength]);
        }
    };
    
    const handleSizeChange = (size) => {
        const { size: selectedSize } = size; 
        if (sizesFilters.includes(selectedSize)) {
            setSizes(sizesFilters.filter(sz => sz !== selectedSize));
        } else {
            setSizes([...sizesFilters, selectedSize]);
        }
    };
            

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
                        {filteredProducts.map(aClass => (
                            <AClass aClass={aClass} key={aClass.id} data={props.data} setData={props.setData}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ClassCards = (props) => (
    <div>
        <ClassesList data={props.data} setData={props.setData}/>
    </div>
);

export default ClassCards;