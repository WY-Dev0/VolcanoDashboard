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
 * The IoK8sApiCoreV1KeyToPath model module.
 * @module model/IoK8sApiCoreV1KeyToPath
 * @version v1.30.0
 */
class IoK8sApiCoreV1KeyToPath {
    /**
     * Constructs a new <code>IoK8sApiCoreV1KeyToPath</code>.
     * Maps a string key to a path within a volume.
     * @alias module:model/IoK8sApiCoreV1KeyToPath
     * @param key {String} key is the key to project.
     * @param path {String} path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
     */
    constructor(key, path) { 
        
        IoK8sApiCoreV1KeyToPath.initialize(this, key, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, path) { 
        obj['key'] = key;
        obj['path'] = path;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1KeyToPath</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1KeyToPath} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1KeyToPath} The populated <code>IoK8sApiCoreV1KeyToPath</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1KeyToPath();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1KeyToPath</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1KeyToPath</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1KeyToPath.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }

        return true;
    }


}

IoK8sApiCoreV1KeyToPath.RequiredProperties = ["key", "path"];

/**
 * key is the key to project.
 * @member {String} key
 */
IoK8sApiCoreV1KeyToPath.prototype['key'] = undefined;

/**
 * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
 * @member {Number} mode
 */
IoK8sApiCoreV1KeyToPath.prototype['mode'] = undefined;

/**
 * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
 * @member {String} path
 */
IoK8sApiCoreV1KeyToPath.prototype['path'] = undefined;






export default IoK8sApiCoreV1KeyToPath;
