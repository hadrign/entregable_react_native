import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  imageContainer: {
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 8,
    marginHorizontal: 20,
    height: 200,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  imageLabel: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  text: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default styles;
