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
import IoK8sApiCoreV1ReplicationControllerCondition from './IoK8sApiCoreV1ReplicationControllerCondition';

/**
 * The IoK8sApiCoreV1ReplicationControllerStatus model module.
 * @module model/IoK8sApiCoreV1ReplicationControllerStatus
 * @version v1.30.0
 */
class IoK8sApiCoreV1ReplicationControllerStatus {
    /**
     * Constructs a new <code>IoK8sApiCoreV1ReplicationControllerStatus</code>.
     * ReplicationControllerStatus represents the current status of a replication controller.
     * @alias module:model/IoK8sApiCoreV1ReplicationControllerStatus
     * @param replicas {Number} Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
     */
    constructor(replicas) { 
        
        IoK8sApiCoreV1ReplicationControllerStatus.initialize(this, replicas);
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
     * Constructs a <code>IoK8sApiCoreV1ReplicationControllerStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1ReplicationControllerStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1ReplicationControllerStatus} The populated <code>IoK8sApiCoreV1ReplicationControllerStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1ReplicationControllerStatus();

            if (data.hasOwnProperty('availableReplicas')) {
                obj['availableReplicas'] = ApiClient.convertToType(data['availableReplicas'], 'Number');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [IoK8sApiCoreV1ReplicationControllerCondition]);
            }
            if (data.hasOwnProperty('fullyLabeledReplicas')) {
                obj['fullyLabeledReplicas'] = ApiClient.convertToType(data['fullyLabeledReplicas'], 'Number');
            }
            if (data.hasOwnProperty('observedGeneration')) {
                obj['observedGeneration'] = ApiClient.convertToType(data['observedGeneration'], 'Number');
            }
            if (data.hasOwnProperty('readyReplicas')) {
                obj['readyReplicas'] = ApiClient.convertToType(data['readyReplicas'], 'Number');
            }
            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1ReplicationControllerStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1ReplicationControllerStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1ReplicationControllerStatus.RequiredProperties) {
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
                IoK8sApiCoreV1ReplicationControllerCondition.validateJSON(item);
            };
        }

        return true;
    }


}

IoK8sApiCoreV1ReplicationControllerStatus.RequiredProperties = ["replicas"];

/**
 * The number of available replicas (ready for at least minReadySeconds) for this replication controller.
 * @member {Number} availableReplicas
 */
IoK8sApiCoreV1ReplicationControllerStatus.prototype['availableReplicas'] = undefined;

/**
 * Represents the latest available observations of a replication controller's current state.
 * @member {Array.<module:model/IoK8sApiCoreV1ReplicationControllerCondition>} conditions
 */
IoK8sApiCoreV1ReplicationControllerStatus.prototype['conditions'] = undefined;

/**
 * The number of pods that have labels matching the labels of the pod template of the replication controller.
 * @member {Number} fullyLabeledReplicas
 */
IoK8sApiCoreV1ReplicationControllerStatus.prototype['fullyLabeledReplicas'] = undefined;

/**
 * ObservedGeneration reflects the generation of the most recently observed replication controller.
 * @member {Number} observedGeneration
 */
IoK8sApiCoreV1ReplicationControllerStatus.prototype['observedGeneration'] = undefined;

/**
 * The number of ready replicas for this replication controller.
 * @member {Number} readyReplicas
 */
IoK8sApiCoreV1ReplicationControllerStatus.prototype['readyReplicas'] = undefined;

/**
 * Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
 * @member {Number} replicas
 */
IoK8sApiCoreV1ReplicationControllerStatus.prototype['replicas'] = undefined;






export default IoK8sApiCoreV1ReplicationControllerStatus;

