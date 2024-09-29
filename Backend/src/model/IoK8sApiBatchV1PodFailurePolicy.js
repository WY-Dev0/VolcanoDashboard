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
import IoK8sApiBatchV1PodFailurePolicyRule from './IoK8sApiBatchV1PodFailurePolicyRule';

/**
 * The IoK8sApiBatchV1PodFailurePolicy model module.
 * @module model/IoK8sApiBatchV1PodFailurePolicy
 * @version v1.30.0
 */
class IoK8sApiBatchV1PodFailurePolicy {
    /**
     * Constructs a new <code>IoK8sApiBatchV1PodFailurePolicy</code>.
     * PodFailurePolicy describes how failed pods influence the backoffLimit.
     * @alias module:model/IoK8sApiBatchV1PodFailurePolicy
     * @param rules {Array.<module:model/IoK8sApiBatchV1PodFailurePolicyRule>} A list of pod failure policy rules. The rules are evaluated in order. Once a rule matches a Pod failure, the remaining of the rules are ignored. When no rule matches the Pod failure, the default handling applies - the counter of pod failures is incremented and it is checked against the backoffLimit. At most 20 elements are allowed.
     */
    constructor(rules) { 
        
        IoK8sApiBatchV1PodFailurePolicy.initialize(this, rules);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rules) { 
        obj['rules'] = rules;
    }

    /**
     * Constructs a <code>IoK8sApiBatchV1PodFailurePolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiBatchV1PodFailurePolicy} obj Optional instance to populate.
     * @return {module:model/IoK8sApiBatchV1PodFailurePolicy} The populated <code>IoK8sApiBatchV1PodFailurePolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiBatchV1PodFailurePolicy();

            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [IoK8sApiBatchV1PodFailurePolicyRule]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiBatchV1PodFailurePolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiBatchV1PodFailurePolicy</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiBatchV1PodFailurePolicy.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['rules']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rules'])) {
                throw new Error("Expected the field `rules` to be an array in the JSON data but got " + data['rules']);
            }
            // validate the optional field `rules` (array)
            for (const item of data['rules']) {
                IoK8sApiBatchV1PodFailurePolicyRule.validateJSON(item);
            };
        }

        return true;
    }


}

IoK8sApiBatchV1PodFailurePolicy.RequiredProperties = ["rules"];

/**
 * A list of pod failure policy rules. The rules are evaluated in order. Once a rule matches a Pod failure, the remaining of the rules are ignored. When no rule matches the Pod failure, the default handling applies - the counter of pod failures is incremented and it is checked against the backoffLimit. At most 20 elements are allowed.
 * @member {Array.<module:model/IoK8sApiBatchV1PodFailurePolicyRule>} rules
 */
IoK8sApiBatchV1PodFailurePolicy.prototype['rules'] = undefined;






export default IoK8sApiBatchV1PodFailurePolicy;

