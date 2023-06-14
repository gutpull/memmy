import React, {useState} from "react";
import {Icon, Input, Text, View, VStack} from "native-base";
import {SearchBar} from "react-native-screens";
import {Ionicons} from "@expo/vector-icons";
import {CommunityView, PostView} from "lemmy-js-client";

const SearchIndexScreen = () => {
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<PostView[] | CommunityView[] | boolean>(false);

    return (
        <VStack>
            <Input
                placeholder={"Search..."}
                borderRadius={4}
                py={3}
                px={1}
                fontSize={14}
                InputLeftElement={<Icon m={2} ml={2} size={6} color={"gray-400"} as={Ionicons} name={"search"} />}
                m={3}
                onChangeText={setSearchText}
                backgroundColor={"white"}
            />
        </VStack>
    );
};

export default SearchIndexScreen;