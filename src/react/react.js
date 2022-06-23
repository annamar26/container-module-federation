import { generalFetch, modalData } from "../fetch";

const renderer = import("modal/Renderer");


const react = (target) =>
  renderer.then(async (res) => {
    res.renderInVanilla(target, await modalData(), generalFetch);
  });

export default react;
