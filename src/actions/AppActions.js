export const setUser = (name) => ({
  type: 'SET_USER',
  payload: { name },
});

export function addLink(link) {
  return function(dispatch) {
    dispatch({type: 'ADD_LINK_REQUEST'});

    var data = new FormData();
    data.append('image', link.image);
    data.append('title', link.title);

    return fetch(`${process.env.API_URI}/links`, {
      method: 'post',
      body: data
    })
      .then(
        response => response.json(),
        error => dispatch({
          type: 'ADD_LINK_FAILURE',
          payload: error
        })
      )
      .then(
        json => dispatch({
          type: 'ADD_LINK_SUCCESS',
          payload: json
        })
      )
  }
}
