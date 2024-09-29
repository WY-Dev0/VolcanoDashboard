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
 * The IoK8sApiCoreV1GCEPersistentDiskVolumeSource model module.
 * @module model/IoK8sApiCoreV1GCEPersistentDiskVolumeSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1GCEPersistentDiskVolumeSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1GCEPersistentDiskVolumeSource</code>.
     * Represents a Persistent Disk resource in Google Compute Engine.  A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
     * @alias module:model/IoK8sApiCoreV1GCEPersistentDiskVolumeSource
     * @param pdName {String} pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
     */
    constructor(pdName) { 
        
        IoK8sApiCoreV1GCEPersistentDiskVolumeSource.initialize(this, pdName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pdName) { 
        obj['pdName'] = pdName;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1GCEPersistentDiskVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1GCEPersistentDiskVolumeSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1GCEPersistentDiskVolumeSource} The populated <code>IoK8sApiCoreV1GCEPersistentDiskVolumeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1GCEPersistentDiskVolumeSource();

            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('partition')) {
                obj['partition'] = ApiClient.convertToType(data['partition'], 'Number');
            }
            if (data.hasOwnProperty('pdName')) {
                obj['pdName'] = ApiClient.convertToType(data['pdName'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1GCEPersistentDiskVolumeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1GCEPersistentDiskVolumeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1GCEPersistentDiskVolumeSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fsType'] && !(typeof data['fsType'] === 'string' || data['fsType'] instanceof String)) {
            throw new Error("Expected the field `fsType` to be a primitive type in the JSON string but got " + data['fsType']);
        }
        // ensure the json data is a string
        if (data['pdName'] && !(typeof data['pdName'] === 'string' || data['pdName'] instanceof String)) {
            throw new Error("Expected the field `pdName` to be a primitive type in the JSON string but got " + data['pdName']);
        }

        return true;
    }


}

IoK8sApiCoreV1GCEPersistentDiskVolumeSource.RequiredProperties = ["pdName"];

/**
 * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
 * @member {String} fsType
 */
IoK8sApiCoreV1GCEPersistentDiskVolumeSource.prototype['fsType'] = undefined;

/**
 * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
 * @member {Number} partition
 */
IoK8sApiCoreV1GCEPersistentDiskVolumeSource.prototype['partition'] = undefined;

/**
 * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
 * @member {String} pdName
 */
IoK8sApiCoreV1GCEPersistentDiskVolumeSource.prototype['pdName'] = undefined;

/**
 * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
 * @member {Boolean} readOnly
 */
IoK8sApiCoreV1GCEPersistentDiskVolumeSource.prototype['readOnly'] = undefined;






export default IoK8sApiCoreV1GCEPersistentDiskVolumeSource;

