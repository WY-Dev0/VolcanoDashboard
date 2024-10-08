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
 * The IoK8sApiCoreV1LimitRangeItem model module.
 * @module model/IoK8sApiCoreV1LimitRangeItem
 * @version v1.30.0
 */
class IoK8sApiCoreV1LimitRangeItem {
    /**
     * Constructs a new <code>IoK8sApiCoreV1LimitRangeItem</code>.
     * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
     * @alias module:model/IoK8sApiCoreV1LimitRangeItem
     * @param type {String} Type of resource that this limit applies to.
     */
    constructor(type) { 
        
        IoK8sApiCoreV1LimitRangeItem.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1LimitRangeItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1LimitRangeItem} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1LimitRangeItem} The populated <code>IoK8sApiCoreV1LimitRangeItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1LimitRangeItem();

            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], {'String': 'String'});
            }
            if (data.hasOwnProperty('defaultRequest')) {
                obj['defaultRequest'] = ApiClient.convertToType(data['defaultRequest'], {'String': 'String'});
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], {'String': 'String'});
            }
            if (data.hasOwnProperty('maxLimitRequestRatio')) {
                obj['maxLimitRequestRatio'] = ApiClient.convertToType(data['maxLimitRequestRatio'], {'String': 'String'});
            }
            if (data.hasOwnProperty('min')) {
                obj['min'] = ApiClient.convertToType(data['min'], {'String': 'String'});
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1LimitRangeItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1LimitRangeItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1LimitRangeItem.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

IoK8sApiCoreV1LimitRangeItem.RequiredProperties = ["type"];

/**
 * Default resource requirement limit value by resource name if resource limit is omitted.
 * @member {Object.<String, String>} default
 */
IoK8sApiCoreV1LimitRangeItem.prototype['default'] = undefined;

/**
 * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
 * @member {Object.<String, String>} defaultRequest
 */
IoK8sApiCoreV1LimitRangeItem.prototype['defaultRequest'] = undefined;

/**
 * Max usage constraints on this kind by resource name.
 * @member {Object.<String, String>} max
 */
IoK8sApiCoreV1LimitRangeItem.prototype['max'] = undefined;

/**
 * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
 * @member {Object.<String, String>} maxLimitRequestRatio
 */
IoK8sApiCoreV1LimitRangeItem.prototype['maxLimitRequestRatio'] = undefined;

/**
 * Min usage constraints on this kind by resource name.
 * @member {Object.<String, String>} min
 */
IoK8sApiCoreV1LimitRangeItem.prototype['min'] = undefined;

/**
 * Type of resource that this limit applies to.
 * @member {String} type
 */
IoK8sApiCoreV1LimitRangeItem.prototype['type'] = undefined;






export default IoK8sApiCoreV1LimitRangeItem;

