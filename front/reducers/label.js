import produce from 'immer';

const dummyLabelList = [{
    lat: 59.955413,
    lng: 30.337844,
    name: 'T1',
}]

export const initialState = {
    labelList: dummyLabelList,
    loadLabelListErrorReason: '' //LOAD_LABELLIST 에러 이유
};

export const POST_LABELLIST_REQUEST = 'POST_LABELLIST_REQUEST'
export const POST_LABELLIST_SUCCESS = 'POST_LABELLIST_SUCCESS'
export const POST_LABELLIST_FAILURE = 'POST_LABELLIST_FAILURE'


export const LOAD_LABELLIST_REQUEST = 'LOAD_LABELLIST_REQUEST'
export const LOAD_LABELLIST_SUCCESS = 'LOAD_LABELLIST_SUCCESS'
export const LOAD_LABELLIST_FAILURE = 'LOAD_LABELLIST_FAILURE'


export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOAD_LABELLIST_REQUEST: {
                break;
            }
            case LOAD_LABELLIST_SUCCESS: {
                draft.labelList = action.data;
            }
            case LOAD_LABELLIST_FAILURE: {
                draft.loadLabelListErrorReason = action.error;
                break;
            }
            case POST_LABELLIST_REQUEST: {
                break;
            }
            case POST_LABELLIST_SUCCESS: {
                break;
            }
            case POST_LABELLIST_FAILURE: {
                draft.loadLabelListErrorReason = action.error;
                break;
            }
            default: {
                break;
            }
        }
    });
}