import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";


export const Home = () => {
    return (
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Image source = {PrimeVideoLogo} style = {styles.primeVideoLogo}></Image>
            <Image source = {AmazonLogo} style = {styles.amazonLogo}></Image>
        </View>
        <View style = {styles.category}>
            <TouchableOpacity>
                <Text  style = {styles.categoryText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text  style = {styles.categoryText}>TV Shows</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text  style = {styles.categoryText}>Movies</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text  style = {styles.categoryText}>Kids</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "grey",
    },
    header:{
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    amazonLogo:{
        marginTop: -32,
        marginLeft: 30,
    },
    category:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 25,
    },
    categoryText:{
        fontSize: 14,
        fontWeight: 700,
        color: "white",
    }

});