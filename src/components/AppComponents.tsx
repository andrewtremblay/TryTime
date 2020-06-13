import React from 'react';
import { Text, StyleSheet, View, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

var styles = StyleSheet.create({
    onboardingText: {
      fontFamily: 'WorkSans-Regular',
      fontWeight: '600',
      fontSize: 18,
      color: '#8690FF',
      textAlign: 'center',
    },
    centerContent: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
    },
    fullScreen: {
        position: 'absolute',
        width: '100%',
        height: '100%',    
    },
    container: {
        flexDirection: 'column',
        height: '100%',
        width: '100%',    
    }
  });
  
export const CenterContent = ({style, children, ...rest}) => 
    <View style={[styles.centerContent, style]} {...rest}>{children}</View>

export const OnboardingText = ({style, children, ...rest}) => 
    <Text style={[styles.onboardingText, style]} {...rest}>{children}</Text>

export const CommonContainer = ({children}) =>         
    <View style={[styles.fullScreen, {backgroundColor: 'white'}]}>
        <SafeAreaView>
            {children}
        </SafeAreaView>
        <LinearGradient 
            style={[styles.fullScreen, {zIndex: -100}]}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            locations={[0,0.2,0.8,1]}
            colors={['rgba(219, 222, 255, 0.5)', 'rgba(219, 222, 255, 0)', 'rgba(219, 222, 255, 0)', 'rgba(219, 222, 255, 0.5)']} 
            />
    </View>

export const ColumnContainer =  ({children, containerStyle}) =>
    <CommonContainer>
        <View style={[styles.container, containerStyle]}>{children}</View>
    </CommonContainer>;
