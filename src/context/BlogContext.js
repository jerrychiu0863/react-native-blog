import createDataContext from './createDataContext';

// api
import jsonserver from '../api/jsonserver';

const getBlogPost = (dispatch) => {
  return async () => {
    const res = await jsonserver.get('/blogposts');
    // res.data === [{}, {}]
    dispatch({ type: 'GET_BLOG_POSTS', payload: res.data });
  };
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } });
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'EDIT_BLOG_POST', payload: { title, content, id } });
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
    case 'GET_BLOG_POSTS':
      return action.payload;

    case 'ADD_BLOG_POST':
      return [
        ...state,
        {
          title: action.payload.title,
          id: Math.floor(Math.random() * 9999),
          content: action.payload.content,
        },
      ];

    case 'EDIT_BLOG_POST':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

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
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
