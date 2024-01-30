import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../Api/auth";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();
  const mutation = signup(navigate);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-beige">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">Create account</h1>
        
        <div className="space-y-4">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Full-Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <button
          className="w-full px-4 py-2 mt-4 text-white bg-[#729384] rounded-md hover:bg-[#729384]"
          onClick={() => {
            mutation.mutate({
              email: email,
              password: password,
              username: username,
            });
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default SignUp;
