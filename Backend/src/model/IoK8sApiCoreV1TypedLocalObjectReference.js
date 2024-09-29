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
 * The IoK8sApiCoreV1TypedLocalObjectReference model module.
 * @module model/IoK8sApiCoreV1TypedLocalObjectReference
 * @version v1.30.0
 */
class IoK8sApiCoreV1TypedLocalObjectReference {
    /**
     * Constructs a new <code>IoK8sApiCoreV1TypedLocalObjectReference</code>.
     * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
     * @alias module:model/IoK8sApiCoreV1TypedLocalObjectReference
     * @param kind {String} Kind is the type of resource being referenced
     * @param name {String} Name is the name of resource being referenced
     */
    constructor(kind, name) { 
        
        IoK8sApiCoreV1TypedLocalObjectReference.initialize(this, kind, name);
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
     * Constructs a <code>IoK8sApiCoreV1TypedLocalObjectReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1TypedLocalObjectReference} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1TypedLocalObjectReference} The populated <code>IoK8sApiCoreV1TypedLocalObjectReference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1TypedLocalObjectReference();

            if (data.hasOwnProperty('apiGroup')) {
                obj['apiGroup'] = ApiClient.convertToType(data['apiGroup'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1TypedLocalObjectReference</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1TypedLocalObjectReference</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1TypedLocalObjectReference.RequiredProperties) {
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

        return true;
    }


}

IoK8sApiCoreV1TypedLocalObjectReference.RequiredProperties = ["kind", "name"];

/**
 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
 * @member {String} apiGroup
 */
IoK8sApiCoreV1TypedLocalObjectReference.prototype['apiGroup'] = undefined;

/**
 * Kind is the type of resource being referenced
 * @member {String} kind
 */
IoK8sApiCoreV1TypedLocalObjectReference.prototype['kind'] = undefined;

/**
 * Name is the name of resource being referenced
 * @member {String} name
 */
IoK8sApiCoreV1TypedLocalObjectReference.prototype['name'] = undefined;






export default IoK8sApiCoreV1TypedLocalObjectReference;
