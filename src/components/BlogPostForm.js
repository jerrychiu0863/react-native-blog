import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BlogPostForm = ({ initialValues, onFormSubmit }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={{ margin: 20 }}>
      <Text>Enter Title:</Text>
      <TextInput
        onChangeText={(title) => setTitle(title)}
        value={title}
        style={styles.input}
        fffff
      />
      <Text>Enter Content:</Text>
      <TextInput
        onChangeText={(content) => setContent(content)}
        value={content}
        style={styles.input}
      />
      <Button
        title="Save Post"
        onPress={() => onFormSubmit(title, content)}
        style={{
          borderWidth: 1,
          borderColor: '#333',
          backgroundColor: '#cccccc',
          height: 30,
        }}
      />
    </View>
  );
};

// Define default props
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 15,
    padding: 5,
  },
});

export default BlogPostForm;
