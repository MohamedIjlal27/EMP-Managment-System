import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import moment from 'moment';
import axios from 'axios';
import {useNavigation, useFocusEffect} from '@react-navigation/core';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Markattendance = () => {
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState(moment());
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);

  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, 'days');
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const prevDate = moment(currentDate).subtract(1, 'days');
    setCurrentDate(prevDate);
  };

  const formatDate = date => {
    return date.format('MMMM D, YYYY');
  };

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get('http://192.168.191.218:3000/employees');
      setEmployees(response.data);
    } catch (error) {
      console.log('error fetching employee data', error);
    }
  };

  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get(
        `http://192.168.191.218:3000/attendance`,
        {
          params: {
            date: currentDate.format('MMMM D, YYYY'),
          },
        },
      );
      setAttendance(response.data);
    } catch (error) {
      console.log('error fetching attendance data', error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  useEffect(() => {
    fetchAttendanceData();
  }, [currentDate]);

  useFocusEffect(
    useCallback(() => {
      fetchAttendanceData();
    }, [currentDate]),
  );

  const employeeWithAttendance = employees.map(employee => {
    const attendanceRecord = attendance.find(
      record => record.employeeId === employee.employeeId,
    );

    return {
      ...employee,
      status: attendanceRecord ? attendanceRecord.status : '',
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Pressable>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginVertical: 20,
          }}>
          <Icon2 onPress={goToPrevDay} name="left" size={24} color="black" />
          <Text>{formatDate(currentDate)}</Text>
          <Icon2 onPress={goToNextDay} name="right" size={24} color="black" />
        </View>
        <View style={{marginHorizontal: 12}}>
          {employeeWithAttendance.map((item, index) => (
            <Pressable
              onPress={() =>
                navigation.navigate('User', {
                  params: {
                    name: item.employeeName,
                    id: item.employeeId,
                    salary: item?.salary,
                    designation: item?.designation,
                  },
                  animationEnabled: false,
                })
              }
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginVertical: 10,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: '#4b6cb7',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 16}}>
                  {item?.employeeName?.charAt(0)}
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  {item?.employeeName}
                </Text>
                <Text style={{marginTop: 5, color: 'gray'}}>
                  {item?.designation} ({item?.employeeId})
                </Text>
              </View>
              {item?.status && (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: '#FF69B4',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                    {item.status.charAt(0)}
                  </Text>
                </View>
              )}
            </Pressable>
          ))}
        </View>
      </Pressable>
    </View>
  );
};

export default Markattendance;

const styles = StyleSheet.create({});
