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
import IoK8sApiAutoscalingV2MetricValueStatus from './IoK8sApiAutoscalingV2MetricValueStatus';

/**
 * The IoK8sApiAutoscalingV2ContainerResourceMetricStatus model module.
 * @module model/IoK8sApiAutoscalingV2ContainerResourceMetricStatus
 * @version v1.30.0
 */
class IoK8sApiAutoscalingV2ContainerResourceMetricStatus {
    /**
     * Constructs a new <code>IoK8sApiAutoscalingV2ContainerResourceMetricStatus</code>.
     * ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \&quot;pods\&quot; source.
     * @alias module:model/IoK8sApiAutoscalingV2ContainerResourceMetricStatus
     * @param container {String} container is the name of the container in the pods of the scaling target
     * @param current {module:model/IoK8sApiAutoscalingV2MetricValueStatus} 
     * @param name {String} name is the name of the resource in question.
     */
    constructor(container, current, name) { 
        
        IoK8sApiAutoscalingV2ContainerResourceMetricStatus.initialize(this, container, current, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, container, current, name) { 
        obj['container'] = container;
        obj['current'] = current;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>IoK8sApiAutoscalingV2ContainerResourceMetricStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAutoscalingV2ContainerResourceMetricStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAutoscalingV2ContainerResourceMetricStatus} The populated <code>IoK8sApiAutoscalingV2ContainerResourceMetricStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAutoscalingV2ContainerResourceMetricStatus();

            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], 'String');
            }
            if (data.hasOwnProperty('current')) {
                obj['current'] = IoK8sApiAutoscalingV2MetricValueStatus.constructFromObject(data['current']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAutoscalingV2ContainerResourceMetricStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAutoscalingV2ContainerResourceMetricStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAutoscalingV2ContainerResourceMetricStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['container'] && !(typeof data['container'] === 'string' || data['container'] instanceof String)) {
            throw new Error("Expected the field `container` to be a primitive type in the JSON string but got " + data['container']);
        }
        // validate the optional field `current`
        if (data['current']) { // data not null
          IoK8sApiAutoscalingV2MetricValueStatus.validateJSON(data['current']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

IoK8sApiAutoscalingV2ContainerResourceMetricStatus.RequiredProperties = ["container", "current", "name"];

/**
 * container is the name of the container in the pods of the scaling target
 * @member {String} container
 */
IoK8sApiAutoscalingV2ContainerResourceMetricStatus.prototype['container'] = undefined;

/**
 * @member {module:model/IoK8sApiAutoscalingV2MetricValueStatus} current
 */
IoK8sApiAutoscalingV2ContainerResourceMetricStatus.prototype['current'] = undefined;

/**
 * name is the name of the resource in question.
 * @member {String} name
 */
IoK8sApiAutoscalingV2ContainerResourceMetricStatus.prototype['name'] = undefined;






export default IoK8sApiAutoscalingV2ContainerResourceMetricStatus;

