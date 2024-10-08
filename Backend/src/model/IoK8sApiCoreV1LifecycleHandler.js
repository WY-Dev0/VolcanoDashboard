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
import IoK8sApiCoreV1HTTPGetAction from './IoK8sApiCoreV1HTTPGetAction';
import IoK8sApiCoreV1SleepAction from './IoK8sApiCoreV1SleepAction';
import IoK8sApiCoreV1TCPSocketAction from './IoK8sApiCoreV1TCPSocketAction';

/**
 * The IoK8sApiCoreV1LifecycleHandler model module.
 * @module model/IoK8sApiCoreV1LifecycleHandler
 * @version v1.30.0
 */
class IoK8sApiCoreV1LifecycleHandler {
    /**
     * Constructs a new <code>IoK8sApiCoreV1LifecycleHandler</code>.
     * LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
     * @alias module:model/IoK8sApiCoreV1LifecycleHandler
     */
    constructor() { 
        
        IoK8sApiCoreV1LifecycleHandler.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1LifecycleHandler</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1LifecycleHandler} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1LifecycleHandler} The populated <code>IoK8sApiCoreV1LifecycleHandler</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1LifecycleHandler();

            if (data.hasOwnProperty('exec')) {
                obj['exec'] = IoK8sApiCoreV1ExecAction.constructFromObject(data['exec']);
            }
            if (data.hasOwnProperty('httpGet')) {
                obj['httpGet'] = IoK8sApiCoreV1HTTPGetAction.constructFromObject(data['httpGet']);
            }
            if (data.hasOwnProperty('sleep')) {
                obj['sleep'] = IoK8sApiCoreV1SleepAction.constructFromObject(data['sleep']);
            }
            if (data.hasOwnProperty('tcpSocket')) {
                obj['tcpSocket'] = IoK8sApiCoreV1TCPSocketAction.constructFromObject(data['tcpSocket']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1LifecycleHandler</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1LifecycleHandler</code>.
     */
    static validateJSON(data) {
        // validate the optional field `exec`
        if (data['exec']) { // data not null
          IoK8sApiCoreV1ExecAction.validateJSON(data['exec']);
        }
        // validate the optional field `httpGet`
        if (data['httpGet']) { // data not null
          IoK8sApiCoreV1HTTPGetAction.validateJSON(data['httpGet']);
        }
        // validate the optional field `sleep`
        if (data['sleep']) { // data not null
          IoK8sApiCoreV1SleepAction.validateJSON(data['sleep']);
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
IoK8sApiCoreV1LifecycleHandler.prototype['exec'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1HTTPGetAction} httpGet
 */
IoK8sApiCoreV1LifecycleHandler.prototype['httpGet'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1SleepAction} sleep
 */
IoK8sApiCoreV1LifecycleHandler.prototype['sleep'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1TCPSocketAction} tcpSocket
 */
IoK8sApiCoreV1LifecycleHandler.prototype['tcpSocket'] = undefined;






export default IoK8sApiCoreV1LifecycleHandler;

