import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './state';

import { EventComponent } from './events/EventComponent';
import { Parent } from './props/Parent';
import { GuestList } from './state/GuestList';
import { UserSearch } from './state/UserSearch';

import { RepositoriesList } from './components/RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        Hello, React-TypeScript
        <Parent />
        <hr />
        <GuestList />
        <hr />
        <UserSearch />
        <hr />
        <EventComponent />
        <hr />
        <RepositoriesList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
