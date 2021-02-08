import createDataContext from './createDataContext';

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'DELETE_BLOG_POST', payload: id });
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG_POST':
      return [
        ...state,
        {
          title: action.payload.title,
          id: Math.floor(Math.random() * 9999),
          content: action.payload.content,
        },
      ];
    case 'DELETE_BLOG_POST':
      const filteredBlogPosts = state.filter((post) => {
        return post.id !== action.payload;
      });
      return filteredBlogPosts;
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost },
  [{ title: 'Test Post', content: 'Test Content', id: 1 }]
);
