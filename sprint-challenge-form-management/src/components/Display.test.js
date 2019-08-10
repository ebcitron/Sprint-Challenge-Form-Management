import React from 'react';
import * as rtl from '@testing-library/react';
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
const wrapper = rtl.render(
    <Display/>
);
expect(wrapper.getByLabelText(/hello/i));
});