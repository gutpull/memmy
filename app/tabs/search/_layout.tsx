import React from "react";
import {Stack} from "expo-router";

const SearchLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name={"index"}
                options={{
                    title: "Search"
                }}
            />
        </Stack>
    );
};

export default SearchLayout;