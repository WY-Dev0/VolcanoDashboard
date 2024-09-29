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
 * The IoK8sApiAuthenticationV1TokenRequestStatus model module.
 * @module model/IoK8sApiAuthenticationV1TokenRequestStatus
 * @version v1.30.0
 */
class IoK8sApiAuthenticationV1TokenRequestStatus {
    /**
     * Constructs a new <code>IoK8sApiAuthenticationV1TokenRequestStatus</code>.
     * TokenRequestStatus is the result of a token request.
     * @alias module:model/IoK8sApiAuthenticationV1TokenRequestStatus
     * @param expirationTimestamp {Date} Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @param token {String} Token is the opaque bearer token.
     */
    constructor(expirationTimestamp, token) { 
        
        IoK8sApiAuthenticationV1TokenRequestStatus.initialize(this, expirationTimestamp, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, expirationTimestamp, token) { 
        obj['expirationTimestamp'] = expirationTimestamp;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>IoK8sApiAuthenticationV1TokenRequestStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAuthenticationV1TokenRequestStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAuthenticationV1TokenRequestStatus} The populated <code>IoK8sApiAuthenticationV1TokenRequestStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAuthenticationV1TokenRequestStatus();

            if (data.hasOwnProperty('expirationTimestamp')) {
                obj['expirationTimestamp'] = ApiClient.convertToType(data['expirationTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAuthenticationV1TokenRequestStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAuthenticationV1TokenRequestStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiAuthenticationV1TokenRequestStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }

        return true;
    }


}

IoK8sApiAuthenticationV1TokenRequestStatus.RequiredProperties = ["expirationTimestamp", "token"];

/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 * @member {Date} expirationTimestamp
 */
IoK8sApiAuthenticationV1TokenRequestStatus.prototype['expirationTimestamp'] = undefined;

/**
 * Token is the opaque bearer token.
 * @member {String} token
 */
IoK8sApiAuthenticationV1TokenRequestStatus.prototype['token'] = undefined;






export default IoK8sApiAuthenticationV1TokenRequestStatus;

