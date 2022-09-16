import { SerializedStyles } from "@emotion/react";
import { Box, TextField } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { css } from '@emotion/react';


interface SearchBarProps {
    css?: SerializedStyles;
    className?: string;   
    onSearch: (searchTerm: string) => void;
}

const componentStyle = css({
    width: "50%",
    margin: "0px auto"
})

const SearchBar: FC<PropsWithChildren<SearchBarProps>> = (props: SearchBarProps) => {
    return (
        <Box css={componentStyle}>
            <TextField fullWidth variant="standard" placeholder="Search" onChange={(e) => props.onSearch(e.target.value)}></TextField>
        </Box>
    );
}

export default SearchBar




