import React from "react";
import { FlexDiv } from "../../../components/styled";
import styled from "styled-components";

const CountInfoWrapper = styled.div`
  p {
    margin-left: 0.2em;
  }
  opacity: 0.5;
`;

export const ItemInfo = ({ icon, value }) => {
  return (
    <CountInfoWrapper>
      <FlexDiv alignItems="center">
        {icon} <p>{value}</p>
      </FlexDiv>
    </CountInfoWrapper>
  );
};
