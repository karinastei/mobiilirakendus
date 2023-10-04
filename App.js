import React from 'react';
import {SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/Splash';
import AuthHeader from './src/components/AuthHeader';
import Signup from './src/screens/auth/Signup';
import Input from './src/components/Input';

const App = () => {
  return (
    <SafeAreaView>
       <Signup/>
    </SafeAreaView>
  );
};

export default App;
