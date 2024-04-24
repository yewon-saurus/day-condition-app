import { useEffect, useState } from "react";

import styled from "styled-components";

const RateButtonStyled = styled.div`
font-size: 2em;

span {
    cursor: pointer;
}
`;

const RateButton = (props) => {
    const [star, setStar] = useState([false, false, false, false, false]);

    useEffect(() => {
        setStarAccordingToRate(props.detail.rate);
    }, [props.detail.rate]);
    
    const handleClickRate = (idx) => {
        setStarAccordingToRate(idx);
        props.setDetail({
            ...props.detail,
            rate: idx,
        });
    }

    const setStarAccordingToRate = (howMany) => {
        let dummyStar = new Array(star);
            
        for (let i = 0; i < howMany; i++) {
            dummyStar[i] = true;
        }
        for (let i = howMany; i < 5; i++) {
            dummyStar[i] = false;
        }
    
        setStar(dummyStar);
    }

    return (
        <RateButtonStyled>
            {
                star.map((ele, idx) => (
                    <span key={idx} onClick={() => handleClickRate(idx + 1)}>{ele ? '★' : '☆'}</span>
                ))
            }
        </RateButtonStyled>
    );
}

export default RateButton;