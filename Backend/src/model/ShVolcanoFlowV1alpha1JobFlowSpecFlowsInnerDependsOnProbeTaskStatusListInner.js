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
 * The ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner model module.
 * @module model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner
 * @version v1.30.0
 */
class ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner {
    /**
     * Constructs a new <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner</code>.
     * @alias module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner
     */
    constructor() { 
        
        ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner} obj Optional instance to populate.
     * @return {module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner} The populated <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner();

            if (data.hasOwnProperty('phase')) {
                obj['phase'] = ApiClient.convertToType(data['phase'], 'String');
            }
            if (data.hasOwnProperty('taskName')) {
                obj['taskName'] = ApiClient.convertToType(data['taskName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['phase'] && !(typeof data['phase'] === 'string' || data['phase'] instanceof String)) {
            throw new Error("Expected the field `phase` to be a primitive type in the JSON string but got " + data['phase']);
        }
        // ensure the json data is a string
        if (data['taskName'] && !(typeof data['taskName'] === 'string' || data['taskName'] instanceof String)) {
            throw new Error("Expected the field `taskName` to be a primitive type in the JSON string but got " + data['taskName']);
        }

        return true;
    }


}



/**
 * @member {String} phase
 */
ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner.prototype['phase'] = undefined;

/**
 * @member {String} taskName
 */
ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner.prototype['taskName'] = undefined;






export default ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbeTaskStatusListInner;

