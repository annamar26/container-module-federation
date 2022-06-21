import { generalFetch, modalData } from "../fetch";

const renderer = import("modal/Renderer");
const target = document.getElementById("rootReact");

const react = () =>
  renderer.then(async (res) => {
    res.renderInVanilla(target, await modalData(), generalFetch);
  });

export default react;
