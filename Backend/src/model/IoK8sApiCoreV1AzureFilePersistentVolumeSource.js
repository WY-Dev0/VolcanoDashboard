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
 * The IoK8sApiCoreV1AzureFilePersistentVolumeSource model module.
 * @module model/IoK8sApiCoreV1AzureFilePersistentVolumeSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1AzureFilePersistentVolumeSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1AzureFilePersistentVolumeSource</code>.
     * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
     * @alias module:model/IoK8sApiCoreV1AzureFilePersistentVolumeSource
     * @param secretName {String} secretName is the name of secret that contains Azure Storage Account Name and Key
     * @param shareName {String} shareName is the azure Share Name
     */
    constructor(secretName, shareName) { 
        
        IoK8sApiCoreV1AzureFilePersistentVolumeSource.initialize(this, secretName, shareName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, secretName, shareName) { 
        obj['secretName'] = secretName;
        obj['shareName'] = shareName;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1AzureFilePersistentVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1AzureFilePersistentVolumeSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1AzureFilePersistentVolumeSource} The populated <code>IoK8sApiCoreV1AzureFilePersistentVolumeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1AzureFilePersistentVolumeSource();

            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('secretName')) {
                obj['secretName'] = ApiClient.convertToType(data['secretName'], 'String');
            }
            if (data.hasOwnProperty('secretNamespace')) {
                obj['secretNamespace'] = ApiClient.convertToType(data['secretNamespace'], 'String');
            }
            if (data.hasOwnProperty('shareName')) {
                obj['shareName'] = ApiClient.convertToType(data['shareName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1AzureFilePersistentVolumeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1AzureFilePersistentVolumeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1AzureFilePersistentVolumeSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['secretName'] && !(typeof data['secretName'] === 'string' || data['secretName'] instanceof String)) {
            throw new Error("Expected the field `secretName` to be a primitive type in the JSON string but got " + data['secretName']);
        }
        // ensure the json data is a string
        if (data['secretNamespace'] && !(typeof data['secretNamespace'] === 'string' || data['secretNamespace'] instanceof String)) {
            throw new Error("Expected the field `secretNamespace` to be a primitive type in the JSON string but got " + data['secretNamespace']);
        }
        // ensure the json data is a string
        if (data['shareName'] && !(typeof data['shareName'] === 'string' || data['shareName'] instanceof String)) {
            throw new Error("Expected the field `shareName` to be a primitive type in the JSON string but got " + data['shareName']);
        }

        return true;
    }


}

IoK8sApiCoreV1AzureFilePersistentVolumeSource.RequiredProperties = ["secretName", "shareName"];

/**
 * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
 * @member {Boolean} readOnly
 */
IoK8sApiCoreV1AzureFilePersistentVolumeSource.prototype['readOnly'] = undefined;

/**
 * secretName is the name of secret that contains Azure Storage Account Name and Key
 * @member {String} secretName
 */
IoK8sApiCoreV1AzureFilePersistentVolumeSource.prototype['secretName'] = undefined;

/**
 * secretNamespace is the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
 * @member {String} secretNamespace
 */
IoK8sApiCoreV1AzureFilePersistentVolumeSource.prototype['secretNamespace'] = undefined;

/**
 * shareName is the azure Share Name
 * @member {String} shareName
 */
IoK8sApiCoreV1AzureFilePersistentVolumeSource.prototype['shareName'] = undefined;






export default IoK8sApiCoreV1AzureFilePersistentVolumeSource;
