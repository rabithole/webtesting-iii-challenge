// // Test away

// Test away!

// import axios from "axios"
import React from "react";
// no default export, so we're importing everyting from this library
import * as rtl from "@testing-library/react";
// import { render } from "@testing-library/react";
// not importing to a variable, since this just overrides jest global variables
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

test('Display', () => {
	const wrapper = rtl.render(<Display />);
	const defaultOpen = wrapper.getByText(/Open/i);
});

test('Display', () => {
	expect(rtl.render(<Display /> )).toMatchSnapshot();
});