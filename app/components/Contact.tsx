"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

type Data = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xfs1rws",
        "template_2l9z3jn",
        form.current as HTMLFormElement,
        {
          publicKey: "15uoCj4X2XuwHiF-s",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          if (form.current) {
            form.current.reset(); // Reset the form
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="mt-8 min-h-[50vh]" id="contact">
      <div className="flex justify-center p-5">
        <div className=" relative text-6xl text-neutral-500/30">
          CONTACT
          <h1 className="absolute text-white text-2xl -bottom-2 left-[25%] font-bold">
            &mdash; CONTACT
          </h1>
        </div>
      </div>

      <div className=" w-full flex flex-col gap-y-4 md:flex-row justify-between mt-8 lg:w-[90%] lg:mx-auto">
        <div>
          <h2 className=" mb-4 text-3xl font-bold">Get in touch</h2>
          <p className=" mb-4">Have a question or want to reach out?</p>
          <p className=" mb-4">email: edsonmike053@gmail.com</p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className=" text-right w-full md:w-1/2 lg:w-[40%]"
        >
          <div className="w-full flex gap-x-2">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              id="name"
              value={data.name}
              onChange={(e) =>
                setData((prevData) => ({ ...prevData, name: e.target.value }))
              }
              className=" w-full p-2 border-none outline-none mb-2 resize-none"
            />
            <input
              type="email"
              placeholder="Enter email"
              id="email"
              name="user_email"
              value={data.email}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }))
              }
              className=" w-full p-2 border-none outline-none mb-2 resize-none"
            />
          </div>

          <textarea
            rows={7}
            placeholder="Your Message"
            id="message"
            name="message"
            value={data.message}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                message: e.target.value,
              }))
            }
            className=" w-full p-2 border-none outline-none mb-2 resize-none text-black"
          ></textarea>

          <Button className=" py-2 px-6 border-none outline-none cursor-pointer font-bold">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};
