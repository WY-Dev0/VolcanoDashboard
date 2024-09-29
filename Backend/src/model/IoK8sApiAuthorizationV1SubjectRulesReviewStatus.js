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
import IoK8sApiAuthorizationV1NonResourceRule from './IoK8sApiAuthorizationV1NonResourceRule';
import IoK8sApiAuthorizationV1ResourceRule from './IoK8sApiAuthorizationV1ResourceRule';

/**
 * The IoK8sApiAuthorizationV1SubjectRulesReviewStatus model module.
 * @module model/IoK8sApiAuthorizationV1SubjectRulesReviewStatus
 * @version v1.30.0
 */
class IoK8sApiAuthorizationV1SubjectRulesReviewStatus {
    /**
     * Constructs a new <code>IoK8sApiAuthorizationV1SubjectRulesReviewStatus</code>.
     * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it&#39;s safe to assume the subject has that permission, even if that list is incomplete.
     * @alias module:model/IoK8sApiAuthorizationV1SubjectRulesReviewStatus
     * @param incomplete {Boolean} Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.
     * @param nonResourceRules {Array.<module:model/IoK8sApiAuthorizationV1NonResourceRule>} NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
     * @param resourceRules {Array.<module:model/IoK8sApiAuthorizationV1ResourceRule>} ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
     */
    constructor(incomplete, nonResourceRules, resourceRules) { 
        
        IoK8sApiAuthorizationV1SubjectRulesReviewStatus.initialize(this, incomplete, nonResourceRules, resourceRules);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, incomplete, nonResourceRules, resourceRules) { 
        obj['incomplete'] = incomplete;
        obj['nonResourceRules'] = nonResourceRules;
        obj['resourceRules'] = resourceRules;
    }

    /**
     * Constructs a <code>IoK8sApiAuthorizationV1SubjectRulesReviewStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAuthorizationV1SubjectRulesReviewStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAuthorizationV1SubjectRulesReviewStatus} The populated <code>IoK8sApiAuthorizationV1SubjectRulesReviewStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAuthorizationV1SubjectRulesReviewStatus();

            if (data.hasOwnProperty('evaluationError')) {
                obj['evaluationError'] = ApiClient.convertToType(data['evaluationError'], 'String');
            }
            if (data.hasOwnProperty('incomplete')) {
                obj['incomplete'] = ApiClient.convertToType(data['incomplete'], 'Boolean');
            }
            if (data.hasOwnProperty('nonResourceRules')) {
                obj['nonResourceRules'] = ApiClient.convertToType(data['nonResourceRules'], [IoK8sApiAuthorizationV1NonResourceRule]);
            }
            if (data.hasOwnProperty('resourceRules')) {
                obj['resourceRules'] = ApiClient.convertToType(data['resourceRules'], [IoK8sApiAuthorizationV1ResourceRule]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAuthorizationV1SubjectRulesReviewStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAuthorizationV1SubjectRulesReviewStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAuthorizationV1SubjectRulesReviewStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['evaluationError'] && !(typeof data['evaluationError'] === 'string' || data['evaluationError'] instanceof String)) {
            throw new Error("Expected the field `evaluationError` to be a primitive type in the JSON string but got " + data['evaluationError']);
        }
        if (data['nonResourceRules']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['nonResourceRules'])) {
                throw new Error("Expected the field `nonResourceRules` to be an array in the JSON data but got " + data['nonResourceRules']);
            }
            // validate the optional field `nonResourceRules` (array)
            for (const item of data['nonResourceRules']) {
                IoK8sApiAuthorizationV1NonResourceRule.validateJSON(item);
            };
        }
        if (data['resourceRules']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['resourceRules'])) {
                throw new Error("Expected the field `resourceRules` to be an array in the JSON data but got " + data['resourceRules']);
            }
            // validate the optional field `resourceRules` (array)
            for (const item of data['resourceRules']) {
                IoK8sApiAuthorizationV1ResourceRule.validateJSON(item);
            };
        }

        return true;
    }


}

IoK8sApiAuthorizationV1SubjectRulesReviewStatus.RequiredProperties = ["incomplete", "nonResourceRules", "resourceRules"];

/**
 * EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
 * @member {String} evaluationError
 */
IoK8sApiAuthorizationV1SubjectRulesReviewStatus.prototype['evaluationError'] = undefined;

/**
 * Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.
 * @member {Boolean} incomplete
 */
IoK8sApiAuthorizationV1SubjectRulesReviewStatus.prototype['incomplete'] = undefined;

/**
 * NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 * @member {Array.<module:model/IoK8sApiAuthorizationV1NonResourceRule>} nonResourceRules
 */
IoK8sApiAuthorizationV1SubjectRulesReviewStatus.prototype['nonResourceRules'] = undefined;

/**
 * ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 * @member {Array.<module:model/IoK8sApiAuthorizationV1ResourceRule>} resourceRules
 */
IoK8sApiAuthorizationV1SubjectRulesReviewStatus.prototype['resourceRules'] = undefined;






export default IoK8sApiAuthorizationV1SubjectRulesReviewStatus;
