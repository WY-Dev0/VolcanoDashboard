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
import IoK8sApiCoreV1ClientIPConfig from './IoK8sApiCoreV1ClientIPConfig';

/**
 * The IoK8sApiCoreV1SessionAffinityConfig model module.
 * @module model/IoK8sApiCoreV1SessionAffinityConfig
 * @version v1.30.0
 */
class IoK8sApiCoreV1SessionAffinityConfig {
    /**
     * Constructs a new <code>IoK8sApiCoreV1SessionAffinityConfig</code>.
     * SessionAffinityConfig represents the configurations of session affinity.
     * @alias module:model/IoK8sApiCoreV1SessionAffinityConfig
     */
    constructor() { 
        
        IoK8sApiCoreV1SessionAffinityConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1SessionAffinityConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1SessionAffinityConfig} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1SessionAffinityConfig} The populated <code>IoK8sApiCoreV1SessionAffinityConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1SessionAffinityConfig();

            if (data.hasOwnProperty('clientIP')) {
                obj['clientIP'] = IoK8sApiCoreV1ClientIPConfig.constructFromObject(data['clientIP']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1SessionAffinityConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1SessionAffinityConfig</code>.
     */
    static validateJSON(data) {
        // validate the optional field `clientIP`
        if (data['clientIP']) { // data not null
          IoK8sApiCoreV1ClientIPConfig.validateJSON(data['clientIP']);
        }

        return true;
    }


}



/**
 * @member {module:model/IoK8sApiCoreV1ClientIPConfig} clientIP
 */
IoK8sApiCoreV1SessionAffinityConfig.prototype['clientIP'] = undefined;






export default IoK8sApiCoreV1SessionAffinityConfig;

