import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { atom, useRecoilState } from "recoil"
import { Fish, getAllFish } from "../srvc/fish"
import { SelectorEntry } from "./SelectorEntry"
import { css } from "@emotion/react"

export const fishSelectorState = atom({
    key: 'fishSelectorState',
    default: {}
})

export interface FishCount {
    [key: string]: number
}

const selectorContainerStyle = css`
    display: flex;
    flex-direction: column;
    :first-of-type {
        margin-top: 1rem;
    }
    :last-of-type {
        margin-bottom: 1rem;
    }
`

export const FishSelector: React.FC = () => {
    const [fish, setFish] = useState<Fish[]>([])
    useEffect(() => {
        const fetchFish = async () => {
            const fish = await getAllFish()
            setFish(fish)
        }
        fetchFish();
    }, [])
    const [fishCount] = useRecoilState<FishCount>(fishSelectorState);

    const processEntries = () => {
        console.log(fishCount);
    }

    return (
        <div>
            <Button variant="contained" onClick={processEntries}>
                Get Fish
            </Button>
            <div css={selectorContainerStyle}>
                {fish.map(f => 
                    <SelectorEntry key={f.common_name} name={f.common_name}></SelectorEntry>
                )}
            </div>
        </div>
    )
}