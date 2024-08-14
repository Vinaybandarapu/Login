import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OtpScreen = ({ route, navigation }) => {
  const { type, value } = route.params;
  const [otp, setOtp] = useState('');

  const handleSubmit = () => {
    if (otp.length < 6) {
      alert('Please enter a valid OTP');
      return;
    }
    // Handle OTP verification
    console.log('Verifying OTP:', otp);
    console.log(type === 'emailTab' ? 'Email:' : 'Mobile:', value);
    // Navigate to the next screen or show verification result
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter OTP sent to your {type === 'email' ? 'email' : 'mobile number'}:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        maxLength={6}
      />
      <Button title="Submit OTP" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default OtpScreen;
