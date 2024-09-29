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
 * The ShVolcanoSchedulingV1beta1QueueStatusReservation model module.
 * @module model/ShVolcanoSchedulingV1beta1QueueStatusReservation
 * @version v1.30.0
 */
class ShVolcanoSchedulingV1beta1QueueStatusReservation {
    /**
     * Constructs a new <code>ShVolcanoSchedulingV1beta1QueueStatusReservation</code>.
     * Reservation is the profile of resource reservation for queue
     * @alias module:model/ShVolcanoSchedulingV1beta1QueueStatusReservation
     */
    constructor() { 
        
        ShVolcanoSchedulingV1beta1QueueStatusReservation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoSchedulingV1beta1QueueStatusReservation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoSchedulingV1beta1QueueStatusReservation} obj Optional instance to populate.
     * @return {module:model/ShVolcanoSchedulingV1beta1QueueStatusReservation} The populated <code>ShVolcanoSchedulingV1beta1QueueStatusReservation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoSchedulingV1beta1QueueStatusReservation();

            if (data.hasOwnProperty('nodes')) {
                obj['nodes'] = ApiClient.convertToType(data['nodes'], ['String']);
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoSchedulingV1beta1QueueStatusReservation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoSchedulingV1beta1QueueStatusReservation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['nodes'])) {
            throw new Error("Expected the field `nodes` to be an array in the JSON data but got " + data['nodes']);
        }

        return true;
    }


}



/**
 * Nodes are Locked nodes for queue
 * @member {Array.<String>} nodes
 */
ShVolcanoSchedulingV1beta1QueueStatusReservation.prototype['nodes'] = undefined;

/**
 * Resource is a list of total idle resource in locked nodes.
 * @member {Object.<String, Object>} resource
 */
ShVolcanoSchedulingV1beta1QueueStatusReservation.prototype['resource'] = undefined;






export default ShVolcanoSchedulingV1beta1QueueStatusReservation;

