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
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef
     * @param key {String} 
     */
    constructor(key) { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef.initialize(this, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key) { 
        obj['key'] = key;
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('optional')) {
                obj['optional'] = ApiClient.convertToType(data['optional'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef.RequiredProperties = ["key"];

/**
 * @member {String} key
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef.prototype['key'] = undefined;

/**
 * @member {String} name
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef.prototype['name'] = undefined;

/**
 * @member {Boolean} optional
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef.prototype['optional'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerEnvInnerValueFromConfigMapKeyRef;

