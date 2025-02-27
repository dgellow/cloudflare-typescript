// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SinkholesAPI from 'cloudflare/resources/intel/sinkholes';
import { SinglePage } from 'cloudflare/pagination';

export class Sinkholes extends APIResource {
  /**
   * List sinkholes owned by this account
   */
  list(
    params: SinkholeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IntelSinkholeItemsSinglePage, IntelSinkholeItem> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/intel/sinkholes`,
      IntelSinkholeItemsSinglePage,
      options,
    );
  }
}

export class IntelSinkholeItemsSinglePage extends SinglePage<IntelSinkholeItem> {}

export interface IntelSinkholeItem {
  /**
   * The unique identifier for the sinkhole
   */
  id?: number;

  /**
   * The account tag that owns this sinkhole
   */
  account_tag?: string;

  /**
   * The date and time when the sinkhole was created
   */
  created_on?: string;

  /**
   * The date and time when the sinkhole was last modified
   */
  modified_on?: string;

  /**
   * The name of the sinkhole
   */
  name?: string;

  /**
   * The name of the R2 bucket to store results
   */
  r2_bucket?: string;

  /**
   * The id of the R2 instance
   */
  r2_id?: string;
}

export interface SinkholeListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Sinkholes {
  export import IntelSinkholeItem = SinkholesAPI.IntelSinkholeItem;
  export import IntelSinkholeItemsSinglePage = SinkholesAPI.IntelSinkholeItemsSinglePage;
  export import SinkholeListParams = SinkholesAPI.SinkholeListParams;
}
