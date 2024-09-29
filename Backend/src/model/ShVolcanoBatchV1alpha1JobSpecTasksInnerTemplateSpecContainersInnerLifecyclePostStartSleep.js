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
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep
     * @param seconds {Number} 
     */
    constructor(seconds) { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep.initialize(this, seconds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, seconds) { 
        obj['seconds'] = seconds;
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep();

            if (data.hasOwnProperty('seconds')) {
                obj['seconds'] = ApiClient.convertToType(data['seconds'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep.RequiredProperties = ["seconds"];

/**
 * @member {Number} seconds
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep.prototype['seconds'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartSleep;

