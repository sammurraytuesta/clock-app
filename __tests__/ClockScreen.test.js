import { render } from '@testing-library/react-native';
import ClockScreen from '../src/screens/ClockScreen';

// test if the app renders correctly without crashing
test('renders correctly', async () => {
  render(<ClockScreen/>);
}, 10000);

//check for quote to populate element

//check background image at a time (whether or not the correct image is showing for its time)

//check correct background colors are rendering for time 

//check new quote renders on refresh