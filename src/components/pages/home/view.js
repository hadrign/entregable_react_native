import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {MartianPhotoCard} from '../../molecules';
import {Actions} from 'react-native-router-flux';
import _ from 'loadsh';

class Home extends React.Component {
  componentDidMount() {
    this.props.initMartianPhotosList();
    //this.props.getMartianPhotos();
  }
  _onMartianPhotoPress = (martianPhoto) => {
    console.log('martianPhoto: ', martianPhoto.id);
    this.props.setSelectedMartianPhoto(martianPhoto);
    Actions.push('MartianPhotoDetail');
  };

  _onEndReached = ({distanceFromEnd}) => {
    const {list, total, loading} = this.props;
    const listSize = _.size(list);
    if (!loading && listSize > 0 && listSize < total) {
      this.props.fetchNextMartianPhotosPage();
    }
  };

  _renderItem = ({item, index}) => (
    <MartianPhotoCard
      martianPhoto={item}
      index={index}
      onPress={this._onMartianPhotoPress}
    />
  );

  render() {
    const {list, loading} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => `photo-${item.id}`}
          numColumns={2}
          renderItem={this._renderItem}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.8}
          refreshControl={
            <RefreshControl
              colors={['orange']}
              tintColor={'orange'}
              refreshing={loading}
              onRefresh={this.props.getMartianPhotos}
              title={'Cargando...'}
              titleColor={'orange'}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  initMartianPhotosList: PropTypes.func,
  fetchNextMartianPhotosPage: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  total: PropTypes.number,
  setSelectedMartianPhoto: PropTypes.func,
};

export default Home;
