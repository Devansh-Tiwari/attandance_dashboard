import React from 'react';
import data from '../data.json'
const About = () => {
    let Attendance = data[' ATTENDANCE'];
    return (
        <div>
           
            <div className="Attandance ">
                    <h1>Attandance</h1>
                    <div className="wrapper-container">
                        <div className="sub">
                            <h3>FN</h3>
                            <h3>AN</h3>
                        </div>
                        <div className="wrapper">
                            {
                                Object.keys(Attendance).map((key) => (
                                    <div key={`${key}_${Attendance[key].date}`} className="wrapper-item">
                                        <span className="txt-itm">{key}</span>
                                        <div className="txt-date">{Attendance[key].date}</div>
                                        <div className={Attendance[key].fn === "present" ? 'clr-green' : 'clr-red'}></div>
                                        <div className={Attendance[key].an === "present" ? 'clr-green' : 'clr-red'}></div>

                                    </div>
                                ))
                            }




                        </div>
                    </div>
                </div>
        </div>
    );
};

export default About;