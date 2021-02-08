import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import Navigator from './routes/homeStack'
import { NavigationContainer } from '@react-navigation/native'
import thunk from 'redux-thunk'
import navbarReducer from './redux/reducers/navbarReducer'
import mypostsReducer from './redux/reducers/mypostsReducer'
import profilesReducer from './redux/reducers/mypostsReducer'

const reducers = combineReducers({
  navbarData : navbarReducer,
  myPostsData : mypostsReducer,
  profilesData : profilesReducer
})

const store = createStore(reducers, applyMiddleware(thunk))


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </Provider>
  );
}

