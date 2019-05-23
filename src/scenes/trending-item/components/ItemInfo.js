import React from "react";
import { FlexDiv } from "../../../components/styled";
import styled from "styled-components";

const S = {
	CountInfo: styled.div`
		p {
			margin-left: 0.2em;
		}
		opacity: 0.5;
	`
};

export const ItemTotalInfo = ({ icon, value }) => {
	return (
		<S.CountInfo>
			<FlexDiv alignItems="center">
				{icon} <p>{value}</p>
			</FlexDiv>
		</S.CountInfo>
	);
};
