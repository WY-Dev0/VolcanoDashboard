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
import IoK8sApiAppsV1RollingUpdateDeployment from './IoK8sApiAppsV1RollingUpdateDeployment';

/**
 * The IoK8sApiAppsV1DeploymentStrategy model module.
 * @module model/IoK8sApiAppsV1DeploymentStrategy
 * @version v1.30.0
 */
class IoK8sApiAppsV1DeploymentStrategy {
    /**
     * Constructs a new <code>IoK8sApiAppsV1DeploymentStrategy</code>.
     * DeploymentStrategy describes how to replace existing pods with new ones.
     * @alias module:model/IoK8sApiAppsV1DeploymentStrategy
     */
    constructor() { 
        
        IoK8sApiAppsV1DeploymentStrategy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiAppsV1DeploymentStrategy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAppsV1DeploymentStrategy} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAppsV1DeploymentStrategy} The populated <code>IoK8sApiAppsV1DeploymentStrategy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAppsV1DeploymentStrategy();

            if (data.hasOwnProperty('rollingUpdate')) {
                obj['rollingUpdate'] = IoK8sApiAppsV1RollingUpdateDeployment.constructFromObject(data['rollingUpdate']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAppsV1DeploymentStrategy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAppsV1DeploymentStrategy</code>.
     */
    static validateJSON(data) {
        // validate the optional field `rollingUpdate`
        if (data['rollingUpdate']) { // data not null
          IoK8sApiAppsV1RollingUpdateDeployment.validateJSON(data['rollingUpdate']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {module:model/IoK8sApiAppsV1RollingUpdateDeployment} rollingUpdate
 */
IoK8sApiAppsV1DeploymentStrategy.prototype['rollingUpdate'] = undefined;

/**
 * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.  Possible enum values:  - `\"Recreate\"` Kill all existing pods before creating new ones.  - `\"RollingUpdate\"` Replace the old ReplicaSets by new one using rolling update i.e gradually scale down the old ReplicaSets and scale up the new one.
 * @member {module:model/IoK8sApiAppsV1DeploymentStrategy.TypeEnum} type
 */
IoK8sApiAppsV1DeploymentStrategy.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiAppsV1DeploymentStrategy['TypeEnum'] = {

    /**
     * value: "Recreate"
     * @const
     */
    "Recreate": "Recreate",

    /**
     * value: "RollingUpdate"
     * @const
     */
    "RollingUpdate": "RollingUpdate"
};



export default IoK8sApiAppsV1DeploymentStrategy;
