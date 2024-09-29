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
import ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe from './ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe';

/**
 * The ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn model module.
 * @module model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn
 * @version v1.30.0
 */
class ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn {
    /**
     * Constructs a new <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn</code>.
     * @alias module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn
     */
    constructor() { 
        
        ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn} obj Optional instance to populate.
     * @return {module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn} The populated <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn();

            if (data.hasOwnProperty('probe')) {
                obj['probe'] = ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe.constructFromObject(data['probe']);
            }
            if (data.hasOwnProperty('targets')) {
                obj['targets'] = ApiClient.convertToType(data['targets'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn</code>.
     */
    static validateJSON(data) {
        // validate the optional field `probe`
        if (data['probe']) { // data not null
          ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe.validateJSON(data['probe']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['targets'])) {
            throw new Error("Expected the field `targets` to be an array in the JSON data but got " + data['targets']);
        }

        return true;
    }


}



/**
 * @member {module:model/ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOnProbe} probe
 */
ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn.prototype['probe'] = undefined;

/**
 * @member {Array.<String>} targets
 */
ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn.prototype['targets'] = undefined;






export default ShVolcanoFlowV1alpha1JobFlowSpecFlowsInnerDependsOn;
