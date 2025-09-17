import { View, Image, TouchableOpacity, Text, FlatList, ScrollView } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png";
import { styles } from "./style.js";
import { MoviesCard } from "../../components/MoviesCard/index.js";
import { MOVIESWATCHING } from "../../utils/moviesWatching.js";
import { MOVIESWATCH } from "../../utils/moviesWatch.js";
import { MOVIESCRIME } from "../../utils/moviesCrimes.js";
import Icon from "react-native-vector-icons/Ionicons"

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
        
        <ScrollView>
            <Text style = {styles.movieText}>Acabaram de Chegar</Text>
            <TouchableOpacity style = {styles.movieImageTumbnail}> 
                <Image source={(MovieTheWheel)}></Image>
            </TouchableOpacity>
            
            <Text style = {styles.movieText}>Continue assistindo</Text>
            <FlatList 
                data={MOVIESWATCHING}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
                horizontal
                showsHorizontalScrollIndicator = {false}
                style = {styles.contentList}
                />
            <Text style = {styles.movieText}>Filmes sobre investigação</Text>
            <FlatList 
                data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
                horizontal
                showsHorizontalScrollIndicator = {false}
                style = {styles.contentList}
                />
            <Text style = {styles.movieText}>Filmes assistidos</Text>
            <FlatList 
                data={MOVIESWATCH}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
                horizontal
                showsHorizontalScrollIndicator = {false}
                style = {styles.contentList}
                />
        </ScrollView>
        
        <View style = {styles.footer}>
            <TouchableOpacity style = {styles.button}>
                <Icon name = "home-outline" color={"#fff"} size={20}></Icon>
                <Text style = {styles.label}>Inicio</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}>
                <Icon name = "download-outline" color={"#fff"} size={20}></Icon>
                <Text style = {styles.label}>Downloads</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}>
                <Icon name = "grid-outline" color={"#fff"} size={20}></Icon>
                <Text style = {styles.label}>Assinaturas</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}>
                <Icon name = "search-outline" color={"#fff"} size={20}></Icon>
                <Text style = {styles.label}>Pesquisar.</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}>
                <Icon name = "settings-outline" color={"#fff"} size={20}></Icon>
                <Text style = {styles.label}>Config.</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};