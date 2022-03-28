import { GET_ALL_QRCODE_INFO_REQUEST_SUCCESS} from "./action";

const initialState ={
    type:null,
    data:null,
    time:null,
};

const reducer = (state = initialState,action) => {
    switch(action.type){
        case GET_ALL_QRCODE_INFO_REQUEST_SUCCESS: {
            const {type, data, time} = action.payload;

            return {
                type,
                data,
                time,
            };
        }
        default:
            return state;
    }
};
export {reducer};
