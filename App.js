import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "f406068e2da6f326fda5ffd53c6500f4";

export default class App extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const { data:{main, weather} } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({temp: main.temp, weather: weather[0].main , isLoading : false});
  }



  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch{
      Alert.alert("Can't find you", "i'm so sorry");
    }
    
  };
  componentDidMount(){
    this.getLocation();
  };
  render (){
    const{ isLoading, temp, weather } = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp = {temp} weather = {weather}/>
    );
  };
}


