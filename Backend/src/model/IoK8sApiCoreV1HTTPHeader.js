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
 * The IoK8sApiCoreV1HTTPHeader model module.
 * @module model/IoK8sApiCoreV1HTTPHeader
 * @version v1.30.0
 */
class IoK8sApiCoreV1HTTPHeader {
    /**
     * Constructs a new <code>IoK8sApiCoreV1HTTPHeader</code>.
     * HTTPHeader describes a custom header to be used in HTTP probes
     * @alias module:model/IoK8sApiCoreV1HTTPHeader
     * @param name {String} The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
     * @param value {String} The header field value
     */
    constructor(name, value) { 
        
        IoK8sApiCoreV1HTTPHeader.initialize(this, name, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, value) { 
        obj['name'] = name;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1HTTPHeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1HTTPHeader} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1HTTPHeader} The populated <code>IoK8sApiCoreV1HTTPHeader</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1HTTPHeader();

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
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1HTTPHeader</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1HTTPHeader</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1HTTPHeader.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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

IoK8sApiCoreV1HTTPHeader.RequiredProperties = ["name", "value"];

/**
 * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
 * @member {String} name
 */
IoK8sApiCoreV1HTTPHeader.prototype['name'] = undefined;

/**
 * The header field value
 * @member {String} value
 */
IoK8sApiCoreV1HTTPHeader.prototype['value'] = undefined;






export default IoK8sApiCoreV1HTTPHeader;

