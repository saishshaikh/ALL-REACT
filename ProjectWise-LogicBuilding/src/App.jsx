// import { useState } from "react";

// const Auth = () => {
//   const [formData, setFormData] = useState({
//     FullName: "",
//     Email: "",
//     Password: "",
//   });

//   const handleSetChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const formSubmit = (e) => {
//     e.preventDefault();

//     if (
//       formData.FullName === "" ||
//       formData.Email === "" ||
//       formData.Password === ""
//     ) {
//       console.log("Please fill all fields");
//       return;
//     }

//     console.log("Form Submitted Successfully", formData);

//     setFormData({
//       FullName: "",
//       Email: "",
//       Password: "",
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={formSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Your Full Name"
//           name="FullName"
//           value={formData.FullName}
//           onChange={handleSetChange}
//         />

//         <input
//           type="email"
//           placeholder="Enter Your Email"
//           name="Email"
//           value={formData.Email}
//           onChange={handleSetChange}
//         />

//         <input
//           type="password"
//           placeholder="Enter Your Password"
//           name="Password"
//           value={formData.Password}
//           onChange={handleSetChange}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Auth;


import { useState } from "react";

const Auth = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleSetChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (formData.Email === "" || formData.Password === "") {
      alert("Please fill all fields");
      return;
    }

    console.log("Login Successful", formData);

    setFormData({
      Email: "",
      Password: "",
    });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
      }}
    >
      <form
        onSubmit={formSubmit}
        style={{
          width: "350px",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Sign In
        </h2>

        <label>Email</label>
        <input
          type="email"
          name="Email"
          placeholder="Enter Your Email"
          value={formData.Email}
          onChange={handleSetChange}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "15px",
          }}
        />

        <label>Password</label>
        <input
          type="password"
          name="Password"
          placeholder="Enter Your Password"
          value={formData.Password}
          onChange={handleSetChange}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Sign In
        </button>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Auth;