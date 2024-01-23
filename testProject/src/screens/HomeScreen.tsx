import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import ListItem from "../components/ListItem";
import { IData } from "../interfaces/post.interces";

const HomeScreen: React.FC = ({navigation}:any) => {
  const { data, isLoading } = useQuery<IData[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#3081D0" />

      <View
        style={{ justifyContent: "center", flex: 1, alignContent: "center" }}
      >
        {isLoading && (
          <View>
            <ActivityIndicator
              animating={true}
              size={50}
              color={MD2Colors.blue600}
            />
          </View>
        )}

        {data && (
          <View style={{ paddingHorizontal: 10,paddingTop:5 }}>
            <ScrollView>
              <View
                style={{
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {data?.map((data: IData, idx: number) => (
                  <ListItem key={idx} data={data} navigation={navigation} />
                ))}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
