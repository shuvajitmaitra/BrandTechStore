import './global.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemedApp from './src/components/common/ThemedApp';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemedApp />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
