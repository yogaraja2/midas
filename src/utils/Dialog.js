import { Alert } from "react-native";

export default class Dialog {

    static showStorageAlert = () => {
        Alert.alert('Alert', "Failed to load Data.");
    }

    static showServerAlert = () => {
        Alert.alert('Alert', "Something went wrong");
    }
    
    static showAlert = (message) => {
        console.log("Alert message: " + message);
        Alert.alert(
            'Alert',
            message,
            [
                {
                    cancelable: true,
                },
                {
                    text: 'OK',
                }
            ],
            
        );
    };

    static shawCancelAlert = (message) => {
         Alert.alert(
      'Alert',
      message,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK', onPress: () => {
            this.switchPatient(appointment);
          },
        }
      ]
    );
    }

}