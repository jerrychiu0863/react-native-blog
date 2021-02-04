import React, { useReducer } from 'react';

// Pipe of source
const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG_POST':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <BlogContext.Provider
      value={{
        data: state,
        addBlogPost: () => dispatch({ type: 'ADD_BLOG_POST' }),
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
