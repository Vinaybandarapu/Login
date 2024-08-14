import AsyncStorage from '@react-native-community/async-storage'


const LANGUAGE_PREF = "language_pref";
const LOGIN_DATA = "loginData";
const LOGIN_TOKEN = "loginToken";
export const saveLanguagePref = async (language) => {
    await AsyncStorage.setItem(LANGUAGE_PREF, language);
}

export const getLanguagePref = async () => {
    const language = await AsyncStorage.getItem(LANGUAGE_PREF);
    if (language) {
        return language;
    } else {
        return "en";
    }
}

export const saveUserProfileInfo = async (userInfo) => {
    await AsyncStorage.setItem(LOGIN_DATA, JSON.stringify(userInfo));
}

export const getUserProfileInfo = async () => {
    const userProfileInfo = await AsyncStorage.getItem(LOGIN_DATA);
    return JSON.parse(userProfileInfo);
}

export const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem(LOGIN_TOKEN, token);
    } catch (error) {
        console.error('Failed to save the token.', error);
    }
};
export const getToken = async () => {
    try {
        const userToken = await AsyncStorage.getItem(LOGIN_TOKEN);
        if (!userToken) {
            console.log('No token found');
        }
        return userToken;
    } catch (error) {
        console.log('Error fetching token:', error.message);
        return null;
    }
}

