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
import IoK8sApiCoreV1ExecAction from './IoK8sApiCoreV1ExecAction';
import IoK8sApiCoreV1GRPCAction from './IoK8sApiCoreV1GRPCAction';
import IoK8sApiCoreV1HTTPGetAction from './IoK8sApiCoreV1HTTPGetAction';
import IoK8sApiCoreV1TCPSocketAction from './IoK8sApiCoreV1TCPSocketAction';

/**
 * The IoK8sApiCoreV1Probe model module.
 * @module model/IoK8sApiCoreV1Probe
 * @version v1.30.0
 */
class IoK8sApiCoreV1Probe {
    /**
     * Constructs a new <code>IoK8sApiCoreV1Probe</code>.
     * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
     * @alias module:model/IoK8sApiCoreV1Probe
     */
    constructor() { 
        
        IoK8sApiCoreV1Probe.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1Probe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1Probe} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1Probe} The populated <code>IoK8sApiCoreV1Probe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1Probe();

            if (data.hasOwnProperty('exec')) {
                obj['exec'] = IoK8sApiCoreV1ExecAction.constructFromObject(data['exec']);
            }
            if (data.hasOwnProperty('failureThreshold')) {
                obj['failureThreshold'] = ApiClient.convertToType(data['failureThreshold'], 'Number');
            }
            if (data.hasOwnProperty('grpc')) {
                obj['grpc'] = IoK8sApiCoreV1GRPCAction.constructFromObject(data['grpc']);
            }
            if (data.hasOwnProperty('httpGet')) {
                obj['httpGet'] = IoK8sApiCoreV1HTTPGetAction.constructFromObject(data['httpGet']);
            }
            if (data.hasOwnProperty('initialDelaySeconds')) {
                obj['initialDelaySeconds'] = ApiClient.convertToType(data['initialDelaySeconds'], 'Number');
            }
            if (data.hasOwnProperty('periodSeconds')) {
                obj['periodSeconds'] = ApiClient.convertToType(data['periodSeconds'], 'Number');
            }
            if (data.hasOwnProperty('successThreshold')) {
                obj['successThreshold'] = ApiClient.convertToType(data['successThreshold'], 'Number');
            }
            if (data.hasOwnProperty('tcpSocket')) {
                obj['tcpSocket'] = IoK8sApiCoreV1TCPSocketAction.constructFromObject(data['tcpSocket']);
            }
            if (data.hasOwnProperty('terminationGracePeriodSeconds')) {
                obj['terminationGracePeriodSeconds'] = ApiClient.convertToType(data['terminationGracePeriodSeconds'], 'Number');
            }
            if (data.hasOwnProperty('timeoutSeconds')) {
                obj['timeoutSeconds'] = ApiClient.convertToType(data['timeoutSeconds'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1Probe</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1Probe</code>.
     */
    static validateJSON(data) {
        // validate the optional field `exec`
        if (data['exec']) { // data not null
          IoK8sApiCoreV1ExecAction.validateJSON(data['exec']);
        }
        // validate the optional field `grpc`
        if (data['grpc']) { // data not null
          IoK8sApiCoreV1GRPCAction.validateJSON(data['grpc']);
        }
        // validate the optional field `httpGet`
        if (data['httpGet']) { // data not null
          IoK8sApiCoreV1HTTPGetAction.validateJSON(data['httpGet']);
        }
        // validate the optional field `tcpSocket`
        if (data['tcpSocket']) { // data not null
          IoK8sApiCoreV1TCPSocketAction.validateJSON(data['tcpSocket']);
        }

        return true;
    }


}



/**
 * @member {module:model/IoK8sApiCoreV1ExecAction} exec
 */
IoK8sApiCoreV1Probe.prototype['exec'] = undefined;

/**
 * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
 * @member {Number} failureThreshold
 */
IoK8sApiCoreV1Probe.prototype['failureThreshold'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1GRPCAction} grpc
 */
IoK8sApiCoreV1Probe.prototype['grpc'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1HTTPGetAction} httpGet
 */
IoK8sApiCoreV1Probe.prototype['httpGet'] = undefined;

/**
 * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
 * @member {Number} initialDelaySeconds
 */
IoK8sApiCoreV1Probe.prototype['initialDelaySeconds'] = undefined;

/**
 * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
 * @member {Number} periodSeconds
 */
IoK8sApiCoreV1Probe.prototype['periodSeconds'] = undefined;

/**
 * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
 * @member {Number} successThreshold
 */
IoK8sApiCoreV1Probe.prototype['successThreshold'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1TCPSocketAction} tcpSocket
 */
IoK8sApiCoreV1Probe.prototype['tcpSocket'] = undefined;

/**
 * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
 * @member {Number} terminationGracePeriodSeconds
 */
IoK8sApiCoreV1Probe.prototype['terminationGracePeriodSeconds'] = undefined;

/**
 * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
 * @member {Number} timeoutSeconds
 */
IoK8sApiCoreV1Probe.prototype['timeoutSeconds'] = undefined;






export default IoK8sApiCoreV1Probe;

