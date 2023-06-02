import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './context/Theme';
import ClockScreen from './screens/ClockScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
          <ClockScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;