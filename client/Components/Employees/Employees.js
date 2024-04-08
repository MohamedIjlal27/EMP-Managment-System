import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';
import {Searchbar, Text} from 'react-native-paper';
import Search from '../SearchResults/Search';

const Employees = () => {
  const navigation = useNavigation();
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(
          'http://192.168.191.218:3000/employees',
        );
        setEmployees(response.data);
      } catch (error) {
        console.log('error fetching employee data', error);
      }
    };
    fetchEmployeeData();
  }, []);
  console.log(employees);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          marginTop: '5%',
        }}>
        <Icon2
          style={{marginLeft: 10}}
          name="arrow-back-sharp"
          size={24}
          color="black"
        />
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: 'white',
            height: 40,
            borderRadius: 4,
            flex: 1,
          }}>
          <Searchbar
            value={input}
            onChange={text => setInput(text)}
            style={{flex: 1}}
            placeholder="Search"
          />
          {employees.length > 0 && (
            <View>
              <Pressable
                onPress={() =>
                  navigation.navigate('AddDetails', {animationEnabled: false})
                }>
                <Icon4 name="account-plus" size={22} color="black" />
              </Pressable>
            </View>
          )}
        </Pressable>
      </View>
      {employees.length > 0 ? (
        <Search data={employees} input={input} setInput={setInput} />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No Data</Text>
          <Text>Press On the Plus Button to Add an Employee</Text>
          <Pressable
            onPress={() =>
              navigation.navigate('AddDetails', {animationEnabled: false})
            }>
            <Icon4
              style={{marginTop: 30}}
              name="account-plus"
              size={22}
              color="black"
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Employees;

const styles = StyleSheet.create({});
