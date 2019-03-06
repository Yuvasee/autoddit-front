export const addLinkRequest = (status) => ({
  type: 'ADD_LINK_REQUEST',
  payload: { status },
});

export const addLinkFailure = (error) => ({
  type: 'ADD_LINK_FAILURE',
  payload: { error },
});

export const addLinkSuccess = (json) => ({
  type: 'ADD_LINK_SUCCESS',
  payload: { json },
});

export const addLinkFlush = () => ({
  type: 'ADD_LINK_FLUSH',
});

export function addLink(link) {
  return function(dispatch) {
    dispatch(addLinkRequest(true));

    var data = new FormData();
    data.append('image', link.image);
    data.append('title', link.title);
    data.append('user', link.user);

    return fetch(`${process.env.API_URI}/links`, {
      method: 'post',
      body: data
    })
      .then(response => {
        dispatch(addLinkRequest(false));
        return response.json();
      })
      .then(json => dispatch(addLinkSuccess(json)))
      .catch(error => dispatch(addLinkFailure(error)))
  }
}

export const getLinksRequest = (status) => ({
  type: 'GET_LINKS_REQUEST',
  payload: { status },
});

export const getLinksSuccess = (links) => ({
  type: 'GET_LINKS_SUCCESS',
  payload: { links },
});

export const getLinksFailure = (error) => ({
  type: 'GET_LINKS_FAILURE',
  payload: { error },
});

export function getLinks() {
  return function(dispatch) {
    dispatch(getLinksRequest(true));

    return fetch(`${process.env.API_URI}/links`)
      .then(response => {
        dispatch(getLinksRequest(false));
        return response.json();
      })
      .then(json => dispatch(getLinksSuccess(json)))
      .catch(error => dispatch(getLinksFailure(error)))
  }
}
