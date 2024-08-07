import React from "react";

interface LoginFormProps {
  changeForm: () => void;
}

const Login_Form: React.FC<LoginFormProps> = ({ changeForm }) => {
  return (
    <div>
      <div>
        <form
          action=""
          className=" border border-spacing-1 bg-white shadow-xl flex flex-col p-3 m-3 md:w-[500px] md:mx-auto"
        >
          <h1 className="text-2xl font-bold justify-center flex items-center mt-2 mb-4 text-gray-600">
            Login
          </h1>
          <div className="m-1">
            <label htmlFor="fName">Username:</label>
            <input
              type="text"
              name="fName"
              id="fName"
              className="border border-gray-300 w-full rounded-sm"
            />
          </div>

          <div className="m-1">
            <label htmlFor="Password">Password:</label>
            <input
              type="text"
              name="Password"
              id="Password"
              className="border border-gray-300 w-full rounded-sm"
            />
          </div>

          <button className="mt-4 mx-3 mb-6 p-2 text-white bg-blue-400 rounded-md">
            Login
          </button>

          <div className="h-[50px] relative flex items-center text-xs">
            <p className="text-center">
              Don't have an Account?
              <button className="text-blue-600 m-1" onClick={changeForm}>
                Signup Instead
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login_Form;