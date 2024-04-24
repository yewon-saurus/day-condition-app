import styled from "styled-components";

import RateButton from "./RateButton";

const ConditionDetailStyled = styled.div`
div {
    padding: 1em;
    // display: flex;
}

button {
    width: 100%;
    padding: 1em;
}
`;

const ConditionDetail = () => {
    return (
        <ConditionDetailStyled>
            <div>
                <span>금</span>
                <RateButton />
            </div>
            <button>저장하기</button>
        </ConditionDetailStyled>
    );
}

export default ConditionDetail;