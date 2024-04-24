import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import RateButton from "./RateButton";
import { initTitle } from "../../shared/redux/modules/title";

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
    const nav = useNavigate();
    const dispatch = useDispatch();

    const handleClickSave = () => {
        // TODO: dispatch the condition modify
        dispatch(initTitle()); // title(Header 문구) 초기화
        nav(-1); // 뒤로 가기, List page로 돌아가기
    }

    return (
        <ConditionDetailStyled>
            <div>
                <span>금</span>
                <RateButton />
            </div>
            <button onClick={handleClickSave}>저장하기</button>
        </ConditionDetailStyled>
    );
}

export default ConditionDetail;