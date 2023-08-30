interface PotProps {
  note: number;
}

export default function Pot({ note }: PotProps) {
  return (
    <button
      className="bg-red-800 text-white px-4 py-2 aspect-square rounded-full"
      onClick={startSound}
    >
      {note}
    </button>
  );

  function startSound() {
    console.log(note);
  }
}
