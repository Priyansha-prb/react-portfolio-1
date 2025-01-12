import React, { Component } from 'react';
import FileSaver from 'file-saver';

class About extends Component {
   fileDownload() {
      FileSaver.saveAs('/Priyansha_FullStackDeveloper_5Yrs.pdf', 'PriyanshaResume.pdf')
   }
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/profile-pic.jpg";
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Priyansha Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{street}<br />
                              {city} {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <button className="button" onClick={this.fileDownload}><i className="fa fa-download"></i>Download Resume</button>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
