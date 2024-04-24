import { useState } from "react";

import styled from "styled-components";

const RateButtonStyled = styled.div`
font-size: 2em;

span {
    cursor: pointer;
}
`;

const RateButton = () => {
    const [rate, setRate] = useState([false, false, false, false, false]);

    const handleClickRate = (idx) => {
        let dummyRate = new Array(rate); // 깊은 복사. 얕은 복사 시 rate에 직접 수정을 시도하게 되는 것이므로 깊은 복사 처리해야 한다
        
        for (let i = 0; i < idx; i++) {
            dummyRate[i] = true;
        }
        for (let i = idx; i < 5; i++) {
            dummyRate[i] = false;
        }

        setRate(dummyRate);
    }

    return (
        <RateButtonStyled>
            {
                rate.map((ele, idx) => (
                    <span key={idx} onClick={() => handleClickRate(idx + 1)}>{ele ? '★' : '☆'}</span>
                ))
            }
        </RateButtonStyled>
    );
}

export default RateButton;