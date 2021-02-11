import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { actionCreators } from '../state';

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <h3>Repositories Search</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
