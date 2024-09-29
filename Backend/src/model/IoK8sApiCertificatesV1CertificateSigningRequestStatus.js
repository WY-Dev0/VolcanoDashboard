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
import IoK8sApiCertificatesV1CertificateSigningRequestCondition from './IoK8sApiCertificatesV1CertificateSigningRequestCondition';

/**
 * The IoK8sApiCertificatesV1CertificateSigningRequestStatus model module.
 * @module model/IoK8sApiCertificatesV1CertificateSigningRequestStatus
 * @version v1.30.0
 */
class IoK8sApiCertificatesV1CertificateSigningRequestStatus {
    /**
     * Constructs a new <code>IoK8sApiCertificatesV1CertificateSigningRequestStatus</code>.
     * CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate.
     * @alias module:model/IoK8sApiCertificatesV1CertificateSigningRequestStatus
     */
    constructor() { 
        
        IoK8sApiCertificatesV1CertificateSigningRequestStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiCertificatesV1CertificateSigningRequestStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCertificatesV1CertificateSigningRequestStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCertificatesV1CertificateSigningRequestStatus} The populated <code>IoK8sApiCertificatesV1CertificateSigningRequestStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCertificatesV1CertificateSigningRequestStatus();

            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'Blob');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [IoK8sApiCertificatesV1CertificateSigningRequestCondition]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCertificatesV1CertificateSigningRequestStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCertificatesV1CertificateSigningRequestStatus</code>.
     */
    static validateJSON(data) {
        if (data['conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['conditions'])) {
                throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
            }
            // validate the optional field `conditions` (array)
            for (const item of data['conditions']) {
                IoK8sApiCertificatesV1CertificateSigningRequestCondition.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * certificate is populated with an issued certificate by the signer after an Approved condition is present. This field is set via the /status subresource. Once populated, this field is immutable.  If the certificate signing request is denied, a condition of type \"Denied\" is added and this field remains empty. If the signer cannot issue the certificate, a condition of type \"Failed\" is added and this field remains empty.  Validation requirements:  1. certificate must contain one or more PEM blocks.  2. All PEM blocks must have the \"CERTIFICATE\" label, contain no headers, and the encoded data   must be a BER-encoded ASN.1 Certificate structure as described in section 4 of RFC5280.  3. Non-PEM content may appear before or after the \"CERTIFICATE\" PEM blocks and is unvalidated,   to allow for explanatory text as described in section 5.2 of RFC7468.  If more than one PEM block is present, and the definition of the requested spec.signerName does not indicate otherwise, the first block is the issued certificate, and subsequent blocks should be treated as intermediate certificates and presented in TLS handshakes.  The certificate is encoded in PEM format.  When serialized as JSON or YAML, the data is additionally base64-encoded, so it consists of:      base64(     -----BEGIN CERTIFICATE-----     ...     -----END CERTIFICATE-----     )
 * @member {Blob} certificate
 */
IoK8sApiCertificatesV1CertificateSigningRequestStatus.prototype['certificate'] = undefined;

/**
 * conditions applied to the request. Known conditions are \"Approved\", \"Denied\", and \"Failed\".
 * @member {Array.<module:model/IoK8sApiCertificatesV1CertificateSigningRequestCondition>} conditions
 */
IoK8sApiCertificatesV1CertificateSigningRequestStatus.prototype['conditions'] = undefined;






export default IoK8sApiCertificatesV1CertificateSigningRequestStatus;

