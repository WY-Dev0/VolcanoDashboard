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
import IoK8sApiCoreV1LimitRangeItem from './IoK8sApiCoreV1LimitRangeItem';

/**
 * The IoK8sApiCoreV1LimitRangeSpec model module.
 * @module model/IoK8sApiCoreV1LimitRangeSpec
 * @version v1.30.0
 */
class IoK8sApiCoreV1LimitRangeSpec {
    /**
     * Constructs a new <code>IoK8sApiCoreV1LimitRangeSpec</code>.
     * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
     * @alias module:model/IoK8sApiCoreV1LimitRangeSpec
     * @param limits {Array.<module:model/IoK8sApiCoreV1LimitRangeItem>} Limits is the list of LimitRangeItem objects that are enforced.
     */
    constructor(limits) { 
        
        IoK8sApiCoreV1LimitRangeSpec.initialize(this, limits);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limits) { 
        obj['limits'] = limits;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1LimitRangeSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1LimitRangeSpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1LimitRangeSpec} The populated <code>IoK8sApiCoreV1LimitRangeSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1LimitRangeSpec();

            if (data.hasOwnProperty('limits')) {
                obj['limits'] = ApiClient.convertToType(data['limits'], [IoK8sApiCoreV1LimitRangeItem]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1LimitRangeSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1LimitRangeSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1LimitRangeSpec.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['limits']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['limits'])) {
                throw new Error("Expected the field `limits` to be an array in the JSON data but got " + data['limits']);
            }
            // validate the optional field `limits` (array)
            for (const item of data['limits']) {
                IoK8sApiCoreV1LimitRangeItem.validateJSON(item);
            };
        }

        return true;
    }


}

IoK8sApiCoreV1LimitRangeSpec.RequiredProperties = ["limits"];

/**
 * Limits is the list of LimitRangeItem objects that are enforced.
 * @member {Array.<module:model/IoK8sApiCoreV1LimitRangeItem>} limits
 */
IoK8sApiCoreV1LimitRangeSpec.prototype['limits'] = undefined;






export default IoK8sApiCoreV1LimitRangeSpec;
