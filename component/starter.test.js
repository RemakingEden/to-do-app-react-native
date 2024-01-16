import { render, fireEvent, screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import App from '../App';

test('add task button adds a new task', () => {
  const { getByTestId, getByText } = render(<App />);
  const input = getByTestId('task-text-input');
  const addButton = getByTestId('add-task-button');

  fireEvent.changeText(input, 'New Task');
  fireEvent.press(addButton);

  const newTask = getByTestId('task-item');
  expect(newTask).toBeTruthy();
});

test('add task with no input does not add a new task', () => {
  const { getByTestId, getByText } = render(<App />);
  const input = getByTestId('task-text-input');
  const addButton = getByTestId('add-task-button');

  fireEvent.press(addButton);

  const newTask = screen.queryByTestId('task-item');
  expect(newTask).toBeNull();
});

test('task is removed from input box when added', () => {
  const { getByTestId, getByText } = render(<App />);
  const input = getByTestId('task-text-input');
  const addButton = getByTestId('add-task-button');

  fireEvent.changeText(input, 'New Task');
  fireEvent.press(addButton);

  expect(input).toHaveTextContent('');
});
