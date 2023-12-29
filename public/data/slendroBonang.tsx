import { PotData } from "@/types";

const upperRack: Array<PotData> = [
  {
    note: "6",
    src: "/audio/slendro/bnsl-6h.mp3",
    keybind: "q",
  },
  {
    note: "5",
    src: "/audio/slendro/bnsl-5h.mp3",
    keybind: "w",
  },
  {
    note: "3",
    src: "/audio/slendro/bnsl-3h.mp3",
    keybind: "e",
  },
  {
    note: "2",
    src: "/audio/slendro/bnsl-2h.mp3",
    keybind: "r",
  },
  {
    note: "!",
    src: "/audio/slendro/bnsl-1h.mp3",
    keybind: "t",
  },
];

const lowerRack: Array<PotData> = [
  {
    note: "1",
    src: "/audio/slendro/bnsl-1.mp3",
    keybind: "a",
  },
  {
    note: "w",
    src: "/audio/slendro/bnsl-2.mp3",
    keybind: "s",
  },
  {
    note: "e",
    src: "/audio/slendro/bnsl-3.mp3",
    keybind: "d",
  },
  {
    note: "t",
    src: "/audio/slendro/bnsl-5.mp3",
    keybind: "f",
  },
  {
    note: "y",
    src: "/audio/slendro/bnsl-6.mp3",
    keybind: "g",
  },
];

const slendroBonang = [upperRack, lowerRack];
export default slendroBonang;
