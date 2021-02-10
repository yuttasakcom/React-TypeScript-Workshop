import React, { useState } from 'react';

const users = [{ id: 1, name: 'Yo' }];

export const UserSearch = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ id: number; name: string } | undefined>();

  const onClick = () => {
    const findUser = users.find((user) => {
      return user.name === name;
    });

    setUser(findUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={onClick}>Search</button>

      {user && user.id}
      {user && user.name}
    </div>
  );
};
