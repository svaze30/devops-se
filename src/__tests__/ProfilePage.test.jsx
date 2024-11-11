// src/__tests__/ProfilePage.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProfilePage from "../ProfilePage";

describe("ProfilePage", () => {
  test("renders loading state initially", () => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
