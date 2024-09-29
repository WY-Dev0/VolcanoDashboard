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
import IoK8sApiStorageV1VolumeError from './IoK8sApiStorageV1VolumeError';

/**
 * The IoK8sApiStorageV1VolumeAttachmentStatus model module.
 * @module model/IoK8sApiStorageV1VolumeAttachmentStatus
 * @version v1.30.0
 */
class IoK8sApiStorageV1VolumeAttachmentStatus {
    /**
     * Constructs a new <code>IoK8sApiStorageV1VolumeAttachmentStatus</code>.
     * VolumeAttachmentStatus is the status of a VolumeAttachment request.
     * @alias module:model/IoK8sApiStorageV1VolumeAttachmentStatus
     * @param attached {Boolean} attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
     */
    constructor(attached) { 
        
        IoK8sApiStorageV1VolumeAttachmentStatus.initialize(this, attached);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, attached) { 
        obj['attached'] = attached;
    }

    /**
     * Constructs a <code>IoK8sApiStorageV1VolumeAttachmentStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiStorageV1VolumeAttachmentStatus} obj Optional instance to populate.
     * @return {module:model/IoK8sApiStorageV1VolumeAttachmentStatus} The populated <code>IoK8sApiStorageV1VolumeAttachmentStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiStorageV1VolumeAttachmentStatus();

            if (data.hasOwnProperty('attachError')) {
                obj['attachError'] = IoK8sApiStorageV1VolumeError.constructFromObject(data['attachError']);
            }
            if (data.hasOwnProperty('attached')) {
                obj['attached'] = ApiClient.convertToType(data['attached'], 'Boolean');
            }
            if (data.hasOwnProperty('attachmentMetadata')) {
                obj['attachmentMetadata'] = ApiClient.convertToType(data['attachmentMetadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('detachError')) {
                obj['detachError'] = IoK8sApiStorageV1VolumeError.constructFromObject(data['detachError']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiStorageV1VolumeAttachmentStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiStorageV1VolumeAttachmentStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiStorageV1VolumeAttachmentStatus.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `attachError`
        if (data['attachError']) { // data not null
          IoK8sApiStorageV1VolumeError.validateJSON(data['attachError']);
        }
        // validate the optional field `detachError`
        if (data['detachError']) { // data not null
          IoK8sApiStorageV1VolumeError.validateJSON(data['detachError']);
        }

        return true;
    }


}

IoK8sApiStorageV1VolumeAttachmentStatus.RequiredProperties = ["attached"];

/**
 * @member {module:model/IoK8sApiStorageV1VolumeError} attachError
 */
IoK8sApiStorageV1VolumeAttachmentStatus.prototype['attachError'] = undefined;

/**
 * attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
 * @member {Boolean} attached
 */
IoK8sApiStorageV1VolumeAttachmentStatus.prototype['attached'] = undefined;

/**
 * attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
 * @member {Object.<String, String>} attachmentMetadata
 */
IoK8sApiStorageV1VolumeAttachmentStatus.prototype['attachmentMetadata'] = undefined;

/**
 * @member {module:model/IoK8sApiStorageV1VolumeError} detachError
 */
IoK8sApiStorageV1VolumeAttachmentStatus.prototype['detachError'] = undefined;






export default IoK8sApiStorageV1VolumeAttachmentStatus;
