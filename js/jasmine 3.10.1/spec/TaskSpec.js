<<<<<<< HEAD
describe("TestStringUtilities", function () {
  it("converts to capital", function () {
    var str = "albert";
    expect(capitalizeName(str)).toEqual("ALBERT");
  });
  it("can handle undefined", function () {
    var str = undefined;
    expect(capitalizeName(str)).toEqual(undefined);
  });
=======
describe("TestStringUtilities", function () {
  it("converts to capital", function () {
    var str = "albert";
    expect(capitalizeName(str)).toEqual("ALBERT");
  });
  it("can handle undefined", function () {
    var str = undefined;
    expect(capitalizeName(str)).toEqual(undefined);
  });
>>>>>>> c38ad0feeb1a8ad2530477d68239c02ed71aecdd
});