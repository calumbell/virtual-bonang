import Pot from "./components/Pot";
export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-3xl">Bonang</h1>
        <section>
          {pots.map((row, i) => (
            <div className="flex gap-2 my-2" key={i}>
              {row.map((note, i) => (
                <Pot note={note} key={i} />
              ))}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

const pots = [
  [6, 5, 3, 2, 1],
  [1, 2, 3, 5, 6],
];
