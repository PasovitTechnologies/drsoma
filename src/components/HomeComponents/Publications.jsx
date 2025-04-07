import { publications } from "../../constants/data";

export default function Publications() {
  return (
    <section id="publications" className="max-w-5xl mx-auto  pt-22 pb-10">
      <div className="text-[#420075] flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h2 className="text-4xl font-semibold ">
          Избранные публикации (Всего более 130)
        </h2>

        <div>
          <a
            href="https://scholar.google.com/citations?user=extI4LAAAAAJ&hl=en&oi=ao"
            className="underline"
          >
            h-index - 17{" "}
          </a>{" "}
          |
          <a
            href="https://scholar.google.com/citations?user=extI4LAAAAAJ&hl=en&oi=ao"
            className="underline"
          >
            {" "}
            i10-index - 27
          </a>
        </div>
      </div>
      <ol className="mt-4 pl-5 md:pl-10 lg:pl-28 space-y-1.5 list-decimal list-outside leading-7 ">
        {publications.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ol>
    </section>
  );
}
