import React from "react";
import { FlexDiv, Saperator } from "../../../components/styled";
import styled from "styled-components";

const S = {
	UserInfo: styled(FlexDiv)`
	  align-items: center;
		background-color: #f1f1f1 !important;
		padding: 0.1em;
		img {
			border-radius: 50%;
			width: 1.5em;
			height: 1.5em;
		}
		p {
			font-size: 0.9em !important;
			color: #3380ff;
		}
	`
};

export const UserInfo = ({ avatarUrl, name }) => {
	return (
		<S.UserInfo>
				<img src={avatarUrl} alt={avatarUrl} />
				<Saperator />
				<p>{name}</p>
		</S.UserInfo>
	);
};
