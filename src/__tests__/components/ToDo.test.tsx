import { render, screen, fireEvent } from "@testing-library/react";
import ToDo from "../../components/ToDo";


describe("renders ToDo content", () => {
    test("renders component properly", () => {
        render(<ToDo />);
        const titleElement = screen.getByText(/ToDo/i);
        expect(titleElement).toBeInTheDocument();
    });

    test("renders 'add a new task'", () => {
      render(<ToDo />);
      const subtitleElement = screen.getByText(/add a new task/i);
      expect(subtitleElement).toBeInTheDocument();
  });
});
