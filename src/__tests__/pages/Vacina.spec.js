import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


import Vacina from "../../pages/Vacina/Create";

describe("Testing Vacina.js", () => {
  // Deve ser possível exibir o elemento h1 na página
  it("should be able to show the h1 element", () => {
    render(<Vacina />);
    let h1Element = screen.getByText(/cadastrar nova vacina/i);

    expect(h1Element).toBeInTheDocument();
  });
  it("should be able to show the Label Total de doses element", () => {
    render(<Vacina />);
    let Element = screen.getByText(/total de doses/i);

    expect(Element).toBeInTheDocument();
  });
  it("should be able to show the Label Nome element", () => {
    render(<Vacina />);
    let Element = screen.getByText(/nome/i);

    expect(Element).toBeInTheDocument();
  });
  it("should be able to show the Label Intervalo element", () => {
    render(<Vacina />);
    let Element = screen.getByText(/intervalo/i);

    expect(Element).toBeInTheDocument();
  });
  it("should be able to show the Button Cadastrar element", () => {
    render(<Vacina />);
    let Element = screen.getByRole('button');

    expect(Element).toBeInTheDocument();
  });
  
});