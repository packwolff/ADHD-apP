import { useEffect } from 'react';
import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load any resources or data here
        await Promise.all([
          // Add any resource loading here
        ]);
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide splash screen
        await SplashScreen.hideAsync();
        // Tell the framework we're ready
        window.frameworkReady?.();
      }
    }

    prepare();
  }, []);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}