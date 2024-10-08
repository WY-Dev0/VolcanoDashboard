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
 * The IoK8sApiFlowcontrolV1beta3ServiceAccountSubject model module.
 * @module model/IoK8sApiFlowcontrolV1beta3ServiceAccountSubject
 * @version v1.30.0
 */
class IoK8sApiFlowcontrolV1beta3ServiceAccountSubject {
    /**
     * Constructs a new <code>IoK8sApiFlowcontrolV1beta3ServiceAccountSubject</code>.
     * ServiceAccountSubject holds detailed information for service-account-kind subject.
     * @alias module:model/IoK8sApiFlowcontrolV1beta3ServiceAccountSubject
     * @param name {String} `name` is the name of matching ServiceAccount objects, or \"*\" to match regardless of name. Required.
     * @param namespace {String} `namespace` is the namespace of matching ServiceAccount objects. Required.
     */
    constructor(name, namespace) { 
        
        IoK8sApiFlowcontrolV1beta3ServiceAccountSubject.initialize(this, name, namespace);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, namespace) { 
        obj['name'] = name;
        obj['namespace'] = namespace;
    }

    /**
     * Constructs a <code>IoK8sApiFlowcontrolV1beta3ServiceAccountSubject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiFlowcontrolV1beta3ServiceAccountSubject} obj Optional instance to populate.
     * @return {module:model/IoK8sApiFlowcontrolV1beta3ServiceAccountSubject} The populated <code>IoK8sApiFlowcontrolV1beta3ServiceAccountSubject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiFlowcontrolV1beta3ServiceAccountSubject();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiFlowcontrolV1beta3ServiceAccountSubject</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiFlowcontrolV1beta3ServiceAccountSubject</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiFlowcontrolV1beta3ServiceAccountSubject.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['namespace'] && !(typeof data['namespace'] === 'string' || data['namespace'] instanceof String)) {
            throw new Error("Expected the field `namespace` to be a primitive type in the JSON string but got " + data['namespace']);
        }

        return true;
    }


}

IoK8sApiFlowcontrolV1beta3ServiceAccountSubject.RequiredProperties = ["name", "namespace"];

/**
 * `name` is the name of matching ServiceAccount objects, or \"*\" to match regardless of name. Required.
 * @member {String} name
 */
IoK8sApiFlowcontrolV1beta3ServiceAccountSubject.prototype['name'] = undefined;

/**
 * `namespace` is the namespace of matching ServiceAccount objects. Required.
 * @member {String} namespace
 */
IoK8sApiFlowcontrolV1beta3ServiceAccountSubject.prototype['namespace'] = undefined;






export default IoK8sApiFlowcontrolV1beta3ServiceAccountSubject;

