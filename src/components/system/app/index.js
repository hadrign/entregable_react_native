import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import {Splash, Home, MartianPhotoAdd, MartianPhotoDetail} from '../../pages';
import colors from '../../../assets/colors';
import {Provider} from 'react-redux';
import store from '../../../config/redux';

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key={'Splash'} component={Splash} hideNavBar={true} />
            <Scene
              key={'Home'}
              component={Home}
              title={'Mars Rover Photos'}
              navigationBarStyle={{backgroundColor: colors.darkOrange}}
              titleStyle={{color: colors.brown}}
              //backButtonTextStyle={{color: colors.white}}
              //backButtonTintColor={colors.white}
              rightTitle={'Crear'}
              onRight={() => Actions.push('MartianPhotoAdd')}
              rightButtonTextStyle={{color: colors.brown}}
            />
            <Scene
              key={'MartianPhotoAdd'}
              component={MartianPhotoAdd}
              navigationBarStyle={{backgroundColor: colors.navbarLightGrey}}
              titleStyle={{color: colors.brown}}
              backButtonTextStyle={{color: colors.brown}}
              backButtonTintColor={colors.brown}
              title={'Crear foto de Marte'}
            />
            <Scene
              key={'MartianPhotoDetail'}
              component={MartianPhotoDetail}
              navigationBarStyle={{backgroundColor: colors.navbarLightGrey}}
              titleStyle={{color: colors.brown}}
              backButtonTextStyle={{color: colors.brown}}
              backButtonTintColor={colors.brown}
              title={'Foto de Marte'}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
