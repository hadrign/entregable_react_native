import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, Image, TouchableOpacity, Text} from 'react-native';
import {Input, Button} from '../../atoms';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import {IMAGE_OPTIONS} from '../../../config/images';
import _ from 'lodash';

class MartianPhotoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      earth_date: '',
      image: null,
      errors: {},
    };
  }

  _onSubmit = () => {
    const {id, earth_date, image} = this.state;
    const {onSubmit} = this.props;

    const errors = {};
    if (!id) {
      errors.id = 'Campo obligatorio';
    }
    if (!earth_date) {
      errors.earth_date = 'Campo obligatorio';
    }

    this.setState({errors});
    if (_.size(errors)) {
      return;
    }

    const data = {
      id: id,
      earth_date: earth_date,
      image:
        image && image.data ? `data:image/jpeg;base64,${image.data}` : null,
    };

    onSubmit(data);
    console.log('He enviado el submit con data: ', data);
  };

  _onSelectImage = () => {
    ImagePicker.showImagePicker(IMAGE_OPTIONS, (response) => {
      if (response.uri) {
        this.setState({image: response});
      }
    });
  };

  render() {
    const {id, earth_date, image, errors} = this.state;
    const {loading, martianPhoto} = this.props;
    const martianImage = image
      ? {uri: image.uri}
      : martianPhoto
      ? {uri: martianPhoto.img_src}
      : null;

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={this._onSelectImage}
          style={styles.imageContainer}>
          <Image source={martianImage} style={styles.imageBackground} />

          <Text style={styles.imageLabel}>
            {image
              ? 'Pulsa para editar la imagen'
              : 'Pulsa para seleccionar una imagen'}
          </Text>
        </TouchableOpacity>

        <Input
          label={'ID'}
          value={id}
          onChangeText={(v) => this.setState({id: v})}
          placeholder={'Introduce el id'}
          style={styles.input}
          error={errors.id}
        />

        <Input
          label={'Fecha (YYYY-MM-DD)'}
          value={earth_date}
          onChangeText={(v) => this.setState({earth_date: v})}
          placeholder={'Introduce la fecha'}
          style={styles.input}
          error={errors.earth_date}
        />

        <Button
          label={'Guardar'}
          loading={loading}
          onPress={() => this._onSubmit()}
          style={styles.button}
        />
      </SafeAreaView>
    );
  }
}

MartianPhotoAdd.propTypes = {
  loading: PropTypes.bool,
  martianPhoto: PropTypes.object,
  martianPhoto: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default MartianPhotoAdd;
