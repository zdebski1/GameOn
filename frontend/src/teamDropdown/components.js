import React, { useEffect, useState } from 'react';
import { View, Text, Picker } from 'react-native';

export default function TeamDropdown() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    // Fetch teams from your backend using fetch
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:3000/teams');
        if (!response.ok) {
          throw new Error('Failed to fetch teams');
        }
        const data = await response.json(); // Parse the response as JSON
        console.log('Fetched teams:', data); // Log the data to check structure
        setTeams(data); // Set the teams in state
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Select a Team:</Text>
      <Picker
        selectedValue={selectedTeam}
        onValueChange={(itemValue) => setSelectedTeam(itemValue)}
      >
        {teams.map((team) => (
          // Ensure you are using the correct field name 'teamName'
          <Picker.Item key={team.id} label={team.teamName} value={team.teamName} />
        ))}
      </Picker>
    </View>
  );
}
