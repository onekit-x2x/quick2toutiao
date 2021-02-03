/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* bluetooth.openAdapter */
  openAdapter(quick_object) {
    return tt.openBluetoothAdapter(quick_object)
  },
  /**
     bluetooth.closeAdapter({
    *
    */

  closeAdapter(quick_object) {
    return tt.closeBluetoothAdapter(quick_object)
  },
  /** bluetooth.getAdapterState */

  getAdapterState(quick_object) {
    return tt.getBluetoothAdapterState(quick_object)
  },
  /** bluetooth.onadapterstatechange 监听监听蓝牙适配器状态变化事件 */

  set onadapterstatechange(callback) {
    return tt.onBluetoothAdapterStateChange(callback)
  },
  /** bluetooth.startDevicesDiscovery */

  startDevicesDiscovery(quick_object) {
    return tt.startBluetoothDevicesDiscovery(quick_object)
  },
  /** bluetooth.stopDevicesDiscovery */

  stopDevicesDiscovery(quick_object) {
    return tt.stopBluetoothDevicesDiscovery(quick_object)
  },
  /** bluetooth.getDevices */

  getDevices(quick_object) {
    return tt.getBluetoothDevices(quick_object)
  },
  /** bluetooth.ondevicefound */

  set ondevicefound(callback) {
    return tt.onBluetoothDeviceFound(callback)
  },
  /** bluetooth.getConnectedDevices */

  getConnectedDevices(quick_object) {
    return tt.getConnectedBluetoothDevices(quick_object)
  },
  /** bluetooth.createBLEConnection */

  createBLEConnection(quick_object) {
    return tt.createBLEConnection(quick_object)
  },
  /** bluetooth.closeBLEConnection */

  closeBLEConnection(quick_object) {
    return tt.closeBLEConnection(quick_object)
  },
  /** bluetooth.getBLEDeviceServices */

  getBLEDeviceServices(quick_object) {
    return tt.getBLEDeviceServices(quick_object)
  },
  /** bluetooth.getBLEDeviceCharacteristics */

  getBLEDeviceCharacteristics(quick_object) {
    return tt.getBLEDeviceCharacteristics(quick_object)
  },
  /** bluetooth.readBLECharacteristicValue */

  readBLECharacteristicValue(quick_object) {
    return tt.readBLECharacteristicValue(quick_object)
  },
  /** bluetooth.writeBLECharacteristicValue */

  writeBLECharacteristicValue(quick_object) {
    return tt.writeBLECharacteristicValue(quick_object)
  },
  /** bluetooth.notifyBLECharacteristicValueChange */

  notifyBLECharacteristicValueChange(quick_object) {
    return tt.notifyBLECharacteristicValueChange(quick_object)
  },
  /** bluetooth.onblecharacteristicvaluechange */

  set onblecharacteristicvaluechange(callback) {
    return tt.onBLECharacteristicValueChange(callback)
  },
  /** bluetooth.onbleconnectionstatechange  */

  set onbleconnectionstatechange(callback) {
    return tt.onBLEConnectionStateChange(callback)
  }
}
