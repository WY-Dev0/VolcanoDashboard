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
 * The IoK8sApiCoreV1NodeAddress model module.
 * @module model/IoK8sApiCoreV1NodeAddress
 * @version v1.30.0
 */
class IoK8sApiCoreV1NodeAddress {
    /**
     * Constructs a new <code>IoK8sApiCoreV1NodeAddress</code>.
     * NodeAddress contains information for the node&#39;s address.
     * @alias module:model/IoK8sApiCoreV1NodeAddress
     * @param address {String} The node address.
     * @param type {String} Node address type, one of Hostname, ExternalIP or InternalIP.
     */
    constructor(address, type) { 
        
        IoK8sApiCoreV1NodeAddress.initialize(this, address, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, type) { 
        obj['address'] = address;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1NodeAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1NodeAddress} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1NodeAddress} The populated <code>IoK8sApiCoreV1NodeAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1NodeAddress();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1NodeAddress</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1NodeAddress</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1NodeAddress.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

IoK8sApiCoreV1NodeAddress.RequiredProperties = ["address", "type"];

/**
 * The node address.
 * @member {String} address
 */
IoK8sApiCoreV1NodeAddress.prototype['address'] = undefined;

/**
 * Node address type, one of Hostname, ExternalIP or InternalIP.
 * @member {String} type
 */
IoK8sApiCoreV1NodeAddress.prototype['type'] = undefined;






export default IoK8sApiCoreV1NodeAddress;

