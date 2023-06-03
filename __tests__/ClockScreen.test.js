import { render } from '@testing-library/react-native';
import ClockScreen from '../src/screens/ClockScreen';

// test if the app renders correctly without crashing
test('renders correctly', async () => {
  render(<ClockScreen/>);
}, 10000);