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
import IoK8sApiCoreV1PersistentVolumeClaimSpec from './IoK8sApiCoreV1PersistentVolumeClaimSpec';
import IoK8sApimachineryPkgApisMetaV1ObjectMeta from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * The IoK8sApiCoreV1PersistentVolumeClaimTemplate model module.
 * @module model/IoK8sApiCoreV1PersistentVolumeClaimTemplate
 * @version v1.30.0
 */
class IoK8sApiCoreV1PersistentVolumeClaimTemplate {
    /**
     * Constructs a new <code>IoK8sApiCoreV1PersistentVolumeClaimTemplate</code>.
     * PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
     * @alias module:model/IoK8sApiCoreV1PersistentVolumeClaimTemplate
     * @param spec {module:model/IoK8sApiCoreV1PersistentVolumeClaimSpec} 
     */
    constructor(spec) { 
        
        IoK8sApiCoreV1PersistentVolumeClaimTemplate.initialize(this, spec);
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
     * Constructs a <code>IoK8sApiCoreV1PersistentVolumeClaimTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1PersistentVolumeClaimTemplate} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1PersistentVolumeClaimTemplate} The populated <code>IoK8sApiCoreV1PersistentVolumeClaimTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1PersistentVolumeClaimTemplate();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = IoK8sApimachineryPkgApisMetaV1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('spec')) {
                obj['spec'] = IoK8sApiCoreV1PersistentVolumeClaimSpec.constructFromObject(data['spec']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1PersistentVolumeClaimTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1PersistentVolumeClaimTemplate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1PersistentVolumeClaimTemplate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          IoK8sApimachineryPkgApisMetaV1ObjectMeta.validateJSON(data['metadata']);
        }
        // validate the optional field `spec`
        if (data['spec']) { // data not null
          IoK8sApiCoreV1PersistentVolumeClaimSpec.validateJSON(data['spec']);
        }

        return true;
    }


}

IoK8sApiCoreV1PersistentVolumeClaimTemplate.RequiredProperties = ["spec"];

/**
 * @member {module:model/IoK8sApimachineryPkgApisMetaV1ObjectMeta} metadata
 */
IoK8sApiCoreV1PersistentVolumeClaimTemplate.prototype['metadata'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1PersistentVolumeClaimSpec} spec
 */
IoK8sApiCoreV1PersistentVolumeClaimTemplate.prototype['spec'] = undefined;






export default IoK8sApiCoreV1PersistentVolumeClaimTemplate;

