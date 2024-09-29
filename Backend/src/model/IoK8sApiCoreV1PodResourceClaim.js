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
import IoK8sApiCoreV1ClaimSource from './IoK8sApiCoreV1ClaimSource';

/**
 * The IoK8sApiCoreV1PodResourceClaim model module.
 * @module model/IoK8sApiCoreV1PodResourceClaim
 * @version v1.30.0
 */
class IoK8sApiCoreV1PodResourceClaim {
    /**
     * Constructs a new <code>IoK8sApiCoreV1PodResourceClaim</code>.
     * PodResourceClaim references exactly one ResourceClaim through a ClaimSource. It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
     * @alias module:model/IoK8sApiCoreV1PodResourceClaim
     * @param name {String} Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
     */
    constructor(name) { 
        
        IoK8sApiCoreV1PodResourceClaim.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1PodResourceClaim</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1PodResourceClaim} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1PodResourceClaim} The populated <code>IoK8sApiCoreV1PodResourceClaim</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1PodResourceClaim();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = IoK8sApiCoreV1ClaimSource.constructFromObject(data['source']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1PodResourceClaim</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1PodResourceClaim</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1PodResourceClaim.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          IoK8sApiCoreV1ClaimSource.validateJSON(data['source']);
        }

        return true;
    }


}

IoK8sApiCoreV1PodResourceClaim.RequiredProperties = ["name"];

/**
 * Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
 * @member {String} name
 */
IoK8sApiCoreV1PodResourceClaim.prototype['name'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ClaimSource} source
 */
IoK8sApiCoreV1PodResourceClaim.prototype['source'] = undefined;






export default IoK8sApiCoreV1PodResourceClaim;

