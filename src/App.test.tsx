import { render, screen } from '@testing-library/react';

import FormSignup from "./LoginForm" ;


test('Initial conditions', () => {
  render(<FormSignup submitForm={undefined} />);
 const confirmButton = screen.getByRole('button', { name: /Start Game/i });
  expect(confirmButton).toBeInTheDocument();
});
