import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Context
import { Context } from '../context/BlogContext';

const ShowScreen = (props) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (post) => post.id === props.navigation.getParam('id')
  );
  console.log(blogPost);
  return (
    <View>
      <Text>
        {blogPost.title} - {props.navigation.getParam('id')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
