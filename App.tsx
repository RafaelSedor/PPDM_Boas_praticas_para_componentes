import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import CustomComponent from './src/components/CustomComponent';
import Card from './src/components/Card';
import { mockData } from './src/mocks/data';

const App: React.FC = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <View style={styles.container}>
      <CustomComponent title="My Custom Component" onButtonClick={handleButtonClick} />
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Header>{item.name} - Header</Card.Header>
            <Card.Body>{item.name} - Body</Card.Body>
            <Card.Footer>{item.name} - Footer</Card.Footer>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
