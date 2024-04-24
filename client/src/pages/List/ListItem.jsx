import { useEffect, useState } from "react";
import useDayKor from "../../shared/hooks/useDayKor";

const ListItem = (props) => {
    const day = useDayKor(props.date); // 무슨 요일이니?

    return (
        <div>
            <span>
                <span>{day}</span>
                <span>{props.rate}</span>
            </span>
            <button>수정</button>
        </div>
    );
}

export default ListItem;