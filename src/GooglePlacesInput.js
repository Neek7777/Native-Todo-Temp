import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {API_URL1} from "@env"
export const GooglePlacesInput = ({ addCity }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Введите город"
      minLength={2} 
      onPress={(data) => {
        addCity(data.structured_formatting.main_text);
      }}
      query={{
        key: `${API_URL1}`,

        language: 'ru',
      }}
      styles={{
        textInputContainer: {
          width: '100%',
          backgroundColor: '#3949ab',
          height: 50,
        },
        textInput: {
          backgroundColor: '#fff',
          margin: 5,
          width: '100%',
          height: 30,
          borderRadius: 5,
          fontSize: 14,
          justifyContent: 'center',
          alignContent: 'center',
        },
      }}
    />
  );
};
