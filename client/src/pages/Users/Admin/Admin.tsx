import "./Admin.scss";
import axios from "axios";

import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

//

const Admin = () => {
  //* Convert resBlob to base64
  const blobToData = (blob: any) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  // File array to string array
  const fileToStringArray = async (arr: any) => {
    let newArr: any = [];
    for (const file of arr) {
      if (file !== "") {
        const resData = await blobToData(file);
        newArr.push(resData);
      }
    }
    return newArr;
  };

  // Validation
  const productSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short")
      .max(50, "Too long name")
      .required("Requared"),
    price: Yup.number()
      .typeError("must be number")
      .positive("price must be greater than zero"),
    image: Yup.array().of(
      Yup.mixed()
        .test("fileType", "Unsupported File Format", function (value) {
          const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
          return value ? SUPPORTED_FORMATS.includes(value.type) : true;
        })
        .test("fileSize", "File Size is more than 1MB", (value) => {
          const sizeInBytes = 1000000; //1MB
          return value ? value.size <= sizeInBytes : true;
        })
    ),
  });

  const initialValues = {
    name: "",
    price: 0,
    size: "",
    color: "",
    image: [""],
    quantity: 0,
  };

  // savin data in database
  const postProduct = (value: any) => {
    axios
      .post("http://localhost:5000/api/v1/products", value)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="product-form">
      <h3 className="product-form__title">Create Product</h3>
      <div className="product-form__body">
        <Formik
          initialValues={initialValues}
          validationSchema={productSchema}
          onSubmit={async (value) => {
            const stringImage = await fileToStringArray(value.image);
            value.image = stringImage;
            postProduct(value);
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form>
              <div>
                <label htmlFor="name">Product name</label>
                <Field id="name" name="name" placeholder="T-Shirt" />
                {errors.name && touched.name ? (
                  <div className="errors">{errors.name}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="price">Price</label>
                <Field id="price" name="price" />
                <ErrorMessage className="errors" component="div" name="price" />
              </div>

              <div>
                <label htmlFor="size">Choose a size:</label>
                <Field as="select" name="size">
                  <option value="">--Please choose an option--</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XXXL">XXXL</option>
                </Field>
              </div>

              <div>
                <FieldArray name="image">
                  {({ push, remove }) => (
                    <>
                      <label htmlFor="image">Image</label>
                      {values.image.map((im, index) => (
                        <div key={index}>
                          <input
                            type="file"
                            name={`image[${index}]`}
                            id="image"
                            onChange={(e: any) => {
                              let imageFile = e.currentTarget.files[0];
                              setFieldValue(`image[${index}]`, imageFile); // extra part for validating ang error show
                            }}
                          />
                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                          {index > 0 ? (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          ) : (
                            ""
                          )}
                          <ErrorMessage
                            className="errors"
                            component="div"
                            name={`image[${index}]`}
                          />
                        </div>
                      ))}
                    </>
                  )}
                </FieldArray>
              </div>

              <div>
                <label htmlFor="color">Choose a color:</label>
                <Field as="select" name="color">
                  <option value="">--Please choose an option--</option>
                  <option value="red">red</option>
                  <option value="black">black</option>
                  <option value="yellow">yellow</option>
                  <option value="blue">blue</option>
                  <option value="pink">pink</option>
                  <option value="brown">brown</option>
                </Field>
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Admin;
