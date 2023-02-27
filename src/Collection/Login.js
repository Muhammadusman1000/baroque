import { Formik } from "formik";
import * as Yup from "yup";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
    .max(15, "your password caractor not more than 15"),
});

function Login() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[35vw] h-[51vh] flex justify-center items-center">
          {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
          <Formik
            validationSchema={schema}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              // Alert the input values of the form that we filled
              alert(JSON.stringify(values));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="login w-full">
                <div className="form ">
                  {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                  <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="flex justify-center items-center flex-col"
                  >
                    <span className="text-4xl text-black text-center mb-3">
                      Login
                    </span>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email id / username"
                      className="form-control inp_text h-15 border-[1px] border-black mb-3"
                      id="email"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password"
                      className="form-control h-15 border-[1px] border-black"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                    {/* Click on submit button to submit the form */}
                    <button type="submit" className="hover:underline mt-3">
                      Forgot Password
                    </button>
                    <button
                      type="submit"
                      className="w-24 h-18 border-2 border-black hover:bg-black hover:text-white m-2"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Login;
