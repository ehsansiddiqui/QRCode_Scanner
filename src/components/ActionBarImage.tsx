import React from 'react';

import {View, Image} from 'react-native';
import icon from '../assets/history.png';

const ActionBarImage = () => {
    return (
        <View style={{flexDirection: 'row'}}  >
            <Image
                source={icon}
                style={{
                    width: 24,
                    height: 24,
                    borderRadius: 24/ 2,
                    marginLeft: 15,
                }}


            />

        </View>
    );
};

export default ActionBarImage;