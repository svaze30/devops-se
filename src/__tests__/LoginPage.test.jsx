import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../LoginPage";

describe("LoginPage", () => {
  test("renders login form", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    expect(screen.getByText(/Log in to your profile/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  test("handles form submission", async () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /Log In/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);
  });
});
