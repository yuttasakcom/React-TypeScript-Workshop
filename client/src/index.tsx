import ReactDOM from 'react-dom';
import { Parent } from './props/Parent';
import { GuestList } from './state/GuestList';

const App = () => {
  return (
    <div>
      Hello, React-TypeScript
      <Parent />
      <hr />
      <GuestList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
