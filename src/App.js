import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import Button from "./ui/Button";

import MainPage from "./MainPage";
import Library from './cp_03/Library';
import Clock from './cp_04/Clock';
import CommentList from './cp_05/CommentList';
import NotificationList from './cp_06/NotificationList';
import Accommodate from './cp_07/Accommodate';
import ConfirmButton from './cp_08/ConfirmButton';
import LandingPage from './cp_09/LandingPage';
import AttendanceBook from './cp_10/AttendanceBook';
import SignUp from './cp_11/SignUp';
import Calculator from './cp_12/Calculator';
import ProfileCard from './cp_13/ProfileCard';
import DarkOrLight from './cp_14/DarkOrLight';
import Blocks from './cp_15/Blocks';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bolxd;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>
        <Button title="메인화면" /><br/>
        PoBiRi's React Examples
      </MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/cp/3" element={<Library />} />
        <Route path="/cp/4" element={<Clock />} />
        <Route path="/cp/5" element={<CommentList />} />
        <Route path="/cp/6" element={<NotificationList />} />
        <Route path="/cp/7" element={<Accommodate />} />
        <Route path="/cp/8" element={<ConfirmButton />} />
        <Route path="/cp/9" element={<LandingPage />} />
        <Route path="/cp/10" element={<AttendanceBook />} />
        <Route path="/cp/11" element={<SignUp />} />
        <Route path="/cp/12" element={<Calculator />} />
        <Route path="/cp/13" element={<ProfileCard />} />
        <Route path="/cp/14" element={<DarkOrLight />} />
        <Route path="/cp/15" element={<Blocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
