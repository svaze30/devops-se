// src/__tests__/AdminDashboard.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminDashboard from "../AdminDashboard";

describe("AdminDashboard", () => {
  test("renders admin dashboard sections", () => {
    render(
      <BrowserRouter>
        <AdminDashboard />
      </BrowserRouter>
    );

    expect(screen.getByText(/Admin Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Leave Requests/i)).toBeInTheDocument();
    expect(screen.getByText(/All Employees/i)).toBeInTheDocument();
  });

  test("renders create employee button", () => {
    render(
      <BrowserRouter>
        <AdminDashboard />
      </BrowserRouter>
    );

    expect(screen.getByText(/Create New Employee/i)).toBeInTheDocument();
  });
});
