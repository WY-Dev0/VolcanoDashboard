# Kubernetes.IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalPrinterColumns** | [**[IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition]**](IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition.md) | additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used. | [optional] 
**deprecated** | **Boolean** | deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false. | [optional] 
**deprecationWarning** | **String** | deprecationWarning overrides the default warning returned to API clients. May only be set when &#x60;deprecated&#x60; is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists. | [optional] 
**name** | **String** | name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at &#x60;/apis/&lt;group&gt;/&lt;version&gt;/...&#x60; if &#x60;served&#x60; is true. | 
**schema** | [**IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation**](IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation.md) |  | [optional] 
**selectableFields** | [**[IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField]**](IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField.md) | selectableFields specifies paths to fields that may be used as field selectors. A maximum of 8 selectable fields are allowed. See https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors | [optional] 
**served** | **Boolean** | served is a flag enabling/disabling this version from being served via REST APIs | 
**storage** | **Boolean** | storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage&#x3D;true. | 
**subresources** | [**IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources**](IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources.md) |  | [optional] 


