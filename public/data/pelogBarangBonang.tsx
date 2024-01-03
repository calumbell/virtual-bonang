import { PotData } from "@/types";

const upperRack: Array<PotData> = [
  {
    note: "4",
    src: "/audio/pelog/bnpl-4h.mp3",
    keybind: "q",
  },
  {
    note: "6",
    src: "/audio/pelog/bnpl-6h.mp3",
    keybind: "w",
  },
  {
    note: "5",
    src: "/audio/pelog/bnpl-5h.mp3",
    keybind: "e",
  },
  {
    note: "3",
    src: "/audio/pelog/bnpl-3h.mp3",
    keybind: "r",
  },
  {
    note: "2",
    src: "/audio/pelog/bnpl-2h.mp3",
    keybind: "t",
  },
  {
    note: "7",
    src: "/audio/pelog/bnpl-7h.mp3",
    keybind: "y",
  },
  {
    note: "q",
    src: "/audio/pelog/bnpl-1.mp3",
    keybind: "u",
  },
];

const lowerRack: Array<PotData> = [
  {
    note: "1",
    src: "/audio/pelog/bnpl-1h.mp3",
    keybind: "a",
  },
  {
    note: "u",
    src: "/audio/pelog/bnpl-7.mp3",
    keybind: "s",
  },
  {
    note: "w",
    src: "/audio/pelog/bnpl-2.mp3",
    keybind: "d",
  },
  {
    note: "e",
    src: "/audio/pelog/bnpl-3.mp3",
    keybind: "f",
  },
  {
    note: "t",
    src: "/audio/pelog/bnpl-5.mp3",
    keybind: "g",
  },
  {
    note: "y",
    src: "/audio/pelog/bnpl-6.mp3",
    keybind: "h",
  },
  {
    note: "r",
    src: "/audio/pelog/bnpl-4.mp3",
    keybind: "j",
  },
];

const pelogBarangBonang = [upperRack, lowerRack];
export default pelogBarangBonang;
