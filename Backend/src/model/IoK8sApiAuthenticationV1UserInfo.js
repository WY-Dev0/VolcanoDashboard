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
 * The IoK8sApiAuthenticationV1UserInfo model module.
 * @module model/IoK8sApiAuthenticationV1UserInfo
 * @version v1.30.0
 */
class IoK8sApiAuthenticationV1UserInfo {
    /**
     * Constructs a new <code>IoK8sApiAuthenticationV1UserInfo</code>.
     * UserInfo holds the information about the user needed to implement the user.Info interface.
     * @alias module:model/IoK8sApiAuthenticationV1UserInfo
     */
    constructor() { 
        
        IoK8sApiAuthenticationV1UserInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiAuthenticationV1UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAuthenticationV1UserInfo} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAuthenticationV1UserInfo} The populated <code>IoK8sApiAuthenticationV1UserInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAuthenticationV1UserInfo();

            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], {'String': ['String']});
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAuthenticationV1UserInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAuthenticationV1UserInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['groups'])) {
            throw new Error("Expected the field `groups` to be an array in the JSON data but got " + data['groups']);
        }
        // ensure the json data is a string
        if (data['uid'] && !(typeof data['uid'] === 'string' || data['uid'] instanceof String)) {
            throw new Error("Expected the field `uid` to be a primitive type in the JSON string but got " + data['uid']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }

        return true;
    }


}



/**
 * Any additional information provided by the authenticator.
 * @member {Object.<String, Array.<String>>} extra
 */
IoK8sApiAuthenticationV1UserInfo.prototype['extra'] = undefined;

/**
 * The names of groups this user is a part of.
 * @member {Array.<String>} groups
 */
IoK8sApiAuthenticationV1UserInfo.prototype['groups'] = undefined;

/**
 * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
 * @member {String} uid
 */
IoK8sApiAuthenticationV1UserInfo.prototype['uid'] = undefined;

/**
 * The name that uniquely identifies this user among all active users.
 * @member {String} username
 */
IoK8sApiAuthenticationV1UserInfo.prototype['username'] = undefined;






export default IoK8sApiAuthenticationV1UserInfo;

