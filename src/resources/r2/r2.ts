// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BucketsAPI from 'cloudflare/resources/r2/buckets';
import * as SippyAPI from 'cloudflare/resources/r2/sippy';

export class R2 extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  sippy: SippyAPI.Sippy = new SippyAPI.Sippy(this._client);
}

export namespace R2 {
  export import Buckets = BucketsAPI.Buckets;
  export import BucketCreateResponse = BucketsAPI.BucketCreateResponse;
  export import BucketListResponse = BucketsAPI.BucketListResponse;
  export import BucketDeleteResponse = BucketsAPI.BucketDeleteResponse;
  export import BucketGetResponse = BucketsAPI.BucketGetResponse;
  export import BucketCreateParams = BucketsAPI.BucketCreateParams;
  export import BucketListParams = BucketsAPI.BucketListParams;
  export import BucketDeleteParams = BucketsAPI.BucketDeleteParams;
  export import BucketGetParams = BucketsAPI.BucketGetParams;
  export import Sippy = SippyAPI.Sippy;
  export import SippyUpdateResponse = SippyAPI.SippyUpdateResponse;
  export import SippyDeleteResponse = SippyAPI.SippyDeleteResponse;
  export import SippyGetResponse = SippyAPI.SippyGetResponse;
  export import SippyUpdateParams = SippyAPI.SippyUpdateParams;
  export import SippyDeleteParams = SippyAPI.SippyDeleteParams;
  export import SippyGetParams = SippyAPI.SippyGetParams;
}
