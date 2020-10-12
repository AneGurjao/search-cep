import { mockedCep, mockedCepInvalid } from "../__mocks__/search";

describe("search cep", () => {
  it("Should return true if cep is valid", () => {
    expect(mockedCep.cep).toBeTruthy();
  });

  it("Should return invalid cep", () => {
    expect(mockedCep.cep.slice(4, 1)).toBeFalsy();
  });

  it("Should return valid cep code after replace index", () => {
    expect(mockedCepInvalid.cep.replace("1", "0")).toBeTruthy();
  });
});
