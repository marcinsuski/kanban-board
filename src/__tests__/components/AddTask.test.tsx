import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

test("renders button", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
});

describe("rendering modal", () => {
    test("initially does not render modal", () => {
        render(<App />);
        const modalElement = screen.queryByText("Add New Task");
        expect(modalElement).not.toBeInTheDocument();
    });

    test("modal renders correctly when addModal is true", () => {
        render(<App />);
        const addModalButton = screen.getByTitle("openModal");
        fireEvent.click(addModalButton);
        const modalTitle = screen.getByText("Add New Task");
        expect(modalTitle).toBeInTheDocument();
    });
});
