import React from 'react';
import { View, Text, Button } from 'react-native';

interface CustomComponentProps {
  title: string;
  onButtonClick: () => void;
}

const CustomComponent: React.FC<CustomComponentProps> = ({ title, onButtonClick }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button title="Click Me" onPress={onButtonClick} />
    </View>
  );
};

export default CustomComponent;
