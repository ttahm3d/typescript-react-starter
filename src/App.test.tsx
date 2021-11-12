import { render, screen } from "@testing-library/react";
import App from "./App";

it("does something", () => {
	render(<App />);
	const text = screen.getByText(/React starter/i);
	expect(text).toBeInTheDocument();
});
