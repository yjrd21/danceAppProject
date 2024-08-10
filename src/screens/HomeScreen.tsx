import React from 'react';
import { View, Text, Button} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/HomeScreenStyles';

type RootStackParamList = {
  Home: undefined;
  Upload: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the DanceApp</Text>
      <Button
        title="Go to Upload Screen"
        onPress={() => navigation.navigate('Upload')}
      />
    </View>
    );
};
