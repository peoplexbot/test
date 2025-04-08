import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFDD00', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>🔥 It works! 🔥</Text>
      <StatusBar style="auto" />
    </View>
  );
}
