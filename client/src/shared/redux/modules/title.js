const initialState = {
    title: "일주일 컨디션",
};

const INIT = "title/INIT"; // index page 일 때의 title(Header 문구)
const SET = "title/SET"; // detail page(평점 매기기 중) 일 때의 title

const initTitle = () => {
    return {
        type: INIT,
        title: "일주일 컨디션"
    }
}

const setTitle = (date) => {
    return {
        type: SET,
        date: date,
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
            const day = new Date(action.date).getDay();
            let dayTitle = '요일 평점 매기기';

            switch (day) {
                case 0: {
                    dayTitle = '일' + dayTitle;
                    break;
                }
                case 1: {
                    dayTitle = '월' + dayTitle;
                    break;
                }
                case 2: {
                    dayTitle = '화' + dayTitle;
                    break;
                }
                case 3: {
                    dayTitle = '수' + dayTitle;
                    break;
                }
                case 4: {
                    dayTitle = '목' + dayTitle;
                    break;
                }
                case 5: {
                    dayTitle = '금' + dayTitle;
                    break;
                }
                case 6: {
                    dayTitle = '토' + dayTitle;
                    break;
                }
                default: dayTitle = '';
            }

            return {
                ...state,
                title: dayTitle,
            };
        }
        default:
            return state;
    }
}