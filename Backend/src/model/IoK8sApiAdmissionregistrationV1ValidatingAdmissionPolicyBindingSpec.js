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
import IoK8sApiAdmissionregistrationV1MatchResources from './IoK8sApiAdmissionregistrationV1MatchResources';
import IoK8sApiAdmissionregistrationV1ParamRef from './IoK8sApiAdmissionregistrationV1ParamRef';

/**
 * The IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec model module.
 * @module model/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec
 * @version v1.30.0
 */
class IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec {
    /**
     * Constructs a new <code>IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec</code>.
     * ValidatingAdmissionPolicyBindingSpec is the specification of the ValidatingAdmissionPolicyBinding.
     * @alias module:model/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec
     */
    constructor() { 
        
        IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec} The populated <code>IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec();

            if (data.hasOwnProperty('matchResources')) {
                obj['matchResources'] = IoK8sApiAdmissionregistrationV1MatchResources.constructFromObject(data['matchResources']);
            }
            if (data.hasOwnProperty('paramRef')) {
                obj['paramRef'] = IoK8sApiAdmissionregistrationV1ParamRef.constructFromObject(data['paramRef']);
            }
            if (data.hasOwnProperty('policyName')) {
                obj['policyName'] = ApiClient.convertToType(data['policyName'], 'String');
            }
            if (data.hasOwnProperty('validationActions')) {
                obj['validationActions'] = ApiClient.convertToType(data['validationActions'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec</code>.
     */
    static validateJSON(data) {
        // validate the optional field `matchResources`
        if (data['matchResources']) { // data not null
          IoK8sApiAdmissionregistrationV1MatchResources.validateJSON(data['matchResources']);
        }
        // validate the optional field `paramRef`
        if (data['paramRef']) { // data not null
          IoK8sApiAdmissionregistrationV1ParamRef.validateJSON(data['paramRef']);
        }
        // ensure the json data is a string
        if (data['policyName'] && !(typeof data['policyName'] === 'string' || data['policyName'] instanceof String)) {
            throw new Error("Expected the field `policyName` to be a primitive type in the JSON string but got " + data['policyName']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['validationActions'])) {
            throw new Error("Expected the field `validationActions` to be an array in the JSON data but got " + data['validationActions']);
        }

        return true;
    }


}



/**
 * @member {module:model/IoK8sApiAdmissionregistrationV1MatchResources} matchResources
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec.prototype['matchResources'] = undefined;

/**
 * @member {module:model/IoK8sApiAdmissionregistrationV1ParamRef} paramRef
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec.prototype['paramRef'] = undefined;

/**
 * PolicyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.
 * @member {String} policyName
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec.prototype['policyName'] = undefined;

/**
 * validationActions declares how Validations of the referenced ValidatingAdmissionPolicy are enforced. If a validation evaluates to false it is always enforced according to these actions.  Failures defined by the ValidatingAdmissionPolicy's FailurePolicy are enforced according to these actions only if the FailurePolicy is set to Fail, otherwise the failures are ignored. This includes compilation errors, runtime errors and misconfigurations of the policy.  validationActions is declared as a set of action values. Order does not matter. validationActions may not contain duplicates of the same action.  The supported actions values are:  \"Deny\" specifies that a validation failure results in a denied request.  \"Warn\" specifies that a validation failure is reported to the request client in HTTP Warning headers, with a warning code of 299. Warnings can be sent both for allowed or denied admission responses.  \"Audit\" specifies that a validation failure is included in the published audit event for the request. The audit event will contain a `validation.policy.admission.k8s.io/validation_failure` audit annotation with a value containing the details of the validation failures, formatted as a JSON list of objects, each with the following fields: - message: The validation failure message string - policy: The resource name of the ValidatingAdmissionPolicy - binding: The resource name of the ValidatingAdmissionPolicyBinding - expressionIndex: The index of the failed validations in the ValidatingAdmissionPolicy - validationActions: The enforcement actions enacted for the validation failure Example audit annotation: `\"validation.policy.admission.k8s.io/validation_failure\": \"[{\"message\": \"Invalid value\", {\"policy\": \"policy.example.com\", {\"binding\": \"policybinding.example.com\", {\"expressionIndex\": \"1\", {\"validationActions\": [\"Audit\"]}]\"`  Clients should expect to handle additional values by ignoring any values not recognized.  \"Deny\" and \"Warn\" may not be used together since this combination needlessly duplicates the validation failure both in the API response body and the HTTP warning headers.  Required.
 * @member {Array.<module:model/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec.ValidationActionsEnum>} validationActions
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec.prototype['validationActions'] = undefined;





/**
 * Allowed values for the <code>validationActions</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec['ValidationActionsEnum'] = {

    /**
     * value: "Audit"
     * @const
     */
    "Audit": "Audit",

    /**
     * value: "Deny"
     * @const
     */
    "Deny": "Deny",

    /**
     * value: "Warn"
     * @const
     */
    "Warn": "Warn"
};



export default IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyBindingSpec;
