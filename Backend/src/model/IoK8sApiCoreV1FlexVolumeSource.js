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
import IoK8sApiCoreV1LocalObjectReference from './IoK8sApiCoreV1LocalObjectReference';

/**
 * The IoK8sApiCoreV1FlexVolumeSource model module.
 * @module model/IoK8sApiCoreV1FlexVolumeSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1FlexVolumeSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1FlexVolumeSource</code>.
     * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
     * @alias module:model/IoK8sApiCoreV1FlexVolumeSource
     * @param driver {String} driver is the name of the driver to use for this volume.
     */
    constructor(driver) { 
        
        IoK8sApiCoreV1FlexVolumeSource.initialize(this, driver);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, driver) { 
        obj['driver'] = driver;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1FlexVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1FlexVolumeSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1FlexVolumeSource} The populated <code>IoK8sApiCoreV1FlexVolumeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1FlexVolumeSource();

            if (data.hasOwnProperty('driver')) {
                obj['driver'] = ApiClient.convertToType(data['driver'], 'String');
            }
            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], {'String': 'String'});
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('secretRef')) {
                obj['secretRef'] = IoK8sApiCoreV1LocalObjectReference.constructFromObject(data['secretRef']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1FlexVolumeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1FlexVolumeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1FlexVolumeSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['driver'] && !(typeof data['driver'] === 'string' || data['driver'] instanceof String)) {
            throw new Error("Expected the field `driver` to be a primitive type in the JSON string but got " + data['driver']);
        }
        // ensure the json data is a string
        if (data['fsType'] && !(typeof data['fsType'] === 'string' || data['fsType'] instanceof String)) {
            throw new Error("Expected the field `fsType` to be a primitive type in the JSON string but got " + data['fsType']);
        }
        // validate the optional field `secretRef`
        if (data['secretRef']) { // data not null
          IoK8sApiCoreV1LocalObjectReference.validateJSON(data['secretRef']);
        }

        return true;
    }


}

IoK8sApiCoreV1FlexVolumeSource.RequiredProperties = ["driver"];

/**
 * driver is the name of the driver to use for this volume.
 * @member {String} driver
 */
IoK8sApiCoreV1FlexVolumeSource.prototype['driver'] = undefined;

/**
 * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script.
 * @member {String} fsType
 */
IoK8sApiCoreV1FlexVolumeSource.prototype['fsType'] = undefined;

/**
 * options is Optional: this field holds extra command options if any.
 * @member {Object.<String, String>} options
 */
IoK8sApiCoreV1FlexVolumeSource.prototype['options'] = undefined;

/**
 * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
 * @member {Boolean} readOnly
 */
IoK8sApiCoreV1FlexVolumeSource.prototype['readOnly'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1LocalObjectReference} secretRef
 */
IoK8sApiCoreV1FlexVolumeSource.prototype['secretRef'] = undefined;






export default IoK8sApiCoreV1FlexVolumeSource;

