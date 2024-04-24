import httpRequest from "../../network/request";

const initialState = {
    conditions: []
}

const INIT = "condition/INIT"; // 네트워크 요청을 통해 받아온 response로 초기화 해주는 단계

export const initConditions = () => async (dispatch) => {
    try {
        const response = await httpRequest('GET', '/conditions');
        const conditions = response.data;

        dispatch({
            type: INIT,
            request: conditions,
        });
    } catch (e) {
        console.error(e);
    }
}

export default function (state=initialState, action) {
    switch (action.type) {
        case "condition/INIT": {
            return {
                ...state,
                conditions: action.request,
            };
        }

        default:
            return state;
    }
}