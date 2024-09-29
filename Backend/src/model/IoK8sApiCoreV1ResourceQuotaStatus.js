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
 * The IoK8sApiCoreV1ResourceQuotaStatus model module.
 * @module model/IoK8sApiCoreV1ResourceQuotaStatus
 * @version v1.30.0
 */
class IoK8sApiCoreV1ResourceQuotaStatus {
    /**
     * Constructs a new <code>IoK8sApiCoreV1ResourceQuotaStatus</code>.
     * ResourceQuotaStatus defines the enforced hard limits and observed use.
     * @alias module:model/IoK8sApiCoreV1ResourceQuotaStatus
     */
    constructor() { 
        
        IoK8sApiCoreV1ResourceQuotaStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1ResourceQuotaStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1ResourceQuotaStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1ResourceQuotaStatus} The populated <code>IoK8sApiCoreV1ResourceQuotaStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1ResourceQuotaStatus();

            if (data.hasOwnProperty('hard')) {
                obj['hard'] = ApiClient.convertToType(data['hard'], {'String': 'String'});
            }
            if (data.hasOwnProperty('used')) {
                obj['used'] = ApiClient.convertToType(data['used'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1ResourceQuotaStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1ResourceQuotaStatus</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
 * @member {Object.<String, String>} hard
 */
IoK8sApiCoreV1ResourceQuotaStatus.prototype['hard'] = undefined;

/**
 * Used is the current observed total usage of the resource in the namespace.
 * @member {Object.<String, String>} used
 */
IoK8sApiCoreV1ResourceQuotaStatus.prototype['used'] = undefined;






export default IoK8sApiCoreV1ResourceQuotaStatus;
