/**
 * Cymbio 3 API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ErrorResponse from './model/ErrorResponse';
import GetSupplierResponse from './model/GetSupplierResponse';
import GetVariantResponse from './model/GetVariantResponse';
import GetVariantsResponse from './model/GetVariantsResponse';
import ImportProductsRequest from './model/ImportProductsRequest';
import ImportProductsSchemaField from './model/ImportProductsSchemaField';
import PostSupplierRequest from './model/PostSupplierRequest';
import PostSupplierResponse from './model/PostSupplierResponse';
import PostVariantOption from './model/PostVariantOption';
import PostVariantProperty from './model/PostVariantProperty';
import PostVariantRequest from './model/PostVariantRequest';
import PostVariantResponse from './model/PostVariantResponse';
import SuccessResponse from './model/SuccessResponse';
import DefaultApi from './api/DefaultApi';


/**
* ERROR_UNKNOWN.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Cymbio3Api = require('index'); // See note below*.
* var xxxSvc = new Cymbio3Api.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Cymbio3Api.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Cymbio3Api.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Cymbio3Api.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The GetSupplierResponse model constructor.
     * @property {module:model/GetSupplierResponse}
     */
    GetSupplierResponse,

    /**
     * The GetVariantResponse model constructor.
     * @property {module:model/GetVariantResponse}
     */
    GetVariantResponse,

    /**
     * The GetVariantsResponse model constructor.
     * @property {module:model/GetVariantsResponse}
     */
    GetVariantsResponse,

    /**
     * The ImportProductsRequest model constructor.
     * @property {module:model/ImportProductsRequest}
     */
    ImportProductsRequest,

    /**
     * The ImportProductsSchemaField model constructor.
     * @property {module:model/ImportProductsSchemaField}
     */
    ImportProductsSchemaField,

    /**
     * The PostSupplierRequest model constructor.
     * @property {module:model/PostSupplierRequest}
     */
    PostSupplierRequest,

    /**
     * The PostSupplierResponse model constructor.
     * @property {module:model/PostSupplierResponse}
     */
    PostSupplierResponse,

    /**
     * The PostVariantOption model constructor.
     * @property {module:model/PostVariantOption}
     */
    PostVariantOption,

    /**
     * The PostVariantProperty model constructor.
     * @property {module:model/PostVariantProperty}
     */
    PostVariantProperty,

    /**
     * The PostVariantRequest model constructor.
     * @property {module:model/PostVariantRequest}
     */
    PostVariantRequest,

    /**
     * The PostVariantResponse model constructor.
     * @property {module:model/PostVariantResponse}
     */
    PostVariantResponse,

    /**
     * The SuccessResponse model constructor.
     * @property {module:model/SuccessResponse}
     */
    SuccessResponse,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
