import React, {Component} from 'react';
import {TouchableOpacity, Image, Dimensions} from 'react-native';
import PropType from 'prop-types';
import * as Animatable from 'react-native-animatable';

class MartianPhotoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  async componentDidMount() {
    const callback = (width, height) => {
      const totalWidth = Dimensions.get('window').width;
      const cardWidth = totalWidth / 2;
      const cardHeight = (cardWidth * height) / width;
      this.setState({height: cardHeight, width: cardWidth});
    };

    Image.getSize(this.props.martianPhoto.img_src, callback);
  }

  _onPressButton = () => {
    this.props.onPress(this.props.martianPhoto);
  };

  render() {
    const {martianPhoto, index} = this.props;
    const {height, width} = this.state;
    const animation = index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight';
    return (
      <Animatable.View animation={animation}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Image
            resizeMode={'cover'}
            source={{uri: martianPhoto.img_src}}
            style={{width: width, height: height}}
          />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

MartianPhotoCard.defaultProps = {
  onPress: () => {},
};

MartianPhotoCard.propTypes = {
  martianPhoto: PropType.object.isRequired,
  onPress: PropType.func,
  index: PropType.number,
};

export default MartianPhotoCard;
