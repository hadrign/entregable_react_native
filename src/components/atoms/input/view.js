import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, Text, View} from 'react-native';
import styles from './styles';

class Input extends React.Component {
  render() {
    const {value, onChangeText, placeholder, label, error, style} = this.props;
    return (
      <View style={{...styles.container, ...style}}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={'grey'}
          onChangeText={onChangeText}
          underlineColorAndroid={'transparent'}
          value={value}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    );
  }
}

Input.defaultProps = {
  value: '',
  onChangeText: () => {},
  style: {},
};

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  style: PropTypes.any,
};

export default Input;
