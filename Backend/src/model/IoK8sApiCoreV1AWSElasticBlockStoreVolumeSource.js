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
 * The IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource model module.
 * @module model/IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource</code>.
     * Represents a Persistent Disk resource in AWS.  An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
     * @alias module:model/IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource
     * @param volumeID {String} volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
     */
    constructor(volumeID) { 
        
        IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.initialize(this, volumeID);
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
     * Constructs a <code>IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource} The populated <code>IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource();

            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('partition')) {
                obj['partition'] = ApiClient.convertToType(data['partition'], 'Number');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('volumeID')) {
                obj['volumeID'] = ApiClient.convertToType(data['volumeID'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fsType'] && !(typeof data['fsType'] === 'string' || data['fsType'] instanceof String)) {
            throw new Error("Expected the field `fsType` to be a primitive type in the JSON string but got " + data['fsType']);
        }
        // ensure the json data is a string
        if (data['volumeID'] && !(typeof data['volumeID'] === 'string' || data['volumeID'] instanceof String)) {
            throw new Error("Expected the field `volumeID` to be a primitive type in the JSON string but got " + data['volumeID']);
        }

        return true;
    }


}

IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.RequiredProperties = ["volumeID"];

/**
 * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
 * @member {String} fsType
 */
IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.prototype['fsType'] = undefined;

/**
 * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty).
 * @member {Number} partition
 */
IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.prototype['partition'] = undefined;

/**
 * readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
 * @member {Boolean} readOnly
 */
IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.prototype['readOnly'] = undefined;

/**
 * volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
 * @member {String} volumeID
 */
IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.prototype['volumeID'] = undefined;






export default IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
