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
 * The IoK8sApiCoreV1Taint model module.
 * @module model/IoK8sApiCoreV1Taint
 * @version v1.30.0
 */
class IoK8sApiCoreV1Taint {
    /**
     * Constructs a new <code>IoK8sApiCoreV1Taint</code>.
     * The node this Taint is attached to has the \&quot;effect\&quot; on any pod that does not tolerate the Taint.
     * @alias module:model/IoK8sApiCoreV1Taint
     * @param effect {module:model/IoK8sApiCoreV1Taint.EffectEnum} Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.  Possible enum values:  - `\"NoExecute\"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.  - `\"NoSchedule\"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.  - `\"PreferNoSchedule\"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.
     * @param key {String} Required. The taint key to be applied to a node.
     */
    constructor(effect, key) { 
        
        IoK8sApiCoreV1Taint.initialize(this, effect, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, effect, key) { 
        obj['effect'] = effect;
        obj['key'] = key;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1Taint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1Taint} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1Taint} The populated <code>IoK8sApiCoreV1Taint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1Taint();

            if (data.hasOwnProperty('effect')) {
                obj['effect'] = ApiClient.convertToType(data['effect'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('timeAdded')) {
                obj['timeAdded'] = ApiClient.convertToType(data['timeAdded'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1Taint</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1Taint</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1Taint.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['effect'] && !(typeof data['effect'] === 'string' || data['effect'] instanceof String)) {
            throw new Error("Expected the field `effect` to be a primitive type in the JSON string but got " + data['effect']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

IoK8sApiCoreV1Taint.RequiredProperties = ["effect", "key"];

/**
 * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.  Possible enum values:  - `\"NoExecute\"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.  - `\"NoSchedule\"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.  - `\"PreferNoSchedule\"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.
 * @member {module:model/IoK8sApiCoreV1Taint.EffectEnum} effect
 */
IoK8sApiCoreV1Taint.prototype['effect'] = undefined;

/**
 * Required. The taint key to be applied to a node.
 * @member {String} key
 */
IoK8sApiCoreV1Taint.prototype['key'] = undefined;

/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 * @member {Date} timeAdded
 */
IoK8sApiCoreV1Taint.prototype['timeAdded'] = undefined;

/**
 * The taint value corresponding to the taint key.
 * @member {String} value
 */
IoK8sApiCoreV1Taint.prototype['value'] = undefined;





/**
 * Allowed values for the <code>effect</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1Taint['EffectEnum'] = {

    /**
     * value: "NoExecute"
     * @const
     */
    "NoExecute": "NoExecute",

    /**
     * value: "NoSchedule"
     * @const
     */
    "NoSchedule": "NoSchedule",

    /**
     * value: "PreferNoSchedule"
     * @const
     */
    "PreferNoSchedule": "PreferNoSchedule"
};



export default IoK8sApiCoreV1Taint;

