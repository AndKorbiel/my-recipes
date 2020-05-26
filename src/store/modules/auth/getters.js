export default {
    authorizationToken: state => state.isAuthorized,
    expire: state => state.auth && state.auth.exp,
    authToken: state => state.auth.accessToken,
    usersList: state => state.account && state.account.users,
    currentUserName: state => state.currentUserName,
};
