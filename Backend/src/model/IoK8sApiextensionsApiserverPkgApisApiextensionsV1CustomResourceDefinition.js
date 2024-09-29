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
import IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec';
import IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus';
import IoK8sApimachineryPkgApisMetaV1ObjectMeta from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * The IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition model module.
 * @module model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition
 * @version v1.30.0
 */
class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition {
    /**
     * Constructs a new <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition</code>.
     * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format &lt;.spec.name&gt;.&lt;.spec.group&gt;.
     * @alias module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition
     * @param spec {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec} 
     */
    constructor(spec) { 
        
        IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition.initialize(this, spec);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, spec) { 
        obj['spec'] = spec;
    }

    /**
     * Constructs a <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition} obj Optional instance to populate.
     * @return {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition} The populated <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition();

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
                obj['spec'] = IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec.constructFromObject(data['spec']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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
          IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec.validateJSON(data['spec']);
        }
        // validate the optional field `status`
        if (data['status']) { // data not null
          IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus.validateJSON(data['status']);
        }

        return true;
    }


}

IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition.RequiredProperties = ["spec"];

/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 * @member {String} apiVersion
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition.prototype['apiVersion'] = undefined;

/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 * @member {String} kind
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition.prototype['kind'] = undefined;

/**
 * @member {module:model/IoK8sApimachineryPkgApisMetaV1ObjectMeta} metadata
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition.prototype['metadata'] = undefined;

/**
 * @member {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec} spec
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition.prototype['spec'] = undefined;

/**
 * @member {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus} status
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition.prototype['status'] = undefined;






export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition;

