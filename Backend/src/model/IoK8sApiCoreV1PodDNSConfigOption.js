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
 * The IoK8sApiCoreV1PodDNSConfigOption model module.
 * @module model/IoK8sApiCoreV1PodDNSConfigOption
 * @version v1.30.0
 */
class IoK8sApiCoreV1PodDNSConfigOption {
    /**
     * Constructs a new <code>IoK8sApiCoreV1PodDNSConfigOption</code>.
     * PodDNSConfigOption defines DNS resolver options of a pod.
     * @alias module:model/IoK8sApiCoreV1PodDNSConfigOption
     */
    constructor() { 
        
        IoK8sApiCoreV1PodDNSConfigOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1PodDNSConfigOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1PodDNSConfigOption} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1PodDNSConfigOption} The populated <code>IoK8sApiCoreV1PodDNSConfigOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1PodDNSConfigOption();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1PodDNSConfigOption</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1PodDNSConfigOption</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * Required.
 * @member {String} name
 */
IoK8sApiCoreV1PodDNSConfigOption.prototype['name'] = undefined;

/**
 * @member {String} value
 */
IoK8sApiCoreV1PodDNSConfigOption.prototype['value'] = undefined;






export default IoK8sApiCoreV1PodDNSConfigOption;
