import React from 'react';
import {View, StyleSheet, Text, ScrollView, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{flexGrow: 1}}>
      <LinearGradient
        colors={['#1E238A', '#4c669f', '#7F7FD5', '#E9E4F0', '#1488CC']}
        style={{flex: 1, flexGrow: 1}}>
        <View style={{padding: 12, flex: 1, flexGrow: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Icon5 name="bar-chart" size={24} color="white" />
            <Text style={{fontSize: 20, fontWeight: '900', color: 'white'}}>
              Employee Managment System
            </Text>
            <Icon name="lock" size={24} color="white" />
          </View>

          <View
            style={{
              marginTop: 50,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <Pressable
              onPress={() =>
                navigation.navigate('Employees', {animationEnabled: false})
              }
              style={{
                backgroundColor: '#D3CCE3',
                padding: 12,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="people" size={24} color="black" />
              </View>

              <Text style={{marginTop: 7, fontWeight: '900'}}>
                Employee List
              </Text>
            </Pressable>

            <Pressable
              onPress={() =>
                navigation.navigate('Markattendance', {animationEnabled: false})
              }
              style={{
                backgroundColor: '#D3CCE3',
                padding: 12,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="people" size={24} color="black" />
              </View>
              <Text style={{marginTop: 7, fontWeight: '900'}}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 50,
              backgroundColor: 'white',
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 7,
            }}>
            <Pressable
              style={{
                backgroundColor: '#1488CC',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon2 name="newspaper-outline" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  color: 'white',
                  flex: 1,
                }}>
                Attendance Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate('Summary', {animationEnabled: false})
              }
              style={{
                backgroundColor: '#1488CC',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon3 name="repo-pull" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  color: 'white',
                  flex: 1,
                }}>
                Summary Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#1488CC',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="insert-chart" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  color: 'white',
                  flex: 1,
                }}>
                All Generate Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#1488CC',
                borderRadius: 6,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="people" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  color: 'white',
                  flex: 1,
                }}>
                Overtime Employees
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon5 name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 35,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}>
            <View
              style={{
                backgroundColor: '#4169E1',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon4 name="guy-fawkes-mask" size={24} color="black" />
              </View>
              <Text style={{marginTop: 7}}>Attendance Criteria</Text>
            </View>
            <View
              style={{
                backgroundColor: '#1E90FF',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon5 name="bar-chart" size={24} color="black" />
              </View>
              <Text style={{marginTop: 7}}>Increased Workflow</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}>
            <View
              style={{
                backgroundColor: '#0077CC',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon4 name="guy-fawkes-mask" size={24} color="black" />
              </View>
              <Text style={{marginTop: 7}}>Cost Savings</Text>
            </View>
            <View
              style={{
                backgroundColor: 'lightblue',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon5 name="bar-chart" size={24} color="black" />
              </View>
              <Text style={{marginTop: 7}}>Employee Perfomance</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Home;
