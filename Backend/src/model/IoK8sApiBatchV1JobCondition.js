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
 * The IoK8sApiBatchV1JobCondition model module.
 * @module model/IoK8sApiBatchV1JobCondition
 * @version v1.30.0
 */
class IoK8sApiBatchV1JobCondition {
    /**
     * Constructs a new <code>IoK8sApiBatchV1JobCondition</code>.
     * JobCondition describes current state of a job.
     * @alias module:model/IoK8sApiBatchV1JobCondition
     * @param status {String} Status of the condition, one of True, False, Unknown.
     * @param type {String} Type of job condition, Complete or Failed.
     */
    constructor(status, type) { 
        
        IoK8sApiBatchV1JobCondition.initialize(this, status, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, type) { 
        obj['status'] = status;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>IoK8sApiBatchV1JobCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiBatchV1JobCondition} obj Optional instance to populate.
     * @return {module:model/IoK8sApiBatchV1JobCondition} The populated <code>IoK8sApiBatchV1JobCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiBatchV1JobCondition();

            if (data.hasOwnProperty('lastProbeTime')) {
                obj['lastProbeTime'] = ApiClient.convertToType(data['lastProbeTime'], 'Date');
            }
            if (data.hasOwnProperty('lastTransitionTime')) {
                obj['lastTransitionTime'] = ApiClient.convertToType(data['lastTransitionTime'], 'Date');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiBatchV1JobCondition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiBatchV1JobCondition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiBatchV1JobCondition.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

IoK8sApiBatchV1JobCondition.RequiredProperties = ["status", "type"];

/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 * @member {Date} lastProbeTime
 */
IoK8sApiBatchV1JobCondition.prototype['lastProbeTime'] = undefined;

/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 * @member {Date} lastTransitionTime
 */
IoK8sApiBatchV1JobCondition.prototype['lastTransitionTime'] = undefined;

/**
 * Human readable message indicating details about last transition.
 * @member {String} message
 */
IoK8sApiBatchV1JobCondition.prototype['message'] = undefined;

/**
 * (brief) reason for the condition's last transition.
 * @member {String} reason
 */
IoK8sApiBatchV1JobCondition.prototype['reason'] = undefined;

/**
 * Status of the condition, one of True, False, Unknown.
 * @member {String} status
 */
IoK8sApiBatchV1JobCondition.prototype['status'] = undefined;

/**
 * Type of job condition, Complete or Failed.
 * @member {String} type
 */
IoK8sApiBatchV1JobCondition.prototype['type'] = undefined;






export default IoK8sApiBatchV1JobCondition;

