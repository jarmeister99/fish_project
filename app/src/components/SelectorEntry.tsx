import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react"
import { useRecoilState } from "recoil";
import { ProgressPlugin } from "webpack";
import { FishCount, fishSelectorState } from "./FishSelector";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface QuantitySelectorProps {
    updateCountCallback: (count: number) => void;
}

const quantitySelectorStyle = css`
    display: flex;
    flex-direction: row;
`

const QuantitySelector: React.FC<PropsWithChildren<QuantitySelectorProps>> = (props: QuantitySelectorProps) => {
    const [count, setCount] = useState<number>(1)
    useEffect(() => {
        props.updateCountCallback(count);
    }, [count])

    const onClickMinus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const onClickPlus = () => {
        setCount(count + 1);
    }

    return (
        // we want to stopPropagation here so we don't trigger the onClick of the parent
        <div onClick={(event) => {event.stopPropagation()}} css={quantitySelectorStyle}>
            <RemoveIcon onClick={onClickMinus} />
            <span>{count}</span>
            <AddIcon onClick={onClickPlus} />
        </div>
    )
}

export interface SelectorEntryProps {
    name: string
}

const selectorEntryStyle = css`
    margin-bottom: 0.25rem;
    width: 25rem;
`
const selectorButtonStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const SelectorEntry: React.FC<PropsWithChildren<SelectorEntryProps>> = (props: SelectorEntryProps) => {
    const [selected, setSelected] = useState<boolean>(false);
    const [fishCount, setFishCount] = useRecoilState<FishCount>(fishSelectorState);

    const toggleSelected = () => {
        if (selected){
            setFishCount({
                ...fishCount,
                [props.name]: 0
            })
        }
        else{
            setFishCount({
                ...fishCount,
                [props.name]: 1
            })
        }
        setSelected(!selected);
    }

    const updateCount = (count: number) => {
        setFishCount({
            ...fishCount,
            [props.name]: count
        });
    }

    return (
        <div css={selectorEntryStyle}>
            <Button css={selectorButtonStyle} disableRipple fullWidth variant="outlined" onClick={toggleSelected}>
                {props.name}
                {selected &&
                    <QuantitySelector updateCountCallback={updateCount.bind(this)}/>
                }
            </Button>

        </div>
    )
}