// AuthGuard.js
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';

const AuthGuard = ({ children }) => {
  const { user, loading } = useAuth();
  const navigation = useNavigation();

  if (loading===true) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  if (!user) {
    alert("Please Login")
    navigation.navigate('Learn');
    return null;
  }

  return children;
};

export default AuthGuard;
