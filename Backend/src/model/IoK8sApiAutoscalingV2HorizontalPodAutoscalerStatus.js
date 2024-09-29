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
import IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition from './IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition';
import IoK8sApiAutoscalingV2MetricStatus from './IoK8sApiAutoscalingV2MetricStatus';

/**
 * The IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus model module.
 * @module model/IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus
 * @version v1.30.0
 */
class IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus {
    /**
     * Constructs a new <code>IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus</code>.
     * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
     * @alias module:model/IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus
     * @param desiredReplicas {Number} desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
     */
    constructor(desiredReplicas) { 
        
        IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus.initialize(this, desiredReplicas);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, desiredReplicas) { 
        obj['desiredReplicas'] = desiredReplicas;
    }

    /**
     * Constructs a <code>IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus} The populated <code>IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus();

            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition]);
            }
            if (data.hasOwnProperty('currentMetrics')) {
                obj['currentMetrics'] = ApiClient.convertToType(data['currentMetrics'], [IoK8sApiAutoscalingV2MetricStatus]);
            }
            if (data.hasOwnProperty('currentReplicas')) {
                obj['currentReplicas'] = ApiClient.convertToType(data['currentReplicas'], 'Number');
            }
            if (data.hasOwnProperty('desiredReplicas')) {
                obj['desiredReplicas'] = ApiClient.convertToType(data['desiredReplicas'], 'Number');
            }
            if (data.hasOwnProperty('lastScaleTime')) {
                obj['lastScaleTime'] = ApiClient.convertToType(data['lastScaleTime'], 'Date');
            }
            if (data.hasOwnProperty('observedGeneration')) {
                obj['observedGeneration'] = ApiClient.convertToType(data['observedGeneration'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['conditions'])) {
                throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
            }
            // validate the optional field `conditions` (array)
            for (const item of data['conditions']) {
                IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition.validateJSON(item);
            };
        }
        if (data['currentMetrics']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['currentMetrics'])) {
                throw new Error("Expected the field `currentMetrics` to be an array in the JSON data but got " + data['currentMetrics']);
            }
            // validate the optional field `currentMetrics` (array)
            for (const item of data['currentMetrics']) {
                IoK8sApiAutoscalingV2MetricStatus.validateJSON(item);
            };
        }

        return true;
    }


}

IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus.RequiredProperties = ["desiredReplicas"];

/**
 * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
 * @member {Array.<module:model/IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition>} conditions
 */
IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus.prototype['conditions'] = undefined;

/**
 * currentMetrics is the last read state of the metrics used by this autoscaler.
 * @member {Array.<module:model/IoK8sApiAutoscalingV2MetricStatus>} currentMetrics
 */
IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus.prototype['currentMetrics'] = undefined;

/**
 * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
 * @member {Number} currentReplicas
 */
IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus.prototype['currentReplicas'] = undefined;

/**
 * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
 * @member {Number} desiredReplicas
 */
IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus.prototype['desiredReplicas'] = undefined;

/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 * @member {Date} lastScaleTime
 */
IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus.prototype['lastScaleTime'] = undefined;

/**
 * observedGeneration is the most recent generation observed by this autoscaler.
 * @member {Number} observedGeneration
 */
IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus.prototype['observedGeneration'] = undefined;






export default IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus;

