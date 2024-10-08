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
 * The IoK8sApiCoreV1CinderVolumeSource model module.
 * @module model/IoK8sApiCoreV1CinderVolumeSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1CinderVolumeSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1CinderVolumeSource</code>.
     * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
     * @alias module:model/IoK8sApiCoreV1CinderVolumeSource
     * @param volumeID {String} volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
     */
    constructor(volumeID) { 
        
        IoK8sApiCoreV1CinderVolumeSource.initialize(this, volumeID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, volumeID) { 
        obj['volumeID'] = volumeID;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1CinderVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1CinderVolumeSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1CinderVolumeSource} The populated <code>IoK8sApiCoreV1CinderVolumeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1CinderVolumeSource();

            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('secretRef')) {
                obj['secretRef'] = IoK8sApiCoreV1LocalObjectReference.constructFromObject(data['secretRef']);
            }
            if (data.hasOwnProperty('volumeID')) {
                obj['volumeID'] = ApiClient.convertToType(data['volumeID'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1CinderVolumeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1CinderVolumeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1CinderVolumeSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fsType'] && !(typeof data['fsType'] === 'string' || data['fsType'] instanceof String)) {
            throw new Error("Expected the field `fsType` to be a primitive type in the JSON string but got " + data['fsType']);
        }
        // validate the optional field `secretRef`
        if (data['secretRef']) { // data not null
          IoK8sApiCoreV1LocalObjectReference.validateJSON(data['secretRef']);
        }
        // ensure the json data is a string
        if (data['volumeID'] && !(typeof data['volumeID'] === 'string' || data['volumeID'] instanceof String)) {
            throw new Error("Expected the field `volumeID` to be a primitive type in the JSON string but got " + data['volumeID']);
        }

        return true;
    }


}

IoK8sApiCoreV1CinderVolumeSource.RequiredProperties = ["volumeID"];

/**
 * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 * @member {String} fsType
 */
IoK8sApiCoreV1CinderVolumeSource.prototype['fsType'] = undefined;

/**
 * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 * @member {Boolean} readOnly
 */
IoK8sApiCoreV1CinderVolumeSource.prototype['readOnly'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1LocalObjectReference} secretRef
 */
IoK8sApiCoreV1CinderVolumeSource.prototype['secretRef'] = undefined;

/**
 * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 * @member {String} volumeID
 */
IoK8sApiCoreV1CinderVolumeSource.prototype['volumeID'] = undefined;






export default IoK8sApiCoreV1CinderVolumeSource;

