import React from "react";
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react';
import '@testing-library/jest-native/extend-expect';
import Desktop from '../Desktop';

// Imports
// Arrange
// Act
// Assert

const { getByText, getByRole, container, asFragment, debug } = render(<Desktop/>,);

test('Loads the Desktop component', () => {
	expect(asFragment());
});

// Cleanup
cleanup();