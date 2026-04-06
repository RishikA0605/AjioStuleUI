import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const submitHandler = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-[85vh] bg-gray-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: "4s" }}></div>

      <div className="relative w-full max-w-md z-10">
        <form
          className="flex flex-col gap-6 bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="text-center mb-4">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back</h2>
            <p className="text-gray-500 mt-2 text-sm">Please enter your details to sign in.</p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Email</label>
            <input
              {...register("email")}
              className="border border-gray-300 bg-white/50 px-4 rounded-xl py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs font-medium pl-1">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <input
              {...register("password")}
              className="border border-gray-300 bg-white/50 px-4 rounded-xl py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm"
              type="password"
              placeholder="••••••••"
            />
            {errors.password && (
              <span className="text-red-500 text-xs font-medium pl-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl py-3 mt-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
