import { TouchableOpacity, Image } from "react-native"
import { styles } from "./style";


export const MoviesCard = (props) => {
    return(
        <TouchableOpacity>
            <Image style = {styles.img} source={props.movieURL}/>
        </TouchableOpacity>
    );
};