import React from 'react';
import './Contact.css';
import pandatransp from '../../images/pandatransp.png';

const Contact = () =>{
    return(
        <div className="contact">
            
        <div className="aboutMeContent">
        <div className="aboutDetails">
              <h1>Experience:</h1>
               <div className="expDetails">
                   <div className="xebia">
                       <h5>Xebia</h5>
                       <h3>Senior Consultant</h3>
                       <h3>Nov 2019 - Present</h3>
                   </div>
                   <div className="PK">
                        <h5>Prokarma</h5>
                        <h3>Software Engineer</h3>
                        <h3>Apr 2018 - Nov 2019</h3>
                   </div>
                   <div className="CTS"> 
                        <h5>Cognizant</h5>
                        <h3>Programmer Analyst</h3>
                        <h3>Jan 2015 - Mar 2018</h3>
                   </div>
                 </div>  
            </div>
            <div className="aboutDetails about">
              <h1>About Me:</h1>
                <p>
                A result-oriented front-end developer with experience in building websites using 
frameworks like Angular, ReactJs, and ExtJs.Flexible in working environments having positioned 
for various clients simultaneously. Focused primarily on helping agile teams build front-end 
architecture for large scale websites or client-side web apps.
                </p>
                {/* <p>
                  PS: This is my buddy blue panda, developed in CSS3.
                </p> */}
                <div className="connectDetails">
                    <label>Connect with me @</label>
                    <a href="mailto:sai.kishore2015@gmail.com" alt="panda">sai.kishore2015@gmail.com</a>
                </div>
                
                
            </div>
        </div>
        <img className="logo" src={pandatransp} />                
        </div>
    );
}

export default Contact;


