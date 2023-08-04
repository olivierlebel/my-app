import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Players from './components/Players';

interface Player {
  id: number;
  name: string;
  position: string;
}

export default function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPlayers();
  }, []);


  const fetchPlayers = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/players/');
      const data = await response.json();
      setPlayers(data.players);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <h1>My React App</h1>
      <h4>Built with ❤️ using MySQL, Python with Django and React with TypeScript</h4>
      <Players players={players} error={error} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
