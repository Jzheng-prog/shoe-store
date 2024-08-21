import React, { FormEvent } from "react";
import Link from "next/link";

interface LoginFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  error: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit, error }) => {
  return (
    <div className="w-full">
      <form
        className="p-6 w-full flex flex-col justify-between gap-2 
        border bg-white rounded shadow-lg md:w-full"
        onSubmit={handleSubmit}
      >
        {error && <div className="text-black">{error}</div>}
        <h1 className="mb-5 w-full text-2xl font-bold">Sign-in</h1>
        <label className="w-full text-sm">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full h-8 border border-solid border-gray-400 rounded p-2"
          name="email"
        />
        <label className="w-full text-sm">Password</label>
        <div className="flex w-full">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-8 border border-solid border-gray-400 rounded p-2"
            name="password"
          />
        </div>
        <button className="w-full my-3 p-2 bg-blue-400 hover:bg-blue-500 shadow-sm text-white rounded font-bold">
          Login
        </button>

        <Link
          href="/register"
          className="text-sm text-[#888] transition duration-150 ease hover:text-black"
        >
          Dont have an account?
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
