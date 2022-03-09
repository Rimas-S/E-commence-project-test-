import axios from "axios";
import { useEffect, useState } from "react";
import "./Test.scss";

const Test = () => {
  const [imageUrl, setimag] = useState([null]);
  const [data, setData] = useState([{}]);
  const [saveResponse, setSaveResponse] = useState({});

  console.log(imageUrl);

  const handlerImg = (event: any) => {
    let imageFile = event.target.files;
    const arr = Array.from(imageFile);
    const newArr: any = [];

    arr.forEach((item: any) => {
      const reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onload = (e: any) => {
        newArr.push(e.target.result);
      };
    });
    setimag(newArr);
  };

  const handlerPost = () => {
    console.log("hand");

    axios
      .post("http://localhost:5000/api/v1/image", {
        src: imageUrl,
      })
      .then(function (response) {
        console.log(response);
        setSaveResponse(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/image")
      .then(function (response) {
        const data = response.data;
        setData(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [saveResponse]);

  console.log(data);

  // console.log(imageUrl);

  return (
    <div>
      <form >
        <label>Choose file to upload</label>
        <input
          onChange={handlerImg}
          type="file"
          id="file"
          name="file"
          multiple
        />
        <input onClick={handlerPost} type="submit" value="Submit" />
        {/* <div>
          <button onClick={handlerPost}>Submit</button>
        </div> */}
      </form>
      {/* <div>
        <button onClick={handlerPost}>Submit</button>
      </div> */}
      {/* <img height={300} src={data} alt="" /> */}
      {/* {data.map((item: any, index) => (
        <div key={index}>
          <img height={300} src={item.src} alt="" />
        </div>
      ))} */}
    </div>
  );
};

export default Test;