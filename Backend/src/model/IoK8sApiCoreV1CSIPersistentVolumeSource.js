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
import IoK8sApiCoreV1SecretReference from './IoK8sApiCoreV1SecretReference';

/**
 * The IoK8sApiCoreV1CSIPersistentVolumeSource model module.
 * @module model/IoK8sApiCoreV1CSIPersistentVolumeSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1CSIPersistentVolumeSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1CSIPersistentVolumeSource</code>.
     * Represents storage that is managed by an external CSI volume driver (Beta feature)
     * @alias module:model/IoK8sApiCoreV1CSIPersistentVolumeSource
     * @param driver {String} driver is the name of the driver to use for this volume. Required.
     * @param volumeHandle {String} volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
     */
    constructor(driver, volumeHandle) { 
        
        IoK8sApiCoreV1CSIPersistentVolumeSource.initialize(this, driver, volumeHandle);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, driver, volumeHandle) { 
        obj['driver'] = driver;
        obj['volumeHandle'] = volumeHandle;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1CSIPersistentVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1CSIPersistentVolumeSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1CSIPersistentVolumeSource} The populated <code>IoK8sApiCoreV1CSIPersistentVolumeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1CSIPersistentVolumeSource();

            if (data.hasOwnProperty('controllerExpandSecretRef')) {
                obj['controllerExpandSecretRef'] = IoK8sApiCoreV1SecretReference.constructFromObject(data['controllerExpandSecretRef']);
            }
            if (data.hasOwnProperty('controllerPublishSecretRef')) {
                obj['controllerPublishSecretRef'] = IoK8sApiCoreV1SecretReference.constructFromObject(data['controllerPublishSecretRef']);
            }
            if (data.hasOwnProperty('driver')) {
                obj['driver'] = ApiClient.convertToType(data['driver'], 'String');
            }
            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('nodeExpandSecretRef')) {
                obj['nodeExpandSecretRef'] = IoK8sApiCoreV1SecretReference.constructFromObject(data['nodeExpandSecretRef']);
            }
            if (data.hasOwnProperty('nodePublishSecretRef')) {
                obj['nodePublishSecretRef'] = IoK8sApiCoreV1SecretReference.constructFromObject(data['nodePublishSecretRef']);
            }
            if (data.hasOwnProperty('nodeStageSecretRef')) {
                obj['nodeStageSecretRef'] = IoK8sApiCoreV1SecretReference.constructFromObject(data['nodeStageSecretRef']);
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('volumeAttributes')) {
                obj['volumeAttributes'] = ApiClient.convertToType(data['volumeAttributes'], {'String': 'String'});
            }
            if (data.hasOwnProperty('volumeHandle')) {
                obj['volumeHandle'] = ApiClient.convertToType(data['volumeHandle'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1CSIPersistentVolumeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1CSIPersistentVolumeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1CSIPersistentVolumeSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `controllerExpandSecretRef`
        if (data['controllerExpandSecretRef']) { // data not null
          IoK8sApiCoreV1SecretReference.validateJSON(data['controllerExpandSecretRef']);
        }
        // validate the optional field `controllerPublishSecretRef`
        if (data['controllerPublishSecretRef']) { // data not null
          IoK8sApiCoreV1SecretReference.validateJSON(data['controllerPublishSecretRef']);
        }
        // ensure the json data is a string
        if (data['driver'] && !(typeof data['driver'] === 'string' || data['driver'] instanceof String)) {
            throw new Error("Expected the field `driver` to be a primitive type in the JSON string but got " + data['driver']);
        }
        // ensure the json data is a string
        if (data['fsType'] && !(typeof data['fsType'] === 'string' || data['fsType'] instanceof String)) {
            throw new Error("Expected the field `fsType` to be a primitive type in the JSON string but got " + data['fsType']);
        }
        // validate the optional field `nodeExpandSecretRef`
        if (data['nodeExpandSecretRef']) { // data not null
          IoK8sApiCoreV1SecretReference.validateJSON(data['nodeExpandSecretRef']);
        }
        // validate the optional field `nodePublishSecretRef`
        if (data['nodePublishSecretRef']) { // data not null
          IoK8sApiCoreV1SecretReference.validateJSON(data['nodePublishSecretRef']);
        }
        // validate the optional field `nodeStageSecretRef`
        if (data['nodeStageSecretRef']) { // data not null
          IoK8sApiCoreV1SecretReference.validateJSON(data['nodeStageSecretRef']);
        }
        // ensure the json data is a string
        if (data['volumeHandle'] && !(typeof data['volumeHandle'] === 'string' || data['volumeHandle'] instanceof String)) {
            throw new Error("Expected the field `volumeHandle` to be a primitive type in the JSON string but got " + data['volumeHandle']);
        }

        return true;
    }


}

IoK8sApiCoreV1CSIPersistentVolumeSource.RequiredProperties = ["driver", "volumeHandle"];

/**
 * @member {module:model/IoK8sApiCoreV1SecretReference} controllerExpandSecretRef
 */
IoK8sApiCoreV1CSIPersistentVolumeSource.prototype['controllerExpandSecretRef'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1SecretReference} controllerPublishSecretRef
 */
IoK8sApiCoreV1CSIPersistentVolumeSource.prototype['controllerPublishSecretRef'] = undefined;

/**
 * driver is the name of the driver to use for this volume. Required.
 * @member {String} driver
 */
IoK8sApiCoreV1CSIPersistentVolumeSource.prototype['driver'] = undefined;

/**
 * fsType to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\".
 * @member {String} fsType
 */
IoK8sApiCoreV1CSIPersistentVolumeSource.prototype['fsType'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1SecretReference} nodeExpandSecretRef
 */
IoK8sApiCoreV1CSIPersistentVolumeSource.prototype['nodeExpandSecretRef'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1SecretReference} nodePublishSecretRef
 */
IoK8sApiCoreV1CSIPersistentVolumeSource.prototype['nodePublishSecretRef'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1SecretReference} nodeStageSecretRef
 */
IoK8sApiCoreV1CSIPersistentVolumeSource.prototype['nodeStageSecretRef'] = undefined;

/**
 * readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
 * @member {Boolean} readOnly
 */
IoK8sApiCoreV1CSIPersistentVolumeSource.prototype['readOnly'] = undefined;

/**
 * volumeAttributes of the volume to publish.
 * @member {Object.<String, String>} volumeAttributes
 */
IoK8sApiCoreV1CSIPersistentVolumeSource.prototype['volumeAttributes'] = undefined;

/**
 * volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
 * @member {String} volumeHandle
 */
IoK8sApiCoreV1CSIPersistentVolumeSource.prototype['volumeHandle'] = undefined;






export default IoK8sApiCoreV1CSIPersistentVolumeSource;
