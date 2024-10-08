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
import IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig';

/**
 * The IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion model module.
 * @module model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion
 * @version v1.30.0
 */
class IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion {
    /**
     * Constructs a new <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion</code>.
     * WebhookConversion describes how to call a conversion webhook
     * @alias module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion
     * @param conversionReviewVersions {Array.<String>} conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.
     */
    constructor(conversionReviewVersions) { 
        
        IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion.initialize(this, conversionReviewVersions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, conversionReviewVersions) { 
        obj['conversionReviewVersions'] = conversionReviewVersions;
    }

    /**
     * Constructs a <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion} obj Optional instance to populate.
     * @return {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion} The populated <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion();

            if (data.hasOwnProperty('clientConfig')) {
                obj['clientConfig'] = IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig.constructFromObject(data['clientConfig']);
            }
            if (data.hasOwnProperty('conversionReviewVersions')) {
                obj['conversionReviewVersions'] = ApiClient.convertToType(data['conversionReviewVersions'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `clientConfig`
        if (data['clientConfig']) { // data not null
          IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig.validateJSON(data['clientConfig']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['conversionReviewVersions'])) {
            throw new Error("Expected the field `conversionReviewVersions` to be an array in the JSON data but got " + data['conversionReviewVersions']);
        }

        return true;
    }


}

IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion.RequiredProperties = ["conversionReviewVersions"];

/**
 * @member {module:model/IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig} clientConfig
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion.prototype['clientConfig'] = undefined;

/**
 * conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.
 * @member {Array.<String>} conversionReviewVersions
 */
IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion.prototype['conversionReviewVersions'] = undefined;






export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion;

