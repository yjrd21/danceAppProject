import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

export default function UploadScreen() {
  const pickVideo = () => {
    launchImageLibrary(
      {
        mediaType: 'video',
        videoQuality: 'high',
      },
      response => {
        if (response.didCancel) {
          Alert.alert('Cancelled', 'Video selection was cancelled.');
        } else if (response.errorMessage) {
          Alert.alert('Error', response.errorMessage);
        } else {
          // Handle the selected video
          console.log(response.assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Video</Text>
      <Button title="Pick a Video" onPress={pickVideo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
