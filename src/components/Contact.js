// import React from "react";


// const Contact = () => {
//   return (
//     <>
//       <section className="contact" id="contact">
//         <h1 className="heading">
//           <span>Contact</span> Us
//         </h1>
//         <p>Reach out to make bookings and schedule appointments for exceptional nail
//           services in Hyderabad. Your nails are our top priority, and we assure you of
//           our trustworthy service.</p>
//         <div className="row">

// <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.8730645015793!2d78.5004272437679!3d17.461196254324648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b18f75fa191%3A0x9861c314e17819dc!2sHey%20Babe%20Add%20Colours%20to%20Your%20Nails!5e0!3m2!1sen!2sin!4v1702058848310!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Map"
// ></iframe>          
// <form action="">
//             <h3>Get In Touch</h3>
//             <p>"Whether you have beauty-related inquiries or need details about our services,
//               don't hesitate to contact us. Urgent appointments can be scheduled by calling us directly, and for any other questions, feel free to
//               submit the form below. We're here to help!"</p>
//             <div className="add">
//               <span className="fas fa-map-marker-alt"></span>
//               <p>2nd Floor, Sai Nivas Apartments, above Sony Authorised Service Centre,
//                 Vasavi Nagar, Karkhana, Secunderabad, Telangana 500009</p>
//             </div>
//             <div className="num">
//               <span className="fas fa-phone"></span>
//               <p>+91 8977013338</p>
//             </div>
//             <div className="emi">
//               <span className="fas fa-envelope"></span>
//               <p>heybabeaddcolourstoyournails@gmail.com</p>
//             </div>
//             <div className="inputBox">
//               <input type="text" placeholder="Full Name" />
//             </div>
//             <div className="inputBox">
//               <input type="number" placeholder="Number" />
//             </div>
//             <div className="inputBox">
//               <input type="text" placeholder="Subject" />
//             </div>
//             <div className="inputBox">

//               <input type="text" placeholder="Message" rows="4" />
//             </div>

//             <input type="submit" value="Contact Now" className="btn" />
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;





import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailData = {
        to_email: 'heybabeaddcolourstoyournails@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        // time: formData.time,
      };

      await emailjs.send(
        'service_uurtm3e',
        'template_10fhyil',
        emailData,
        'Wg5iXnA8fkdf7nl2Y'
      );

      alert('Appointment booked successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
        // time: '',
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Error booking appointment. Please try again.');
    }
  };

  return (

    <div>
      <h1>Book Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>message:</label>
        <input type="message" name="message" value={formData.message} onChange={handleChange} required />

        {/* <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required /> */}

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default Contact;

