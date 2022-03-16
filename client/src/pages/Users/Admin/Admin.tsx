import "./Admin.scss";

import { Formik, Form, Field } from "formik";

const Admin = () => {
  return (
    <>
      <Formik
        initialValues={{ firstName: "" }}
        onSubmit={(value) => console.log(value)}
      >
        <Form>
          <label htmlFor="firstName" placeholder="First Name"></label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default Admin;
