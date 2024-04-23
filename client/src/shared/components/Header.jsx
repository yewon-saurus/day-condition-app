import styled from "styled-components";

const HeaderStyled = styled.div`
text-align: center;
font-size: 1.2em;
padding: .5em;
`;

const Header = () => {
    return (
        <HeaderStyled>
            일주일 컨디션
        </HeaderStyled>
    );
}

export default Header;