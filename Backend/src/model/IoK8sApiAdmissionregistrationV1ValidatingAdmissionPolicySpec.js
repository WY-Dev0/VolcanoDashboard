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
import IoK8sApiAdmissionregistrationV1AuditAnnotation from './IoK8sApiAdmissionregistrationV1AuditAnnotation';
import IoK8sApiAdmissionregistrationV1MatchCondition from './IoK8sApiAdmissionregistrationV1MatchCondition';
import IoK8sApiAdmissionregistrationV1MatchResources from './IoK8sApiAdmissionregistrationV1MatchResources';
import IoK8sApiAdmissionregistrationV1ParamKind from './IoK8sApiAdmissionregistrationV1ParamKind';
import IoK8sApiAdmissionregistrationV1Validation from './IoK8sApiAdmissionregistrationV1Validation';
import IoK8sApiAdmissionregistrationV1Variable from './IoK8sApiAdmissionregistrationV1Variable';

/**
 * The IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec model module.
 * @module model/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec
 * @version v1.30.0
 */
class IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec {
    /**
     * Constructs a new <code>IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec</code>.
     * ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.
     * @alias module:model/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec
     */
    constructor() { 
        
        IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec} The populated <code>IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec();

            if (data.hasOwnProperty('auditAnnotations')) {
                obj['auditAnnotations'] = ApiClient.convertToType(data['auditAnnotations'], [IoK8sApiAdmissionregistrationV1AuditAnnotation]);
            }
            if (data.hasOwnProperty('failurePolicy')) {
                obj['failurePolicy'] = ApiClient.convertToType(data['failurePolicy'], 'String');
            }
            if (data.hasOwnProperty('matchConditions')) {
                obj['matchConditions'] = ApiClient.convertToType(data['matchConditions'], [IoK8sApiAdmissionregistrationV1MatchCondition]);
            }
            if (data.hasOwnProperty('matchConstraints')) {
                obj['matchConstraints'] = IoK8sApiAdmissionregistrationV1MatchResources.constructFromObject(data['matchConstraints']);
            }
            if (data.hasOwnProperty('paramKind')) {
                obj['paramKind'] = IoK8sApiAdmissionregistrationV1ParamKind.constructFromObject(data['paramKind']);
            }
            if (data.hasOwnProperty('validations')) {
                obj['validations'] = ApiClient.convertToType(data['validations'], [IoK8sApiAdmissionregistrationV1Validation]);
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], [IoK8sApiAdmissionregistrationV1Variable]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec</code>.
     */
    static validateJSON(data) {
        if (data['auditAnnotations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['auditAnnotations'])) {
                throw new Error("Expected the field `auditAnnotations` to be an array in the JSON data but got " + data['auditAnnotations']);
            }
            // validate the optional field `auditAnnotations` (array)
            for (const item of data['auditAnnotations']) {
                IoK8sApiAdmissionregistrationV1AuditAnnotation.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['failurePolicy'] && !(typeof data['failurePolicy'] === 'string' || data['failurePolicy'] instanceof String)) {
            throw new Error("Expected the field `failurePolicy` to be a primitive type in the JSON string but got " + data['failurePolicy']);
        }
        if (data['matchConditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['matchConditions'])) {
                throw new Error("Expected the field `matchConditions` to be an array in the JSON data but got " + data['matchConditions']);
            }
            // validate the optional field `matchConditions` (array)
            for (const item of data['matchConditions']) {
                IoK8sApiAdmissionregistrationV1MatchCondition.validateJSON(item);
            };
        }
        // validate the optional field `matchConstraints`
        if (data['matchConstraints']) { // data not null
          IoK8sApiAdmissionregistrationV1MatchResources.validateJSON(data['matchConstraints']);
        }
        // validate the optional field `paramKind`
        if (data['paramKind']) { // data not null
          IoK8sApiAdmissionregistrationV1ParamKind.validateJSON(data['paramKind']);
        }
        if (data['validations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['validations'])) {
                throw new Error("Expected the field `validations` to be an array in the JSON data but got " + data['validations']);
            }
            // validate the optional field `validations` (array)
            for (const item of data['validations']) {
                IoK8sApiAdmissionregistrationV1Validation.validateJSON(item);
            };
        }
        if (data['variables']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['variables'])) {
                throw new Error("Expected the field `variables` to be an array in the JSON data but got " + data['variables']);
            }
            // validate the optional field `variables` (array)
            for (const item of data['variables']) {
                IoK8sApiAdmissionregistrationV1Variable.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.
 * @member {Array.<module:model/IoK8sApiAdmissionregistrationV1AuditAnnotation>} auditAnnotations
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec.prototype['auditAnnotations'] = undefined;

/**
 * failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.  A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.  failurePolicy does not define how validations that evaluate to false are handled.  When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.  Allowed values are Ignore or Fail. Defaults to Fail.  Possible enum values:  - `\"Fail\"` means that an error calling the webhook causes the admission to fail.  - `\"Ignore\"` means that an error calling the webhook is ignored.
 * @member {module:model/IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec.FailurePolicyEnum} failurePolicy
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec.prototype['failurePolicy'] = undefined;

/**
 * MatchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.  If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.  The exact matching logic is (in order):   1. If ANY matchCondition evaluates to FALSE, the policy is skipped.   2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.   3. If any matchCondition evaluates to an error (but none are FALSE):      - If failurePolicy=Fail, reject the request      - If failurePolicy=Ignore, the policy is skipped
 * @member {Array.<module:model/IoK8sApiAdmissionregistrationV1MatchCondition>} matchConditions
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec.prototype['matchConditions'] = undefined;

/**
 * @member {module:model/IoK8sApiAdmissionregistrationV1MatchResources} matchConstraints
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec.prototype['matchConstraints'] = undefined;

/**
 * @member {module:model/IoK8sApiAdmissionregistrationV1ParamKind} paramKind
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec.prototype['paramKind'] = undefined;

/**
 * Validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.
 * @member {Array.<module:model/IoK8sApiAdmissionregistrationV1Validation>} validations
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec.prototype['validations'] = undefined;

/**
 * Variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.  The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.
 * @member {Array.<module:model/IoK8sApiAdmissionregistrationV1Variable>} variables
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec.prototype['variables'] = undefined;





/**
 * Allowed values for the <code>failurePolicy</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec['FailurePolicyEnum'] = {

    /**
     * value: "Fail"
     * @const
     */
    "Fail": "Fail",

    /**
     * value: "Ignore"
     * @const
     */
    "Ignore": "Ignore"
};



export default IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec;

