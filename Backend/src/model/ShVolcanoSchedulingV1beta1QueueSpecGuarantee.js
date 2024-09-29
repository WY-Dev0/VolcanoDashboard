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
 * The ShVolcanoSchedulingV1beta1QueueSpecGuarantee model module.
 * @module model/ShVolcanoSchedulingV1beta1QueueSpecGuarantee
 * @version v1.30.0
 */
class ShVolcanoSchedulingV1beta1QueueSpecGuarantee {
    /**
     * Constructs a new <code>ShVolcanoSchedulingV1beta1QueueSpecGuarantee</code>.
     * Guarantee indicate configuration about resource reservation
     * @alias module:model/ShVolcanoSchedulingV1beta1QueueSpecGuarantee
     */
    constructor() { 
        
        ShVolcanoSchedulingV1beta1QueueSpecGuarantee.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoSchedulingV1beta1QueueSpecGuarantee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoSchedulingV1beta1QueueSpecGuarantee} obj Optional instance to populate.
     * @return {module:model/ShVolcanoSchedulingV1beta1QueueSpecGuarantee} The populated <code>ShVolcanoSchedulingV1beta1QueueSpecGuarantee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoSchedulingV1beta1QueueSpecGuarantee();

            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoSchedulingV1beta1QueueSpecGuarantee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoSchedulingV1beta1QueueSpecGuarantee</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The amount of cluster resource reserved for queue. Just set either `percentage` or `resource`
 * @member {Object.<String, Object>} resource
 */
ShVolcanoSchedulingV1beta1QueueSpecGuarantee.prototype['resource'] = undefined;






export default ShVolcanoSchedulingV1beta1QueueSpecGuarantee;
