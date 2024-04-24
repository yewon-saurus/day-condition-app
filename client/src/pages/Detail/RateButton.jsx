import styled from "styled-components";

const RateButtonStyled = styled.div`
font-size: 2em;
`;

const RateButton = () => {
    return (
        <RateButtonStyled>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
        </RateButtonStyled>
    );
}

export default RateButton;