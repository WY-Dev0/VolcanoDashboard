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
import IoK8sApiCoreV1HTTPHeader from './IoK8sApiCoreV1HTTPHeader';

/**
 * The IoK8sApiCoreV1HTTPGetAction model module.
 * @module model/IoK8sApiCoreV1HTTPGetAction
 * @version v1.30.0
 */
class IoK8sApiCoreV1HTTPGetAction {
    /**
     * Constructs a new <code>IoK8sApiCoreV1HTTPGetAction</code>.
     * HTTPGetAction describes an action based on HTTP Get requests.
     * @alias module:model/IoK8sApiCoreV1HTTPGetAction
     * @param port {String} IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     */
    constructor(port) { 
        
        IoK8sApiCoreV1HTTPGetAction.initialize(this, port);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, port) { 
        obj['port'] = port;
    }

    /**
     * Constructs a <code>IoK8sApiCoreV1HTTPGetAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiCoreV1HTTPGetAction} obj Optional instance to populate.
     * @return {module:model/IoK8sApiCoreV1HTTPGetAction} The populated <code>IoK8sApiCoreV1HTTPGetAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiCoreV1HTTPGetAction();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('httpHeaders')) {
                obj['httpHeaders'] = ApiClient.convertToType(data['httpHeaders'], [IoK8sApiCoreV1HTTPHeader]);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiCoreV1HTTPGetAction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiCoreV1HTTPGetAction</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiCoreV1HTTPGetAction.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        if (data['httpHeaders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['httpHeaders'])) {
                throw new Error("Expected the field `httpHeaders` to be an array in the JSON data but got " + data['httpHeaders']);
            }
            // validate the optional field `httpHeaders` (array)
            for (const item of data['httpHeaders']) {
                IoK8sApiCoreV1HTTPHeader.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['port'] && !(typeof data['port'] === 'string' || data['port'] instanceof String)) {
            throw new Error("Expected the field `port` to be a primitive type in the JSON string but got " + data['port']);
        }
        // ensure the json data is a string
        if (data['scheme'] && !(typeof data['scheme'] === 'string' || data['scheme'] instanceof String)) {
            throw new Error("Expected the field `scheme` to be a primitive type in the JSON string but got " + data['scheme']);
        }

        return true;
    }


}

IoK8sApiCoreV1HTTPGetAction.RequiredProperties = ["port"];

/**
 * Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.
 * @member {String} host
 */
IoK8sApiCoreV1HTTPGetAction.prototype['host'] = undefined;

/**
 * Custom headers to set in the request. HTTP allows repeated headers.
 * @member {Array.<module:model/IoK8sApiCoreV1HTTPHeader>} httpHeaders
 */
IoK8sApiCoreV1HTTPGetAction.prototype['httpHeaders'] = undefined;

/**
 * Path to access on the HTTP server.
 * @member {String} path
 */
IoK8sApiCoreV1HTTPGetAction.prototype['path'] = undefined;

/**
 * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
 * @member {String} port
 */
IoK8sApiCoreV1HTTPGetAction.prototype['port'] = undefined;

/**
 * Scheme to use for connecting to the host. Defaults to HTTP.  Possible enum values:  - `\"HTTP\"` means that the scheme used will be http://  - `\"HTTPS\"` means that the scheme used will be https://
 * @member {module:model/IoK8sApiCoreV1HTTPGetAction.SchemeEnum} scheme
 */
IoK8sApiCoreV1HTTPGetAction.prototype['scheme'] = undefined;





/**
 * Allowed values for the <code>scheme</code> property.
 * @enum {String}
 * @readonly
 */
IoK8sApiCoreV1HTTPGetAction['SchemeEnum'] = {

    /**
     * value: "HTTP"
     * @const
     */
    "HTTP": "HTTP",

    /**
     * value: "HTTPS"
     * @const
     */
    "HTTPS": "HTTPS"
};



export default IoK8sApiCoreV1HTTPGetAction;

