import { useNavigate } from "react-router";

import styled from "styled-components";

import useDayKor from "../../shared/hooks/useDayKor";

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

    const day = useDayKor(props.date); // 무슨 요일이니?

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
            <button onClick={() => {
                nav('/detail/' + props.id);
            }}>수정</button>
        </ListItemStyled>
    );
}

export default ListItem;