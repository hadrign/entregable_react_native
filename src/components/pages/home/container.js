import {connect} from 'react-redux';
import View from './view';
import {martianPhotosActions} from '../../../redux/martianPhotos';
import {State} from 'react-native-gesture-handler';

const mapStateProps = (state) => {
  return {
    list: state.martianPhotos.list,
    loading: state.martianPhotos.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initMartianPhotosList: () => dispatch(martianPhotosActions.initList()),
    //getMartianPhotos: () => dispatch(martianPhotosActions.fetchMartianPhotos()),
    fetchNextMartianPhotosPage: () =>
      dispatch(martianPhotosActions.fetchNextPage()),
    setSelectedMartianPhoto: (martianPhoto) =>
      dispatch(martianPhotosActions.setItem(martianPhoto)),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(View);
