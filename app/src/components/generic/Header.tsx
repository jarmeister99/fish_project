import { Box, Typography } from "@mui/material";
import { css, SerializedStyles } from "@emotion/react";

interface HeaderContainerProps {
    css?: SerializedStyles;
    className?: string;   
    header: string;
    sub_header: string;
}

const headerStyle = css({
    fontSize: "1.5em",
    fontWeight: '500',
    textAlign: 'center',
})

const subheaderStyle = css({
    fontWeight: '300',
    fontStyle: 'italic',
    textAlign: 'center'
})

const Header = (props: HeaderContainerProps) => {
    return (
        <Box className={props.className}>
            <Typography css={headerStyle}>{props.header}</Typography>
            <Typography css={subheaderStyle}>{props.sub_header}</Typography>
        </Box>
    )
}
export default Header;