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
import IoK8sApiAutoscalingV2ContainerResourceMetricSource from './IoK8sApiAutoscalingV2ContainerResourceMetricSource';
import IoK8sApiAutoscalingV2ExternalMetricSource from './IoK8sApiAutoscalingV2ExternalMetricSource';
import IoK8sApiAutoscalingV2ObjectMetricSource from './IoK8sApiAutoscalingV2ObjectMetricSource';
import IoK8sApiAutoscalingV2PodsMetricSource from './IoK8sApiAutoscalingV2PodsMetricSource';
import IoK8sApiAutoscalingV2ResourceMetricSource from './IoK8sApiAutoscalingV2ResourceMetricSource';

/**
 * The IoK8sApiAutoscalingV2MetricSpec model module.
 * @module model/IoK8sApiAutoscalingV2MetricSpec
 * @version v1.30.0
 */
class IoK8sApiAutoscalingV2MetricSpec {
    /**
     * Constructs a new <code>IoK8sApiAutoscalingV2MetricSpec</code>.
     * MetricSpec specifies how to scale based on a single metric (only &#x60;type&#x60; and one other matching field should be set at once).
     * @alias module:model/IoK8sApiAutoscalingV2MetricSpec
     * @param type {String} type is the type of metric source.  It should be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
     */
    constructor(type) { 
        
        IoK8sApiAutoscalingV2MetricSpec.initialize(this, type);
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
     * Constructs a <code>IoK8sApiAutoscalingV2MetricSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAutoscalingV2MetricSpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAutoscalingV2MetricSpec} The populated <code>IoK8sApiAutoscalingV2MetricSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAutoscalingV2MetricSpec();

            if (data.hasOwnProperty('containerResource')) {
                obj['containerResource'] = IoK8sApiAutoscalingV2ContainerResourceMetricSource.constructFromObject(data['containerResource']);
            }
            if (data.hasOwnProperty('external')) {
                obj['external'] = IoK8sApiAutoscalingV2ExternalMetricSource.constructFromObject(data['external']);
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = IoK8sApiAutoscalingV2ObjectMetricSource.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('pods')) {
                obj['pods'] = IoK8sApiAutoscalingV2PodsMetricSource.constructFromObject(data['pods']);
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = IoK8sApiAutoscalingV2ResourceMetricSource.constructFromObject(data['resource']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAutoscalingV2MetricSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAutoscalingV2MetricSpec</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAutoscalingV2MetricSpec.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `containerResource`
        if (data['containerResource']) { // data not null
          IoK8sApiAutoscalingV2ContainerResourceMetricSource.validateJSON(data['containerResource']);
        }
        // validate the optional field `external`
        if (data['external']) { // data not null
          IoK8sApiAutoscalingV2ExternalMetricSource.validateJSON(data['external']);
        }
        // validate the optional field `object`
        if (data['object']) { // data not null
          IoK8sApiAutoscalingV2ObjectMetricSource.validateJSON(data['object']);
        }
        // validate the optional field `pods`
        if (data['pods']) { // data not null
          IoK8sApiAutoscalingV2PodsMetricSource.validateJSON(data['pods']);
        }
        // validate the optional field `resource`
        if (data['resource']) { // data not null
          IoK8sApiAutoscalingV2ResourceMetricSource.validateJSON(data['resource']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

IoK8sApiAutoscalingV2MetricSpec.RequiredProperties = ["type"];

/**
 * @member {module:model/IoK8sApiAutoscalingV2ContainerResourceMetricSource} containerResource
 */
IoK8sApiAutoscalingV2MetricSpec.prototype['containerResource'] = undefined;

/**
 * @member {module:model/IoK8sApiAutoscalingV2ExternalMetricSource} external
 */
IoK8sApiAutoscalingV2MetricSpec.prototype['external'] = undefined;

/**
 * @member {module:model/IoK8sApiAutoscalingV2ObjectMetricSource} object
 */
IoK8sApiAutoscalingV2MetricSpec.prototype['object'] = undefined;

/**
 * @member {module:model/IoK8sApiAutoscalingV2PodsMetricSource} pods
 */
IoK8sApiAutoscalingV2MetricSpec.prototype['pods'] = undefined;

/**
 * @member {module:model/IoK8sApiAutoscalingV2ResourceMetricSource} resource
 */
IoK8sApiAutoscalingV2MetricSpec.prototype['resource'] = undefined;

/**
 * type is the type of metric source.  It should be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
 * @member {String} type
 */
IoK8sApiAutoscalingV2MetricSpec.prototype['type'] = undefined;






export default IoK8sApiAutoscalingV2MetricSpec;
