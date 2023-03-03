import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

const Title = (props) => {
  return <Text style={styles.title}>{props.title}</Text>;
};

Title.defaultProps = {
  title:'Default Title'
}

export default Title;
