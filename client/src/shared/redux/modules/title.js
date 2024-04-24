const initialState = {
    title: "일주일 컨디션",
};

const INIT = "title/INIT"; // index page 일 때의 title(Header 문구)
const SET = "title/SET"; // detail page(평점 매기기 중) 일 때의 title

export const initTitle = () => {
    return {
        type: INIT,
        title: "일주일 컨디션"
    }
}

export const setTitle = (day) => {
    return {
        type: SET,
        day: day,
    }
}

export default function (state=initialState, action) {
    switch (action.type) {
        case "title/INIT": {
            return {
                ...state,
                title: action.title,
            };
        }
        case "title/SET": {
            let dayTitle = action.day + '요일 평점 매기기';

            return {
                ...state,
                title: dayTitle,
            };
        }
        default:
            return state;
    }
}