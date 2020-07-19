import {connect} from 'react-redux';
import View from './view';
import {martianPhotosActions} from '../../../redux/martianPhotos';

const mapStateToProps = (state) => {
  return {
    martianPhoto: state.martianPhotos.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
