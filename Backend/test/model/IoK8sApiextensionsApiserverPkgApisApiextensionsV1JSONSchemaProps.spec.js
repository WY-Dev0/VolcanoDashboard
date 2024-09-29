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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Kubernetes);
  }
}(this, function(expect, Kubernetes) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps', function() {
    it('should create an instance of IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps', function() {
      // uncomment below and update the code to test IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be.a(Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps);
    });

    it('should have the property ref (base name: "$ref")', function() {
      // uncomment below and update the code to test the property ref
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property schema (base name: "$schema")', function() {
      // uncomment below and update the code to test the property schema
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property additionalItems (base name: "additionalItems")', function() {
      // uncomment below and update the code to test the property additionalItems
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property additionalProperties (base name: "additionalProperties")', function() {
      // uncomment below and update the code to test the property additionalProperties
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property allOf (base name: "allOf")', function() {
      // uncomment below and update the code to test the property allOf
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property anyOf (base name: "anyOf")', function() {
      // uncomment below and update the code to test the property anyOf
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property definitions (base name: "definitions")', function() {
      // uncomment below and update the code to test the property definitions
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property dependencies (base name: "dependencies")', function() {
      // uncomment below and update the code to test the property dependencies
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property _enum (base name: "enum")', function() {
      // uncomment below and update the code to test the property _enum
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property example (base name: "example")', function() {
      // uncomment below and update the code to test the property example
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property exclusiveMaximum (base name: "exclusiveMaximum")', function() {
      // uncomment below and update the code to test the property exclusiveMaximum
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property exclusiveMinimum (base name: "exclusiveMinimum")', function() {
      // uncomment below and update the code to test the property exclusiveMinimum
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property externalDocs (base name: "externalDocs")', function() {
      // uncomment below and update the code to test the property externalDocs
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property maxItems (base name: "maxItems")', function() {
      // uncomment below and update the code to test the property maxItems
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property maxLength (base name: "maxLength")', function() {
      // uncomment below and update the code to test the property maxLength
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property maxProperties (base name: "maxProperties")', function() {
      // uncomment below and update the code to test the property maxProperties
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property maximum (base name: "maximum")', function() {
      // uncomment below and update the code to test the property maximum
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property minItems (base name: "minItems")', function() {
      // uncomment below and update the code to test the property minItems
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property minLength (base name: "minLength")', function() {
      // uncomment below and update the code to test the property minLength
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property minProperties (base name: "minProperties")', function() {
      // uncomment below and update the code to test the property minProperties
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property minimum (base name: "minimum")', function() {
      // uncomment below and update the code to test the property minimum
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property multipleOf (base name: "multipleOf")', function() {
      // uncomment below and update the code to test the property multipleOf
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property not (base name: "not")', function() {
      // uncomment below and update the code to test the property not
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property nullable (base name: "nullable")', function() {
      // uncomment below and update the code to test the property nullable
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property oneOf (base name: "oneOf")', function() {
      // uncomment below and update the code to test the property oneOf
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property pattern (base name: "pattern")', function() {
      // uncomment below and update the code to test the property pattern
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property patternProperties (base name: "patternProperties")', function() {
      // uncomment below and update the code to test the property patternProperties
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property uniqueItems (base name: "uniqueItems")', function() {
      // uncomment below and update the code to test the property uniqueItems
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property xKubernetesEmbeddedResource (base name: "x-kubernetes-embedded-resource")', function() {
      // uncomment below and update the code to test the property xKubernetesEmbeddedResource
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property xKubernetesIntOrString (base name: "x-kubernetes-int-or-string")', function() {
      // uncomment below and update the code to test the property xKubernetesIntOrString
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property xKubernetesListMapKeys (base name: "x-kubernetes-list-map-keys")', function() {
      // uncomment below and update the code to test the property xKubernetesListMapKeys
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property xKubernetesListType (base name: "x-kubernetes-list-type")', function() {
      // uncomment below and update the code to test the property xKubernetesListType
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property xKubernetesMapType (base name: "x-kubernetes-map-type")', function() {
      // uncomment below and update the code to test the property xKubernetesMapType
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property xKubernetesPreserveUnknownFields (base name: "x-kubernetes-preserve-unknown-fields")', function() {
      // uncomment below and update the code to test the property xKubernetesPreserveUnknownFields
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

    it('should have the property xKubernetesValidations (base name: "x-kubernetes-validations")', function() {
      // uncomment below and update the code to test the property xKubernetesValidations
      //var instance = new Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
      //expect(instance).to.be();
    });

  });

}));
