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
 * The ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity model module.
 * @module model/ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity
 * @version v1.30.0
 */
class ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity {
    /**
     * Constructs a new <code>ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity</code>.
     * Describes nodegroup anti-affinity scheduling rules for the queue(e.g. avoid putting pods of the queue in the nodes of the nodegroup).
     * @alias module:model/ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity
     */
    constructor() { 
        
        ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity} obj Optional instance to populate.
     * @return {module:model/ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity} The populated <code>ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity();

            if (data.hasOwnProperty('preferredDuringSchedulingIgnoredDuringExecution')) {
                obj['preferredDuringSchedulingIgnoredDuringExecution'] = ApiClient.convertToType(data['preferredDuringSchedulingIgnoredDuringExecution'], ['String']);
            }
            if (data.hasOwnProperty('requiredDuringSchedulingIgnoredDuringExecution')) {
                obj['requiredDuringSchedulingIgnoredDuringExecution'] = ApiClient.convertToType(data['requiredDuringSchedulingIgnoredDuringExecution'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['preferredDuringSchedulingIgnoredDuringExecution'])) {
            throw new Error("Expected the field `preferredDuringSchedulingIgnoredDuringExecution` to be an array in the JSON data but got " + data['preferredDuringSchedulingIgnoredDuringExecution']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['requiredDuringSchedulingIgnoredDuringExecution'])) {
            throw new Error("Expected the field `requiredDuringSchedulingIgnoredDuringExecution` to be an array in the JSON data but got " + data['requiredDuringSchedulingIgnoredDuringExecution']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} preferredDuringSchedulingIgnoredDuringExecution
 */
ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity.prototype['preferredDuringSchedulingIgnoredDuringExecution'] = undefined;

/**
 * @member {Array.<String>} requiredDuringSchedulingIgnoredDuringExecution
 */
ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity.prototype['requiredDuringSchedulingIgnoredDuringExecution'] = undefined;






export default ShVolcanoSchedulingV1beta1QueueSpecAffinityNodeGroupAntiAffinity;
