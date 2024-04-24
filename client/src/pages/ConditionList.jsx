import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import httpRequest from "../shared/network/request";
import { initConditions } from "../shared/redux/modules/condition";

const ConditionList = () => {
    const dispatch = useDispatch();

    const conditions = useSelector((state) => state.condition.conditions);

    useEffect(() => {
        dispatch(initConditions());
        console.log(conditions);
    }, []);

    return (
        <div>
            리스트
        </div>
    );
}

export default ConditionList;