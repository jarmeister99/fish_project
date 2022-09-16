import axios from 'axios';

export interface PlantSearchRequest {
    common_name?: string;
    botanical_name?: string;
}

export interface Plant {
    id: number;
    common_name: string;
    botanical_name: string;
    description: string;
    image_url?: string;
}

export interface PlantSearchResponse {
    plants: Plant[];
}

export const getAllPlants = async () => {
    const res = await axios.get('http://localhost:8000/plants');
    return res.data as Plant[];
}
