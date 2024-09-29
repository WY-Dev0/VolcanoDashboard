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
import IoK8sApiNetworkingV1IngressClassSpec from './IoK8sApiNetworkingV1IngressClassSpec';
import IoK8sApimachineryPkgApisMetaV1ObjectMeta from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * The IoK8sApiNetworkingV1IngressClass model module.
 * @module model/IoK8sApiNetworkingV1IngressClass
 * @version v1.30.0
 */
class IoK8sApiNetworkingV1IngressClass {
    /**
     * Constructs a new <code>IoK8sApiNetworkingV1IngressClass</code>.
     * IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The &#x60;ingressclass.kubernetes.io/is-default-class&#x60; annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class.
     * @alias module:model/IoK8sApiNetworkingV1IngressClass
     */
    constructor() { 
        
        IoK8sApiNetworkingV1IngressClass.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IoK8sApiNetworkingV1IngressClass</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiNetworkingV1IngressClass} obj Optional instance to populate.
     * @return {module:model/IoK8sApiNetworkingV1IngressClass} The populated <code>IoK8sApiNetworkingV1IngressClass</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiNetworkingV1IngressClass();

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
                obj['spec'] = IoK8sApiNetworkingV1IngressClassSpec.constructFromObject(data['spec']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiNetworkingV1IngressClass</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiNetworkingV1IngressClass</code>.
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
          IoK8sApiNetworkingV1IngressClassSpec.validateJSON(data['spec']);
        }

        return true;
    }


}



/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 * @member {String} apiVersion
 */
IoK8sApiNetworkingV1IngressClass.prototype['apiVersion'] = undefined;

/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 * @member {String} kind
 */
IoK8sApiNetworkingV1IngressClass.prototype['kind'] = undefined;

/**
 * @member {module:model/IoK8sApimachineryPkgApisMetaV1ObjectMeta} metadata
 */
IoK8sApiNetworkingV1IngressClass.prototype['metadata'] = undefined;

/**
 * @member {module:model/IoK8sApiNetworkingV1IngressClassSpec} spec
 */
IoK8sApiNetworkingV1IngressClass.prototype['spec'] = undefined;






export default IoK8sApiNetworkingV1IngressClass;

