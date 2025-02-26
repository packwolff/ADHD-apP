import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>About This App</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Purpose</Text>
          <Text style={styles.text}>
            This app provides a preliminary screening tool for ADHD symptoms. It is designed to help individuals identify potential ADHD symptoms and facilitate discussions with healthcare professionals.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Important Disclaimer</Text>
          <Text style={styles.text}>
            This app is not a diagnostic tool and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Only qualified healthcare professionals can properly diagnose ADHD.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>When to Seek Help</Text>
          <Text style={styles.text}>
            If you are concerned about ADHD symptoms, please consult with a qualified healthcare provider. They can provide a proper evaluation and discuss appropriate treatment options if needed.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy</Text>
          <Text style={styles.text}>
            This app does not store or transmit any personal information. All screening responses are temporary and are cleared when you close the app.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1f2937',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
  },
});