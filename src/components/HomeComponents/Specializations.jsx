import { specializations } from "../../constants/data";

export default function Specializations() {
  return (
    <section id="specializations" className="max-w-5xl  mx-auto  pt-22">
      <h2 className="text-4xl font-semibold text-[#420075]">Специализации</h2>
      <ul className="mt-4 pl-4 md:pl-28 space-y-2 list-disc list-outside ">
        {specializations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
