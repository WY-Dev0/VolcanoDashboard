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
import IoK8sApiAppsV1DaemonSetCondition from './IoK8sApiAppsV1DaemonSetCondition';

/**
 * The IoK8sApiAppsV1DaemonSetStatus model module.
 * @module model/IoK8sApiAppsV1DaemonSetStatus
 * @version v1.30.0
 */
class IoK8sApiAppsV1DaemonSetStatus {
    /**
     * Constructs a new <code>IoK8sApiAppsV1DaemonSetStatus</code>.
     * DaemonSetStatus represents the current status of a daemon set.
     * @alias module:model/IoK8sApiAppsV1DaemonSetStatus
     * @param currentNumberScheduled {Number} The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     * @param desiredNumberScheduled {Number} The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     * @param numberMisscheduled {Number} The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
     * @param numberReady {Number} numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition.
     */
    constructor(currentNumberScheduled, desiredNumberScheduled, numberMisscheduled, numberReady) { 
        
        IoK8sApiAppsV1DaemonSetStatus.initialize(this, currentNumberScheduled, desiredNumberScheduled, numberMisscheduled, numberReady);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, currentNumberScheduled, desiredNumberScheduled, numberMisscheduled, numberReady) { 
        obj['currentNumberScheduled'] = currentNumberScheduled;
        obj['desiredNumberScheduled'] = desiredNumberScheduled;
        obj['numberMisscheduled'] = numberMisscheduled;
        obj['numberReady'] = numberReady;
    }

    /**
     * Constructs a <code>IoK8sApiAppsV1DaemonSetStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAppsV1DaemonSetStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAppsV1DaemonSetStatus} The populated <code>IoK8sApiAppsV1DaemonSetStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAppsV1DaemonSetStatus();

            if (data.hasOwnProperty('collisionCount')) {
                obj['collisionCount'] = ApiClient.convertToType(data['collisionCount'], 'Number');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [IoK8sApiAppsV1DaemonSetCondition]);
            }
            if (data.hasOwnProperty('currentNumberScheduled')) {
                obj['currentNumberScheduled'] = ApiClient.convertToType(data['currentNumberScheduled'], 'Number');
            }
            if (data.hasOwnProperty('desiredNumberScheduled')) {
                obj['desiredNumberScheduled'] = ApiClient.convertToType(data['desiredNumberScheduled'], 'Number');
            }
            if (data.hasOwnProperty('numberAvailable')) {
                obj['numberAvailable'] = ApiClient.convertToType(data['numberAvailable'], 'Number');
            }
            if (data.hasOwnProperty('numberMisscheduled')) {
                obj['numberMisscheduled'] = ApiClient.convertToType(data['numberMisscheduled'], 'Number');
            }
            if (data.hasOwnProperty('numberReady')) {
                obj['numberReady'] = ApiClient.convertToType(data['numberReady'], 'Number');
            }
            if (data.hasOwnProperty('numberUnavailable')) {
                obj['numberUnavailable'] = ApiClient.convertToType(data['numberUnavailable'], 'Number');
            }
            if (data.hasOwnProperty('observedGeneration')) {
                obj['observedGeneration'] = ApiClient.convertToType(data['observedGeneration'], 'Number');
            }
            if (data.hasOwnProperty('updatedNumberScheduled')) {
                obj['updatedNumberScheduled'] = ApiClient.convertToType(data['updatedNumberScheduled'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAppsV1DaemonSetStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAppsV1DaemonSetStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAppsV1DaemonSetStatus.RequiredProperties) {
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
                IoK8sApiAppsV1DaemonSetCondition.validateJSON(item);
            };
        }

        return true;
    }


}

IoK8sApiAppsV1DaemonSetStatus.RequiredProperties = ["currentNumberScheduled", "desiredNumberScheduled", "numberMisscheduled", "numberReady"];

/**
 * Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
 * @member {Number} collisionCount
 */
IoK8sApiAppsV1DaemonSetStatus.prototype['collisionCount'] = undefined;

/**
 * Represents the latest available observations of a DaemonSet's current state.
 * @member {Array.<module:model/IoK8sApiAppsV1DaemonSetCondition>} conditions
 */
IoK8sApiAppsV1DaemonSetStatus.prototype['conditions'] = undefined;

/**
 * The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
 * @member {Number} currentNumberScheduled
 */
IoK8sApiAppsV1DaemonSetStatus.prototype['currentNumberScheduled'] = undefined;

/**
 * The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
 * @member {Number} desiredNumberScheduled
 */
IoK8sApiAppsV1DaemonSetStatus.prototype['desiredNumberScheduled'] = undefined;

/**
 * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
 * @member {Number} numberAvailable
 */
IoK8sApiAppsV1DaemonSetStatus.prototype['numberAvailable'] = undefined;

/**
 * The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
 * @member {Number} numberMisscheduled
 */
IoK8sApiAppsV1DaemonSetStatus.prototype['numberMisscheduled'] = undefined;

/**
 * numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition.
 * @member {Number} numberReady
 */
IoK8sApiAppsV1DaemonSetStatus.prototype['numberReady'] = undefined;

/**
 * The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
 * @member {Number} numberUnavailable
 */
IoK8sApiAppsV1DaemonSetStatus.prototype['numberUnavailable'] = undefined;

/**
 * The most recent generation observed by the daemon set controller.
 * @member {Number} observedGeneration
 */
IoK8sApiAppsV1DaemonSetStatus.prototype['observedGeneration'] = undefined;

/**
 * The total number of nodes that are running updated daemon pod
 * @member {Number} updatedNumberScheduled
 */
IoK8sApiAppsV1DaemonSetStatus.prototype['updatedNumberScheduled'] = undefined;






export default IoK8sApiAppsV1DaemonSetStatus;

