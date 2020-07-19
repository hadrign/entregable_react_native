import {connect} from 'react-redux';
import {MartianPhotoForm} from '../../organisms';
import {martianPhotosActions} from '../../../redux/martianPhotos';

const mapStateToProps = (state) => {
  return {
    loading: state.martianPhotos.loading,
    martianPhoto: state.martianPhotos.item,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: (data) => dispatch(martianPhotosActions.postMartianPhoto(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MartianPhotoForm);
