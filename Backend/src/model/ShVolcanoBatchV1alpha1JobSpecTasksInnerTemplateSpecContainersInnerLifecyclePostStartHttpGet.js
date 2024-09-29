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
import ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGetHttpHeadersInner from './ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGetHttpHeadersInner';

/**
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet
     * @param port {Object} 
     */
    constructor(port) { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet.initialize(this, port);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, port) { 
        obj['port'] = port;
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('httpHeaders')) {
                obj['httpHeaders'] = ApiClient.convertToType(data['httpHeaders'], [ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGetHttpHeadersInner]);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], Object);
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        if (data['httpHeaders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['httpHeaders'])) {
                throw new Error("Expected the field `httpHeaders` to be an array in the JSON data but got " + data['httpHeaders']);
            }
            // validate the optional field `httpHeaders` (array)
            for (const item of data['httpHeaders']) {
                ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGetHttpHeadersInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['scheme'] && !(typeof data['scheme'] === 'string' || data['scheme'] instanceof String)) {
            throw new Error("Expected the field `scheme` to be a primitive type in the JSON string but got " + data['scheme']);
        }

        return true;
    }


}

ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet.RequiredProperties = ["port"];

/**
 * @member {String} host
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet.prototype['host'] = undefined;

/**
 * @member {Array.<module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGetHttpHeadersInner>} httpHeaders
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet.prototype['httpHeaders'] = undefined;

/**
 * @member {String} path
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet.prototype['path'] = undefined;

/**
 * @member {Object} port
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet.prototype['port'] = undefined;

/**
 * @member {String} scheme
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet.prototype['scheme'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecContainersInnerLifecyclePostStartHttpGet;
