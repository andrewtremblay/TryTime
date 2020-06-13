import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

var styles = StyleSheet.create({
    onboardingText: {
      fontFamily: 'WorkSans-Regular',
      fontWeight: '600',
      fontSize: 18,
      color: '#8690FF',
      textAlign: 'center',
    },
    centerContainer: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
    },    
  });
  

export const OnboardingText = ({style, children, ...rest}) => 
    <Text style={[styles.onboardingText, style]} {...rest}>{children}</Text>

export const CenterContainer = ({style, children, ...rest}) => 
    <View style={[styles.centerContainer, style]} {...rest}>{children}</View>
