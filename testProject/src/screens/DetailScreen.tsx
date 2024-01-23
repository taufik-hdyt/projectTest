import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import { IData } from "../interfaces/post.interces";

const DetailScreen: React.FC = ({ navigation, route }: any) => {
  const id = route.params.id;

  const { data } = useQuery<IData>({
    queryKey: ["detail"],
    queryFn: async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return response.data;
    },
  });
  return (
    <>
       <Appbar.Header
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("home screen");
          }}
        />
        <Text style={{ fontWeight: "700" }}>Back</Text>
      </Appbar.Header>
    
      <View style={{paddingHorizontal:10,marginTop:100}}>
        <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 25 }}>
          {data?.title}
        </Text>
        <Text style={{ textAlign: "justify", marginTop: 20 }}>{data?.body}</Text>
      </View>
    
    </>
  );
};

export default DetailScreen;
