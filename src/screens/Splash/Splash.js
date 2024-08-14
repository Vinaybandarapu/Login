import React, { useEffect } from 'react';
import { View, Text, ImageBackground, Image, Dimensions } from 'react-native';
import { withGlobalize } from 'react-native-globalize';
import { useNavigation } from '@react-navigation/native';
import IntlProvider from '../../constants/IntlProvider';
import { getUserProfileInfo } from '../../constants/AsyncStorageHelper';
import { Common } from '../../assets';
import Metrics from '../../constants/metrics';
import { STANDARD_SCREEN_HEIGHT } from '../../constants/AppConst';
import { RFValue } from 'react-native-responsive-fontsize';


export const splashIntlProvider = (props) => ({
    appName: IntlProvider(props, 'app/appName'),
})
const { width, height } = Dimensions.get('window')

const SplashPage = (props) => {

    const navigation = useNavigation()


    const navigationStep = async () => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000); // 3000 milliseconds = 3 seconds

        // Clean up the timer if the component unmounts
        return () => clearTimeout(timer);
        // const userObject = await getUserProfileInfo();

    }

    useEffect(() => {

        navigationStep();
    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            
            <View>
                <Image
                    style={{
                        justifyContent: 'center', alignSelf: 'center',
                        height: Metrics.rfv(200),
                        width: Metrics.rfv(230),
                        marginTop: RFValue(50, STANDARD_SCREEN_HEIGHT)
                    }}
                    source={Common.SplashImg}
                    resizeMode={"cover"}
                >
                </Image>
            </View>
        </View>
    )
}

export default withGlobalize(SplashPage);