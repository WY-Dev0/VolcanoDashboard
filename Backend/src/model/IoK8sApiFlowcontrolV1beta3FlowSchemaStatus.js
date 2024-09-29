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
import IoK8sApiFlowcontrolV1beta3FlowSchemaCondition from './IoK8sApiFlowcontrolV1beta3FlowSchemaCondition';

/**
 * The IoK8sApiFlowcontrolV1beta3FlowSchemaStatus model module.
 * @module model/IoK8sApiFlowcontrolV1beta3FlowSchemaStatus
 * @version v1.30.0
 */
class IoK8sApiFlowcontrolV1beta3FlowSchemaStatus {
    /**
     * Constructs a new <code>IoK8sApiFlowcontrolV1beta3FlowSchemaStatus</code>.
     * FlowSchemaStatus represents the current state of a FlowSchema.
     * @alias module:model/IoK8sApiFlowcontrolV1beta3FlowSchemaStatus
     */
    constructor() { 
        
        IoK8sApiFlowcontrolV1beta3FlowSchemaStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiFlowcontrolV1beta3FlowSchemaStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiFlowcontrolV1beta3FlowSchemaStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiFlowcontrolV1beta3FlowSchemaStatus} The populated <code>IoK8sApiFlowcontrolV1beta3FlowSchemaStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiFlowcontrolV1beta3FlowSchemaStatus();

            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [IoK8sApiFlowcontrolV1beta3FlowSchemaCondition]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiFlowcontrolV1beta3FlowSchemaStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiFlowcontrolV1beta3FlowSchemaStatus</code>.
     */
    static validateJSON(data) {
        if (data['conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['conditions'])) {
                throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
            }
            // validate the optional field `conditions` (array)
            for (const item of data['conditions']) {
                IoK8sApiFlowcontrolV1beta3FlowSchemaCondition.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * `conditions` is a list of the current states of FlowSchema.
 * @member {Array.<module:model/IoK8sApiFlowcontrolV1beta3FlowSchemaCondition>} conditions
 */
IoK8sApiFlowcontrolV1beta3FlowSchemaStatus.prototype['conditions'] = undefined;






export default IoK8sApiFlowcontrolV1beta3FlowSchemaStatus;
