const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola Vinicius, te quedaste sin balon de oro jajaj, baila vini baila");
  });
});
