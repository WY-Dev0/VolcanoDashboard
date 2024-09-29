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
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef
     * @param kind {String} 
     * @param name {String} 
     */
    constructor(kind, name) { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef.initialize(this, kind, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, kind, name) { 
        obj['kind'] = kind;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef();

            if (data.hasOwnProperty('apiGroup')) {
                obj['apiGroup'] = ApiClient.convertToType(data['apiGroup'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['apiGroup'] && !(typeof data['apiGroup'] === 'string' || data['apiGroup'] instanceof String)) {
            throw new Error("Expected the field `apiGroup` to be a primitive type in the JSON string but got " + data['apiGroup']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['namespace'] && !(typeof data['namespace'] === 'string' || data['namespace'] instanceof String)) {
            throw new Error("Expected the field `namespace` to be a primitive type in the JSON string but got " + data['namespace']);
        }

        return true;
    }


}

ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef.RequiredProperties = ["kind", "name"];

/**
 * @member {String} apiGroup
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef.prototype['apiGroup'] = undefined;

/**
 * @member {String} kind
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef.prototype['kind'] = undefined;

/**
 * @member {String} name
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef.prototype['name'] = undefined;

/**
 * @member {String} namespace
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef.prototype['namespace'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerEphemeralVolumeClaimTemplateSpecDataSourceRef;

