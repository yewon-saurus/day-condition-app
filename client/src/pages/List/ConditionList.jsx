import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ListItem from "./ListItem";
import httpRequest from "../../shared/network/request";
import { initConditions } from "../../shared/redux/modules/condition";

const ConditionList = () => {
    const dispatch = useDispatch();

    const conditions = useSelector((state) => state.condition.conditions);

    useEffect(() => {
        dispatch(initConditions()); // 초기 데이터 받아오기
    }, []);

    return (
        <div>
            {
                conditions.map((ele, idx) => <ListItem key={'list_item_' + idx} id={ele.id} date={ele.date} rate={ele.rate} />)
            }
        </div>
    );
}

export default ConditionList;