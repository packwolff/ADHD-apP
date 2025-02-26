import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const resources = [
  {
    title: "Understanding ADHD",
    description: "Learn about the symptoms, causes, and treatment options for ADHD.",
    url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd"
  },
  {
    title: "ADHD Support Groups",
    description: "Find local and online support groups for individuals with ADHD.",
    url: "https://chadd.org"
  },
  {
    title: "Treatment Options",
    description: "Explore different treatment approaches for managing ADHD.",
    url: "https://www.cdc.gov/ncbddd/adhd/treatment.html"
  }
];

export default function ResourcesScreen() {
  const handleResourcePress = async (url: string) => {
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      await Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>ADHD Resources</Text>
        <Text style={styles.description}>
          Find helpful information and support for understanding and managing ADHD.
        </Text>
        
        <View style={styles.resourcesContainer}>
          {resources.map((resource, index) => (
            <TouchableOpacity
              key={index}
              style={styles.resourceCard}
              onPress={() => handleResourcePress(resource.url)}
            >
              <Text style={styles.resourceTitle}>{resource.title}</Text>
              <Text style={styles.resourceDescription}>{resource.description}</Text>
              <Text style={styles.learnMore}>Learn More →</Text>
            </TouchableOpacity>
          ))}
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
    marginBottom: 16,
    color: '#1f2937',
  },
  description: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 24,
  },
  resourcesContainer: {
    gap: 16,
  },
  resourceCard: {
    backgroundColor: '#f3f4f6',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  resourceDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  learnMore: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '600',
  },
});