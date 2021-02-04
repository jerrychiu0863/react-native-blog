import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

// context
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <Button onPress={addBlogPost} title="Add Post" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
