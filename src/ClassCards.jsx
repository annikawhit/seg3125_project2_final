import React, {useState, useEffect} from 'react';

import painting from './images/painting.jpeg';
import sculpting from './images/sculpting.jpeg';
import drawing from './images/drawing.jpeg';

const mockProducts=[

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
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
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
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
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
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
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
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
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
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
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
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
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
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
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
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
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
        dateTime1:"August 4th @ 6pm",
        dateTime2:"August 7th @ 12pm",
        dateTime3:"August 8th @ 3pm"
    },

]

const Product = ({ product}) => {

    return(
            <div className="product-card col-md-4 mb-4">
                <div className="card">
                    <img src={product.image} alt={product.title}></img>    
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

    let filteredProducts = mockProducts.filter(product => {
        const typeMatch = typesFilters.length === 0 || typesFilters.includes(product.type);
        const levelMatch = levelsFilters.length === 0 || levelsFilters.includes(product.level);
        const lengthMatch = lengthsFilters.length === 0 || lengthsFilters.includes(product.classLength);
        const sizeMatch = sizesFilters.length === 0 || sizesFilters.includes(product.size);

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