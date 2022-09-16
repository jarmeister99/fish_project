import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { FC, PropsWithChildren, useState } from "react";

export interface ModalProps {
    buttonText: string;
}

const backgroundStyle = css`
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-color: lightgray;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const popupStyle = css`
    position: absolute;
    left: 20%;
    width: 60%;
    top: 20%;
    height: 60%;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
`

const Modal: FC<PropsWithChildren<ModalProps>> = (props: ModalProps) => {
    const [visible, setVisible] = useState(false);

    const handleClickOutside = () => {
        if (setVisible) {
            setVisible(false);
        }
    }

    const handleButtonClick = () => {
        if (visible){
            setVisible(false);
        }
        else {
            setVisible(true);
        }
    }

    if (visible){
        return (
            <div>
                <div css={backgroundStyle} onClick={handleClickOutside.bind(this)}>
                </div>
                <div css={popupStyle}></div>
            </div>
        );
    }
    return (
        <div>
            <Button variant="contained" onClick={handleButtonClick}>{props.buttonText}</Button>
        </div>
    );
}

export default Modal;


