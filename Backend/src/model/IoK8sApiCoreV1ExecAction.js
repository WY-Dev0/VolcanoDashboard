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

/**
 * The IoK8sApiCoreV1ExecAction model module.
 * @module model/IoK8sApiCoreV1ExecAction
 * @version v1.30.0
 */
class IoK8sApiCoreV1ExecAction {
    /**
     * Constructs a new <code>IoK8sApiCoreV1ExecAction</code>.
     * ExecAction describes a \&quot;run in container\&quot; action.
     * @alias module:model/IoK8sApiCoreV1ExecAction
     */
    constructor() { 
        
        IoK8sApiCoreV1ExecAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1ExecAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1ExecAction} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1ExecAction} The populated <code>IoK8sApiCoreV1ExecAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1ExecAction();

            if (data.hasOwnProperty('command')) {
                obj['command'] = ApiClient.convertToType(data['command'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1ExecAction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1ExecAction</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['command'])) {
            throw new Error("Expected the field `command` to be an array in the JSON data but got " + data['command']);
        }

        return true;
    }


}



/**
 * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
 * @member {Array.<String>} command
 */
IoK8sApiCoreV1ExecAction.prototype['command'] = undefined;






export default IoK8sApiCoreV1ExecAction;
