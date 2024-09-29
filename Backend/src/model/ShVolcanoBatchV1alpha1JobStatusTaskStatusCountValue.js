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
 * The ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue model module.
 * @module model/ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue
     */
    constructor() { 
        
        ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue} The populated <code>ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue();

            if (data.hasOwnProperty('phase')) {
                obj['phase'] = ApiClient.convertToType(data['phase'], {'String': 'Number'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object.<String, Number>} phase
 */
ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue.prototype['phase'] = undefined;






export default ShVolcanoBatchV1alpha1JobStatusTaskStatusCountValue;

