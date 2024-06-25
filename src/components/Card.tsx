import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardHeader: React.FC = ({ children }) => (
  <View style={styles.header}>
    <Text>{children}</Text>
  </View>
);

const CardBody: React.FC = ({ children }) => (
  <View style={styles.body}>
    <Text>{children}</Text>
  </View>
);

const CardFooter: React.FC = ({ children }) => (
  <View style={styles.footer}>
    <Text>{children}</Text>
  </View>
);

const Card: React.FC & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
} = ({ children }) => (
  <View style={styles.card}>
    {children}
  </View>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  header: {
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  body: {
    paddingVertical: 10,
  },
  footer: {
    borderTopWidth: 1,
    paddingTop: 5,
  },
});

export default Card;
