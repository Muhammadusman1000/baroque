import React from "react";
import { Field, Form, Formik } from "formik";

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};

const CancelllationForm = () => (
  <div className="w-4/6 border-2 border-black mx-auto h-[60vh] my-10">
    <h1 className="uppercase w-full text-center bg-[#777777] text-xl h-20 pt-2 font-bold">
      order cancellation form
    </h1>
    <Formik
      initialValues={{ fullname: "", orderno: "", reason: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {() => (
        <Form>
          <h2 className="uppercase">Full Name</h2>
          <Field type="text" name="fullname" />
          <Field
            as="input"
            name="color"
            placeholder="hu"
            className="border-[1] border-black"
          ></Field>

          <Field name="lastName">
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            }) => (
              <div>
                <label className="uppercase">Reason of Cancellation</label>
                <input type="textarea" {...field} />
              </div>
            )}
          </Field>

          <Field
            name="lastName border-[1px] border-black"
            component={MyInput}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default CancelllationForm;
