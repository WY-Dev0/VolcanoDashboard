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
import IoK8sApiCoreV1EventSource from './IoK8sApiCoreV1EventSource';
import IoK8sApiCoreV1ObjectReference from './IoK8sApiCoreV1ObjectReference';
import IoK8sApiEventsV1EventSeries from './IoK8sApiEventsV1EventSeries';
import IoK8sApimachineryPkgApisMetaV1ObjectMeta from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * The IoK8sApiEventsV1Event model module.
 * @module model/IoK8sApiEventsV1Event
 * @version v1.30.0
 */
class IoK8sApiEventsV1Event {
    /**
     * Constructs a new <code>IoK8sApiEventsV1Event</code>.
     * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
     * @alias module:model/IoK8sApiEventsV1Event
     * @param eventTime {Date} MicroTime is version of Time with microsecond level precision.
     */
    constructor(eventTime) { 
        
        IoK8sApiEventsV1Event.initialize(this, eventTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventTime) { 
        obj['eventTime'] = eventTime;
    }

    /**
     * Constructs a <code>IoK8sApiEventsV1Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IoK8sApiEventsV1Event} obj Optional instance to populate.
     * @return {module:model/IoK8sApiEventsV1Event} The populated <code>IoK8sApiEventsV1Event</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sApiEventsV1Event();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('deprecatedCount')) {
                obj['deprecatedCount'] = ApiClient.convertToType(data['deprecatedCount'], 'Number');
            }
            if (data.hasOwnProperty('deprecatedFirstTimestamp')) {
                obj['deprecatedFirstTimestamp'] = ApiClient.convertToType(data['deprecatedFirstTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('deprecatedLastTimestamp')) {
                obj['deprecatedLastTimestamp'] = ApiClient.convertToType(data['deprecatedLastTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('deprecatedSource')) {
                obj['deprecatedSource'] = IoK8sApiCoreV1EventSource.constructFromObject(data['deprecatedSource']);
            }
            if (data.hasOwnProperty('eventTime')) {
                obj['eventTime'] = ApiClient.convertToType(data['eventTime'], 'Date');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = IoK8sApimachineryPkgApisMetaV1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('regarding')) {
                obj['regarding'] = IoK8sApiCoreV1ObjectReference.constructFromObject(data['regarding']);
            }
            if (data.hasOwnProperty('related')) {
                obj['related'] = IoK8sApiCoreV1ObjectReference.constructFromObject(data['related']);
            }
            if (data.hasOwnProperty('reportingController')) {
                obj['reportingController'] = ApiClient.convertToType(data['reportingController'], 'String');
            }
            if (data.hasOwnProperty('reportingInstance')) {
                obj['reportingInstance'] = ApiClient.convertToType(data['reportingInstance'], 'String');
            }
            if (data.hasOwnProperty('series')) {
                obj['series'] = IoK8sApiEventsV1EventSeries.constructFromObject(data['series']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IoK8sApiEventsV1Event</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IoK8sApiEventsV1Event</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IoK8sApiEventsV1Event.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // ensure the json data is a string
        if (data['apiVersion'] && !(typeof data['apiVersion'] === 'string' || data['apiVersion'] instanceof String)) {
            throw new Error("Expected the field `apiVersion` to be a primitive type in the JSON string but got " + data['apiVersion']);
        }
        // validate the optional field `deprecatedSource`
        if (data['deprecatedSource']) { // data not null
          IoK8sApiCoreV1EventSource.validateJSON(data['deprecatedSource']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          IoK8sApimachineryPkgApisMetaV1ObjectMeta.validateJSON(data['metadata']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }
        // validate the optional field `regarding`
        if (data['regarding']) { // data not null
          IoK8sApiCoreV1ObjectReference.validateJSON(data['regarding']);
        }
        // validate the optional field `related`
        if (data['related']) { // data not null
          IoK8sApiCoreV1ObjectReference.validateJSON(data['related']);
        }
        // ensure the json data is a string
        if (data['reportingController'] && !(typeof data['reportingController'] === 'string' || data['reportingController'] instanceof String)) {
            throw new Error("Expected the field `reportingController` to be a primitive type in the JSON string but got " + data['reportingController']);
        }
        // ensure the json data is a string
        if (data['reportingInstance'] && !(typeof data['reportingInstance'] === 'string' || data['reportingInstance'] instanceof String)) {
            throw new Error("Expected the field `reportingInstance` to be a primitive type in the JSON string but got " + data['reportingInstance']);
        }
        // validate the optional field `series`
        if (data['series']) { // data not null
          IoK8sApiEventsV1EventSeries.validateJSON(data['series']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

IoK8sApiEventsV1Event.RequiredProperties = ["eventTime"];

/**
 * action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field cannot be empty for new Events and it can have at most 128 characters.
 * @member {String} action
 */
IoK8sApiEventsV1Event.prototype['action'] = undefined;

/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 * @member {String} apiVersion
 */
IoK8sApiEventsV1Event.prototype['apiVersion'] = undefined;

/**
 * deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.
 * @member {Number} deprecatedCount
 */
IoK8sApiEventsV1Event.prototype['deprecatedCount'] = undefined;

/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 * @member {Date} deprecatedFirstTimestamp
 */
IoK8sApiEventsV1Event.prototype['deprecatedFirstTimestamp'] = undefined;

/**
 * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
 * @member {Date} deprecatedLastTimestamp
 */
IoK8sApiEventsV1Event.prototype['deprecatedLastTimestamp'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1EventSource} deprecatedSource
 */
IoK8sApiEventsV1Event.prototype['deprecatedSource'] = undefined;

/**
 * MicroTime is version of Time with microsecond level precision.
 * @member {Date} eventTime
 */
IoK8sApiEventsV1Event.prototype['eventTime'] = undefined;

/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 * @member {String} kind
 */
IoK8sApiEventsV1Event.prototype['kind'] = undefined;

/**
 * @member {module:model/IoK8sApimachineryPkgApisMetaV1ObjectMeta} metadata
 */
IoK8sApiEventsV1Event.prototype['metadata'] = undefined;

/**
 * note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
 * @member {String} note
 */
IoK8sApiEventsV1Event.prototype['note'] = undefined;

/**
 * reason is why the action was taken. It is human-readable. This field cannot be empty for new Events and it can have at most 128 characters.
 * @member {String} reason
 */
IoK8sApiEventsV1Event.prototype['reason'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ObjectReference} regarding
 */
IoK8sApiEventsV1Event.prototype['regarding'] = undefined;

/**
 * @member {module:model/IoK8sApiCoreV1ObjectReference} related
 */
IoK8sApiEventsV1Event.prototype['related'] = undefined;

/**
 * reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events.
 * @member {String} reportingController
 */
IoK8sApiEventsV1Event.prototype['reportingController'] = undefined;

/**
 * reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters.
 * @member {String} reportingInstance
 */
IoK8sApiEventsV1Event.prototype['reportingInstance'] = undefined;

/**
 * @member {module:model/IoK8sApiEventsV1EventSeries} series
 */
IoK8sApiEventsV1Event.prototype['series'] = undefined;

/**
 * type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. This field cannot be empty for new Events.
 * @member {String} type
 */
IoK8sApiEventsV1Event.prototype['type'] = undefined;






export default IoK8sApiEventsV1Event;
