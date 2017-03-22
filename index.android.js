import React from 'react';
import { AppRegistry } from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
import JobCategories from './app/scene/JobCategories';
import SubCategories from './app/scene/SubCategories';
import Jobs from './app/scene/Jobs';
import Profile from './app/scene/Profile';
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="jobCat" component={JobCategories} title="Job Categories"/>
    <Scene key="subCat" component={SubCategories} title="Sub Categories"/>
    <Scene key="jobs" component={Jobs} title="Jobs"/>
    <Scene key="profile" component={Profile} title="Profile"/>
  </Scene>
);

class PanayTulong extends React.Component {
  render() {
    return <Router scenes={scenes}/>
  }
}

AppRegistry.registerComponent('PanayTulong', () => PanayTulong);
