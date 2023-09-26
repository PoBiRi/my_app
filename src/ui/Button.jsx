import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const navigate = useNavigate();
    const { title, onClick } = props;
    const na = () => navigate("/")

    return <StyledButton onClick={onClick || na}> {title} </StyledButton>
}

export default Button;