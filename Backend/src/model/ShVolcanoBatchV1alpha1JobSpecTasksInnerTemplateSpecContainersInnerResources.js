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
import ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResourcesClaimsInner from './ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResourcesClaimsInner';

/**
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources
     */
    constructor() { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources();

            if (data.hasOwnProperty('claims')) {
                obj['claims'] = ApiClient.convertToType(data['claims'], [ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResourcesClaimsInner]);
            }
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = ApiClient.convertToType(data['limits'], {'String': Object});
            }
            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources</code>.
     */
    static validateJSON(data) {
        if (data['claims']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['claims'])) {
                throw new Error("Expected the field `claims` to be an array in the JSON data but got " + data['claims']);
            }
            // validate the optional field `claims` (array)
            for (const item of data['claims']) {
                ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResourcesClaimsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResourcesClaimsInner>} claims
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources.prototype['claims'] = undefined;

/**
 * @member {Object.<String, Object>} limits
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources.prototype['limits'] = undefined;

/**
 * @member {Object.<String, Object>} requests
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources.prototype['requests'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResources;
