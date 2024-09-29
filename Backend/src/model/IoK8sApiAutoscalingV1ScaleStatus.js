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
 * The IoK8sApiAutoscalingV1ScaleStatus model module.
 * @module model/IoK8sApiAutoscalingV1ScaleStatus
 * @version v1.30.0
 */
class IoK8sApiAutoscalingV1ScaleStatus {
    /**
     * Constructs a new <code>IoK8sApiAutoscalingV1ScaleStatus</code>.
     * ScaleStatus represents the current status of a scale subresource.
     * @alias module:model/IoK8sApiAutoscalingV1ScaleStatus
     * @param replicas {Number} replicas is the actual number of observed instances of the scaled object.
     */
    constructor(replicas) { 
        
        IoK8sApiAutoscalingV1ScaleStatus.initialize(this, replicas);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, replicas) { 
        obj['replicas'] = replicas;
    }

    /**
     * Constructs a <code>IoK8sApiAutoscalingV1ScaleStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAutoscalingV1ScaleStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAutoscalingV1ScaleStatus} The populated <code>IoK8sApiAutoscalingV1ScaleStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAutoscalingV1ScaleStatus();

            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = ApiClient.convertToType(data['selector'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAutoscalingV1ScaleStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAutoscalingV1ScaleStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAutoscalingV1ScaleStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['selector'] && !(typeof data['selector'] === 'string' || data['selector'] instanceof String)) {
            throw new Error("Expected the field `selector` to be a primitive type in the JSON string but got " + data['selector']);
        }

        return true;
    }


}

IoK8sApiAutoscalingV1ScaleStatus.RequiredProperties = ["replicas"];

/**
 * replicas is the actual number of observed instances of the scaled object.
 * @member {Number} replicas
 */
IoK8sApiAutoscalingV1ScaleStatus.prototype['replicas'] = undefined;

/**
 * selector is the label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
 * @member {String} selector
 */
IoK8sApiAutoscalingV1ScaleStatus.prototype['selector'] = undefined;






export default IoK8sApiAutoscalingV1ScaleStatus;

