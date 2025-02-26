import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabase';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function signInWithEmail() {
    setLoading(true);
    setError(null);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.replace('/(tabs)');
    }
    
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    setError(null);
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.replace('/(tabs)');
    }
    
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADHD Screening App</Text>
      
      {error && <Text style={styles.error}>{error}</Text>}
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={signInWithEmail}
        disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Loading...' : 'Sign In'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={signUpWithEmail}
        disabled={loading}>
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#1f2937',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#6366f1',
  },
  secondaryButtonText: {
    color: '#6366f1',
  },
  error: {
    color: '#ef4444',
    marginBottom: 16,
    textAlign: 'center',
  },
});