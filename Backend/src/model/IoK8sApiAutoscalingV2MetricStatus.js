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
import IoK8sApiAutoscalingV2ContainerResourceMetricStatus from './IoK8sApiAutoscalingV2ContainerResourceMetricStatus';
import IoK8sApiAutoscalingV2ExternalMetricStatus from './IoK8sApiAutoscalingV2ExternalMetricStatus';
import IoK8sApiAutoscalingV2ObjectMetricStatus from './IoK8sApiAutoscalingV2ObjectMetricStatus';
import IoK8sApiAutoscalingV2PodsMetricStatus from './IoK8sApiAutoscalingV2PodsMetricStatus';
import IoK8sApiAutoscalingV2ResourceMetricStatus from './IoK8sApiAutoscalingV2ResourceMetricStatus';

/**
 * The IoK8sApiAutoscalingV2MetricStatus model module.
 * @module model/IoK8sApiAutoscalingV2MetricStatus
 * @version v1.30.0
 */
class IoK8sApiAutoscalingV2MetricStatus {
    /**
     * Constructs a new <code>IoK8sApiAutoscalingV2MetricStatus</code>.
     * MetricStatus describes the last-read state of a single metric.
     * @alias module:model/IoK8sApiAutoscalingV2MetricStatus
     * @param type {String} type is the type of metric source.  It will be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
     */
    constructor(type) { 
        
        IoK8sApiAutoscalingV2MetricStatus.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>IoK8sApiAutoscalingV2MetricStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAutoscalingV2MetricStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAutoscalingV2MetricStatus} The populated <code>IoK8sApiAutoscalingV2MetricStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAutoscalingV2MetricStatus();

            if (data.hasOwnProperty('containerResource')) {
                obj['containerResource'] = IoK8sApiAutoscalingV2ContainerResourceMetricStatus.constructFromObject(data['containerResource']);
            }
            if (data.hasOwnProperty('external')) {
                obj['external'] = IoK8sApiAutoscalingV2ExternalMetricStatus.constructFromObject(data['external']);
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = IoK8sApiAutoscalingV2ObjectMetricStatus.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('pods')) {
                obj['pods'] = IoK8sApiAutoscalingV2PodsMetricStatus.constructFromObject(data['pods']);
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = IoK8sApiAutoscalingV2ResourceMetricStatus.constructFromObject(data['resource']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAutoscalingV2MetricStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAutoscalingV2MetricStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAutoscalingV2MetricStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `containerResource`
        if (data['containerResource']) { // data not null
          IoK8sApiAutoscalingV2ContainerResourceMetricStatus.validateJSON(data['containerResource']);
        }
        // validate the optional field `external`
        if (data['external']) { // data not null
          IoK8sApiAutoscalingV2ExternalMetricStatus.validateJSON(data['external']);
        }
        // validate the optional field `object`
        if (data['object']) { // data not null
          IoK8sApiAutoscalingV2ObjectMetricStatus.validateJSON(data['object']);
        }
        // validate the optional field `pods`
        if (data['pods']) { // data not null
          IoK8sApiAutoscalingV2PodsMetricStatus.validateJSON(data['pods']);
        }
        // validate the optional field `resource`
        if (data['resource']) { // data not null
          IoK8sApiAutoscalingV2ResourceMetricStatus.validateJSON(data['resource']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

IoK8sApiAutoscalingV2MetricStatus.RequiredProperties = ["type"];

/**
 * @member {module:model/IoK8sApiAutoscalingV2ContainerResourceMetricStatus} containerResource
 */
IoK8sApiAutoscalingV2MetricStatus.prototype['containerResource'] = undefined;

/**
 * @member {module:model/IoK8sApiAutoscalingV2ExternalMetricStatus} external
 */
IoK8sApiAutoscalingV2MetricStatus.prototype['external'] = undefined;

/**
 * @member {module:model/IoK8sApiAutoscalingV2ObjectMetricStatus} object
 */
IoK8sApiAutoscalingV2MetricStatus.prototype['object'] = undefined;

/**
 * @member {module:model/IoK8sApiAutoscalingV2PodsMetricStatus} pods
 */
IoK8sApiAutoscalingV2MetricStatus.prototype['pods'] = undefined;

/**
 * @member {module:model/IoK8sApiAutoscalingV2ResourceMetricStatus} resource
 */
IoK8sApiAutoscalingV2MetricStatus.prototype['resource'] = undefined;

/**
 * type is the type of metric source.  It will be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
 * @member {String} type
 */
IoK8sApiAutoscalingV2MetricStatus.prototype['type'] = undefined;






export default IoK8sApiAutoscalingV2MetricStatus;
