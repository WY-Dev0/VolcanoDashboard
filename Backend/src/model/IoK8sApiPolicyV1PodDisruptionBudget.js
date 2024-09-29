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
import IoK8sApiPolicyV1PodDisruptionBudgetSpec from './IoK8sApiPolicyV1PodDisruptionBudgetSpec';
import IoK8sApiPolicyV1PodDisruptionBudgetStatus from './IoK8sApiPolicyV1PodDisruptionBudgetStatus';
import IoK8sApimachineryPkgApisMetaV1ObjectMeta from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * The IoK8sApiPolicyV1PodDisruptionBudget model module.
 * @module model/IoK8sApiPolicyV1PodDisruptionBudget
 * @version v1.30.0
 */
class IoK8sApiPolicyV1PodDisruptionBudget {
    /**
     * Constructs a new <code>IoK8sApiPolicyV1PodDisruptionBudget</code>.
     * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
     * @alias module:model/IoK8sApiPolicyV1PodDisruptionBudget
     */
    constructor() { 
        
        IoK8sApiPolicyV1PodDisruptionBudget.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiPolicyV1PodDisruptionBudget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiPolicyV1PodDisruptionBudget} obj Optional instance to populate.
     * @return {module:model/IoK8sApiPolicyV1PodDisruptionBudget} The populated <code>IoK8sApiPolicyV1PodDisruptionBudget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiPolicyV1PodDisruptionBudget();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = IoK8sApimachineryPkgApisMetaV1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('spec')) {
                obj['spec'] = IoK8sApiPolicyV1PodDisruptionBudgetSpec.constructFromObject(data['spec']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = IoK8sApiPolicyV1PodDisruptionBudgetStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiPolicyV1PodDisruptionBudget</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiPolicyV1PodDisruptionBudget</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['apiVersion'] && !(typeof data['apiVersion'] === 'string' || data['apiVersion'] instanceof String)) {
            throw new Error("Expected the field `apiVersion` to be a primitive type in the JSON string but got " + data['apiVersion']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          IoK8sApimachineryPkgApisMetaV1ObjectMeta.validateJSON(data['metadata']);
        }
        // validate the optional field `spec`
        if (data['spec']) { // data not null
          IoK8sApiPolicyV1PodDisruptionBudgetSpec.validateJSON(data['spec']);
        }
        // validate the optional field `status`
        if (data['status']) { // data not null
          IoK8sApiPolicyV1PodDisruptionBudgetStatus.validateJSON(data['status']);
        }

        return true;
    }


}



/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 * @member {String} apiVersion
 */
IoK8sApiPolicyV1PodDisruptionBudget.prototype['apiVersion'] = undefined;

/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 * @member {String} kind
 */
IoK8sApiPolicyV1PodDisruptionBudget.prototype['kind'] = undefined;

/**
 * @member {module:model/IoK8sApimachineryPkgApisMetaV1ObjectMeta} metadata
 */
IoK8sApiPolicyV1PodDisruptionBudget.prototype['metadata'] = undefined;

/**
 * @member {module:model/IoK8sApiPolicyV1PodDisruptionBudgetSpec} spec
 */
IoK8sApiPolicyV1PodDisruptionBudget.prototype['spec'] = undefined;

/**
 * @member {module:model/IoK8sApiPolicyV1PodDisruptionBudgetStatus} status
 */
IoK8sApiPolicyV1PodDisruptionBudget.prototype['status'] = undefined;






export default IoK8sApiPolicyV1PodDisruptionBudget;

