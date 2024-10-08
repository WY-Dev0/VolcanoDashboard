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
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken
     * @param path {String} 
     */
    constructor(path) { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken.initialize(this, path);
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
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken();

            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('expirationSeconds')) {
                obj['expirationSeconds'] = ApiClient.convertToType(data['expirationSeconds'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['audience'] && !(typeof data['audience'] === 'string' || data['audience'] instanceof String)) {
            throw new Error("Expected the field `audience` to be a primitive type in the JSON string but got " + data['audience']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }

        return true;
    }


}

ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken.RequiredProperties = ["path"];

/**
 * @member {String} audience
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken.prototype['audience'] = undefined;

/**
 * @member {Number} expirationSeconds
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken.prototype['expirationSeconds'] = undefined;

/**
 * @member {String} path
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken.prototype['path'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerProjectedSourcesInnerServiceAccountToken;

