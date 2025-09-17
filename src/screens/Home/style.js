import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#232f3e",
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
        fontWeight: "700",
        color: "white",
    },
    movieImageTumbnail:{
        margin: 0,
        padding: 0,
        width: "100%",
        alignItems: "center"
    },
    contentList:{
        paddingLeft: 18,
        paddingTop: 10,
    },
    movieText:{
        color: "#fff",
        fontWeight: "700",
        paddingLeft: 18,
        paddingTop: 10,
    },
    footer:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: "#3a4c61ff",
        marginTop: 10,
    },
    label:{
        color: "#fff",
        fontSize: 12,
    },
    button:{
        justifyContent: "center",
        alignItems:"center",
    }
});