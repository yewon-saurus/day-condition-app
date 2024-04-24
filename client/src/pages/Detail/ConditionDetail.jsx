import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import httpRequest from "../../shared/network/request";
import useDayKor from "../../shared/hooks/useDayKor";
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
    const params = useParams();

    const [detail, setDetail] = useState({
        id: '',
        date: '',
        rate: '',
    })
    const day = useDayKor(detail.date); // 요일 표기

    useEffect(() => {
        getSetDetail();
    }, []);

    const getSetDetail = async () => {
        const response = await httpRequest('GET', '/conditions/' + params.id);
        setDetail(response.data);
    }

    const handleClickSave = async () => {
        await httpRequest('PATCH', '/conditions/' + params.id, {
            "rate": detail.rate,
        });

        dispatch(initTitle()); // title(Header 문구) 초기화
        nav('/'); // List page로 돌아가기
    }

    return (
        <ConditionDetailStyled>
            <div>
                <span>{day}</span>
                <RateButton detail={detail} setDetail={setDetail} />
            </div>
            <button onClick={handleClickSave}>저장하기</button>
        </ConditionDetailStyled>
    );
}

export default ConditionDetail;