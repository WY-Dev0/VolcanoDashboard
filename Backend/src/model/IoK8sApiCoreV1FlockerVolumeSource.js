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
 * The IoK8sApiCoreV1FlockerVolumeSource model module.
 * @module model/IoK8sApiCoreV1FlockerVolumeSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1FlockerVolumeSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1FlockerVolumeSource</code>.
     * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
     * @alias module:model/IoK8sApiCoreV1FlockerVolumeSource
     */
    constructor() { 
        
        IoK8sApiCoreV1FlockerVolumeSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1FlockerVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1FlockerVolumeSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1FlockerVolumeSource} The populated <code>IoK8sApiCoreV1FlockerVolumeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1FlockerVolumeSource();

            if (data.hasOwnProperty('datasetName')) {
                obj['datasetName'] = ApiClient.convertToType(data['datasetName'], 'String');
            }
            if (data.hasOwnProperty('datasetUUID')) {
                obj['datasetUUID'] = ApiClient.convertToType(data['datasetUUID'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1FlockerVolumeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1FlockerVolumeSource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['datasetName'] && !(typeof data['datasetName'] === 'string' || data['datasetName'] instanceof String)) {
            throw new Error("Expected the field `datasetName` to be a primitive type in the JSON string but got " + data['datasetName']);
        }
        // ensure the json data is a string
        if (data['datasetUUID'] && !(typeof data['datasetUUID'] === 'string' || data['datasetUUID'] instanceof String)) {
            throw new Error("Expected the field `datasetUUID` to be a primitive type in the JSON string but got " + data['datasetUUID']);
        }

        return true;
    }


}



/**
 * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
 * @member {String} datasetName
 */
IoK8sApiCoreV1FlockerVolumeSource.prototype['datasetName'] = undefined;

/**
 * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
 * @member {String} datasetUUID
 */
IoK8sApiCoreV1FlockerVolumeSource.prototype['datasetUUID'] = undefined;






export default IoK8sApiCoreV1FlockerVolumeSource;
