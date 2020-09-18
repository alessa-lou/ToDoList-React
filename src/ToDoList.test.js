import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToDoList from './ToDoList';

test('it renders the label', () => {
  render(<ToDoList/>)
  const textBox = screen.getByLabelText(/Add Note/i)
  expect(textBox).toBeInTheDocument();
})

test('it renders the button', () => {
  render(<ToDoList/>)
  const submit = screen.getByLabelText(/Add/i)
  expect(submit).toBeInTheDocument();
})

test('user can add a note to the list', () => {
  render(<ToDoList/>)
  const textbox = screen.getByRole('textbox');
  userEvent.type(textbox, 'Hello I am a note')
  userEvent.click(screen.getByText(/submit/i))
  const todo = screen.getByText(/Hello I am a note/i)
  expect(todo).toBeInTheDocument();
})

// test('it rendered the checkbox', () => {
//   render(<ToDoList/>)
//   const checkbox = screen.getByLabelText(/Checkbox/i)
//   expect(checkbox).toBeInTheDocument();
// })

// test('Checkbox can be checked', () => {
//   render(<ToDoList/>)
//   const checkbox = screen.getByLabelText(/Checkbox/i)
//   expect(checkbox).toBeInTheDocument();
// })