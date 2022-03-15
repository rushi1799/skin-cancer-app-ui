import React from "react";
import { useState } from "react";
import axios from "axios";

const Home = (props) => {
  const [img, setImg] = useState();
  let uploadInput;
  const upload = async (e) => {
    e.preventDefault();
    console.log(uploadInput.files[0]);
    const data = new FormData();
    data.append("file", uploadInput.files[0]);
    // data.append("filename", this.fileName.value);

    // fetch('http://localhost:8000/upload', {
    //   method: 'POST',
    //   body: data,
    // }).then((response) => {
    //   response.json().then((body) => {
    //     this.setState({ imageURL: `http://localhost:8000/${body.file}` });
    //   });
    // });
    let respose = await axios.post("http://localhost:5000/upload", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    console.log("inside upload");
    console.log(respose);
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Welcome !!!</h1>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <p style={{ textAlign: "center", fontSize: 30 }}>
          Upload Image for testing.
        </p>
        {/* <img src={img} alt="img" style={{ height: "100px", width: "100px" }} /> */}
        <form
          onSubmit={upload}
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            fontSize: "30px",
          }}>
          <div>
            <input
              style={{ height: "40px" }}
              ref={(ref) => {
                uploadInput = ref;
              }}
              type="file"
            />
          </div>
          <div>
            <button style={{ height: 40, width: 100 }}>Upload</button>
          </div>
        </form>
        {/* <img src="ISIC_0112420.jpg" alt="img" /> */}
      </div>
    </>
  );
};

export default Home;
