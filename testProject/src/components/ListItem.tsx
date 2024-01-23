import { Pressable, Touchable, View } from "react-native";
import { Text } from "react-native-paper";
import { IData } from "../interfaces/post.interces";

export type Props = {
  data: IData;
  navigation?: any;
};
const ListItem: React.FC<Props> = ({ data, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("detail",{id: data.id})}>
      <View
        style={{
          flexDirection: "row",
          columnGap: 10,
          alignItems: "center",
          borderColor: "grey",
          borderWidth: 1,
          borderStyle: "solid",
          paddingHorizontal: 6,
          paddingVertical: 3,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "600" }}>{data.id}.</Text>
        <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: "600" }}>
          {data.title}
        </Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
