import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import Button from "./ui/Button";
import styled from "styled-components";

const Mainstyle = styled.div`
    text-align: center;
`;

function MainPage (props) {
    const navigate = useNavigate();

    return (
        <Mainstyle>
            <Button title="cp_03" onClick={() => navigate("/cp/3")} />
            <Button title="cp_04" onClick={() => navigate("/cp/4")} />
            <Button title="cp_05" onClick={() => navigate("/cp/5")} /><br/>
            <Button title="cp_06" onClick={() => navigate("/cp/6")} />
            <Button title="cp_07" onClick={() => navigate("/cp/7")} />
            <Button title="cp_08" onClick={() => navigate("/cp/8")} /><br/>
            <Button title="cp_09" onClick={() => navigate("/cp/9")} />
            <Button title="cp_10" onClick={() => navigate("/cp/10")} />
            <Button title="cp_11" onClick={() => navigate("/cp/11")} /><br/>
            <Button title="cp_12" onClick={() => navigate("/cp/12")} />
            <Button title="cp_13" onClick={() => navigate("/cp/13")} />
            <Button title="cp_14" onClick={() => navigate("/cp/14")} /><br/>
            <Button title="cp_15" onClick={() => navigate("/cp/15")} />
        </Mainstyle>
    );
}

export default MainPage;