// // src/Contact.js
// import React, { useState, useEffect } from 'react';
// // import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Simulate form submission
//     setTimeout(() => {
//       console.log(formData); // You can perform actual form submission here
//       setFormData({
//         name: '',
//         email: '',
//         message: ''
//       });
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   return (
    
//     <section id="contact" className="contact-section">
//       <div id="form" className='flex items-center'>
//       <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
//       <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
//       <h2 className='text-[24px] font-bold'>ContactMe</h2>
//       <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
//       <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>

//       <form onSubmit={handleSubmit}>
//         <div className= 'fle'>
//           <input
//            className='flex items-center'
//             type="text"
//             id="name"
//             name="name"
//             placeholder='Full Name'
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder='@gmail.com'
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <textarea
//             id="message"
//             name="message"
//             placeholder='Message'
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <button id="btn" type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Submitting...' : 'Submit'}
//         </button>
//       </form>
//       </div>
//     </section>
    
//   );
// };

// export default Contact;



import React from 'react'

const Contact = () => {
  return (
    <div className='px-12 mt-12'>
      <div className='flex items-center'>
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
            <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
            <h2 className='text-[24px] font-bold'>ContactUs</h2>
            <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        </div>


      <form action=''/>
      <div className='mb-4'>
        <label className='block text-white text-sm- font-semibold mb-2' htmlFor=''>Your Name</label>
        <input placeholder='  Name  ' className='w-full px3 py-2 border rounded-lg bg-white-500 focus:border-blue-500' required type='text'/>
      </div>

      <div className='mb-4'>
      <label className='block text-white text-sm- font-semibold mb-2' htmlFor=''>Your Mail</label>
        <input placeholder='  @gmail.com  ' className='w-full px3 py-2 border rounded-lg bg-white-500 focus:border-blue-500' required type='text'/>
      </div>

      <div className='mb-4'>
      <label className='block text-white text-sm- font-semibold mb-2' htmlFor=''>Your Massage</label>
        <textarea rows='4' placeholder='  Your Massage  ' className='w-full px3 py-2 border rounded-lg bg-white-500 focus:border-blue-500' required type='text'/>
      </div>

      <div className='flex justify-center'>
        <button type='submit' className='bg-green-500 text-white font-semibold px-4 py-2 rounded-lg 
         focus:outline-white-500'>submit</button>
      </div>
    
      
      
    </div>
  )
}

export default Contact


