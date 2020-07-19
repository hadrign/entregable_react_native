import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './styles';

class Button extends React.Component {
  render() {
    const {label, onPress, style, loading} = this.props;
    return (
      <TouchableOpacity
        style={{...styles.button, ...style}}
        onPress={loading ? null : onPress}>
        <Text style={styles.label}>{label}</Text>
        {loading ? (
          <ActivityIndicator
            color={'orange'}
            style={styles.activityIndicator}
          />
        ) : null}
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  onPress: () => {},
  style: {},
};

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
  loading: PropTypes.bool,
};

export default Button;
