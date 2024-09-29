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
import IoK8sApiAutoscalingV2CrossVersionObjectReference from './IoK8sApiAutoscalingV2CrossVersionObjectReference';
import IoK8sApiAutoscalingV2MetricIdentifier from './IoK8sApiAutoscalingV2MetricIdentifier';
import IoK8sApiAutoscalingV2MetricValueStatus from './IoK8sApiAutoscalingV2MetricValueStatus';

/**
 * The IoK8sApiAutoscalingV2ObjectMetricStatus model module.
 * @module model/IoK8sApiAutoscalingV2ObjectMetricStatus
 * @version v1.30.0
 */
class IoK8sApiAutoscalingV2ObjectMetricStatus {
    /**
     * Constructs a new <code>IoK8sApiAutoscalingV2ObjectMetricStatus</code>.
     * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
     * @alias module:model/IoK8sApiAutoscalingV2ObjectMetricStatus
     * @param current {module:model/IoK8sApiAutoscalingV2MetricValueStatus} 
     * @param describedObject {module:model/IoK8sApiAutoscalingV2CrossVersionObjectReference} 
     * @param metric {module:model/IoK8sApiAutoscalingV2MetricIdentifier} 
     */
    constructor(current, describedObject, metric) { 
        
        IoK8sApiAutoscalingV2ObjectMetricStatus.initialize(this, current, describedObject, metric);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, current, describedObject, metric) { 
        obj['current'] = current;
        obj['describedObject'] = describedObject;
        obj['metric'] = metric;
    }

    /**
     * Constructs a <code>IoK8sApiAutoscalingV2ObjectMetricStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAutoscalingV2ObjectMetricStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAutoscalingV2ObjectMetricStatus} The populated <code>IoK8sApiAutoscalingV2ObjectMetricStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAutoscalingV2ObjectMetricStatus();

            if (data.hasOwnProperty('current')) {
                obj['current'] = IoK8sApiAutoscalingV2MetricValueStatus.constructFromObject(data['current']);
            }
            if (data.hasOwnProperty('describedObject')) {
                obj['describedObject'] = IoK8sApiAutoscalingV2CrossVersionObjectReference.constructFromObject(data['describedObject']);
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = IoK8sApiAutoscalingV2MetricIdentifier.constructFromObject(data['metric']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAutoscalingV2ObjectMetricStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAutoscalingV2ObjectMetricStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAutoscalingV2ObjectMetricStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `current`
        if (data['current']) { // data not null
          IoK8sApiAutoscalingV2MetricValueStatus.validateJSON(data['current']);
        }
        // validate the optional field `describedObject`
        if (data['describedObject']) { // data not null
          IoK8sApiAutoscalingV2CrossVersionObjectReference.validateJSON(data['describedObject']);
        }
        // validate the optional field `metric`
        if (data['metric']) { // data not null
          IoK8sApiAutoscalingV2MetricIdentifier.validateJSON(data['metric']);
        }

        return true;
    }


}

IoK8sApiAutoscalingV2ObjectMetricStatus.RequiredProperties = ["current", "describedObject", "metric"];

/**
 * @member {module:model/IoK8sApiAutoscalingV2MetricValueStatus} current
 */
IoK8sApiAutoscalingV2ObjectMetricStatus.prototype['current'] = undefined;

/**
 * @member {module:model/IoK8sApiAutoscalingV2CrossVersionObjectReference} describedObject
 */
IoK8sApiAutoscalingV2ObjectMetricStatus.prototype['describedObject'] = undefined;

/**
 * @member {module:model/IoK8sApiAutoscalingV2MetricIdentifier} metric
 */
IoK8sApiAutoscalingV2ObjectMetricStatus.prototype['metric'] = undefined;






export default IoK8sApiAutoscalingV2ObjectMetricStatus;
