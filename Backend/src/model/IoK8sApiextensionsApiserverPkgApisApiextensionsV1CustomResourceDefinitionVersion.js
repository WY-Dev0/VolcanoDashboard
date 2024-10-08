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
import IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition';
import IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources';
import IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation';
import IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField';

/**
 * The IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion model module.
 * @module model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion
 * @version v1.30.0
 */
class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion {
    /**
     * Constructs a new <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion</code>.
     * CustomResourceDefinitionVersion describes a version for CRD.
     * @alias module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion
     * @param name {String} name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
     * @param served {Boolean} served is a flag enabling/disabling this version from being served via REST APIs
     * @param storage {Boolean} storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
     */
    constructor(name, served, storage) { 
        
        IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.initialize(this, name, served, storage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, served, storage) { 
        obj['name'] = name;
        obj['served'] = served;
        obj['storage'] = storage;
    }

    /**
     * Constructs a <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion} obj Optional instance to populate.
     * @return {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion} The populated <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion();

            if (data.hasOwnProperty('additionalPrinterColumns')) {
                obj['additionalPrinterColumns'] = ApiClient.convertToType(data['additionalPrinterColumns'], [IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition]);
            }
            if (data.hasOwnProperty('deprecated')) {
                obj['deprecated'] = ApiClient.convertToType(data['deprecated'], 'Boolean');
            }
            if (data.hasOwnProperty('deprecationWarning')) {
                obj['deprecationWarning'] = ApiClient.convertToType(data['deprecationWarning'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation.constructFromObject(data['schema']);
            }
            if (data.hasOwnProperty('selectableFields')) {
                obj['selectableFields'] = ApiClient.convertToType(data['selectableFields'], [IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField]);
            }
            if (data.hasOwnProperty('served')) {
                obj['served'] = ApiClient.convertToType(data['served'], 'Boolean');
            }
            if (data.hasOwnProperty('storage')) {
                obj['storage'] = ApiClient.convertToType(data['storage'], 'Boolean');
            }
            if (data.hasOwnProperty('subresources')) {
                obj['subresources'] = IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources.constructFromObject(data['subresources']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['additionalPrinterColumns']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalPrinterColumns'])) {
                throw new Error("Expected the field `additionalPrinterColumns` to be an array in the JSON data but got " + data['additionalPrinterColumns']);
            }
            // validate the optional field `additionalPrinterColumns` (array)
            for (const item of data['additionalPrinterColumns']) {
                IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['deprecationWarning'] && !(typeof data['deprecationWarning'] === 'string' || data['deprecationWarning'] instanceof String)) {
            throw new Error("Expected the field `deprecationWarning` to be a primitive type in the JSON string but got " + data['deprecationWarning']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `schema`
        if (data['schema']) { // data not null
          IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation.validateJSON(data['schema']);
        }
        if (data['selectableFields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['selectableFields'])) {
                throw new Error("Expected the field `selectableFields` to be an array in the JSON data but got " + data['selectableFields']);
            }
            // validate the optional field `selectableFields` (array)
            for (const item of data['selectableFields']) {
                IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField.validateJSON(item);
            };
        }
        // validate the optional field `subresources`
        if (data['subresources']) { // data not null
          IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources.validateJSON(data['subresources']);
        }

        return true;
    }


}

IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.RequiredProperties = ["name", "served", "storage"];

/**
 * additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used.
 * @member {Array.<module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition>} additionalPrinterColumns
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.prototype['additionalPrinterColumns'] = undefined;

/**
 * deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false.
 * @member {Boolean} deprecated
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.prototype['deprecated'] = undefined;

/**
 * deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists.
 * @member {String} deprecationWarning
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.prototype['deprecationWarning'] = undefined;

/**
 * name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
 * @member {String} name
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.prototype['name'] = undefined;

/**
 * @member {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation} schema
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.prototype['schema'] = undefined;

/**
 * selectableFields specifies paths to fields that may be used as field selectors. A maximum of 8 selectable fields are allowed. See https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors
 * @member {Array.<module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField>} selectableFields
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.prototype['selectableFields'] = undefined;

/**
 * served is a flag enabling/disabling this version from being served via REST APIs
 * @member {Boolean} served
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.prototype['served'] = undefined;

/**
 * storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
 * @member {Boolean} storage
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.prototype['storage'] = undefined;

/**
 * @member {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources} subresources
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.prototype['subresources'] = undefined;






export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion;

