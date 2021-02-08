import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

// Components
import BlogPostForm from '../components/BlogPostForm';

// Context
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((post) => post.id === navigation.getParam('id'));

  return (
    <BlogPostForm initialValues={{title: blogPost.title, content: blogPost.content}} />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
