describe("TestStringUtilities", function () {
  it("converts to capital", function () {
    var str = "albert";
    expect(capitalizeName(str)).toEqual("ALBERT");
  });
  it("can handle undefined", function () {
    var str = undefined;
    expect(capitalizeName(str)).toEqual(undefined);
  });
});