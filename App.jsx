import {useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.loop(
      Animated.timing(moonAnimation, {
        toValue: 1,
        duration: 5000, // puedes ajustar la duración a tu gusto
        useNativeDriver: false,
      })
    ).start();
  }, [moonAnimation]);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '79.5%']
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Eclipse 2024 🌒</Text>
      <View style={styles.sun} />
      <Animated.View style={[styles.moon, { left: moonLeft}]} />
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
  text: {
    marginBottom: 400,
  },
  sun: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'yellow',
  },
  moon: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: 'gray',
    
  },
});
