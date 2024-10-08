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
import ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromFieldRef from './ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromFieldRef';
import ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromResourceFieldRef from './ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromResourceFieldRef';

/**
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner
     * @param path {String} 
     */
    constructor(path) { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner.initialize(this, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path) { 
        obj['path'] = path;
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner();

            if (data.hasOwnProperty('fieldRef')) {
                obj['fieldRef'] = ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromFieldRef.constructFromObject(data['fieldRef']);
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('resourceFieldRef')) {
                obj['resourceFieldRef'] = ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromResourceFieldRef.constructFromObject(data['resourceFieldRef']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `fieldRef`
        if (data['fieldRef']) { // data not null
          ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromFieldRef.validateJSON(data['fieldRef']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // validate the optional field `resourceFieldRef`
        if (data['resourceFieldRef']) { // data not null
          ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromResourceFieldRef.validateJSON(data['resourceFieldRef']);
        }

        return true;
    }


}

ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner.RequiredProperties = ["path"];

/**
 * @member {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromFieldRef} fieldRef
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner.prototype['fieldRef'] = undefined;

/**
 * @member {Number} mode
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner.prototype['mode'] = undefined;

/**
 * @member {String} path
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner.prototype['path'] = undefined;

/**
 * @member {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromResourceFieldRef} resourceFieldRef
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner.prototype['resourceFieldRef'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerDownwardAPIItemsInner;

