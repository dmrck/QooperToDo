import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import SingIn from '../sing-in';

it('shows is required error', () => {
  const [getByTestId] = render(<SingIn />);
  fireEvent.press(getByTestId('Login.Button'));
});

it('shows success login', () => {
  const pushMock = jest.fn();
  const [getByTestId] = render(<SingIn navigation={{push: pushMock}} />);

  fireEvent.changeText(getByTestId('Username.Input'), 'test');
  fireEvent.changeText(getByTestId('Firstname.Input'), 'Furkan');
  fireEvent.changeText(getByTestId('Lastname.Input'), 'Domurcuk');
  fireEvent.press(getByTestId('Login.Button'));

  expect(pushMock).toBeCalledWith('Home');
});
