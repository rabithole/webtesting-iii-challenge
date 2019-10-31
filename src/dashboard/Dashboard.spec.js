// Test away

// Test away!

// import axios from "axios"
import React from "react";
// no default export, so we're importing everyting from this library
import * as rtl from "@testing-library/react";
// import { render } from "@testing-library/react";
// not importing to a variable, since this just overrides jest global variables
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

// test('Shows the controls', () => {
// 	const wrapper = rtl.render(<Dashboard />);
// 	const controls = wrapper.findByTitle(/Controls/i);
// })

// test('Shows Display', () => {
// 	const wrapper = rtl.render(<Dashboard />);
// 	const display = findByTitle();
// })

test('Shows the controls', () => {
	rtl.expect(render(<Dashboard />)).toMatchSnapshot();
});