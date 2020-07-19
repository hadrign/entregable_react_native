import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {},
  label: {
    marginLeft: 10,
    color: colors.brown,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  input: {
    color: colors.brown,
    fontSize: 16,
    minHeight: 40,
    backgroundColor: colors.mainGrey,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    fontSize: 14,
    textAlign: 'right',
    marginTop: 6,
    textTransform: 'lowercase',
  },
});
export default styles;
