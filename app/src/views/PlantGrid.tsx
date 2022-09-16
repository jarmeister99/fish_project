import { Box, Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import PlantDisplay from "../components/PlantDisplay";
import { getAllPlants, Plant } from "../srvc/plants";

import { css } from "@emotion/react";
import SearchBar from "../components/generic/SearchBar";
import React from "react";

const componentStyle = css({
})

const gridContainerStyle = css({
    gap: "2em",
    padding: "2em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
});

const gridEntryStyle = css`
    height: 500px;
    width: 400px;
    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
        width: 70%;
        height: 800px;
    }
`;

const searchBarStyle = css({
    width: "50%"
});


const PlantGrid: FC<PropsWithChildren<{}>> = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [plants, setPlants] = React.useState<Plant[]>([]);

    React.useEffect(() => {
        getAllPlants().then(plantData => {
            setPlants(plantData);
        })
    }, []);

    const searchPlants = (searchTerm: string) => {
        const newTerm = searchTerm.toLowerCase();
        setSearchTerm(newTerm);
    }

    const applyPlantFilter = (plant: Plant): boolean => {
        return plant.common_name.toLowerCase().includes(searchTerm);
    }

    return (
        <Container css={componentStyle}>
            <SearchBar css={searchBarStyle} onSearch={searchPlants}></SearchBar>
            <Container css={gridContainerStyle}>
                {plants.map(plant => {
                    if (!(applyPlantFilter(plant))) {
                        return null;
                    }
                    return (
                        <Box key={plant.id} css={gridEntryStyle}>
                            <PlantDisplay plant={plant}></PlantDisplay>
                        </Box>
                    )
                })}
            </Container>
        </Container>
    )
};

export default PlantGrid;