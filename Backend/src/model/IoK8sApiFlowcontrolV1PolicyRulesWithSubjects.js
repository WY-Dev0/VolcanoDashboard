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
import IoK8sApiFlowcontrolV1NonResourcePolicyRule from './IoK8sApiFlowcontrolV1NonResourcePolicyRule';
import IoK8sApiFlowcontrolV1ResourcePolicyRule from './IoK8sApiFlowcontrolV1ResourcePolicyRule';
import IoK8sApiFlowcontrolV1Subject from './IoK8sApiFlowcontrolV1Subject';

/**
 * The IoK8sApiFlowcontrolV1PolicyRulesWithSubjects model module.
 * @module model/IoK8sApiFlowcontrolV1PolicyRulesWithSubjects
 * @version v1.30.0
 */
class IoK8sApiFlowcontrolV1PolicyRulesWithSubjects {
    /**
     * Constructs a new <code>IoK8sApiFlowcontrolV1PolicyRulesWithSubjects</code>.
     * PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
     * @alias module:model/IoK8sApiFlowcontrolV1PolicyRulesWithSubjects
     * @param subjects {Array.<module:model/IoK8sApiFlowcontrolV1Subject>} subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
     */
    constructor(subjects) { 
        
        IoK8sApiFlowcontrolV1PolicyRulesWithSubjects.initialize(this, subjects);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subjects) { 
        obj['subjects'] = subjects;
    }

    /**
     * Constructs a <code>IoK8sApiFlowcontrolV1PolicyRulesWithSubjects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiFlowcontrolV1PolicyRulesWithSubjects} obj Optional instance to populate.
     * @return {module:model/IoK8sApiFlowcontrolV1PolicyRulesWithSubjects} The populated <code>IoK8sApiFlowcontrolV1PolicyRulesWithSubjects</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiFlowcontrolV1PolicyRulesWithSubjects();

            if (data.hasOwnProperty('nonResourceRules')) {
                obj['nonResourceRules'] = ApiClient.convertToType(data['nonResourceRules'], [IoK8sApiFlowcontrolV1NonResourcePolicyRule]);
            }
            if (data.hasOwnProperty('resourceRules')) {
                obj['resourceRules'] = ApiClient.convertToType(data['resourceRules'], [IoK8sApiFlowcontrolV1ResourcePolicyRule]);
            }
            if (data.hasOwnProperty('subjects')) {
                obj['subjects'] = ApiClient.convertToType(data['subjects'], [IoK8sApiFlowcontrolV1Subject]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiFlowcontrolV1PolicyRulesWithSubjects</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiFlowcontrolV1PolicyRulesWithSubjects</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiFlowcontrolV1PolicyRulesWithSubjects.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['nonResourceRules']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['nonResourceRules'])) {
                throw new Error("Expected the field `nonResourceRules` to be an array in the JSON data but got " + data['nonResourceRules']);
            }
            // validate the optional field `nonResourceRules` (array)
            for (const item of data['nonResourceRules']) {
                IoK8sApiFlowcontrolV1NonResourcePolicyRule.validateJSON(item);
            };
        }
        if (data['resourceRules']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['resourceRules'])) {
                throw new Error("Expected the field `resourceRules` to be an array in the JSON data but got " + data['resourceRules']);
            }
            // validate the optional field `resourceRules` (array)
            for (const item of data['resourceRules']) {
                IoK8sApiFlowcontrolV1ResourcePolicyRule.validateJSON(item);
            };
        }
        if (data['subjects']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subjects'])) {
                throw new Error("Expected the field `subjects` to be an array in the JSON data but got " + data['subjects']);
            }
            // validate the optional field `subjects` (array)
            for (const item of data['subjects']) {
                IoK8sApiFlowcontrolV1Subject.validateJSON(item);
            };
        }

        return true;
    }


}

IoK8sApiFlowcontrolV1PolicyRulesWithSubjects.RequiredProperties = ["subjects"];

/**
 * `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
 * @member {Array.<module:model/IoK8sApiFlowcontrolV1NonResourcePolicyRule>} nonResourceRules
 */
IoK8sApiFlowcontrolV1PolicyRulesWithSubjects.prototype['nonResourceRules'] = undefined;

/**
 * `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
 * @member {Array.<module:model/IoK8sApiFlowcontrolV1ResourcePolicyRule>} resourceRules
 */
IoK8sApiFlowcontrolV1PolicyRulesWithSubjects.prototype['resourceRules'] = undefined;

/**
 * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
 * @member {Array.<module:model/IoK8sApiFlowcontrolV1Subject>} subjects
 */
IoK8sApiFlowcontrolV1PolicyRulesWithSubjects.prototype['subjects'] = undefined;






export default IoK8sApiFlowcontrolV1PolicyRulesWithSubjects;

