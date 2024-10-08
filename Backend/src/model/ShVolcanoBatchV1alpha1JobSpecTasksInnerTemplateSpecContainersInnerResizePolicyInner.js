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
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner
     * @param resourceName {String} 
     * @param restartPolicy {String} 
     */
    constructor(resourceName, restartPolicy) { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner.initialize(this, resourceName, restartPolicy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, resourceName, restartPolicy) { 
        obj['resourceName'] = resourceName;
        obj['restartPolicy'] = restartPolicy;
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner();

            if (data.hasOwnProperty('resourceName')) {
                obj['resourceName'] = ApiClient.convertToType(data['resourceName'], 'String');
            }
            if (data.hasOwnProperty('restartPolicy')) {
                obj['restartPolicy'] = ApiClient.convertToType(data['restartPolicy'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['resourceName'] && !(typeof data['resourceName'] === 'string' || data['resourceName'] instanceof String)) {
            throw new Error("Expected the field `resourceName` to be a primitive type in the JSON string but got " + data['resourceName']);
        }
        // ensure the json data is a string
        if (data['restartPolicy'] && !(typeof data['restartPolicy'] === 'string' || data['restartPolicy'] instanceof String)) {
            throw new Error("Expected the field `restartPolicy` to be a primitive type in the JSON string but got " + data['restartPolicy']);
        }

        return true;
    }


}

ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner.RequiredProperties = ["resourceName", "restartPolicy"];

/**
 * @member {String} resourceName
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner.prototype['resourceName'] = undefined;

/**
 * @member {String} restartPolicy
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner.prototype['restartPolicy'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerResizePolicyInner;

