import React, { useState } from "react";

function Login() {
  const [state, setState] = useState("Sing Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async () => {};
  return (
    <form className="min-h-[80vh] flex items-center ">
      <div className="flex flex-col items-start gap-3 p-8 m-auto min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sing Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sing Up" ? "Create Account" : "Login"} to book
          appointment
        </p>
        {state === "Sing Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="w-full p-2 mt-1 border rounded border-zinc-300"
              type="name"
              onChange={(e) => setName(e.target.name)}
              value={email}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="w-full p-2 mt-1 border rounded border-zinc-300"
            type="email"
            onChange={(e) => setEmail(e.target.email)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="w-full p-2 mt-1 border rounded border-zinc-300"
            type="password"
            onChange={(e) => setPassword(e.target.password)}
            value={password}
            required
          />
        </div>
        <button className="w-full pt-2 pb-2 text-base text-white transition duration-300 ease-in-out delay-150 bg-purple-500 rounded-2xl bg-primary hover:bg-purple-800 hover:shadow-lg hover:-translate-y-1 hover:scale-110">
          {state === "Sing Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sing Up" ? (
          <p>
            {" "}
            Alrady have account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-purple-500 underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Craete an new account?{" "}
            <span
              onClick={() => setState("Sing Up")}
              className="text-purple-500 underline cursor-pointer" 
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
