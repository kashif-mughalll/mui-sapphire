import { styled as muiStyled } from "@mui/system";

const Styled = (type, style) => typeof style === 'object' ? muiStyled(type)(style) : muiStyled(type)`${style}`

export default Styled;