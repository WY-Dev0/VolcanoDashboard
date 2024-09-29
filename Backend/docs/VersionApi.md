# Kubernetes.VersionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCodeVersion**](VersionApi.md#getCodeVersion) | **GET** /version/ | 



## getCodeVersion

> IoK8sApimachineryPkgVersionInfo getCodeVersion()



get the code version

### Example

```javascript
import Kubernetes from 'kubernetes';
let defaultClient = Kubernetes.ApiClient.instance;
// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new Kubernetes.VersionApi();
apiInstance.getCodeVersion((error, data, response) => {
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

[**IoK8sApimachineryPkgVersionInfo**](IoK8sApimachineryPkgVersionInfo.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

