import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import EditIcon from "../../assets/Edit Icon.png"
import ArrowRight from "../../assets/Arrow Right.png"
import Andrew from "../../assets/Andrew.png"
import Karen from "../../assets/Karen.png"
import Maximillian from "../../assets/Maximillian.png"
import Martha from "../../assets/Martha.png"
import Tabitha from "../../assets/Tabitha.png"
import Maisy from "../../assets/Maisy.png"
import Kieron from "../../assets/Kieron.png"
import Joshua from "../../assets/Joshua.png"

export function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.headerEdit}>
                <Text style={styles.headerEditText}>Edit</Text>
            </View>
            <View style={styles.headerChats}>
                <Text style={styles.headerChatsText}>Chats</Text>
            </View>
            <View style={styles.headerIcon}>
                <Image source={EditIcon}/>
            </View>
        </View>
        <View style={styles.main}>
            
            <ScrollView style={styles.mainContentScrollView}>
                <View style={styles.card}>
                    <Text style={styles.broadcastText}>Broadcast Lists</Text>
                    <Text style={styles.groupText}>New Group</Text>
                </View>
                <View style={styles.people}>    
                    <Image source={Andrew}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Andrew</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Karen}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Karen</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Maximillian}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Maximillian</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Martha}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Martha</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Tabitha}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Tabitha</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Maisy}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Maisy</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Kieron}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Kieron</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Joshua}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Joshua</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Andrew}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Andrew</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Andrew}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Andrew</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Andrew}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Andrew</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Andrew}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Andrew</Text>
                    </View>
                </View>
                <View style={styles.people}>    
                    <Image source={Andrew}/>
                    <View style={styles.peopleTextCard}>
                        <Text style={styles.peopleText}>Andrew</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        <View style={styles.footer}>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerEdit: {
    paddingLeft: 16,
    paddingTop: 54,
    paddingBottom: 16,
  },
  headerEditText: {
    color: '#007AFF',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "400",
    letterSpacing: -0.4,
  },
  headerChats: {
    paddingTop: 54,
    paddingBottom: 16,
  },
  headerChatsText: {
    color: '#000000',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "600",
    letterSpacing: -0.4,
  },
  headerIcon: {
    paddingRight: 16,
    paddingTop: 54,
    paddingBottom: 16,
  },
  main: {
    flexDirection: "column",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  broadcastText: {
    color: '#007AFF',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "400",
    letterSpacing: -0.4,
  },
  groupText: {
    color: '#007AFF',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "400",
    letterSpacing: -0.4,
  },
  people: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  peopleTextCard: {
    paddingLeft: 16,
  },
  peopleText: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "600",
    letterSpacing: -0.33,
  },
});