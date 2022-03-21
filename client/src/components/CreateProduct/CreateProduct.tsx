import React from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Alert, Button } from "@mui/material";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";

import "./CreateProduct.scss";

import MySnackbar from "../Snackbar/MyScanckbar";
import { fileToStringArray } from "../../services/services";
import { productSchema } from "./ProductSchema";

const CreateProduct = () => {
  const [successAndError, setSuccessAndError] = React.useState({});

  // Initial values
  const initialValues = {
    name: "",
    price: 0,
    size: "",
    color: "",
    image: [""],
    quantity: 0,
    describtion: "",
  };

  // saving data in database
  const postProduct = (value: any) => {
    console.log(value);
    
    axios
      .post("http://localhost:5000/api/v1/products", value)
      .then(function (response) {
        setSuccessAndError(response.data);
        console.log(response);
      })
      .catch(function (error) {
        setSuccessAndError({ error: error.message });
        console.log(error);
      });
  };

  // error/success function
  const successAndErrorInfo = (successAndError: any) => {
    if (successAndError.success) {
      return (
        <MySnackbar
          status="success"
          message={successAndError.success}
          setSuccessAndError={setSuccessAndError}
        />
      );
    } else if (successAndError.error) {
      return (
        <MySnackbar
          status="error"
          message={successAndError.error}
          setSuccessAndError={setSuccessAndError}
        />
      );
    }
  };

  return (
    <div className="product-form">
      <div className="product-form__main container flex">
        <h3 className="product-form__title">Create Product</h3>
        <div className="product-form__body">
          <Formik
            initialValues={initialValues}
            validationSchema={productSchema}
            onSubmit={async (value, { resetForm }) => {
              console.log(value.image);
              
              const stringImage = await fileToStringArray(value.image);
              value.image = stringImage;
              console.log(value.image);
              postProduct(value);
            }}
          >
            {({ values, setFieldValue, errors, touched }) => (
              <Form>
                <div className="product-form__item">
                  <label className="product-form__item--label" htmlFor="name">
                    Product name
                  </label>
                  <Field
                    className="product-form__item--field"
                    id="name"
                    name="name"
                    placeholder="T-Shirt"
                  />
                  <ErrorMessage
                    name="name"
                    render={(msg) => <Alert severity="error">{msg}</Alert>}
                  />
                </div>

                <div className="product-form__item">
                  <label className="product-form__item--label" htmlFor="price">
                    Price
                  </label>
                  <Field
                    className="product-form__item--field"
                    id="price"
                    name="price"
                  />
                  <ErrorMessage
                    name="price"
                    render={(msg) => <Alert severity="error">{msg}</Alert>}
                  />
                </div>

                <div className="product-form__item">
                  <label className="product-form__item--label" htmlFor="size">
                    Choose a size:
                  </label>
                  <Field
                    className="product-form__item--field"
                    as="select"
                    name="size"
                  >
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

                <div className="product-form__item">
                  <label className="product-form__item--label" htmlFor="color">
                    Choose a color:
                  </label>
                  <Field
                    className="product-form__item--field"
                    as="select"
                    name="color"
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="red">red</option>
                    <option value="black">black</option>
                    <option value="yellow">yellow</option>
                    <option value="blue">blue</option>
                    <option value="pink">pink</option>
                    <option value="brown">brown</option>
                  </Field>
                </div>

                <div className="product-form__item">
                  <label className="product-form__item--label" htmlFor="price">
                    Quantity
                  </label>
                  <Field
                    className="product-form__item--field"
                    id="quantity"
                    name="quantity"
                  />
                  <ErrorMessage
                    render={(msg) => <Alert severity="error">{msg}</Alert>}
                    name="quantity"
                  />
                </div>

                <div className="product-form__item">
                  <label
                    className="product-form__item--label"
                    htmlFor="describtion"
                  >
                    Describtion
                  </label>
                  <Field
                    component="textarea"
                    placeholder="Detail of product..."
                    className="product-form__item--field describtion"
                    id="describtion"
                    name="describtion"
                  />
                  <ErrorMessage
                    name="describtion"
                    render={(msg) => <Alert severity="error">{msg}</Alert>}
                  />
                </div>

                <div className="product-form__item">
                  <FieldArray name="image">
                    {({ push, remove }) => (
                      <>
                        <label
                          className="product-form__item--label"
                          htmlFor="image"
                        >
                          Image
                        </label>
                        {values.image.map((im, index) => (
                          <div
                            key={index}
                            className="product-form__item--field upload-field"
                          >
                            <input
                              type="file"
                              name={`image[${index}]`}
                              id="image"
                              onChange={(e: any) => {
                                let imageFile = e.currentTarget.files[0];
                                console.log(imageFile);
                                if (imageFile !== undefined){
                                  setFieldValue(`image[${index}]`, imageFile);
                                 } else {
                                  setFieldValue(`image[${index}]`, "");
                                 }
                              }}
                            />
                            <AddIcon
                              className="icon add"
                              type="button"
                              onClick={() => push("")}
                            />
                            {index > 0 ? (
                              <RemoveIcon
                                className="icon delete"
                                type="button"
                                onClick={() => remove(index)}
                              />
                            ) : (
                              ""
                            )}
                            <ErrorMessage
                              render={(msg) => (
                                <Alert severity="error">{msg}</Alert>
                              )}
                              name={`image[${index}]`}
                            />
                          </div>
                        ))}
                      </>
                    )}
                  </FieldArray>
                </div>

                <div className="product-form__item">
                  <Button
                    variant="contained"
                    className="product-form__item--submit"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {successAndErrorInfo(successAndError)}
    </div>
  );
};

export default CreateProduct;
