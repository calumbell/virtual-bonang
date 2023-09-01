import Pot from "../components/Pot";
export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-3xl">Bonang</h1>
        <section>
          {pots.map((row, i) => (
            <div className="flex gap-2 my-2" key={i}>
              {row.map((pot, i) => (
                <Pot {...pot} key={i} />
              ))}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

const pots = [
  [
    {
      note: 6,
      src: "/audio/slendro/bnsl-6h.wav",
      keybind: "q",
    },
    {
      note: 5,
      src: "/audio/slendro/bnsl-5h.wav",
      keybind: "w",
    },
    {
      note: 3,
      src: "/audio/slendro/bnsl-3h.wav",
      keybind: "e",
    },
    {
      note: 2,
      src: "/audio/slendro/bnsl-2h.wav",
      keybind: "r",
    },
    {
      note: 1,
      src: "/audio/slendro/bnsl-1h.wav",
      keybind: "t",
    },
  ],
  [
    {
      note: 1,
      src: "/audio/slendro/bnsl-1.wav",
      keybind: "a",
    },
    {
      note: 2,
      src: "/audio/slendro/bnsl-2.wav",
      keybind: "s",
    },
    {
      note: 3,
      src: "/audio/slendro/bnsl-3.wav",
      keybind: "d",
    },
    {
      note: 5,
      src: "/audio/slendro/bnsl-5.wav",
      keybind: "f",
    },
    {
      note: 6,
      src: "/audio/slendro/bnsl-6.wav",
      keybind: "g",
    },
  ],
];
