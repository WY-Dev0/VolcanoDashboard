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
import IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethod from './IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethod';
import IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects from './IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects';
import IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference from './IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference';

/**
 * The IoK8sApiFlowcontrolV1beta3FlowSchemaSpec model module.
 * @module model/IoK8sApiFlowcontrolV1beta3FlowSchemaSpec
 * @version v1.30.0
 */
class IoK8sApiFlowcontrolV1beta3FlowSchemaSpec {
    /**
     * Constructs a new <code>IoK8sApiFlowcontrolV1beta3FlowSchemaSpec</code>.
     * FlowSchemaSpec describes how the FlowSchema&#39;s specification looks like.
     * @alias module:model/IoK8sApiFlowcontrolV1beta3FlowSchemaSpec
     * @param priorityLevelConfiguration {module:model/IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference} 
     */
    constructor(priorityLevelConfiguration) { 
        
        IoK8sApiFlowcontrolV1beta3FlowSchemaSpec.initialize(this, priorityLevelConfiguration);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, priorityLevelConfiguration) { 
        obj['priorityLevelConfiguration'] = priorityLevelConfiguration;
    }

    /**
     * Constructs a <code>IoK8sApiFlowcontrolV1beta3FlowSchemaSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiFlowcontrolV1beta3FlowSchemaSpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiFlowcontrolV1beta3FlowSchemaSpec} The populated <code>IoK8sApiFlowcontrolV1beta3FlowSchemaSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiFlowcontrolV1beta3FlowSchemaSpec();

            if (data.hasOwnProperty('distinguisherMethod')) {
                obj['distinguisherMethod'] = IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethod.constructFromObject(data['distinguisherMethod']);
            }
            if (data.hasOwnProperty('matchingPrecedence')) {
                obj['matchingPrecedence'] = ApiClient.convertToType(data['matchingPrecedence'], 'Number');
            }
            if (data.hasOwnProperty('priorityLevelConfiguration')) {
                obj['priorityLevelConfiguration'] = IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference.constructFromObject(data['priorityLevelConfiguration']);
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiFlowcontrolV1beta3FlowSchemaSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiFlowcontrolV1beta3FlowSchemaSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiFlowcontrolV1beta3FlowSchemaSpec.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `distinguisherMethod`
        if (data['distinguisherMethod']) { // data not null
          IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethod.validateJSON(data['distinguisherMethod']);
        }
        // validate the optional field `priorityLevelConfiguration`
        if (data['priorityLevelConfiguration']) { // data not null
          IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference.validateJSON(data['priorityLevelConfiguration']);
        }
        if (data['rules']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rules'])) {
                throw new Error("Expected the field `rules` to be an array in the JSON data but got " + data['rules']);
            }
            // validate the optional field `rules` (array)
            for (const item of data['rules']) {
                IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects.validateJSON(item);
            };
        }

        return true;
    }


}

IoK8sApiFlowcontrolV1beta3FlowSchemaSpec.RequiredProperties = ["priorityLevelConfiguration"];

/**
 * @member {module:model/IoK8sApiFlowcontrolV1beta3FlowDistinguisherMethod} distinguisherMethod
 */
IoK8sApiFlowcontrolV1beta3FlowSchemaSpec.prototype['distinguisherMethod'] = undefined;

/**
 * `matchingPrecedence` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.
 * @member {Number} matchingPrecedence
 */
IoK8sApiFlowcontrolV1beta3FlowSchemaSpec.prototype['matchingPrecedence'] = undefined;

/**
 * @member {module:model/IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationReference} priorityLevelConfiguration
 */
IoK8sApiFlowcontrolV1beta3FlowSchemaSpec.prototype['priorityLevelConfiguration'] = undefined;

/**
 * `rules` describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.
 * @member {Array.<module:model/IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects>} rules
 */
IoK8sApiFlowcontrolV1beta3FlowSchemaSpec.prototype['rules'] = undefined;






export default IoK8sApiFlowcontrolV1beta3FlowSchemaSpec;
