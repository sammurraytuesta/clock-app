import { render } from '@testing-library/react-native';
import App from '../App';

// test if the app renders correctly without crashing
test('renders correctly', async () => {
  render(<App />);
}, 10000);