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
 * The IoK8sApiCoreV1EventSource model module.
 * @module model/IoK8sApiCoreV1EventSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1EventSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1EventSource</code>.
     * EventSource contains information for an event.
     * @alias module:model/IoK8sApiCoreV1EventSource
     */
    constructor() { 
        
        IoK8sApiCoreV1EventSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1EventSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1EventSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1EventSource} The populated <code>IoK8sApiCoreV1EventSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1EventSource();

            if (data.hasOwnProperty('component')) {
                obj['component'] = ApiClient.convertToType(data['component'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1EventSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1EventSource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['component'] && !(typeof data['component'] === 'string' || data['component'] instanceof String)) {
            throw new Error("Expected the field `component` to be a primitive type in the JSON string but got " + data['component']);
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }

        return true;
    }


}



/**
 * Component from which the event is generated.
 * @member {String} component
 */
IoK8sApiCoreV1EventSource.prototype['component'] = undefined;

/**
 * Node name on which the event is generated.
 * @member {String} host
 */
IoK8sApiCoreV1EventSource.prototype['host'] = undefined;






export default IoK8sApiCoreV1EventSource;

