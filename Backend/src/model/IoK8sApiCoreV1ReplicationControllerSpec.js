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
import IoK8sApiCoreV1PodTemplateSpec from './IoK8sApiCoreV1PodTemplateSpec';

/**
 * The IoK8sApiCoreV1ReplicationControllerSpec model module.
 * @module model/IoK8sApiCoreV1ReplicationControllerSpec
 * @version v1.30.0
 */
class IoK8sApiCoreV1ReplicationControllerSpec {
    /**
     * Constructs a new <code>IoK8sApiCoreV1ReplicationControllerSpec</code>.
     * ReplicationControllerSpec is the specification of a replication controller.
     * @alias module:model/IoK8sApiCoreV1ReplicationControllerSpec
     */
    constructor() { 
        
        IoK8sApiCoreV1ReplicationControllerSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1ReplicationControllerSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1ReplicationControllerSpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1ReplicationControllerSpec} The populated <code>IoK8sApiCoreV1ReplicationControllerSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1ReplicationControllerSpec();

            if (data.hasOwnProperty('minReadySeconds')) {
                obj['minReadySeconds'] = ApiClient.convertToType(data['minReadySeconds'], 'Number');
            }
            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = ApiClient.convertToType(data['selector'], {'String': 'String'});
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = IoK8sApiCoreV1PodTemplateSpec.constructFromObject(data['template']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1ReplicationControllerSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1ReplicationControllerSpec</code>.
     */
    static validateJSON(data) {
        // validate the optional field `template`
        if (data['template']) { // data not null
          IoK8sApiCoreV1PodTemplateSpec.validateJSON(data['template']);
        }

        return true;
    }


}



/**
 * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
 * @member {Number} minReadySeconds
 */
IoK8sApiCoreV1ReplicationControllerSpec.prototype['minReadySeconds'] = undefined;

/**
 * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
 * @member {Number} replicas
 */
IoK8sApiCoreV1ReplicationControllerSpec.prototype['replicas'] = undefined;

/**
 * Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
 * @member {Object.<String, String>} selector
 */
IoK8sApiCoreV1ReplicationControllerSpec.prototype['selector'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1PodTemplateSpec} template
 */
IoK8sApiCoreV1ReplicationControllerSpec.prototype['template'] = undefined;






export default IoK8sApiCoreV1ReplicationControllerSpec;

