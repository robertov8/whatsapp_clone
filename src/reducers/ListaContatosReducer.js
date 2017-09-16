const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    console.log('teste', action.payload);
    switch(action.type) {
        default:
            return state;
    }
}
