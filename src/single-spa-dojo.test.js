import singleSpaDojo from "./single-spa-dojo";

describe("single-spa-dojo", () => {
  it("can bootstrap, mount, and unmount", () => {
    const lifecycles = singleSpaDojo({});

    const props = { name: "test" };

    return lifecycles
      .bootstrap(props)
      .then(() => lifecycles.mount(props))
      .then(() => lifecycles.unmount(props));
  });
});
