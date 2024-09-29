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
 * The IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule model module.
 * @module model/IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule
 * @version v1.30.0
 */
class IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule {
    /**
     * Constructs a new <code>IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule</code>.
     * NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request.
     * @alias module:model/IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule
     * @param nonResourceURLs {Array.<String>} `nonResourceURLs` is a set of url prefixes that a user should have access to and may not be empty. For example:   - \"/healthz\" is legal   - \"/hea*\" is illegal   - \"/hea\" is legal but matches nothing   - \"/hea/_*\" also matches nothing   - \"/healthz/_*\" matches all per-component health checks. \"*\" matches all non-resource urls. if it is present, it must be the only entry. Required.
     * @param verbs {Array.<String>} `verbs` is a list of matching verbs and may not be empty. \"*\" matches all verbs. If it is present, it must be the only entry. Required.
     */
    constructor(nonResourceURLs, verbs) { 
        
        IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule.initialize(this, nonResourceURLs, verbs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, nonResourceURLs, verbs) { 
        obj['nonResourceURLs'] = nonResourceURLs;
        obj['verbs'] = verbs;
    }

    /**
     * Constructs a <code>IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule} obj Optional instance to populate.
     * @return {module:model/IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule} The populated <code>IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule();

            if (data.hasOwnProperty('nonResourceURLs')) {
                obj['nonResourceURLs'] = ApiClient.convertToType(data['nonResourceURLs'], ['String']);
            }
            if (data.hasOwnProperty('verbs')) {
                obj['verbs'] = ApiClient.convertToType(data['verbs'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['nonResourceURLs'])) {
            throw new Error("Expected the field `nonResourceURLs` to be an array in the JSON data but got " + data['nonResourceURLs']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['verbs'])) {
            throw new Error("Expected the field `verbs` to be an array in the JSON data but got " + data['verbs']);
        }

        return true;
    }


}

IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule.RequiredProperties = ["nonResourceURLs", "verbs"];

/**
 * `nonResourceURLs` is a set of url prefixes that a user should have access to and may not be empty. For example:   - \"/healthz\" is legal   - \"/hea*\" is illegal   - \"/hea\" is legal but matches nothing   - \"/hea/_*\" also matches nothing   - \"/healthz/_*\" matches all per-component health checks. \"*\" matches all non-resource urls. if it is present, it must be the only entry. Required.
 * @member {Array.<String>} nonResourceURLs
 */
IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule.prototype['nonResourceURLs'] = undefined;

/**
 * `verbs` is a list of matching verbs and may not be empty. \"*\" matches all verbs. If it is present, it must be the only entry. Required.
 * @member {Array.<String>} verbs
 */
IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule.prototype['verbs'] = undefined;






export default IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule;
