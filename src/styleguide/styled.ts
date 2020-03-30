import styled, { CreateStyled } from '@emotion/styled/macro';
import theme from './theme.json';

type Theme = typeof theme;

export default styled as CreateStyled<Theme>;
