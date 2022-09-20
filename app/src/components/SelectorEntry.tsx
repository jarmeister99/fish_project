import { css } from "@emotion/react";
import { PropsWithChildren, useEffect, useState } from "react"

interface QuantitySelectorProps {
    updateCount: (count: number) => void;
}

const quantitySelectorStyle = css`
    display: flex;
    flex-direction: row;
`

const QuantitySelector: React.FC<PropsWithChildren<QuantitySelectorProps>> = (props: QuantitySelectorProps) => {
    const [count, setCount] = useState<number>(0)
    useEffect(() => {
        props.updateCount(count);
    }, [count])


    const onClickMinus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const onClickPlus = () => {
        setCount(count + 1);
    }

    return (
        <div css={quantitySelectorStyle}>
            <button onClick={onClickMinus}>-</button>
            <span>{count}</span>
            <button onClick={onClickPlus}>+</button>
        </div>
    )
}

export interface SelectorEntryProps {
    name: string
    updateCount: (name: string, count: number) => void;
}

const selectorEntryStyle = css`
    display: flex;
    flex-direction: row;
`

export const SelectorEntry: React.FC<PropsWithChildren<SelectorEntryProps>> = (props: SelectorEntryProps) => {
    const [selected, setSelected] = useState<boolean>(false);

    const toggleSelected = () => {
        if (selected){
            props.updateCount(props.name, 0);
        }
        setSelected(!selected);
    }

    return (
        <div css={selectorEntryStyle}>
            <button onClick={toggleSelected}>{props.name}</button>
            {selected &&
                <QuantitySelector updateCount={(count: number) => {
                    props.updateCount(props.name, count)
                }} />
            }
        </div>
    )
}