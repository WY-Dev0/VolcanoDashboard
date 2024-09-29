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
 * The IoK8sApiCoreV1PodResourceClaimStatus model module.
 * @module model/IoK8sApiCoreV1PodResourceClaimStatus
 * @version v1.30.0
 */
class IoK8sApiCoreV1PodResourceClaimStatus {
    /**
     * Constructs a new <code>IoK8sApiCoreV1PodResourceClaimStatus</code>.
     * PodResourceClaimStatus is stored in the PodStatus for each PodResourceClaim which references a ResourceClaimTemplate. It stores the generated name for the corresponding ResourceClaim.
     * @alias module:model/IoK8sApiCoreV1PodResourceClaimStatus
     * @param name {String} Name uniquely identifies this resource claim inside the pod. This must match the name of an entry in pod.spec.resourceClaims, which implies that the string must be a DNS_LABEL.
     */
    constructor(name) { 
        
        IoK8sApiCoreV1PodResourceClaimStatus.initialize(this, name);
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
     * Constructs a <code>IoK8sApiCoreV1PodResourceClaimStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1PodResourceClaimStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1PodResourceClaimStatus} The populated <code>IoK8sApiCoreV1PodResourceClaimStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1PodResourceClaimStatus();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resourceClaimName')) {
                obj['resourceClaimName'] = ApiClient.convertToType(data['resourceClaimName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1PodResourceClaimStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1PodResourceClaimStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1PodResourceClaimStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['resourceClaimName'] && !(typeof data['resourceClaimName'] === 'string' || data['resourceClaimName'] instanceof String)) {
            throw new Error("Expected the field `resourceClaimName` to be a primitive type in the JSON string but got " + data['resourceClaimName']);
        }

        return true;
    }


}

IoK8sApiCoreV1PodResourceClaimStatus.RequiredProperties = ["name"];

/**
 * Name uniquely identifies this resource claim inside the pod. This must match the name of an entry in pod.spec.resourceClaims, which implies that the string must be a DNS_LABEL.
 * @member {String} name
 */
IoK8sApiCoreV1PodResourceClaimStatus.prototype['name'] = undefined;

/**
 * ResourceClaimName is the name of the ResourceClaim that was generated for the Pod in the namespace of the Pod. It this is unset, then generating a ResourceClaim was not necessary. The pod.spec.resourceClaims entry can be ignored in this case.
 * @member {String} resourceClaimName
 */
IoK8sApiCoreV1PodResourceClaimStatus.prototype['resourceClaimName'] = undefined;






export default IoK8sApiCoreV1PodResourceClaimStatus;
