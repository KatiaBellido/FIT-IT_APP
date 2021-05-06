import React from 'react';
import { StyleSheet, Text, View, Switch, Image  } from 'react-native';
import ActivityRings from "react-native-activity-rings";  
 
export const Stats = () => {
 
 const activityData = [
    {
      value: 0.8, // ring will use color from theme
    },
    {
      label: "ACTIVITY",
      value: 0.6,
      color: "#cb5f18",
    },
    {
      label: "RINGS",
      value: 0.2,
      color: "#86040f",
      backgroundColor: "#cccccc"
    }
  ];
 
 const activityConfig = { 
   width: 150,  
   height: 150
 };
 
 return (
  <View>
    <ActivityRings data={activityData} config={activityConfig} /> 
  </View>
  );
}  
