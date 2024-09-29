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
 * The IoK8sApiAdmissionregistrationV1ServiceReference model module.
 * @module model/IoK8sApiAdmissionregistrationV1ServiceReference
 * @version v1.30.0
 */
class IoK8sApiAdmissionregistrationV1ServiceReference {
    /**
     * Constructs a new <code>IoK8sApiAdmissionregistrationV1ServiceReference</code>.
     * ServiceReference holds a reference to Service.legacy.k8s.io
     * @alias module:model/IoK8sApiAdmissionregistrationV1ServiceReference
     * @param name {String} `name` is the name of the service. Required
     * @param namespace {String} `namespace` is the namespace of the service. Required
     */
    constructor(name, namespace) { 
        
        IoK8sApiAdmissionregistrationV1ServiceReference.initialize(this, name, namespace);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, namespace) { 
        obj['name'] = name;
        obj['namespace'] = namespace;
    }

    /**
     * Constructs a <code>IoK8sApiAdmissionregistrationV1ServiceReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAdmissionregistrationV1ServiceReference} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAdmissionregistrationV1ServiceReference} The populated <code>IoK8sApiAdmissionregistrationV1ServiceReference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAdmissionregistrationV1ServiceReference();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAdmissionregistrationV1ServiceReference</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAdmissionregistrationV1ServiceReference</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAdmissionregistrationV1ServiceReference.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['namespace'] && !(typeof data['namespace'] === 'string' || data['namespace'] instanceof String)) {
            throw new Error("Expected the field `namespace` to be a primitive type in the JSON string but got " + data['namespace']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }

        return true;
    }


}

IoK8sApiAdmissionregistrationV1ServiceReference.RequiredProperties = ["name", "namespace"];

/**
 * `name` is the name of the service. Required
 * @member {String} name
 */
IoK8sApiAdmissionregistrationV1ServiceReference.prototype['name'] = undefined;

/**
 * `namespace` is the namespace of the service. Required
 * @member {String} namespace
 */
IoK8sApiAdmissionregistrationV1ServiceReference.prototype['namespace'] = undefined;

/**
 * `path` is an optional URL path which will be sent in any request to this service.
 * @member {String} path
 */
IoK8sApiAdmissionregistrationV1ServiceReference.prototype['path'] = undefined;

/**
 * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
 * @member {Number} port
 */
IoK8sApiAdmissionregistrationV1ServiceReference.prototype['port'] = undefined;






export default IoK8sApiAdmissionregistrationV1ServiceReference;

