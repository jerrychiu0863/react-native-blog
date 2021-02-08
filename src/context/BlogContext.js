import createDataContext from './createDataContext';

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'ADD_BLOG_POST' });
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
          title: `Blog Post #${state.length + 1}`,
          id: Math.floor(Math.random() * 9999),
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
  []
);
