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
 * The IoK8sApiAuthorizationV1NonResourceRule model module.
 * @module model/IoK8sApiAuthorizationV1NonResourceRule
 * @version v1.30.0
 */
class IoK8sApiAuthorizationV1NonResourceRule {
    /**
     * Constructs a new <code>IoK8sApiAuthorizationV1NonResourceRule</code>.
     * NonResourceRule holds information that describes a rule for the non-resource
     * @alias module:model/IoK8sApiAuthorizationV1NonResourceRule
     * @param verbs {Array.<String>} Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  \"*\" means all.
     */
    constructor(verbs) { 
        
        IoK8sApiAuthorizationV1NonResourceRule.initialize(this, verbs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, verbs) { 
        obj['verbs'] = verbs;
    }

    /**
     * Constructs a <code>IoK8sApiAuthorizationV1NonResourceRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAuthorizationV1NonResourceRule} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAuthorizationV1NonResourceRule} The populated <code>IoK8sApiAuthorizationV1NonResourceRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAuthorizationV1NonResourceRule();

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
     * Validates the JSON data with respect to <code>IoK8sApiAuthorizationV1NonResourceRule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAuthorizationV1NonResourceRule</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAuthorizationV1NonResourceRule.RequiredProperties) {
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

IoK8sApiAuthorizationV1NonResourceRule.RequiredProperties = ["verbs"];

/**
 * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  \"*\" means all.
 * @member {Array.<String>} nonResourceURLs
 */
IoK8sApiAuthorizationV1NonResourceRule.prototype['nonResourceURLs'] = undefined;

/**
 * Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  \"*\" means all.
 * @member {Array.<String>} verbs
 */
IoK8sApiAuthorizationV1NonResourceRule.prototype['verbs'] = undefined;






export default IoK8sApiAuthorizationV1NonResourceRule;
