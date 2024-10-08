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
import IoK8sApiCoreV1ConfigMapEnvSource from './IoK8sApiCoreV1ConfigMapEnvSource';
import IoK8sApiCoreV1SecretEnvSource from './IoK8sApiCoreV1SecretEnvSource';

/**
 * The IoK8sApiCoreV1EnvFromSource model module.
 * @module model/IoK8sApiCoreV1EnvFromSource
 * @version v1.30.0
 */
class IoK8sApiCoreV1EnvFromSource {
    /**
     * Constructs a new <code>IoK8sApiCoreV1EnvFromSource</code>.
     * EnvFromSource represents the source of a set of ConfigMaps
     * @alias module:model/IoK8sApiCoreV1EnvFromSource
     */
    constructor() { 
        
        IoK8sApiCoreV1EnvFromSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1EnvFromSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1EnvFromSource} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1EnvFromSource} The populated <code>IoK8sApiCoreV1EnvFromSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1EnvFromSource();

            if (data.hasOwnProperty('configMapRef')) {
                obj['configMapRef'] = IoK8sApiCoreV1ConfigMapEnvSource.constructFromObject(data['configMapRef']);
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('secretRef')) {
                obj['secretRef'] = IoK8sApiCoreV1SecretEnvSource.constructFromObject(data['secretRef']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1EnvFromSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1EnvFromSource</code>.
     */
    static validateJSON(data) {
        // validate the optional field `configMapRef`
        if (data['configMapRef']) { // data not null
          IoK8sApiCoreV1ConfigMapEnvSource.validateJSON(data['configMapRef']);
        }
        // ensure the json data is a string
        if (data['prefix'] && !(typeof data['prefix'] === 'string' || data['prefix'] instanceof String)) {
            throw new Error("Expected the field `prefix` to be a primitive type in the JSON string but got " + data['prefix']);
        }
        // validate the optional field `secretRef`
        if (data['secretRef']) { // data not null
          IoK8sApiCoreV1SecretEnvSource.validateJSON(data['secretRef']);
        }

        return true;
    }


}



/**
 * @member {module:model/IoK8sApiCoreV1ConfigMapEnvSource} configMapRef
 */
IoK8sApiCoreV1EnvFromSource.prototype['configMapRef'] = undefined;

/**
 * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
 * @member {String} prefix
 */
IoK8sApiCoreV1EnvFromSource.prototype['prefix'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1SecretEnvSource} secretRef
 */
IoK8sApiCoreV1EnvFromSource.prototype['secretRef'] = undefined;






export default IoK8sApiCoreV1EnvFromSource;

