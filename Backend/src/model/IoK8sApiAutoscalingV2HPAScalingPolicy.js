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
 * The IoK8sApiAutoscalingV2HPAScalingPolicy model module.
 * @module model/IoK8sApiAutoscalingV2HPAScalingPolicy
 * @version v1.30.0
 */
class IoK8sApiAutoscalingV2HPAScalingPolicy {
    /**
     * Constructs a new <code>IoK8sApiAutoscalingV2HPAScalingPolicy</code>.
     * HPAScalingPolicy is a single policy which must hold true for a specified past interval.
     * @alias module:model/IoK8sApiAutoscalingV2HPAScalingPolicy
     * @param periodSeconds {Number} periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
     * @param type {String} type is used to specify the scaling policy.
     * @param value {Number} value contains the amount of change which is permitted by the policy. It must be greater than zero
     */
    constructor(periodSeconds, type, value) { 
        
        IoK8sApiAutoscalingV2HPAScalingPolicy.initialize(this, periodSeconds, type, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, periodSeconds, type, value) { 
        obj['periodSeconds'] = periodSeconds;
        obj['type'] = type;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>IoK8sApiAutoscalingV2HPAScalingPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAutoscalingV2HPAScalingPolicy} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAutoscalingV2HPAScalingPolicy} The populated <code>IoK8sApiAutoscalingV2HPAScalingPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAutoscalingV2HPAScalingPolicy();

            if (data.hasOwnProperty('periodSeconds')) {
                obj['periodSeconds'] = ApiClient.convertToType(data['periodSeconds'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAutoscalingV2HPAScalingPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAutoscalingV2HPAScalingPolicy</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAutoscalingV2HPAScalingPolicy.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

IoK8sApiAutoscalingV2HPAScalingPolicy.RequiredProperties = ["periodSeconds", "type", "value"];

/**
 * periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
 * @member {Number} periodSeconds
 */
IoK8sApiAutoscalingV2HPAScalingPolicy.prototype['periodSeconds'] = undefined;

/**
 * type is used to specify the scaling policy.
 * @member {String} type
 */
IoK8sApiAutoscalingV2HPAScalingPolicy.prototype['type'] = undefined;

/**
 * value contains the amount of change which is permitted by the policy. It must be greater than zero
 * @member {Number} value
 */
IoK8sApiAutoscalingV2HPAScalingPolicy.prototype['value'] = undefined;






export default IoK8sApiAutoscalingV2HPAScalingPolicy;

