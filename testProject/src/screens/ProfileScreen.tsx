import { Linking, ScrollView, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  TouchableRipple,
} from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const ProfileScreen: React.FC = () => {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  const projectsData = [
    {
      type: "Web",
      name: "Circle",
      link: "https://circleapp.vercel.app/",
      source: "https://github.com/taufik-hdyt/circle-app",
      image: "https://i.imgur.com/yJpoXx9.png",
    },
    {
      type: "Mobile Android",
      name: "Kuis Sadika App",
      link: "",
      source: "https://github.com/taufik-hdyt/KUIS-SADIKA-APP",
      image:
        "https://res.cloudinary.com/doushe6hn/image/upload/v1703022323/porto/b0rrbh4wi1gmewtaqmxe.png",
    },
    {
      type: "Web",
      name: "Ecommerce Thm Store",
      link: "https://thm-store.vercel.app/",
      source: "hhttps://github.com/taufik-hdyt/thm-store",
      image:
        "https://res.cloudinary.com/doushe6hn/image/upload/v1703062448/porto/vz8asbkpitqxisllvsyy.png",
    },
    {
      type: "Aplikasi Android",
      name: "Kumpulan Doa Lengkap",
      image: "https://i.imgur.com/bUXGquf.png",
      link: "",
      source: "",
    },
  ];
  return (
    <ScrollView>
      <View style={{ paddingBottom: 10 }}>
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <Avatar.Text size={100} label="TH" />
          <Text style={{ marginTop: 10, fontSize: 24 }}>Taufik Hidayat</Text>

          <View style={{ flexDirection: "row", gap: 5, marginTop: 5 }}>
            <TouchableRipple
              onPress={() => openLink("https://github.com/taufik-hdyt")}
            >
              <AntDesign size={24} color="#3081D0" name="github" />
            </TouchableRipple>

            <TouchableRipple
              onPress={() =>
                openLink("https://www.instagram.com/taufikhdyt.id/")
              }
            >
              <AntDesign size={24} color="#3081D0" name="instagram" />
            </TouchableRipple>
            <TouchableRipple
              onPress={() =>
                openLink("https://www.linkedin.com/in/taufik-hdyt2519/")
              }
            >
              <AntDesign size={24} color="#3081D0" name="linkedin-square" />
            </TouchableRipple>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Entypo size={24} color="#3081D0" name="grid" />
            <Text style={{ fontWeight: "700" }}>Projects</Text>
          </View>

          <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
            {projectsData.map((data, idx: number) => (
              <CardProject key={idx} data={data} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

interface IProject {
  data?: any;
}
const CardProject = ({ data }: IProject) => {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <Card style={{ width: 340 }}>
      <Card.Cover source={{ uri: data.image }} />
      <Text style={{ fontWeight: "700", fontSize: 20, paddingHorizontal: 10 }}>
        {data.name}
      </Text>
      <Text style={{ fontWeight: "600", fontSize: 14, paddingHorizontal: 10 }}>
        {data.type}
      </Text>

      <View style={{ padding: 10, flexDirection: "row", gap: 5 }}>
        {data.source !== "" && (
          <TouchableRipple onPress={() => openLink(data.source)}>
            <AntDesign size={24} color="#3081D0" name="github" />
          </TouchableRipple>
        )}

        {data.link !== "" && (
          <TouchableRipple onPress={() => openLink(data.link)}>
            <AntDesign size={24} color="#3081D0" name="link" />
          </TouchableRipple>
        )}
      </View>
    </Card>
  );
};
