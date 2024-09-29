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
 * The IoK8sApiCoreV1PhotonPersistentDiskVolumeSource model module.
 * @module model/IoK8sApiCoreV1PhotonPersistentDiskVolumeSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1PhotonPersistentDiskVolumeSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1PhotonPersistentDiskVolumeSource</code>.
     * Represents a Photon Controller persistent disk resource.
     * @alias module:model/IoK8sApiCoreV1PhotonPersistentDiskVolumeSource
     * @param pdID {String} pdID is the ID that identifies Photon Controller persistent disk
     */
    constructor(pdID) { 
        
        IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.initialize(this, pdID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pdID) { 
        obj['pdID'] = pdID;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1PhotonPersistentDiskVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1PhotonPersistentDiskVolumeSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1PhotonPersistentDiskVolumeSource} The populated <code>IoK8sApiCoreV1PhotonPersistentDiskVolumeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1PhotonPersistentDiskVolumeSource();

            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('pdID')) {
                obj['pdID'] = ApiClient.convertToType(data['pdID'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1PhotonPersistentDiskVolumeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1PhotonPersistentDiskVolumeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fsType'] && !(typeof data['fsType'] === 'string' || data['fsType'] instanceof String)) {
            throw new Error("Expected the field `fsType` to be a primitive type in the JSON string but got " + data['fsType']);
        }
        // ensure the json data is a string
        if (data['pdID'] && !(typeof data['pdID'] === 'string' || data['pdID'] instanceof String)) {
            throw new Error("Expected the field `pdID` to be a primitive type in the JSON string but got " + data['pdID']);
        }

        return true;
    }


}

IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.RequiredProperties = ["pdID"];

/**
 * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
 * @member {String} fsType
 */
IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.prototype['fsType'] = undefined;

/**
 * pdID is the ID that identifies Photon Controller persistent disk
 * @member {String} pdID
 */
IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.prototype['pdID'] = undefined;






export default IoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
