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
 * The IoK8sApimachineryPkgVersionInfo model module.
 * @module model/IoK8sApimachineryPkgVersionInfo
 * @version v1.30.0
 */
class IoK8sApimachineryPkgVersionInfo {
    /**
     * Constructs a new <code>IoK8sApimachineryPkgVersionInfo</code>.
     * Info contains versioning information. how we&#39;ll want to distribute that information.
     * @alias module:model/IoK8sApimachineryPkgVersionInfo
     * @param buildDate {String} 
     * @param compiler {String} 
     * @param gitCommit {String} 
     * @param gitTreeState {String} 
     * @param gitVersion {String} 
     * @param goVersion {String} 
     * @param major {String} 
     * @param minor {String} 
     * @param platform {String} 
     */
    constructor(buildDate, compiler, gitCommit, gitTreeState, gitVersion, goVersion, major, minor, platform) { 
        
        IoK8sApimachineryPkgVersionInfo.initialize(this, buildDate, compiler, gitCommit, gitTreeState, gitVersion, goVersion, major, minor, platform);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, buildDate, compiler, gitCommit, gitTreeState, gitVersion, goVersion, major, minor, platform) { 
        obj['buildDate'] = buildDate;
        obj['compiler'] = compiler;
        obj['gitCommit'] = gitCommit;
        obj['gitTreeState'] = gitTreeState;
        obj['gitVersion'] = gitVersion;
        obj['goVersion'] = goVersion;
        obj['major'] = major;
        obj['minor'] = minor;
        obj['platform'] = platform;
    }

    /**
     * Constructs a <code>IoK8sApimachineryPkgVersionInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApimachineryPkgVersionInfo} obj Optional instance to populate.
     * @return {module:model/IoK8sApimachineryPkgVersionInfo} The populated <code>IoK8sApimachineryPkgVersionInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApimachineryPkgVersionInfo();

            if (data.hasOwnProperty('buildDate')) {
                obj['buildDate'] = ApiClient.convertToType(data['buildDate'], 'String');
            }
            if (data.hasOwnProperty('compiler')) {
                obj['compiler'] = ApiClient.convertToType(data['compiler'], 'String');
            }
            if (data.hasOwnProperty('gitCommit')) {
                obj['gitCommit'] = ApiClient.convertToType(data['gitCommit'], 'String');
            }
            if (data.hasOwnProperty('gitTreeState')) {
                obj['gitTreeState'] = ApiClient.convertToType(data['gitTreeState'], 'String');
            }
            if (data.hasOwnProperty('gitVersion')) {
                obj['gitVersion'] = ApiClient.convertToType(data['gitVersion'], 'String');
            }
            if (data.hasOwnProperty('goVersion')) {
                obj['goVersion'] = ApiClient.convertToType(data['goVersion'], 'String');
            }
            if (data.hasOwnProperty('major')) {
                obj['major'] = ApiClient.convertToType(data['major'], 'String');
            }
            if (data.hasOwnProperty('minor')) {
                obj['minor'] = ApiClient.convertToType(data['minor'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApimachineryPkgVersionInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApimachineryPkgVersionInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApimachineryPkgVersionInfo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['buildDate'] && !(typeof data['buildDate'] === 'string' || data['buildDate'] instanceof String)) {
            throw new Error("Expected the field `buildDate` to be a primitive type in the JSON string but got " + data['buildDate']);
        }
        // ensure the json data is a string
        if (data['compiler'] && !(typeof data['compiler'] === 'string' || data['compiler'] instanceof String)) {
            throw new Error("Expected the field `compiler` to be a primitive type in the JSON string but got " + data['compiler']);
        }
        // ensure the json data is a string
        if (data['gitCommit'] && !(typeof data['gitCommit'] === 'string' || data['gitCommit'] instanceof String)) {
            throw new Error("Expected the field `gitCommit` to be a primitive type in the JSON string but got " + data['gitCommit']);
        }
        // ensure the json data is a string
        if (data['gitTreeState'] && !(typeof data['gitTreeState'] === 'string' || data['gitTreeState'] instanceof String)) {
            throw new Error("Expected the field `gitTreeState` to be a primitive type in the JSON string but got " + data['gitTreeState']);
        }
        // ensure the json data is a string
        if (data['gitVersion'] && !(typeof data['gitVersion'] === 'string' || data['gitVersion'] instanceof String)) {
            throw new Error("Expected the field `gitVersion` to be a primitive type in the JSON string but got " + data['gitVersion']);
        }
        // ensure the json data is a string
        if (data['goVersion'] && !(typeof data['goVersion'] === 'string' || data['goVersion'] instanceof String)) {
            throw new Error("Expected the field `goVersion` to be a primitive type in the JSON string but got " + data['goVersion']);
        }
        // ensure the json data is a string
        if (data['major'] && !(typeof data['major'] === 'string' || data['major'] instanceof String)) {
            throw new Error("Expected the field `major` to be a primitive type in the JSON string but got " + data['major']);
        }
        // ensure the json data is a string
        if (data['minor'] && !(typeof data['minor'] === 'string' || data['minor'] instanceof String)) {
            throw new Error("Expected the field `minor` to be a primitive type in the JSON string but got " + data['minor']);
        }
        // ensure the json data is a string
        if (data['platform'] && !(typeof data['platform'] === 'string' || data['platform'] instanceof String)) {
            throw new Error("Expected the field `platform` to be a primitive type in the JSON string but got " + data['platform']);
        }

        return true;
    }


}

IoK8sApimachineryPkgVersionInfo.RequiredProperties = ["buildDate", "compiler", "gitCommit", "gitTreeState", "gitVersion", "goVersion", "major", "minor", "platform"];

/**
 * @member {String} buildDate
 */
IoK8sApimachineryPkgVersionInfo.prototype['buildDate'] = undefined;

/**
 * @member {String} compiler
 */
IoK8sApimachineryPkgVersionInfo.prototype['compiler'] = undefined;

/**
 * @member {String} gitCommit
 */
IoK8sApimachineryPkgVersionInfo.prototype['gitCommit'] = undefined;

/**
 * @member {String} gitTreeState
 */
IoK8sApimachineryPkgVersionInfo.prototype['gitTreeState'] = undefined;

/**
 * @member {String} gitVersion
 */
IoK8sApimachineryPkgVersionInfo.prototype['gitVersion'] = undefined;

/**
 * @member {String} goVersion
 */
IoK8sApimachineryPkgVersionInfo.prototype['goVersion'] = undefined;

/**
 * @member {String} major
 */
IoK8sApimachineryPkgVersionInfo.prototype['major'] = undefined;

/**
 * @member {String} minor
 */
IoK8sApimachineryPkgVersionInfo.prototype['minor'] = undefined;

/**
 * @member {String} platform
 */
IoK8sApimachineryPkgVersionInfo.prototype['platform'] = undefined;






export default IoK8sApimachineryPkgVersionInfo;
