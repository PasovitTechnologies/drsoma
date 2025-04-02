import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import MapSection from "../components/MapSection";

const Contact = () => {
  return (
    <section className="container mx-auto text-[rgb(59,59,59)] pt-6">
      <h2 className="text-center text-xl font-semibold text-[rgb(15,58,97)]">
        Let's Connect
      </h2>
      <h1 className="text-center text-[3.5rem] font-bold text-[rgb(15,58,97)] ">
        Contact
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 border  ">
        {/* Contact Information */}
        <div className="border-r flex flex-col py-8 px-6 md:px-46 ">
          <div className="flex  justify-between">
            <div className="mb-6 flex flex-col gap-4">
              <Mail />
              <p className="font-bold font-syne text-[rgb(15,58,97)] text-xl">
                Email
              </p>
              <p className=" font-questrial ">drsroma@gmail.com</p>
            </div>
            <div className="mb-6 flex flex-col gap-4">
              <Phone />
              <p className="font-bold font-syne text-[rgb(15,58,97)] text-xl">
                Phone
              </p>
              <a
                href="https://wa.me/79153333066"
                target="_blank"
                className=" font-questrial"
              >
                +7 915 333 30 66 <br />{" "}
                <span className="font-syne">[WhatsApp]</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <MapPin />
            <p className="font-bold font-syne text-[rgb(15,58,97)] text-xl ">
              Address
            </p>
            <p className="text-gray-600 font-questrial">
              Автономная некоммерческая организация «Научно-образовательный
              центр «Евразийская онкологическая программа» ЕАФО» 125080, Москва,
              Россия, Волоколамское шоссе, д. 1, офис 606C
            </p>
          </div>
        </div>
        {/* Contact Form */}
        <div className="py-8 px-6 md:px-30">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="text-sm ">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="border p-2 w-full mt-1"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-sm ">
                Last Name
              </label>

              <input
                type="text"
                id="lastName"
                className="border p-2 w-full mt-1"
              />
            </div>
          </div>
          <label htmlFor="email" className="text-sm ">
            Email *
          </label>

          <input
            type="email"
            id="email"
            className="border p-2 w-full mt-1 mb-4"
          />
          <label htmlFor="message" className="text-sm ">
            Message
          </label>

          <textarea
            id="message"
            className="border p-2 w-full mt-1 mb-4 h-24"
          ></textarea>
          <button className="bg-[#ff8878] text-sm cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#ff8878] border border-[#ff8878] text-white py-2 px-6 rounded w-full">
            Send
          </button>
        </div>
      </div>
      <div className="">
        <MapSection />
      </div>
    </section>
  );
};

export default Contact;
