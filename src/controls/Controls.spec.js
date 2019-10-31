// Test away

// Test away!

// import axios from "axios"
import React from "react";
// no default export, so we're importing everyting from this library
import * as rtl from "@testing-library/react";
// import { render } from "@testing-library/react";
// not importing to a variable, since this just overrides jest global variables
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(rtl.cleanup);

test('Controls', async () => {
	const wrapper = rtl.render(<Controls />);
	const defaultState = wrapper.getByText(/Lock Gate/i);
})

test('Fire Event Controls', async () => {
	const wrapper = rtl.render(<Controls />);
	rtl.fireEvent.click(wrapper.getByText('Close Gate'));
})

test('Locked position', async () => {
	const wrapper = rtl.render(<Controls />);
	const gateOpenButton = wrapper.getByText(/Open Gate/i);

	if(gateOpenButton === disabled) {
		rtl.fireEvent.click(wrapper.getByText('Close Gate'));	
	}
	
})