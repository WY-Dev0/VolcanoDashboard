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
import ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner from './ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner';

/**
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector
     */
    constructor() { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector();

            if (data.hasOwnProperty('matchExpressions')) {
                obj['matchExpressions'] = ApiClient.convertToType(data['matchExpressions'], [ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner]);
            }
            if (data.hasOwnProperty('matchLabels')) {
                obj['matchLabels'] = ApiClient.convertToType(data['matchLabels'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector</code>.
     */
    static validateJSON(data) {
        if (data['matchExpressions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['matchExpressions'])) {
                throw new Error("Expected the field `matchExpressions` to be an array in the JSON data but got " + data['matchExpressions']);
            }
            // validate the optional field `matchExpressions` (array)
            for (const item of data['matchExpressions']) {
                ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner>} matchExpressions
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector.prototype['matchExpressions'] = undefined;

/**
 * @member {Object.<String, String>} matchLabels
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector.prototype['matchLabels'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector;

