import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

it("renders without crashing", 
  function(){
    render(<TodoList/>);
  });

it("matches the snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot()
});