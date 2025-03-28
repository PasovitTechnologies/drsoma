import React from "react";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Component displaying contact information of the organization
 *
 * @returns JSX.Element
 */
/******  4f97f41f-ffb3-47fb-ac02-1c0bffbe5e5c  *******/
const Contacts = () => {
  return (
    <div className="text-center  h-[80vh] font-bold text-xl md:text-2xl flex flex-col  justify-center text-[rgb(40,41,66)] px-4 ">
      <p className="mb-3">Автономная некоммерческая организация</p>
      <p className="mb-3">
        «Научно-образовательный центр «Евразийская онкологическая программа»
        ЕАФО»
      </p>
      <p className="mt-3">
        125080, Москва, Россия, Волоколамское шоссе, д. 1, офис 606C​
      </p>
      <p className="mt-3 font-normal flex flex-col md:flex-row mx-auto md:gap-3">
        <a href="mailto:drsoma@gmail.com" className=" underline">
          drsoma@gmail.com
        </a>{" "}
        |{" "}
        <a
          href="https://wa.me/79153333066"
          className=" "
          target="_blank"
          rel="noopener noreferrer"
        >
          +7 915 333 30 66 [WhatsApp]
        </a>
      </p>
    </div>
  );
};

export default Contacts;
