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
import ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityNodeAffinity from './ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityNodeAffinity';
import ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinity from './ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinity';

/**
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity
     */
    constructor() { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity();

            if (data.hasOwnProperty('nodeAffinity')) {
                obj['nodeAffinity'] = ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityNodeAffinity.constructFromObject(data['nodeAffinity']);
            }
            if (data.hasOwnProperty('podAffinity')) {
                obj['podAffinity'] = ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinity.constructFromObject(data['podAffinity']);
            }
            if (data.hasOwnProperty('podAntiAffinity')) {
                obj['podAntiAffinity'] = ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinity.constructFromObject(data['podAntiAffinity']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity</code>.
     */
    static validateJSON(data) {
        // validate the optional field `nodeAffinity`
        if (data['nodeAffinity']) { // data not null
          ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityNodeAffinity.validateJSON(data['nodeAffinity']);
        }
        // validate the optional field `podAffinity`
        if (data['podAffinity']) { // data not null
          ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinity.validateJSON(data['podAffinity']);
        }
        // validate the optional field `podAntiAffinity`
        if (data['podAntiAffinity']) { // data not null
          ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinity.validateJSON(data['podAntiAffinity']);
        }

        return true;
    }


}



/**
 * @member {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityNodeAffinity} nodeAffinity
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity.prototype['nodeAffinity'] = undefined;

/**
 * @member {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinity} podAffinity
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity.prototype['podAffinity'] = undefined;

/**
 * @member {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinity} podAntiAffinity
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity.prototype['podAntiAffinity'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinity;

