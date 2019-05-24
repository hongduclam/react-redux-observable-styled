import React from "react";
import { FlexDiv } from "../../../components/styled";
import styled from "styled-components";

const S = {
	CountInfo: styled(FlexDiv)`
		align-items: center;
		p {
			margin-left: 0.2em;
		}
		opacity: 0.5;
	`
};

export const ItemTotalInfo = ({ icon, value }) => {
	return (
		<S.CountInfo>
			{icon} <p>{value}</p>
		</S.CountInfo>
	);
};
