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
 * The IoK8sApiCertificatesV1CertificateSigningRequestCondition model module.
 * @module model/IoK8sApiCertificatesV1CertificateSigningRequestCondition
 * @version v1.30.0
 */
class IoK8sApiCertificatesV1CertificateSigningRequestCondition {
    /**
     * Constructs a new <code>IoK8sApiCertificatesV1CertificateSigningRequestCondition</code>.
     * CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object
     * @alias module:model/IoK8sApiCertificatesV1CertificateSigningRequestCondition
     * @param status {String} status of the condition, one of True, False, Unknown. Approved, Denied, and Failed conditions may not be \"False\" or \"Unknown\".
     * @param type {String} type of the condition. Known conditions are \"Approved\", \"Denied\", and \"Failed\".  An \"Approved\" condition is added via the /approval subresource, indicating the request was approved and should be issued by the signer.  A \"Denied\" condition is added via the /approval subresource, indicating the request was denied and should not be issued by the signer.  A \"Failed\" condition is added via the /status subresource, indicating the signer failed to issue the certificate.  Approved and Denied conditions are mutually exclusive. Approved, Denied, and Failed conditions cannot be removed once added.  Only one condition of a given type is allowed.
     */
    constructor(status, type) { 
        
        IoK8sApiCertificatesV1CertificateSigningRequestCondition.initialize(this, status, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, type) { 
        obj['status'] = status;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>IoK8sApiCertificatesV1CertificateSigningRequestCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCertificatesV1CertificateSigningRequestCondition} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCertificatesV1CertificateSigningRequestCondition} The populated <code>IoK8sApiCertificatesV1CertificateSigningRequestCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCertificatesV1CertificateSigningRequestCondition();

            if (data.hasOwnProperty('lastTransitionTime')) {
                obj['lastTransitionTime'] = ApiClient.convertToType(data['lastTransitionTime'], 'Date');
            }
            if (data.hasOwnProperty('lastUpdateTime')) {
                obj['lastUpdateTime'] = ApiClient.convertToType(data['lastUpdateTime'], 'Date');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCertificatesV1CertificateSigningRequestCondition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCertificatesV1CertificateSigningRequestCondition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCertificatesV1CertificateSigningRequestCondition.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

IoK8sApiCertificatesV1CertificateSigningRequestCondition.RequiredProperties = ["status", "type"];

/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 * @member {Date} lastTransitionTime
 */
IoK8sApiCertificatesV1CertificateSigningRequestCondition.prototype['lastTransitionTime'] = undefined;

/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 * @member {Date} lastUpdateTime
 */
IoK8sApiCertificatesV1CertificateSigningRequestCondition.prototype['lastUpdateTime'] = undefined;

/**
 * message contains a human readable message with details about the request state
 * @member {String} message
 */
IoK8sApiCertificatesV1CertificateSigningRequestCondition.prototype['message'] = undefined;

/**
 * reason indicates a brief reason for the request state
 * @member {String} reason
 */
IoK8sApiCertificatesV1CertificateSigningRequestCondition.prototype['reason'] = undefined;

/**
 * status of the condition, one of True, False, Unknown. Approved, Denied, and Failed conditions may not be \"False\" or \"Unknown\".
 * @member {String} status
 */
IoK8sApiCertificatesV1CertificateSigningRequestCondition.prototype['status'] = undefined;

/**
 * type of the condition. Known conditions are \"Approved\", \"Denied\", and \"Failed\".  An \"Approved\" condition is added via the /approval subresource, indicating the request was approved and should be issued by the signer.  A \"Denied\" condition is added via the /approval subresource, indicating the request was denied and should not be issued by the signer.  A \"Failed\" condition is added via the /status subresource, indicating the signer failed to issue the certificate.  Approved and Denied conditions are mutually exclusive. Approved, Denied, and Failed conditions cannot be removed once added.  Only one condition of a given type is allowed.
 * @member {String} type
 */
IoK8sApiCertificatesV1CertificateSigningRequestCondition.prototype['type'] = undefined;






export default IoK8sApiCertificatesV1CertificateSigningRequestCondition;
