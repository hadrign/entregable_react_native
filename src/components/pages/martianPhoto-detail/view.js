import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import _ from 'lodash';

class MartianPhotoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: _.toString(_.get(props, 'martianPhoto.id', '')),
      earth_date: _.get(props, 'martianPhoto.earth_date', ''),
      image: null,
      errors: {},
    };
  }

  render() {
    const {id, earth_date, image, errors} = this.state;
    const {martianPhoto} = this.props;
    const martianImage = image
      ? {uri: image.uri}
      : martianPhoto
      ? {uri: martianPhoto.img_src}
      : null;

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={martianImage} style={styles.imageBackground} />
        </TouchableOpacity>

        <Text style={styles.text}>{('ID: ', id)}</Text>
        <Text style={styles.text}> {('EARTH DATE: ', earth_date)}</Text>
      </SafeAreaView>
    );
  }
}

export default MartianPhotoDetail;
