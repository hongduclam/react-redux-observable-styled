import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { ReactComponent as IconViewSvg } from "./eye.svg";
import { ReactComponent as IconLikeSvg } from "./heart.svg";
import { ReactComponent as IconCommentSvg } from "./chat.svg";
import { ReactComponent as IconMinusSvg } from "./magnify-minus.svg";
import { ReactComponent as IconPlusSvg } from "./magnify-plus.svg";
import { ReactComponent as IconAttachSvg } from "./attach_file.svg";

const IconWrapper = styled.div`
  > svg {
    width: 1rem;
  }
`;

export const IconView = props => {
  return (
    <IconWrapper {...props}>
      <IconViewSvg />
    </IconWrapper>
  );
};

export const IconLike = props => {
  return (
    <IconWrapper {...props}>
      <IconLikeSvg />
    </IconWrapper>
  );
};

export const IconComment = props => {
  return (
    <IconWrapper {...props}>
      <IconCommentSvg />
    </IconWrapper>
  );
};

export const IconMinus = props => {
  return (
    <IconWrapper {...props}>
      <IconMinusSvg />
    </IconWrapper>
  );
};

export const IconPlus = props => {
  return (
    <IconWrapper {...props}>
      <IconPlusSvg />
    </IconWrapper>
  );
};

export const IconAttach = props => {
  return (
    <IconWrapper {...props}>
      <IconAttachSvg />
    </IconWrapper>
  );
};
