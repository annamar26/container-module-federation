const vanillaHeader = import("button/Button");

const vanilla = () =>
  vanillaHeader.then((res) => {
    const { header } = res.headerF();
    document.getElementById("rootVanilla").append(header);
  });

export default vanilla;
