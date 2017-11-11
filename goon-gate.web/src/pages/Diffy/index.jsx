import React, { PureComponent } from "react";
import styled from 'styled-components';

import ImageUploader from "sections/ImageUploader";

import {NoScrollPage} from 'utils/Layout';

const Container = styled(NoScrollPage)`

`

export default class Upload extends PureComponent {
	render() {
		return (
			<Container>
				<ImageUploader />
			</Container>
		);
	}
}
