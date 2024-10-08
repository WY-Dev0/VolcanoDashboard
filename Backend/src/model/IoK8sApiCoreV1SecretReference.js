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
 * The IoK8sApiCoreV1SecretReference model module.
 * @module model/IoK8sApiCoreV1SecretReference
 * @version v1.30.0
 */
class IoK8sApiCoreV1SecretReference {
    /**
     * Constructs a new <code>IoK8sApiCoreV1SecretReference</code>.
     * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
     * @alias module:model/IoK8sApiCoreV1SecretReference
     */
    constructor() { 
        
        IoK8sApiCoreV1SecretReference.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1SecretReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1SecretReference} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1SecretReference} The populated <code>IoK8sApiCoreV1SecretReference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1SecretReference();

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
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1SecretReference</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1SecretReference</code>.
     */
    static validateJSON(data) {
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



/**
 * name is unique within a namespace to reference a secret resource.
 * @member {String} name
 */
IoK8sApiCoreV1SecretReference.prototype['name'] = undefined;

/**
 * namespace defines the space within which the secret name must be unique.
 * @member {String} namespace
 */
IoK8sApiCoreV1SecretReference.prototype['namespace'] = undefined;






export default IoK8sApiCoreV1SecretReference;

