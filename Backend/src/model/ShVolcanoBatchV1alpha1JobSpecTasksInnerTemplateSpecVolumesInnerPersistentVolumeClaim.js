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
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim
     * @param claimName {String} 
     */
    constructor(claimName) { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim.initialize(this, claimName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, claimName) { 
        obj['claimName'] = claimName;
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim();

            if (data.hasOwnProperty('claimName')) {
                obj['claimName'] = ApiClient.convertToType(data['claimName'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['claimName'] && !(typeof data['claimName'] === 'string' || data['claimName'] instanceof String)) {
            throw new Error("Expected the field `claimName` to be a primitive type in the JSON string but got " + data['claimName']);
        }

        return true;
    }


}

ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim.RequiredProperties = ["claimName"];

/**
 * @member {String} claimName
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim.prototype['claimName'] = undefined;

/**
 * @member {Boolean} readOnly
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim.prototype['readOnly'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerPersistentVolumeClaim;

