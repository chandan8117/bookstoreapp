import React from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-screen items-center justify-center">
          <div className=" w-[600px]">
            <div className="modal-box">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
               
                <h3 className="font-bold text-lg">Contact Us</h3>
                <div className="mt-4 space-y-2">
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("name", { required: true })}
                  />
                  <br />
                  {errors.name && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                </div>
                {/* email */}
                <div className="mt-4 space-y-2">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                </div>
                {/* password */}
                <div className="mt-4 space-y-2">
                  <span>Message</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Type your message"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.message && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                </div>
                {/* button */}
                <div className="flex justify-left mt-4">
                  <button className="bg-blue-400 text-white rounded-md px-3py-1 hover:bg-blue-900 duration-200">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
