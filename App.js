import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,useState } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [row,setRow] = useState(" ")
  const [col,setCol] = useState(" ")
  const [value,setValue] = useState(" ")
  // const [todos,setTodos] =useState([
  //   {value:5,key1:'1',key:'1'},
  //   {value:6,key1:'1',key:'2'},
  //   {value:7,key1:'1',key:'3'}
  // ]);
  var items = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  const submitTodo = (val1,val2) => {
    items[val1][val2]=val3
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.container3}>
        <TextInput 
            style={styles.inputtodos2}
            placeholder='value'
            onChangeText={(val3) => setValue(val3)}
        />
      </View>
      <View style={styles.container2}>
        <TextInput 
            style={styles.inputtodos}
            placeholder='row'
            onChangeText={(val1) => setRow(val1)}
        />
        <TextInput 
            style={styles.inputtodos}
            placeholder='column'
            onChangeText={(val2) => setCol(val2)}
        />
      </View>

      <View style={styles.container4}>
       <Button
            title='Submit'
            color={'coral'}
            onPress={() => submitTodo(newtodo)}
       />
      </View>

      <View style={styles.container3}>
        <TextInput 
            style={styles.inputtodos2}
            placeholder='value'
            onChangeText={(val) => setNewtodo(val)}
        />
      </View>

      <View style={styles.container4}>
       <Button
            title='Submit'
            color={'coral'}
            onPress={() => submitTodo(newtodo)}
       />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  inputtodos:{
    padding:10,
    paddingLeft:15,
    borderWidth:2,
    fontSize:18,
    borderStyle:'dashed',
    borderColor:'#ddd',
    // marginBottom:20,
    // marginLeft:5,
    // marginRight:5,
    width:'45%',
    margin:7,
    borderRadius:5,
    
    

 },
  inputtodos2:{
    padding:10,
    paddingLeft:15,
    borderWidth:2,
    fontSize:18,
    borderStyle:'dashed',
    borderColor:'#ddd',
    margin:10,
    borderRadius:5,
    
    

 },
 container2:{
    flexDirection:'row',
    margin:40,
    marginBottom:10,
    alignItems:'center',
    // backgroundColor:'pink',
 },
 container3:{
  //  flexDirection:'column',
  // marginBottom:40,
  // marginLeft:40,
  // width:'70%',
  // alignItems:'center',
  // backgroundColor:'black',
  marginLeft:40,
  marginRight:40,
  marginBottom:10,
 },
 container4:{
  // backgroundColor:'grey',
  marginLeft:50,
  marginRight:50,
  marginBottom:10,

 }
});
