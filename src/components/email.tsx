// 'use client';

// import React, { useRef } from "react";
// import emailjs from "emailjs-com";

// const ContactForm = () => {
//   const form = useRef(null); // Initialize the ref with null


//   const sendEmail = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     if (form.current) {
//       emailjs
//         .sendForm(
//           "service_ze1t6gm", // Replace with your EmailJS Service ID
//           "template_s7gri8c", // Replace with your EmailJS Template ID
//           form.current,
//           "2kmKK6HC4pfylWRZJ" // Replace with your EmailJS Public Key
//         )
//         .then(
//           (result) => {
//             console.log("Email sent successfully:", result.text);
//             alert("Message sent!");
//           },
//           (error) => {
//             console.error("Error sending email:", error.text);
//             alert("Failed to send message. Please try again.");
//           }
//         );
//     } else {
//       console.error("Form ref is not set properly.");
//     }
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail} style={{ maxWidth: "400px", margin: "auto" }}>
//       <div style={{ marginBottom: "10px" }}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           required
//           style={{
//             width: "100%",
//             padding: "8px",
//             marginTop: "5px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       <div style={{ marginBottom: "10px" }}>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           required
//           style={{
//             width: "100%",
//             padding: "8px",
//             marginTop: "5px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>

//       <div style={{ marginBottom: "10px" }}>
//         <label>Message</label>
//         <textarea
//           name="message"
//           required
//           style={{
//             width: "100%",
//             padding: "8px",
//             marginTop: "5px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         style={{
//           backgroundColor: "#4CAF50",
//           color: "white",
//           padding: "10px 15px",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//         }}
//       >
//         Send
//       </button>
//     </form>
//   );
// };

// export default ContactForm;



// 'use client'
// import React, { useRef } from "react";
// import emailjs from "emailjs-com";

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_IDservice_ze1t6gm", // Replace with your EmailJS Service ID
//         "template__s7gri8c", // Replace with your EmailJS Template ID
//         form.current,
//         "2kmKK6HC4pfylWRZJ" // Replace with your EmailJS Public Key
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           alert("Message sent!");
//         },
//         (error) => {
//           console.error("Error sending email:", error.text);
//           alert("Failed to send message. Please try again.");
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="name" required />

//       <label>Email</label>
//       <input type="email" name="email" required />

//       <label>Message</label>
//       <textarea name="message" required></textarea>

//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ContactForm;
