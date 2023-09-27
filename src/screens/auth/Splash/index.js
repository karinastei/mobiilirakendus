import React from "react";
import {
    Text,
    View,
    Image
 } from "react-native"
 import Button from "../../../components/Button";
 import { styles } from "./styles";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}/>
            <Text style={[styles.title, styles.textContainer]}>You'll Find Text</Text>
            <Text style={[styles.title, styles.innerTitle, styles.textContainer]}> All you need</Text>
            <Text style={[styles.title, styles.textContainer]}> Here!</Text>

            <Button title="Sign up" />
        </View>
    )
}

export default Splash