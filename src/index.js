import React from "react";
import { View, Modal, StyleSheet,Platform } from "react-native";
import { BallIndicator } from 'react-native-indicators';
const Loader = (props) => {
    return  props.show ? <View style={styles.MainContainer}>
    <Modal
        transparent={true}
        animationType={"fade"}
        onRequestClose={
            () => {

            }
        }>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
            <View style={styles.Loader_Main_view}>
                <BallIndicator color='#5693BF' />
            </View>
        </View>
    </Modal>
</View>: null;

}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
        position: 'absolute',
        top:0,
        bottom:0,
        left: 0,
        right: 0,
        zIndex: 999
    },

    Loader_Main_view: {
        padding: 10,
        height: 100,
        width: 100,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 7,
    },
});
export default Loader;