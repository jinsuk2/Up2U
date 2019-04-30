import React, { useState } from "react";
import { RNCamera } from "react-native-camera";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./styles";

export default ({ nav, playerList }) => {
  const [photos, setPhoto] = useState([]);
  const [snapped, setSnap] = useState(false);
  const [players, setPlayers] = useState(playerList.length);

  const repeatCamera = () => {
    while (players) {
      return <View />;
      setPlayers(players--);
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
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
                  justifyContent: "center"
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.takePicture(camera)
                      .then(photo => {
                        setPhoto([
                          ...photos,
                          {
                            id: photos.length,
                            data: photo
                          }
                        ]);
                        setSnap(true);
                      })
                      .catch(error => console.log(error))
                  }
                  style={styles.capture}
                >
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          } else if (snapped) {
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: "row",
                  justifyContent: "center"
                }}
              >
                <ImageBackground
                  style={{
                    height: photos[0].data.height,
                    width: photos[0].data.width
                  }}
                  source={{ uri: photos[0].data.uri }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 0,
                      backgroundColor: "#fff",
                      borderRadius: 5,
                      padding: 15,
                      paddingHorizontal: 20,
                      alignSelf: "center",
                      justifyContent: "center",
                      margin: 5
                    }}
                    onPress={() => {
                      setSnap(false);
                      camera.resumePreview();
                    }}
                  >
                    <Text style={{ fontSize: 14 }}> Back </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 0,
                      backgroundColor: "#fff",
                      borderRadius: 5,
                      padding: 15,
                      paddingHorizontal: 20,
                      alignSelf: "center",
                      justifyContent: "center",
                      margin: 2
                    }}
                    onPress={() => {
                      repeatCamera();
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      flex: 0,
                      backgroundColor: "#fff",
                      borderRadius: 5,
                      padding: 15,
                      paddingHorizontal: 20,
                      alignSelf: "center",
                      justifyContent: "center",
                      margin: 2
                    }}
                    onPress={() => {
                      nav.navigate("Ready", {
                        photos: photos,
                        playerList: playerList
                      });
                    }}
                  >
                    <Text style={{ fontSize: 14 }}> Finish </Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            );
          }
        }}
      </RNCamera>
    </View>
  );
};

takePicture = async function(camera) {
  const options = {
    width: 480,
    orientation: "portrait",
    quality: 1,
    base64: true,
    fixOrientation: true,
    forceUpOrientation: true,
    pauseAfterCapture: true
  };
  let data = await camera.takePictureAsync(options);
  return data;
};
