import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button} from 'react-native';
import { useState } from 'react';
import Header from './components/Header';

const array = new Array(10);
for(var i  = 0;i < 10; i++){
  array[i] = new Array(10);
}
let gra = [ [ 0, 16, 13, 0, 0, 0 ],
              [ 0, 0, 10, 12, 0, 0 ],
              [ 0, 4, 0, 0, 14, 0 ], 
              [ 0, 0, 9, 0, 0, 20 ],
              [ 0, 0, 0, 7, 0, 4 ],  
              [ 0, 0, 0, 0, 0, 0 ] ];


export default function App() {
  const [size, setSize] = useState(6);
  const [row,setRow] = useState(0);
  const [col,setCol] = useState(0);
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  // console.log(array);
  function bfs(rGraph, s, t, parent)
{
    let visited = new Array(size);
    for(let i = 0; i < size; ++i)
        visited[i] = false;
    let queue  = [];
    queue.push(s);
    visited[s] = true;
    parent[s] = -1;
 
    // Standard BFS Loop
    while (queue.length != 0)
    {
        let u = queue.shift();
 
        for(let v = 0; v < size; v++)
        {
            if (visited[v] == false &&
                rGraph[u][v] > 0)
            {
                if (v == t)
                {
                    parent[v] = u;
                    return true;
                }
                queue.push(v);
                parent[v] = u;
                visited[v] = true;
            }
        }
    }
    return false;
}
 
// Returns the maximum flow from s to t in
// the given graph
function fordFulkerson(graph, s, t)
{
    let u, v;
    let rGraph = new Array(size);
 
    for(u = 0; u < size; u++)
    {
        rGraph[u] = new Array(size);
        for(v = 0; v < size; v++)
            rGraph[u][v] = graph[u][v];
     }
    let parent = new Array(size);
    let max_flow = 0;
    while (bfs(rGraph, s, t, parent))
    {
        let path_flow = Number.MAX_VALUE;
        for(v = t; v != s; v = parent[v])
        {
            u = parent[v];
            path_flow = Math.min(path_flow,
                                 rGraph[u][v]);
        }
        for(v = t; v != s; v = parent[v])
        {
            u = parent[v];
            rGraph[u][v] -= path_flow;
            rGraph[v][u] += path_flow;
        }
        max_flow += path_flow;
    }
    return max_flow;
}
  function handleSubmit(row, col, value){
    array[row][col] = value;
    console.log(array[row][col]);
  }

  function showValue(){
    let value = 10;
    value = fordFulkerson(array, 0, 5);
    // console.log(value);
    setResult(value);
  }
  // const [todos,setTodos] =useState([
    //   {value:5,key1:'1',key:'1'},
    //   {value:6,key1:'1',key:'2'},
    //   {value:7,key1:'1',key:'3'}
    // ]);
    return (
      <View style={styles.container}>
      <Header/>
      <TextInput 
          style={styles.inputtodos2}
          placeholder='Array Size'
          onChangeText={(val) => setSize(val)}
      />
      <View style={styles.container3}>
        <Text
            style={styles.inputtodos2}
        >{result} </Text>
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
            onPress={() => handleSubmit(row-1, col-1, value)}
       />
      </View>

      <View style={styles.container3}>
        <TextInput 
            style={styles.inputtodos2}
            placeholder='value'
            onChangeText={(val) => setValue(val)}
        />
      </View>

      <View style={styles.container4}>
       <Button
            title='Submit'
            color={'coral'}
            onPress={() => showValue()}
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
