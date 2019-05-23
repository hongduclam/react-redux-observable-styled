import styled from "styled-components";

const Saperator = styled.span`
  width: 1vw;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  width: ${props => props.width};
  flex: ${props => props.flex};
`;

const BackDrop = styled.div`
  opacity: 0.85;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: ${props => (props.show ? 100 : 0)};
  transition: all .25s ease-out;
  display: ${props => (props.show ? 'block' : 'none')};
`;
BackDrop.displayName = "BackDropWrapper";
export { Saperator, FlexDiv, BackDrop };
