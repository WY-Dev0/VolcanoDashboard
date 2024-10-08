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
 * The IoK8sApiCoreV1HostPathVolumeSource model module.
 * @module model/IoK8sApiCoreV1HostPathVolumeSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1HostPathVolumeSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1HostPathVolumeSource</code>.
     * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
     * @alias module:model/IoK8sApiCoreV1HostPathVolumeSource
     * @param path {String} path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
     */
    constructor(path) { 
        
        IoK8sApiCoreV1HostPathVolumeSource.initialize(this, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path) { 
        obj['path'] = path;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1HostPathVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1HostPathVolumeSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1HostPathVolumeSource} The populated <code>IoK8sApiCoreV1HostPathVolumeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1HostPathVolumeSource();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1HostPathVolumeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1HostPathVolumeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1HostPathVolumeSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

IoK8sApiCoreV1HostPathVolumeSource.RequiredProperties = ["path"];

/**
 * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
 * @member {String} path
 */
IoK8sApiCoreV1HostPathVolumeSource.prototype['path'] = undefined;

/**
 * type for HostPath Volume Defaults to \"\" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath  Possible enum values:  - `\"\"` For backwards compatible, leave it empty if unset  - `\"BlockDevice\"` A block device must exist at the given path  - `\"CharDevice\"` A character device must exist at the given path  - `\"Directory\"` A directory must exist at the given path  - `\"DirectoryOrCreate\"` If nothing exists at the given path, an empty directory will be created there as needed with file mode 0755, having the same group and ownership with Kubelet.  - `\"File\"` A file must exist at the given path  - `\"FileOrCreate\"` If nothing exists at the given path, an empty file will be created there as needed with file mode 0644, having the same group and ownership with Kubelet.  - `\"Socket\"` A UNIX socket must exist at the given path
 * @member {module:model/IoK8sApiCoreV1HostPathVolumeSource.TypeEnum} type
 */
IoK8sApiCoreV1HostPathVolumeSource.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1HostPathVolumeSource['TypeEnum'] = {

    /**
     * value: ""
     * @const
     */
    "empty": "",

    /**
     * value: "BlockDevice"
     * @const
     */
    "BlockDevice": "BlockDevice",

    /**
     * value: "CharDevice"
     * @const
     */
    "CharDevice": "CharDevice",

    /**
     * value: "Directory"
     * @const
     */
    "Directory": "Directory",

    /**
     * value: "DirectoryOrCreate"
     * @const
     */
    "DirectoryOrCreate": "DirectoryOrCreate",

    /**
     * value: "File"
     * @const
     */
    "File": "File",

    /**
     * value: "FileOrCreate"
     * @const
     */
    "FileOrCreate": "FileOrCreate",

    /**
     * value: "Socket"
     * @const
     */
    "Socket": "Socket"
};



export default IoK8sApiCoreV1HostPathVolumeSource;

