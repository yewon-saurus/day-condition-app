// 한국어 요일 표기를 반환해주는 hook
const useDayKor = (date) => {
    const dayCode = new Date(date).getDay();
    let dayKor = '';

    switch (dayCode) {
        case 0: {
            dayKor = '일';
            break;
        }
        case 1: {
            dayKor = '월';
            break;
        }
        case 2: {
            dayKor = '화';
            break;
        }
        case 3: {
            dayKor = '수';
            break;
        }
        case 4: {
            dayKor = '목';
            break;
        }
        case 5: {
            dayKor = '금';
            break;
        }
        case 6: {
            dayKor = '토';
            break;
        }
    }

    return dayKor;
}

export default useDayKor;