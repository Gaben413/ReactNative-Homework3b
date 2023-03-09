import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from "react"
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

export default function App() {

  const [ligar, setLigar] = useState(true);
  const [texto, setTexto] = useState('ATIVAR');

  const clicarBotao = () =>{
    setLigar(!ligar);

    if(ligar)
      setTexto('DESATIVAR')
    else
    setTexto('ATIVAR')

  }

  return (
    <View style={styles.container}>
      <View style={styles.view}>

        <Button
          title={texto}
          onPress={clicarBotao}
        />

        {
          ligar ?
          <View/>
          :
          <View style={styles.secondBox}>
            <Text style={styles.secondText}>
              Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem! Aqui é um exemplo de text de uma postagem!
            </Text>
            <View style={styles.sideArea}>
              <EvilIcon name='trash' size={50} />
              <Ionicons name='paper-plane-outline' size={35} />
            </View>
        </View>
        }

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view:
  {
    width: '100%'
  },
  text:
  {
    textAlign: 'center'
  }, secondBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    color: 'grey',
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },secondText: {
    flexShrink: 5,
  }, sideArea: {
    flexDirection: 'row',
  }
});
