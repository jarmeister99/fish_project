import { useEffect, useState } from "react"
import { atom, useRecoilState } from "recoil"
import { Fish, getAllFish } from "../srvc/fish"
import { SelectorEntry } from "./SelectorEntry"

export const fishSelectorState = atom({
    key: 'fishSelectorState',
    default: {}
})

export interface FishCount {
    [key: string]: number
}

// const fish = [
//     {"common_name": "bamboo shrimp"},
//     {"common_name": "black neon tetra"}
// ]

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
            <button onClick={processEntries}>
                Get Fish
            </button>
            {fish.map(f => 
                <SelectorEntry key={f.common_name} name={f.common_name}></SelectorEntry>
            )}
        </div>
    )
}