import { render } from '@testing-library/react';
import ToDo from './Todo';

it("renders without crashing", 
  function(){
    render(<ToDo/>);
  });

it("matches the snapshot", () => {
  const { asFragment } = render(<ToDo/>);
  expect(asFragment()).toMatchSnapshot()
});