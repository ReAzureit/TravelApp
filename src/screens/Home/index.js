import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/Title';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Title title={'Where do you want to go? '}/>
        <Title />
      </View>
    </SafeAreaView>
  );
};

export default Home;
