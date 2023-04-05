
import { useEffect, useState } from 'react';
import './App.css';
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgm8RwLRz_lm1rZsjGN5xD0L7YzLS4VB0",
  authDomain: "primeroproyecto-52fe6.firebaseapp.com",
  projectId: "primeroproyecto-52fe6",
  storageBucket: "primeroproyecto-52fe6.appspot.com",
  messagingSenderId: "786405075858",
  appId: "1:786405075858:web:e3314ceb2b8c9e92332f4b"
};

// Initialize Firebase




function App() {

  const app = initializeApp(firebaseConfig);

  const [datos, setDatos] = useState('');
  
  
  // Get a list of cities from your database
  async function getCities(db) {
    const citiesCol = collection(getFirestore(app), 'alumnos');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList[1].nombre);
setDatos(cityList[1].nombre);
    return cityList;
  }

  useEffect(() => {
    getCities();
  }, []);
  



  return (
    <>
    <h1>Gustavo</h1>
    <div>{datos}</div>
    </>
  );
}

export default App;
