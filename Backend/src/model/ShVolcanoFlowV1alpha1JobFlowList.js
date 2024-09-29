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
import IoK8sApimachineryPkgApisMetaV1ListMeta from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import ShVolcanoFlowV1alpha1JobFlow from './ShVolcanoFlowV1alpha1JobFlow';

/**
 * The ShVolcanoFlowV1alpha1JobFlowList model module.
 * @module model/ShVolcanoFlowV1alpha1JobFlowList
 * @version v1.30.0
 */
class ShVolcanoFlowV1alpha1JobFlowList {
    /**
     * Constructs a new <code>ShVolcanoFlowV1alpha1JobFlowList</code>.
     * JobFlowList is a list of JobFlow
     * @alias module:model/ShVolcanoFlowV1alpha1JobFlowList
     * @param items {Array.<module:model/ShVolcanoFlowV1alpha1JobFlow>} List of jobflows. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     */
    constructor(items) { 
        
        ShVolcanoFlowV1alpha1JobFlowList.initialize(this, items);
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
     * Constructs a <code>ShVolcanoFlowV1alpha1JobFlowList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoFlowV1alpha1JobFlowList} obj Optional instance to populate.
     * @return {module:model/ShVolcanoFlowV1alpha1JobFlowList} The populated <code>ShVolcanoFlowV1alpha1JobFlowList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoFlowV1alpha1JobFlowList();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ShVolcanoFlowV1alpha1JobFlow]);
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
     * Validates the JSON data with respect to <code>ShVolcanoFlowV1alpha1JobFlowList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoFlowV1alpha1JobFlowList</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoFlowV1alpha1JobFlowList.RequiredProperties) {
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
                ShVolcanoFlowV1alpha1JobFlow.validateJSON(item);
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

ShVolcanoFlowV1alpha1JobFlowList.RequiredProperties = ["items"];

/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 * @member {String} apiVersion
 */
ShVolcanoFlowV1alpha1JobFlowList.prototype['apiVersion'] = undefined;

/**
 * List of jobflows. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
 * @member {Array.<module:model/ShVolcanoFlowV1alpha1JobFlow>} items
 */
ShVolcanoFlowV1alpha1JobFlowList.prototype['items'] = undefined;

/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 * @member {String} kind
 */
ShVolcanoFlowV1alpha1JobFlowList.prototype['kind'] = undefined;

/**
 * @member {module:model/IoK8sApimachineryPkgApisMetaV1ListMeta} metadata
 */
ShVolcanoFlowV1alpha1JobFlowList.prototype['metadata'] = undefined;






export default ShVolcanoFlowV1alpha1JobFlowList;
