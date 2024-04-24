import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import useDayKor from "../../shared/hooks/useDayKor";
import { setTitle } from "../../shared/redux/modules/title";

const ListItemStyled = styled.div`
display: flex;
justify-content: space-between;
margin: 1em 0;

div {
    padding: 1em;
}

div span {
    padding: 1em;
}

button {
    width: 10em;
}
`;

const ListItem = (props) => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const day = useDayKor(props.date); // 무슨 요일이니?

    const handleClickModify = () => {
        dispatch(setTitle(day)); // title(Header 문구) 수정
        nav('/detail/' + props.id);
    }

    return (
        <ListItemStyled>
            <div>
                <span>{day}</span>
                <span>{
                props.rate > 0
                ? '★'.repeat(props.rate)
                : '-'
                }</span>
            </div>
            <button onClick={handleClickModify}>수정</button>
        </ListItemStyled>
    );
}

export default ListItem;