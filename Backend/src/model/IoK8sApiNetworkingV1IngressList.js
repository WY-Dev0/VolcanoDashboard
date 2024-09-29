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
import IoK8sApiNetworkingV1Ingress from './IoK8sApiNetworkingV1Ingress';
import IoK8sApimachineryPkgApisMetaV1ListMeta from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * The IoK8sApiNetworkingV1IngressList model module.
 * @module model/IoK8sApiNetworkingV1IngressList
 * @version v1.30.0
 */
class IoK8sApiNetworkingV1IngressList {
    /**
     * Constructs a new <code>IoK8sApiNetworkingV1IngressList</code>.
     * IngressList is a collection of Ingress.
     * @alias module:model/IoK8sApiNetworkingV1IngressList
     * @param items {Array.<module:model/IoK8sApiNetworkingV1Ingress>} items is the list of Ingress.
     */
    constructor(items) { 
        
        IoK8sApiNetworkingV1IngressList.initialize(this, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, items) { 
        obj['items'] = items;
    }

    /**
     * Constructs a <code>IoK8sApiNetworkingV1IngressList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiNetworkingV1IngressList} obj Optional instance to populate.
     * @return {module:model/IoK8sApiNetworkingV1IngressList} The populated <code>IoK8sApiNetworkingV1IngressList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiNetworkingV1IngressList();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [IoK8sApiNetworkingV1Ingress]);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = IoK8sApimachineryPkgApisMetaV1ListMeta.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiNetworkingV1IngressList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiNetworkingV1IngressList</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiNetworkingV1IngressList.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['apiVersion'] && !(typeof data['apiVersion'] === 'string' || data['apiVersion'] instanceof String)) {
            throw new Error("Expected the field `apiVersion` to be a primitive type in the JSON string but got " + data['apiVersion']);
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                IoK8sApiNetworkingV1Ingress.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          IoK8sApimachineryPkgApisMetaV1ListMeta.validateJSON(data['metadata']);
        }

        return true;
    }


}

IoK8sApiNetworkingV1IngressList.RequiredProperties = ["items"];

/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 * @member {String} apiVersion
 */
IoK8sApiNetworkingV1IngressList.prototype['apiVersion'] = undefined;

/**
 * items is the list of Ingress.
 * @member {Array.<module:model/IoK8sApiNetworkingV1Ingress>} items
 */
IoK8sApiNetworkingV1IngressList.prototype['items'] = undefined;

/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 * @member {String} kind
 */
IoK8sApiNetworkingV1IngressList.prototype['kind'] = undefined;

/**
 * @member {module:model/IoK8sApimachineryPkgApisMetaV1ListMeta} metadata
 */
IoK8sApiNetworkingV1IngressList.prototype['metadata'] = undefined;






export default IoK8sApiNetworkingV1IngressList;

