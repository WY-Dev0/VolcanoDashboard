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
 * The IoK8sApiBatchV1SuccessPolicyRule model module.
 * @module model/IoK8sApiBatchV1SuccessPolicyRule
 * @version v1.30.0
 */
class IoK8sApiBatchV1SuccessPolicyRule {
    /**
     * Constructs a new <code>IoK8sApiBatchV1SuccessPolicyRule</code>.
     * SuccessPolicyRule describes rule for declaring a Job as succeeded. Each rule must have at least one of the \&quot;succeededIndexes\&quot; or \&quot;succeededCount\&quot; specified.
     * @alias module:model/IoK8sApiBatchV1SuccessPolicyRule
     */
    constructor() { 
        
        IoK8sApiBatchV1SuccessPolicyRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiBatchV1SuccessPolicyRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiBatchV1SuccessPolicyRule} obj Optional instance to populate.
     * @return {module:model/IoK8sApiBatchV1SuccessPolicyRule} The populated <code>IoK8sApiBatchV1SuccessPolicyRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiBatchV1SuccessPolicyRule();

            if (data.hasOwnProperty('succeededCount')) {
                obj['succeededCount'] = ApiClient.convertToType(data['succeededCount'], 'Number');
            }
            if (data.hasOwnProperty('succeededIndexes')) {
                obj['succeededIndexes'] = ApiClient.convertToType(data['succeededIndexes'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiBatchV1SuccessPolicyRule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiBatchV1SuccessPolicyRule</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['succeededIndexes'] && !(typeof data['succeededIndexes'] === 'string' || data['succeededIndexes'] instanceof String)) {
            throw new Error("Expected the field `succeededIndexes` to be a primitive type in the JSON string but got " + data['succeededIndexes']);
        }

        return true;
    }


}



/**
 * succeededCount specifies the minimal required size of the actual set of the succeeded indexes for the Job. When succeededCount is used along with succeededIndexes, the check is constrained only to the set of indexes specified by succeededIndexes. For example, given that succeededIndexes is \"1-4\", succeededCount is \"3\", and completed indexes are \"1\", \"3\", and \"5\", the Job isn't declared as succeeded because only \"1\" and \"3\" indexes are considered in that rules. When this field is null, this doesn't default to any value and is never evaluated at any time. When specified it needs to be a positive integer.
 * @member {Number} succeededCount
 */
IoK8sApiBatchV1SuccessPolicyRule.prototype['succeededCount'] = undefined;

/**
 * succeededIndexes specifies the set of indexes which need to be contained in the actual set of the succeeded indexes for the Job. The list of indexes must be within 0 to \".spec.completions-1\" and must not contain duplicates. At least one element is required. The indexes are represented as intervals separated by commas. The intervals can be a decimal integer or a pair of decimal integers separated by a hyphen. The number are listed in represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as \"1,3-5,7\". When this field is null, this field doesn't default to any value and is never evaluated at any time.
 * @member {String} succeededIndexes
 */
IoK8sApiBatchV1SuccessPolicyRule.prototype['succeededIndexes'] = undefined;






export default IoK8sApiBatchV1SuccessPolicyRule;

