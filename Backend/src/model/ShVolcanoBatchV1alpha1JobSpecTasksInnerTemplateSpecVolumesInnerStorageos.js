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
import ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecImagePullSecretsInner from './ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecImagePullSecretsInner';

/**
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos
     */
    constructor() { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos();

            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('secretRef')) {
                obj['secretRef'] = ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecImagePullSecretsInner.constructFromObject(data['secretRef']);
            }
            if (data.hasOwnProperty('volumeName')) {
                obj['volumeName'] = ApiClient.convertToType(data['volumeName'], 'String');
            }
            if (data.hasOwnProperty('volumeNamespace')) {
                obj['volumeNamespace'] = ApiClient.convertToType(data['volumeNamespace'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['fsType'] && !(typeof data['fsType'] === 'string' || data['fsType'] instanceof String)) {
            throw new Error("Expected the field `fsType` to be a primitive type in the JSON string but got " + data['fsType']);
        }
        // validate the optional field `secretRef`
        if (data['secretRef']) { // data not null
          ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecImagePullSecretsInner.validateJSON(data['secretRef']);
        }
        // ensure the json data is a string
        if (data['volumeName'] && !(typeof data['volumeName'] === 'string' || data['volumeName'] instanceof String)) {
            throw new Error("Expected the field `volumeName` to be a primitive type in the JSON string but got " + data['volumeName']);
        }
        // ensure the json data is a string
        if (data['volumeNamespace'] && !(typeof data['volumeNamespace'] === 'string' || data['volumeNamespace'] instanceof String)) {
            throw new Error("Expected the field `volumeNamespace` to be a primitive type in the JSON string but got " + data['volumeNamespace']);
        }

        return true;
    }


}



/**
 * @member {String} fsType
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos.prototype['fsType'] = undefined;

/**
 * @member {Boolean} readOnly
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos.prototype['readOnly'] = undefined;

/**
 * @member {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecImagePullSecretsInner} secretRef
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos.prototype['secretRef'] = undefined;

/**
 * @member {String} volumeName
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos.prototype['volumeName'] = undefined;

/**
 * @member {String} volumeNamespace
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos.prototype['volumeNamespace'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpecVolumesInnerStorageos;
