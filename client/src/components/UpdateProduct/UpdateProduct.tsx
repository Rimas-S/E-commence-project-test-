import React, { useEffect } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Alert, Button } from "@mui/material";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";

import "./UpdateProduct.scss";

import MySnackbar from "../Snackbar/MyScanckbar";
import { fileToStringArray } from "../../services/services";
import { productSchema } from "./ProductSchema";

const UpdateProduct = () => {
  const [successAndError, setSuccessAndError] = React.useState({});
  const [productById, setProductById] = React.useState<any>({});
  const [initialValues, setInitialValues] = React.useState({
    name: "",
    price: 0,
    size: "",
    color: "",
    image: [""],
    quantity: 0,
    describtion: "",
  });
  const [currentImages, setCurrentImages] = React.useState<any>([""]);

  useEffect(() => {
    if (productById.image) setCurrentImages(productById.image);
  }, [productById.image]);

  const id = "623530fd987ef34223dc93c4";

  // get product by id
  const getProduct = (id: string) => {
    axios
      .get(`http://localhost:5000/api/v1/products/${id}`)
      .then(function (response) {
        setProductById(response.data);
        setSuccessAndError(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        setSuccessAndError({ error: error.message });
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);
  //

  // update data in database
  const updateProduct = (value: any) => {
    console.log(value);

    axios
      .put(`http://localhost:5000/api/v1/products/${id}`, value)
      .then(function (response) {
        setSuccessAndError(response.data);
        console.log(response);
      })
      .catch(function (error) {
        setSuccessAndError({ error: error.message });
        console.log(error);
      });
  };

  // Initial values
  useEffect(() => {
    if (productById.name) {
      const { name, price, size, color, quantity, describtion } = productById;
      setInitialValues({
        name,
        price,
        size,
        color,
        image: [""],
        quantity,
        describtion,
      });
    }
  }, [productById]);

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

  // image delete handler
  function handlerImageDelete(index: number) {
    currentImages.splice(index, 1);
    const newImage = [...currentImages];
    setCurrentImages(newImage);
  }

  return (
    <div className="product-form">
      <div className="product-form__main container flex">
        <h3 className="product-form__title">Update Product</h3>
        <div className="product-form__body">
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={productSchema}
            onSubmit={async (value, { resetForm }) => {
              const stringImage = await fileToStringArray(value.image);
              value.image = [...stringImage, ...currentImages];

              value.image = value.image.filter(function (ele) {
                return ele !== "";
              });

              updateProduct(value);
            }}
          >
            {({ values, setFieldValue, errors, touched }) => (
              <Form>
                <div className="product-form__item">
                  <label className="product-form__item--label">
                    Product Id
                  </label>
                  <div className="product-form__item--field">{id}</div>
                </div>

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
                                if (imageFile !== undefined) {
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
                {currentImages === "" ? (
                  <></>
                ) : (
                  <div className="product-form__item image__grid">
                    {currentImages.map((image: string, index: number) => (
                      <div key={index}>
                        <img
                          className="product-form__item--image"
                          src={image}
                          alt=""
                        />
                        <RemoveIcon
                          className="icon"
                          type="button"
                          onClick={() => {
                            handlerImageDelete(index);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}

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

export default UpdateProduct;
