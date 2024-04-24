import styled from "styled-components";
import { useSelector } from "react-redux";

const HeaderStyled = styled.div`
text-align: center;
font-size: 1.2em;
padding: .5em;
`;

const Header = () => {
    const title = useSelector((state) => state.title.title);

    return (
        <HeaderStyled>
            {title}
        </HeaderStyled>
    );
}

export default Header;