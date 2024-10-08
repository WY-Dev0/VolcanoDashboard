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
import IoK8sApiAppsV1RollingUpdateStatefulSetStrategy from './IoK8sApiAppsV1RollingUpdateStatefulSetStrategy';

/**
 * The IoK8sApiAppsV1StatefulSetUpdateStrategy model module.
 * @module model/IoK8sApiAppsV1StatefulSetUpdateStrategy
 * @version v1.30.0
 */
class IoK8sApiAppsV1StatefulSetUpdateStrategy {
    /**
     * Constructs a new <code>IoK8sApiAppsV1StatefulSetUpdateStrategy</code>.
     * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
     * @alias module:model/IoK8sApiAppsV1StatefulSetUpdateStrategy
     */
    constructor() { 
        
        IoK8sApiAppsV1StatefulSetUpdateStrategy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiAppsV1StatefulSetUpdateStrategy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAppsV1StatefulSetUpdateStrategy} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAppsV1StatefulSetUpdateStrategy} The populated <code>IoK8sApiAppsV1StatefulSetUpdateStrategy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAppsV1StatefulSetUpdateStrategy();

            if (data.hasOwnProperty('rollingUpdate')) {
                obj['rollingUpdate'] = IoK8sApiAppsV1RollingUpdateStatefulSetStrategy.constructFromObject(data['rollingUpdate']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAppsV1StatefulSetUpdateStrategy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAppsV1StatefulSetUpdateStrategy</code>.
     */
    static validateJSON(data) {
        // validate the optional field `rollingUpdate`
        if (data['rollingUpdate']) { // data not null
          IoK8sApiAppsV1RollingUpdateStatefulSetStrategy.validateJSON(data['rollingUpdate']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {module:model/IoK8sApiAppsV1RollingUpdateStatefulSetStrategy} rollingUpdate
 */
IoK8sApiAppsV1StatefulSetUpdateStrategy.prototype['rollingUpdate'] = undefined;

/**
 * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.  Possible enum values:  - `\"OnDelete\"` triggers the legacy behavior. Version tracking and ordered rolling restarts are disabled. Pods are recreated from the StatefulSetSpec when they are manually deleted. When a scale operation is performed with this strategy,specification version indicated by the StatefulSet's currentRevision.  - `\"RollingUpdate\"` indicates that update will be applied to all Pods in the StatefulSet with respect to the StatefulSet ordering constraints. When a scale operation is performed with this strategy, new Pods will be created from the specification version indicated by the StatefulSet's updateRevision.
 * @member {module:model/IoK8sApiAppsV1StatefulSetUpdateStrategy.TypeEnum} type
 */
IoK8sApiAppsV1StatefulSetUpdateStrategy.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiAppsV1StatefulSetUpdateStrategy['TypeEnum'] = {

    /**
     * value: "OnDelete"
     * @const
     */
    "OnDelete": "OnDelete",

    /**
     * value: "RollingUpdate"
     * @const
     */
    "RollingUpdate": "RollingUpdate"
};



export default IoK8sApiAppsV1StatefulSetUpdateStrategy;

