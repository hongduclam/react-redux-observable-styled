import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
	
`;

export const Button = ({ children, ...rest }) => {
	return (
		<ButtonWrapper>
			<button {...rest} />
		</ButtonWrapper>
	);
};
