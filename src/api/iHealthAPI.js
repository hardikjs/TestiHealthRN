import { DeviceEventEmitter } from 'react-native';
import { iHealthDeviceManagerModule } from '@ihealth/ihealthlibrary-react-native';
const TAG = 'iHealthAPI';
// console.log('iHealthDeviceManagerModule.Event_Device_Disconnect', iHealthDeviceManagerModule.Event_Device_Disconnect);

export default {
	addListener: () => {
        console.log('addListener Called')
		this.authenListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Authenticate_Result, (event) => {
			console.info('auth event');
			console.info(TAG + JSON.stringify(event));
			if (!event.authen) {
				return;
			}
		});

		this.scanListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Scan_Device, (event) => {
			// console.info('scan event');
			// console.info(TAG + JSON.stringify(event));
		});

		this.scanFinishListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Scan_Finish, (event) => {
			// console.info('scan finish event');
			// console.info(TAG + JSON.stringify(event));
		});

		this.connectSuccessListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Connected, (event) => {
			// console.info('device connect event');
			// console.info(TAG + JSON.stringify(event));
		});

		this.connectFailedListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Connect_Failed, (event) => {
			// console.info('device connect failed event');
			// console.info(TAG + JSON.stringify(event));
		});

		this.disconnectListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, (event) => {
			// console.info('device disconnect event');
			// console.info(TAG + JSON.stringify(event));
		});
	},

	removeListener: () => {
		if (this.authenListener) {
			this.authenListener.remove();
		}
		if (this.scanListener) {
			this.scanListener.remove();
		}
		if (this.scanFinishListener) {
			this.scanFinishListener.remove();
		}
		if (this.connectSuccessListener) {
			this.connectSuccessListener.remove();
		}
		if (this.connectFailedListener) {
			this.connectFailedListener.remove();
		}
		if (this.disconnectListener) {
			this.disconnectListener.remove();
		}
	},

	sdkAuthWithLicense: (filename) => {
		iHealthDeviceManagerModule.sdkAuthWithLicense(filename);
	},

	findDevice: (type) => {
		iHealthDeviceManagerModule.startDiscovery(type);
	},

	connectDevice: (mac, type) => {
		iHealthDeviceManagerModule.connectDevice(mac, type);
	}
};