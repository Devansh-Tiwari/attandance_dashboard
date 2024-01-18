import React from 'react';
import data from '../data.json'
const Comment = () => {
    let homework = data["homework"];
    
    return (
        <>
            <h1 className='Attandance'>Home Work</h1>
            <div className='inner'>
                        {homework.map((item => (
                            <div className='rec' ><h3>{item}</h3></div>
                        )))}
            </div>
        </>
    );
};

export default Comment;