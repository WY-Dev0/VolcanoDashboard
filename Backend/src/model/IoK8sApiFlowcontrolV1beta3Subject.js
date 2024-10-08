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
import IoK8sApiFlowcontrolV1beta3GroupSubject from './IoK8sApiFlowcontrolV1beta3GroupSubject';
import IoK8sApiFlowcontrolV1beta3ServiceAccountSubject from './IoK8sApiFlowcontrolV1beta3ServiceAccountSubject';
import IoK8sApiFlowcontrolV1beta3UserSubject from './IoK8sApiFlowcontrolV1beta3UserSubject';

/**
 * The IoK8sApiFlowcontrolV1beta3Subject model module.
 * @module model/IoK8sApiFlowcontrolV1beta3Subject
 * @version v1.30.0
 */
class IoK8sApiFlowcontrolV1beta3Subject {
    /**
     * Constructs a new <code>IoK8sApiFlowcontrolV1beta3Subject</code>.
     * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
     * @alias module:model/IoK8sApiFlowcontrolV1beta3Subject
     * @param kind {String} `kind` indicates which one of the other fields is non-empty. Required
     */
    constructor(kind) { 
        
        IoK8sApiFlowcontrolV1beta3Subject.initialize(this, kind);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, kind) { 
        obj['kind'] = kind;
    }

    /**
     * Constructs a <code>IoK8sApiFlowcontrolV1beta3Subject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiFlowcontrolV1beta3Subject} obj Optional instance to populate.
     * @return {module:model/IoK8sApiFlowcontrolV1beta3Subject} The populated <code>IoK8sApiFlowcontrolV1beta3Subject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiFlowcontrolV1beta3Subject();

            if (data.hasOwnProperty('group')) {
                obj['group'] = IoK8sApiFlowcontrolV1beta3GroupSubject.constructFromObject(data['group']);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('serviceAccount')) {
                obj['serviceAccount'] = IoK8sApiFlowcontrolV1beta3ServiceAccountSubject.constructFromObject(data['serviceAccount']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = IoK8sApiFlowcontrolV1beta3UserSubject.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiFlowcontrolV1beta3Subject</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiFlowcontrolV1beta3Subject</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiFlowcontrolV1beta3Subject.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `group`
        if (data['group']) { // data not null
          IoK8sApiFlowcontrolV1beta3GroupSubject.validateJSON(data['group']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `serviceAccount`
        if (data['serviceAccount']) { // data not null
          IoK8sApiFlowcontrolV1beta3ServiceAccountSubject.validateJSON(data['serviceAccount']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          IoK8sApiFlowcontrolV1beta3UserSubject.validateJSON(data['user']);
        }

        return true;
    }


}

IoK8sApiFlowcontrolV1beta3Subject.RequiredProperties = ["kind"];

/**
 * @member {module:model/IoK8sApiFlowcontrolV1beta3GroupSubject} group
 */
IoK8sApiFlowcontrolV1beta3Subject.prototype['group'] = undefined;

/**
 * `kind` indicates which one of the other fields is non-empty. Required
 * @member {String} kind
 */
IoK8sApiFlowcontrolV1beta3Subject.prototype['kind'] = undefined;

/**
 * @member {module:model/IoK8sApiFlowcontrolV1beta3ServiceAccountSubject} serviceAccount
 */
IoK8sApiFlowcontrolV1beta3Subject.prototype['serviceAccount'] = undefined;

/**
 * @member {module:model/IoK8sApiFlowcontrolV1beta3UserSubject} user
 */
IoK8sApiFlowcontrolV1beta3Subject.prototype['user'] = undefined;






export default IoK8sApiFlowcontrolV1beta3Subject;

