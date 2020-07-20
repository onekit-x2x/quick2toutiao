module.exports = {
  /* bluetooth.openAdapter*/
  openAdapter(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_operateAdapter = quick_object.operateAdapter || false;
    quick_object =null;
    //////////////////////////////////////////
    var tt_object = {};
    if(quick_operateAdapter){
      tt_object.operateAdapter = quick_operateAdapter
    }
    tt_object.success = function(tt_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.openBluetoothAdapter(tt_object)
  }
  /**
    bluetooth.closeAdapter({
   *
   */
  ,
  closeAdapter(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_operateAdapter = quick_object.operateAdapter || false;
    ////////////////////////////////////////
    var tt_object = {};
    tt_object.success = function(tt_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.closeBluetoothAdapter(tt_object)
  }
  /**bluetooth.getAdapterState */
  ,
  getAdapterState(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    /////////////////////////////////////
    var tt_object = {};
    tt_object.success = function(tt_res) {
      var quick_res = {};
      quick_res.available = tt_res.available
      quick_res.discovering = tt_res.discovering
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.getBluetoothAdapterState(tt_object)
  }

  /**bluetooth.onadapterstatechange 监听监听蓝牙适配器状态变化事件 */
  ,
  onadapterstatechange() {
    return tt.onBluetoothAdapterStateChange()
  }
  /**bluetooth.startDevicesDiscovery */
  ,
  startDevicesDiscovery(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_services = quick_object.services;
    var quick_allowDuplicatesKey = quick_object.allowDuplicatesKey;
    var quick_interval = quick_object.interval;
    ////////////////////////////////////////////
    var tt_object = {};
    if (quick_services) {
      tt_object.services = quick_services
    };
    if (quick_allowDuplicatesKey) {
      tt_object.allowDuplicatesKey = quick_allowDuplicatesKey
    };
    if (quick_interval) {
      tt_object.interval = quick_interval
    }
    tt_object.success = function(tt_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.startBluetoothDevicesDiscovery(tt_object)
  }

  /** bluetooth.stopDevicesDiscovery */
  ,
  stopDevicesDiscovery(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    //////////////////////////////////
    var tt_object = {};
    tt_object.success = function(tt_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.stopBluetoothDevicesDiscovery(tt_object)
  }

  /**bluetooth.getDevices */
  ,
  getDevices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    //////////////////////////////////
    var tt_object = {};
    tt_object.success = function(tt_res) {
      var quick_res = {
        devices: tt_res.devices
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.getBluetoothDevices(tt_object)
  }

  /**bluetooth.ondevicefound */
  ,
  ondevicefound(quick_object) {
    return tt.onBluetoothDeviceFound(function(res) {})
  }

  /**bluetooth.getConnectedDevices */
  ,
  getConnectedDevices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_services = quick_object.services;
    //////////////////////////////////
    return tt.onBluetoothDeviceFound(function(callback) {
      quick_services.devices = callback.devices;
    })
  }

  /**bluetooth.createBLEConnection */
  ,
  createBLEConnection(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_timeout = quick_object.timeout;
    ////////////////////////////////////
    var tt_object = {};
    if (quick_deviceId) {
      tt_object.deviceId = quick_deviceId;
    };
    if (quick_timeout) {
      tt_object.timeout = quick_timeout;
    };

    tt_object.success = function(tt_res) {
      if (quick_success) {
        quick_success(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.createBLEConnection(tt_object)
  }

  /**bluetooth.closeBLEConnection */
  ,
  closeBLEConnection(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    ////////////////////////////////////
    var tt_object = {};
    if (quick_deviceId) {
      tt_object.deviceId = quick_deviceId;
    };
    tt_object.success = function(tt_res) {
      if (quick_success) {
        quick_success(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.closeBLEConnection(tt_object)
  }

  /**bluetooth.getBLEDeviceServices */
  ,
  getBLEDeviceServices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    ////////////////////////////////////
    var tt_object = {};
    if (quick_deviceId) {
      tt_object.deviceId = quick_deviceId;
    };
    tt_object.success = function(tt_res) {
      var quick_res = {
        services: tt_res.services
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.getBLEDeviceServices(tt_object)
  }

  /**bluetooth.getBLEDeviceCharacteristics */
  ,
  getBLEDeviceCharacteristics(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    ////////////////////////////////////
    var tt_object = {};
    if (quick_deviceId) {
      tt_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      tt_object.serviceId = quick_serviceId
    };
    tt_object.success = function(tt_res) {
      var quick_res = {
        characteristics: tt_res.characteristics
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.getBLEDeviceCharacteristics(tt_object)
  }

  /**bluetooth.readBLECharacteristicValue */
  ,
  readBLECharacteristicValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    ////////////////////////////////////
    var tt_object = {};
    if (quick_deviceId) {
      tt_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      tt_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      tt_object.characteristicId = quick_characteristicId
    }
    tt_object.success = function(tt_res) {
      if (quick_success) {
        quick_success(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.readBLECharacteristicValue(tt_object)
  }

  /**bluetooth.writeBLECharacteristicValue */
  ,
  writeBLECharacteristicValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    var quick_value = quick_object.value;
    ////////////////////////////////////
    var tt_object = {};
    if (quick_deviceId) {
      tt_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      tt_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      tt_object.characteristicId = quick_characteristicId
    }
    if (quick_value) {
      tt_object.value = quick_value
    }
    tt_object.success = function(tt_res) {
      if (quick_success) {
        quick_success(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.writeBLECharacteristicValue(tt_object)
  }
  /**bluetooth.notifyBLECharacteristicValueChange */
  ,
  notifyBLECharacteristicValueChange(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    var quick_state = quick_object.state;
    ////////////////////////////////////////
    var tt_object = {};
    if (quick_deviceId) {
      tt_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      tt_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      tt_object.characteristicId = quick_characteristicId
    }
    if (quick_state) {
      tt_object.state = quick_state
    }
    tt_object.success = function(tt_res) {
      if (quick_success) {
        quick_success(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.notifyBLECharacteristicValueChange(tt_object)
  }

  /**bluetooth.onblecharacteristicvaluechange */
  ,
  onblecharacteristicvaluechange() {
    console.log(data)
    return tt.onBLECharacteristicValueChange(function(callback) {})
  }
  /**bluetooth.onbleconnectionstatechange  */
  ,
  onbleconnectionstatechange() {
    return tt.onBLEConnectionStateChange(function(callback) {})
  }
}