import React from 'react';

interface Player {
  id: number;
  name: string;
  position: string;
}

interface PlayersProps {
  players: Player[];
  error: boolean;
}

const Players: React.FC<PlayersProps> = ({ players, error }) => {
  return (
    <div>
      <h2>All Players in my Database</h2>
      <ul>
        {error ? (
          <li style={{ color: 'red' }}>Unexpected error happened</li>
        ) : (
          <>
            {players.map((player) => (
              <li key={player.id}>
                {player.name} - {player.position}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Players;
