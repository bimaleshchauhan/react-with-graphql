import logo from './logo.svg';
import './App.css';

import {useEffect} from 'react';
import {getusers} from './graphql/queries';
import {Creat_User} from './graphql/mutations'
import {useQuery, useMutation, gql} from '@apollo/client'

function App() {
  const {error, loading, data} = useQuery(getusers);
  useEffect(() =>{
    console.log(data)
  },[data])

  const [createUser, {loader, error1}] = useMutation(Creat_User);
  
  const handleSubmit = async() =>{ 
    await createUser({
        variables: {
           name:"bimal",
           username:"dsafsd",
           email:"dfsdfs"
        }
    });

    if(loader){
      alert("loading");
    }
    if(error1){
      alert("success")
    }
  }

  return (
    <div className="App">
       <form>
         <input type="text" />
         <input type="submit" value="submit" onClick={handleSubmit} />
       </form>
    </div>
  );
}

export default App;
