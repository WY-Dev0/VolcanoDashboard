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
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk
     * @param pdName {String} 
     */
    constructor(pdName) { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk.initialize(this, pdName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pdName) { 
        obj['pdName'] = pdName;
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk();

            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('partition')) {
                obj['partition'] = ApiClient.convertToType(data['partition'], 'Number');
            }
            if (data.hasOwnProperty('pdName')) {
                obj['pdName'] = ApiClient.convertToType(data['pdName'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fsType'] && !(typeof data['fsType'] === 'string' || data['fsType'] instanceof String)) {
            throw new Error("Expected the field `fsType` to be a primitive type in the JSON string but got " + data['fsType']);
        }
        // ensure the json data is a string
        if (data['pdName'] && !(typeof data['pdName'] === 'string' || data['pdName'] instanceof String)) {
            throw new Error("Expected the field `pdName` to be a primitive type in the JSON string but got " + data['pdName']);
        }

        return true;
    }


}

ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk.RequiredProperties = ["pdName"];

/**
 * @member {String} fsType
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk.prototype['fsType'] = undefined;

/**
 * @member {Number} partition
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk.prototype['partition'] = undefined;

/**
 * @member {String} pdName
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk.prototype['pdName'] = undefined;

/**
 * @member {Boolean} readOnly
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk.prototype['readOnly'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerGcePersistentDisk;
