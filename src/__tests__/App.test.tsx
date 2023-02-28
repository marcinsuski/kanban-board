import { render, screen } from "@testing-library/react";
import App from "../App";

describe("renders main content", () => {
    test("renders Title properly", () => {
        render(<App />);
        const titleElement = screen.getByText(/Kanban Board/i);
        expect(titleElement).toBeInTheDocument();
    });

    test("renders 'add a new task'", () => {
      render(<App />);
      const subtitleElement = screen.getByText(/add a new task/i);
      expect(subtitleElement).toBeInTheDocument();
  });

    test("renders 'ToDo'", () => {
      render(<App />);
      const titleElement2 = screen.getByText(/ToDO/i);
      expect(titleElement2).toBeInTheDocument();
  });
});
