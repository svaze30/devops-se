// src/__tests__/Header.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

describe("Header", () => {
  test("renders header with title", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText(/Salary Stream/i)).toBeInTheDocument();
  });

  test("shows login/signup when not authenticated", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Signup/i)).toBeInTheDocument();
  });
});
