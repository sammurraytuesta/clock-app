import { Text as DefaultText } from 'react-native';
import { useThemeColors } from '../../hooks/useThemeColors';

const Text = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.text, fontSize: 10 },
        style,
      ]}
      {...rest}
    />
  );
};

const TextBold = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.text, fontSize: 18, fontWeight: 'bold', },
        style,
      ]}
      {...rest}
    />
  );
};

const ClockText = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.textAccent, fontSize: 15, },
        style,
      ]}
      {...rest}
    />
  );
};

const ClockTime = ({ style, ...rest }) => {
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.textAccent, fontSize: 90, fontWeight: 'bold', },
        style,
      ]}
      {...rest}
    />
  );
};

export { Text, TextBold, ClockText, ClockTime };
export default Text;