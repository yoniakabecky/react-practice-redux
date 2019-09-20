const initState = {
  posts: [
    { id: '1', title: 'title 1', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi ullam laborum hic. Ipsa debitis nam eveniet facere quis harum, quibusdam ipsam neque excepturi assumenda cupiditate ab, nihil asperiores sint?' },
    { id: '2', title: 'title 2', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi ullam laborum hic. Ipsa debitis nam eveniet facere quis harum, quibusdam ipsam neque excepturi assumenda cupiditate ab, nihil asperiores sint?' },
    { id: '3', title: 'title 3', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi ullam laborum hic. Ipsa debitis nam eveniet facere quis harum, quibusdam ipsam neque excepturi assumenda cupiditate ab, nihil asperiores sint?' },
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPost = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPost
    }
  }

  return state;
}

export default rootReducer;