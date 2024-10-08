/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The IoK8sApiCoreV1VolumeDevice model module.
 * @module model/IoK8sApiCoreV1VolumeDevice
 * @version v1.30.0
 */
class IoK8sApiCoreV1VolumeDevice {
    /**
     * Constructs a new <code>IoK8sApiCoreV1VolumeDevice</code>.
     * volumeDevice describes a mapping of a raw block device within a container.
     * @alias module:model/IoK8sApiCoreV1VolumeDevice
     * @param devicePath {String} devicePath is the path inside of the container that the device will be mapped to.
     * @param name {String} name must match the name of a persistentVolumeClaim in the pod
     */
    constructor(devicePath, name) { 
        
        IoK8sApiCoreV1VolumeDevice.initialize(this, devicePath, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, devicePath, name) { 
        obj['devicePath'] = devicePath;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1VolumeDevice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1VolumeDevice} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1VolumeDevice} The populated <code>IoK8sApiCoreV1VolumeDevice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1VolumeDevice();

            if (data.hasOwnProperty('devicePath')) {
                obj['devicePath'] = ApiClient.convertToType(data['devicePath'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1VolumeDevice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1VolumeDevice</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1VolumeDevice.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['devicePath'] && !(typeof data['devicePath'] === 'string' || data['devicePath'] instanceof String)) {
            throw new Error("Expected the field `devicePath` to be a primitive type in the JSON string but got " + data['devicePath']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

IoK8sApiCoreV1VolumeDevice.RequiredProperties = ["devicePath", "name"];

/**
 * devicePath is the path inside of the container that the device will be mapped to.
 * @member {String} devicePath
 */
IoK8sApiCoreV1VolumeDevice.prototype['devicePath'] = undefined;

/**
 * name must match the name of a persistentVolumeClaim in the pod
 * @member {String} name
 */
IoK8sApiCoreV1VolumeDevice.prototype['name'] = undefined;






export default IoK8sApiCoreV1VolumeDevice;

