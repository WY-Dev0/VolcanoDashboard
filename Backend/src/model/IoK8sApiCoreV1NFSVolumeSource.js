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
 * The IoK8sApiCoreV1NFSVolumeSource model module.
 * @module model/IoK8sApiCoreV1NFSVolumeSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1NFSVolumeSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1NFSVolumeSource</code>.
     * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
     * @alias module:model/IoK8sApiCoreV1NFSVolumeSource
     * @param path {String} path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
     * @param server {String} server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
     */
    constructor(path, server) { 
        
        IoK8sApiCoreV1NFSVolumeSource.initialize(this, path, server);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path, server) { 
        obj['path'] = path;
        obj['server'] = server;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1NFSVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1NFSVolumeSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1NFSVolumeSource} The populated <code>IoK8sApiCoreV1NFSVolumeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1NFSVolumeSource();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('server')) {
                obj['server'] = ApiClient.convertToType(data['server'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1NFSVolumeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1NFSVolumeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1NFSVolumeSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['server'] && !(typeof data['server'] === 'string' || data['server'] instanceof String)) {
            throw new Error("Expected the field `server` to be a primitive type in the JSON string but got " + data['server']);
        }

        return true;
    }


}

IoK8sApiCoreV1NFSVolumeSource.RequiredProperties = ["path", "server"];

/**
 * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
 * @member {String} path
 */
IoK8sApiCoreV1NFSVolumeSource.prototype['path'] = undefined;

/**
 * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
 * @member {Boolean} readOnly
 */
IoK8sApiCoreV1NFSVolumeSource.prototype['readOnly'] = undefined;

/**
 * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
 * @member {String} server
 */
IoK8sApiCoreV1NFSVolumeSource.prototype['server'] = undefined;






export default IoK8sApiCoreV1NFSVolumeSource;
