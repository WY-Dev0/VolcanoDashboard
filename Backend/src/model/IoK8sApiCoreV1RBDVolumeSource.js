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
 * The IoK8sApiCoreV1RBDVolumeSource model module.
 * @module model/IoK8sApiCoreV1RBDVolumeSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1RBDVolumeSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1RBDVolumeSource</code>.
     * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
     * @alias module:model/IoK8sApiCoreV1RBDVolumeSource
     * @param image {String} image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     * @param monitors {Array.<String>} monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
     */
    constructor(image, monitors) { 
        
        IoK8sApiCoreV1RBDVolumeSource.initialize(this, image, monitors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, image, monitors) { 
        obj['image'] = image;
        obj['monitors'] = monitors;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1RBDVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1RBDVolumeSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1RBDVolumeSource} The populated <code>IoK8sApiCoreV1RBDVolumeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1RBDVolumeSource();

            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('keyring')) {
                obj['keyring'] = ApiClient.convertToType(data['keyring'], 'String');
            }
            if (data.hasOwnProperty('monitors')) {
                obj['monitors'] = ApiClient.convertToType(data['monitors'], ['String']);
            }
            if (data.hasOwnProperty('pool')) {
                obj['pool'] = ApiClient.convertToType(data['pool'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('secretRef')) {
                obj['secretRef'] = IoK8sApiCoreV1LocalObjectReference.constructFromObject(data['secretRef']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1RBDVolumeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1RBDVolumeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1RBDVolumeSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fsType'] && !(typeof data['fsType'] === 'string' || data['fsType'] instanceof String)) {
            throw new Error("Expected the field `fsType` to be a primitive type in the JSON string but got " + data['fsType']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['keyring'] && !(typeof data['keyring'] === 'string' || data['keyring'] instanceof String)) {
            throw new Error("Expected the field `keyring` to be a primitive type in the JSON string but got " + data['keyring']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['monitors'])) {
            throw new Error("Expected the field `monitors` to be an array in the JSON data but got " + data['monitors']);
        }
        // ensure the json data is a string
        if (data['pool'] && !(typeof data['pool'] === 'string' || data['pool'] instanceof String)) {
            throw new Error("Expected the field `pool` to be a primitive type in the JSON string but got " + data['pool']);
        }
        // validate the optional field `secretRef`
        if (data['secretRef']) { // data not null
          IoK8sApiCoreV1LocalObjectReference.validateJSON(data['secretRef']);
        }
        // ensure the json data is a string
        if (data['user'] && !(typeof data['user'] === 'string' || data['user'] instanceof String)) {
            throw new Error("Expected the field `user` to be a primitive type in the JSON string but got " + data['user']);
        }

        return true;
    }


}

IoK8sApiCoreV1RBDVolumeSource.RequiredProperties = ["image", "monitors"];

/**
 * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
 * @member {String} fsType
 */
IoK8sApiCoreV1RBDVolumeSource.prototype['fsType'] = undefined;

/**
 * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 * @member {String} image
 */
IoK8sApiCoreV1RBDVolumeSource.prototype['image'] = undefined;

/**
 * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 * @member {String} keyring
 */
IoK8sApiCoreV1RBDVolumeSource.prototype['keyring'] = undefined;

/**
 * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 * @member {Array.<String>} monitors
 */
IoK8sApiCoreV1RBDVolumeSource.prototype['monitors'] = undefined;

/**
 * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 * @member {String} pool
 */
IoK8sApiCoreV1RBDVolumeSource.prototype['pool'] = undefined;

/**
 * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 * @member {Boolean} readOnly
 */
IoK8sApiCoreV1RBDVolumeSource.prototype['readOnly'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1LocalObjectReference} secretRef
 */
IoK8sApiCoreV1RBDVolumeSource.prototype['secretRef'] = undefined;

/**
 * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 * @member {String} user
 */
IoK8sApiCoreV1RBDVolumeSource.prototype['user'] = undefined;






export default IoK8sApiCoreV1RBDVolumeSource;

