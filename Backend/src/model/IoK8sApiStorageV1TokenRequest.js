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
 * The IoK8sApiStorageV1TokenRequest model module.
 * @module model/IoK8sApiStorageV1TokenRequest
 * @version v1.30.0
 */
class IoK8sApiStorageV1TokenRequest {
    /**
     * Constructs a new <code>IoK8sApiStorageV1TokenRequest</code>.
     * TokenRequest contains parameters of a service account token.
     * @alias module:model/IoK8sApiStorageV1TokenRequest
     * @param audience {String} audience is the intended audience of the token in \"TokenRequestSpec\". It will default to the audiences of kube apiserver.
     */
    constructor(audience) { 
        
        IoK8sApiStorageV1TokenRequest.initialize(this, audience);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, audience) { 
        obj['audience'] = audience;
    }

    /**
     * Constructs a <code>IoK8sApiStorageV1TokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiStorageV1TokenRequest} obj Optional instance to populate.
     * @return {module:model/IoK8sApiStorageV1TokenRequest} The populated <code>IoK8sApiStorageV1TokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiStorageV1TokenRequest();

            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('expirationSeconds')) {
                obj['expirationSeconds'] = ApiClient.convertToType(data['expirationSeconds'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiStorageV1TokenRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiStorageV1TokenRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiStorageV1TokenRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['audience'] && !(typeof data['audience'] === 'string' || data['audience'] instanceof String)) {
            throw new Error("Expected the field `audience` to be a primitive type in the JSON string but got " + data['audience']);
        }

        return true;
    }


}

IoK8sApiStorageV1TokenRequest.RequiredProperties = ["audience"];

/**
 * audience is the intended audience of the token in \"TokenRequestSpec\". It will default to the audiences of kube apiserver.
 * @member {String} audience
 */
IoK8sApiStorageV1TokenRequest.prototype['audience'] = undefined;

/**
 * expirationSeconds is the duration of validity of the token in \"TokenRequestSpec\". It has the same default value of \"ExpirationSeconds\" in \"TokenRequestSpec\".
 * @member {Number} expirationSeconds
 */
IoK8sApiStorageV1TokenRequest.prototype['expirationSeconds'] = undefined;






export default IoK8sApiStorageV1TokenRequest;
