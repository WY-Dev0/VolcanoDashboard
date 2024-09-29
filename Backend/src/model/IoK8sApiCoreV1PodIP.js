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
 * The IoK8sApiCoreV1PodIP model module.
 * @module model/IoK8sApiCoreV1PodIP
 * @version v1.30.0
 */
class IoK8sApiCoreV1PodIP {
    /**
     * Constructs a new <code>IoK8sApiCoreV1PodIP</code>.
     * PodIP represents a single IP address allocated to the pod.
     * @alias module:model/IoK8sApiCoreV1PodIP
     */
    constructor() { 
        
        IoK8sApiCoreV1PodIP.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1PodIP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1PodIP} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1PodIP} The populated <code>IoK8sApiCoreV1PodIP</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1PodIP();

            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1PodIP</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1PodIP</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }

        return true;
    }


}



/**
 * IP is the IP address assigned to the pod
 * @member {String} ip
 */
IoK8sApiCoreV1PodIP.prototype['ip'] = undefined;






export default IoK8sApiCoreV1PodIP;

