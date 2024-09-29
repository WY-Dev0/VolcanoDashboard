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
 * The IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern model module.
 * @module model/IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern
 * @version v1.30.0
 */
class IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern {
    /**
     * Constructs a new <code>IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern</code>.
     * PodFailurePolicyOnPodConditionsPattern describes a pattern for matching an actual pod condition type.
     * @alias module:model/IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern
     * @param status {String} Specifies the required Pod condition status. To match a pod condition it is required that the specified status equals the pod condition status. Defaults to True.
     * @param type {String} Specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.
     */
    constructor(status, type) { 
        
        IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern.initialize(this, status, type);
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
     * Constructs a <code>IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern} obj Optional instance to populate.
     * @return {module:model/IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern} The populated <code>IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern();

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
     * Validates the JSON data with respect to <code>IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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

IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern.RequiredProperties = ["status", "type"];

/**
 * Specifies the required Pod condition status. To match a pod condition it is required that the specified status equals the pod condition status. Defaults to True.
 * @member {String} status
 */
IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern.prototype['status'] = undefined;

/**
 * Specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.
 * @member {String} type
 */
IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern.prototype['type'] = undefined;






export default IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern;

