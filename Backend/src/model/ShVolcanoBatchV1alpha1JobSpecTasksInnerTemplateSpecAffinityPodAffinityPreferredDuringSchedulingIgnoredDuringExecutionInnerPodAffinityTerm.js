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
import ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector from './ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector';

/**
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm
     * @param topologyKey {String} 
     */
    constructor(topologyKey) { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm.initialize(this, topologyKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, topologyKey) { 
        obj['topologyKey'] = topologyKey;
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm();

            if (data.hasOwnProperty('labelSelector')) {
                obj['labelSelector'] = ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector.constructFromObject(data['labelSelector']);
            }
            if (data.hasOwnProperty('matchLabelKeys')) {
                obj['matchLabelKeys'] = ApiClient.convertToType(data['matchLabelKeys'], ['String']);
            }
            if (data.hasOwnProperty('mismatchLabelKeys')) {
                obj['mismatchLabelKeys'] = ApiClient.convertToType(data['mismatchLabelKeys'], ['String']);
            }
            if (data.hasOwnProperty('namespaceSelector')) {
                obj['namespaceSelector'] = ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector.constructFromObject(data['namespaceSelector']);
            }
            if (data.hasOwnProperty('namespaces')) {
                obj['namespaces'] = ApiClient.convertToType(data['namespaces'], ['String']);
            }
            if (data.hasOwnProperty('topologyKey')) {
                obj['topologyKey'] = ApiClient.convertToType(data['topologyKey'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `labelSelector`
        if (data['labelSelector']) { // data not null
          ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector.validateJSON(data['labelSelector']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['matchLabelKeys'])) {
            throw new Error("Expected the field `matchLabelKeys` to be an array in the JSON data but got " + data['matchLabelKeys']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['mismatchLabelKeys'])) {
            throw new Error("Expected the field `mismatchLabelKeys` to be an array in the JSON data but got " + data['mismatchLabelKeys']);
        }
        // validate the optional field `namespaceSelector`
        if (data['namespaceSelector']) { // data not null
          ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector.validateJSON(data['namespaceSelector']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['namespaces'])) {
            throw new Error("Expected the field `namespaces` to be an array in the JSON data but got " + data['namespaces']);
        }
        // ensure the json data is a string
        if (data['topologyKey'] && !(typeof data['topologyKey'] === 'string' || data['topologyKey'] instanceof String)) {
            throw new Error("Expected the field `topologyKey` to be a primitive type in the JSON string but got " + data['topologyKey']);
        }

        return true;
    }


}

ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm.RequiredProperties = ["topologyKey"];

/**
 * @member {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector} labelSelector
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm.prototype['labelSelector'] = undefined;

/**
 * @member {Array.<String>} matchLabelKeys
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm.prototype['matchLabelKeys'] = undefined;

/**
 * @member {Array.<String>} mismatchLabelKeys
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm.prototype['mismatchLabelKeys'] = undefined;

/**
 * @member {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector} namespaceSelector
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm.prototype['namespaceSelector'] = undefined;

/**
 * @member {Array.<String>} namespaces
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm.prototype['namespaces'] = undefined;

/**
 * @member {String} topologyKey
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm.prototype['topologyKey'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm;
