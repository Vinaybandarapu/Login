
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native"
import { getToken, getUserProfileInfo } from "../constants/AsyncStorageHelper";
import { useEffect, useState } from "react";
import api from '../api'
import Metrics from "../constants/metrics";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome6';


const Home = () => {

  const [data, getData] = useState('')
  const [modalVisible, setModalVisible] = useState('')


  const userInfo = async () => {
    const res = await getUserProfileInfo();
    getData(res.user);
  }


  const LeaderBoard = async () => {
    const tokenKey = await getToken();
    console.log("tokenKey=======>>>>", tokenKey);

    if (!tokenKey) {
      throw new Error('Token not found');
    }
    try {
      const payload = {
        user_id: `${data.id}`
      };

      const response = await api.user.leaderBoards({}, payload, {
        headers: {
          authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGV2LmVjbGF0dXJlLmNvbS9lbGVhcm5pbmcvcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTcyMzU1Mjc2NCwiZXhwIjoxNzIzNjM5MTY0LCJuYmYiOjE3MjM1NTI3NjQsImp0aSI6IlUwU0J0S1hwUVM2WkxGU04iLCJzdWIiOiIyNSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.1BTaVQHtEWJZ7uA-ql6Rc8LJ1OC8WqGdDhXU05ACorE',
          Accept: 'api/json',
        }
      },
      );
      console.log(" ===========================responseeeee>", response);

      if (response && response.StatusCode == "200" && response.data) {
        console.log("LeaderBoard Details", response.data);
        alert("Success");
      } else {
        alert(response.data.Message);
      }
    } catch (error) {
      console.log("error", error.message);
    }
  }

  useEffect(() => {
    userInfo();
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <View style={{ margin: Metrics.rfv(10) }}>
        <Text style={styles.titleText}>Hi, {data.first_name} {data.last_name} !</Text>
        <Text>Let's get started for class  with TridaPro</Text>
      </View>

      <View>
        <Text style={[styles.titleText, { margin: Metrics.rfv(10), fontSize: Metrics.rfv(25), }]}>Leaderboard</Text>
      </View>
      <View style={styles.boardView}>
        <TouchableOpacity
          style={[styles.boardContainer, { backgroundColor: '#BFE8D4' }]}
          onPress={() => {
            LeaderBoard();
            setModalVisible(true);
          }}
        >
          <Icon
            name={'graduation-cap'}
            size={30}
            color="white"
            style={styles.IconStyle}
          />
          <View style={{ flexDirection: 'column', paddingLeft: Metrics.rfv(50) }}>
            <Text style={{ backgroundColor: 'white', textAlign: 'center' }}>690</Text>
            <Text>Points</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.boardContainer, { backgroundColor: '#C1D0E1' }]}
          onPress={() => {
            LeaderBoard();
            setModalVisible(true);
          }}
        >
          <Icon
            name={'star-o'}
            size={30}
            color="white"
            style={styles.IconStyle}
          />
          <View style={{ flexDirection: 'column', paddingLeft: Metrics.rfv(50) }}>
            <Text style={{ backgroundColor: 'white', textAlign: 'center' }}>5</Text>
            <Text>Stars</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.boardContainer, { backgroundColor: '#E8D1A5' }]}
          onPress={() => {
            LeaderBoard();
            setModalVisible(true);
          }}
        >
          <Icons
            name={'ranking-star'}
            size={30}
            color="white"
            style={styles.IconStyle}
          />
          <View style={{ flexDirection: 'column', paddingLeft: Metrics.rfv(50) }}>
            <Text style={{ backgroundColor: 'white', textAlign: 'center' }}>12</Text>
            <Text>Rank</Text>
          </View>
        </TouchableOpacity>

      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: Metrics.rfv(18),
    fontWeight: 'bold'
  },
  IconStyle: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',

  },
  boardView: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  boardContainer: {
    flexDirection: 'row-reverse',
    width: '30%',
    borderWidth: 0.5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default Home