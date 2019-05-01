import React, { useState, useEffect } from "react";
import { RNCamera } from "react-native-camera";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import{
  Card, CardItem
} from 'native-base';
import styles from "./styles";
import Orientation from "react-native-orientation";

export default ({ nav, playerList }) => {

    const [players, setPlayers] = useState([]);
    const [snapped, setSnap] = useState(false);
    const [currentPlayer, setCurr] = useState(playerList[0]);
    const [front, setFront] = useState(true);
    useEffect(() => {
      Orientation.lockToPortrait();
    }, []);

    // const repeatCamera = () => {
    //   while(players) {
    //     return(
    //       <View></View>
    //     )
    //     setPlayers(players--)
    //   }
    // }

    const savePic = (photoUri) => {
      setPlayers([
        ...players,
        {
          id: players.length,
          name: currentPlayer,
          photo: photoUri,
          didWin: true,
        }
      ]);
    }

    //For Camera Front or Back
    const type = () => {
      if (front) {
        return RNCamera.Constants.Type.front;
      } else return RNCamera.Constants.Type.back;
    }
    
      return (
        <View style={styles.container}>
          <RNCamera
            style={styles.preview}
            type={type()}
            flashMode={RNCamera.Constants.FlashMode.off}
            captureAudio={false}
            permissionDialogTitle={"Permission to use camera"}
            permissionDialogMessage={
              "We need your permission to use your camera phone"
            }
          >
            {({ camera, status }) => {
              if (status !== "READY")
                return (
                  <View>
                    <Text>Loading</Text>
                  </View>
                );
              if (!snapped) {
                return (
                  <View
                    style={{
                      flex: 0,
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                  <TouchableOpacity style={styles.capture}
                    onPress={() => 
                      setFront(!front)
                    }
                    >
                    <Text> Flip </Text>
                  </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.takePicture(camera)
                          .then(photo => {
                            setSnap(true);
                            savePic(photo.uri);
                            if (players.length > playerList.length) {
                              nav.navigate("Ready", {players: players})
                            } else {
                              setCurr(playerList[players.length])
                              setSnap(false);
                            }
                          })
                          .catch(error => console.log(error))
                      }
                      style={styles.capture}
                    >
                      <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                    <Card>
							        <CardItem>
									      <Text>{currentPlayer}</Text>
						 	        </CardItem>
						        </Card>
                  </View>
                );
              }
            }}
          </RNCamera>
        </View>
      );
    }

    takePicture = async function(camera) {
      const options = {
        width: 480,
        orientation: "portrait",
        quality: 1,
        base64: true,
        fixOrientation: true,
        forceUpOrientation: true,
        // pauseAfterCapture: true,
      };
      let data = await camera.takePictureAsync(options);
      return data;
    }
