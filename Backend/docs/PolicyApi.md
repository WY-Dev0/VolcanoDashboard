# Kubernetes.PolicyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPolicyAPIGroup**](PolicyApi.md#getPolicyAPIGroup) | **GET** /apis/policy/ | 



## getPolicyAPIGroup

> IoK8sApimachineryPkgApisMetaV1APIGroup getPolicyAPIGroup()



get information of a group

### Example

```javascript
import Kubernetes from 'kubernetes';
let defaultClient = Kubernetes.ApiClient.instance;
// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new Kubernetes.PolicyApi();
apiInstance.getPolicyAPIGroup((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**IoK8sApimachineryPkgApisMetaV1APIGroup**](IoK8sApimachineryPkgApisMetaV1APIGroup.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

