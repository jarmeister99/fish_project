import { useEffect, useState } from "react"
import { Fish, getAllFish } from "../srvc/fish"
import { SelectorEntry } from "./SelectorEntry"

interface FishCount {
    [key: string]: number
}

export const FishSelector: React.FC = () => {
    // const [fish, setFish] = useState<Fish[]>([])
    // useEffect(() => {
    //     const fetchFish = async () => {
    //         const fish = await getAllFish()
    //         setFish(fish)
    //     }
    //     fetchFish();
    // }, [])
    const [fishCount, setFishCount] = useState<FishCount>({});

    const updateFishCount = (name: string, count: number) => {
        setFishCount({
            ...fishCount,
            [name]: count
        })
    };

    const processEntries = () => {
        console.log(fishCount);
    }

    const fish = [
        {"common_name": "bamboo shrimp"}
    ]
    return (
        <div>
            <button onClick={processEntries}>
                Get Fish
            </button>
            {fish.map(f => 
                <SelectorEntry key={f.common_name} updateCount={updateFishCount.bind(this)} name={f.common_name}></SelectorEntry>
            )}
        </div>
    )
}