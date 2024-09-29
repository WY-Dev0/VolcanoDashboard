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
import IoK8sApiAuthorizationV1NonResourceAttributes from './IoK8sApiAuthorizationV1NonResourceAttributes';
import IoK8sApiAuthorizationV1ResourceAttributes from './IoK8sApiAuthorizationV1ResourceAttributes';

/**
 * The IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec model module.
 * @module model/IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec
 * @version v1.30.0
 */
class IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec {
    /**
     * Constructs a new <code>IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec</code>.
     * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
     * @alias module:model/IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec
     */
    constructor() { 
        
        IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec} obj Optional instance to populate.
     * @return {module:model/IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec} The populated <code>IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec();

            if (data.hasOwnProperty('nonResourceAttributes')) {
                obj['nonResourceAttributes'] = IoK8sApiAuthorizationV1NonResourceAttributes.constructFromObject(data['nonResourceAttributes']);
            }
            if (data.hasOwnProperty('resourceAttributes')) {
                obj['resourceAttributes'] = IoK8sApiAuthorizationV1ResourceAttributes.constructFromObject(data['resourceAttributes']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec</code>.
     */
    static validateJSON(data) {
        // validate the optional field `nonResourceAttributes`
        if (data['nonResourceAttributes']) { // data not null
          IoK8sApiAuthorizationV1NonResourceAttributes.validateJSON(data['nonResourceAttributes']);
        }
        // validate the optional field `resourceAttributes`
        if (data['resourceAttributes']) { // data not null
          IoK8sApiAuthorizationV1ResourceAttributes.validateJSON(data['resourceAttributes']);
        }

        return true;
    }


}



/**
 * @member {module:model/IoK8sApiAuthorizationV1NonResourceAttributes} nonResourceAttributes
 */
IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec.prototype['nonResourceAttributes'] = undefined;

/**
 * @member {module:model/IoK8sApiAuthorizationV1ResourceAttributes} resourceAttributes
 */
IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec.prototype['resourceAttributes'] = undefined;






export default IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec;
