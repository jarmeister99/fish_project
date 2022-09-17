import axios from 'axios';

export interface FishSearchRequest {
    common_name?: string;
    botanical_name?: string;
}

export interface Fish {
    id: string;
    common_name: string;
    scientific_name: string;
    max_length_inches: number;
}

export interface FishSearchResponse {
    fish: Fish[];
}

export const getAllFish = async () => {
    const res = await axios.get('http://localhost:8000/fish');
    return res.data as Fish[];
}
