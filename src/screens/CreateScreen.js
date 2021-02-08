import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

// Components
import BlogPostForm from '../components/BlogPostForm';

// Context
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onFormSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate('Index');
        });
      }}
    />
  );
};

const styles = StyleSheet.create();

export default CreateScreen;
