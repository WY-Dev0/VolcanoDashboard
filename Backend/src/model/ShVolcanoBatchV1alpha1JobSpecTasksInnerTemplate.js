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
import ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateMetadata from './ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateMetadata';
import ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpec from './ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpec';

/**
 * The ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate model module.
 * @module model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate
 * @version v1.30.0
 */
class ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate {
    /**
     * Constructs a new <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate</code>.
     * @alias module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate
     */
    constructor() { 
        
        ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate} obj Optional instance to populate.
     * @return {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate} The populated <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('spec')) {
                obj['spec'] = ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpec.constructFromObject(data['spec']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateMetadata.validateJSON(data['metadata']);
        }
        // validate the optional field `spec`
        if (data['spec']) { // data not null
          ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpec.validateJSON(data['spec']);
        }

        return true;
    }


}



/**
 * @member {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateMetadata} metadata
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate.prototype['metadata'] = undefined;

/**
 * @member {module:model/ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplateSpec} spec
 */
ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate.prototype['spec'] = undefined;






export default ShVolcanoBatchV1alpha1JobSpecTasksInnerTemplate;
