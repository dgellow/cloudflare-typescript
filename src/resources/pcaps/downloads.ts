// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { type Response } from 'cloudflare/_shims/index';
import * as DownloadsAPI from 'cloudflare/resources/pcaps/downloads';

export class Downloads extends APIResource {
  /**
   * Download PCAP information into a file. Response is a binary PCAP file.
   */
  get(pcapId: string, params: DownloadGetParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/pcaps/${pcapId}/download`, {
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface DownloadGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Downloads {
  export import DownloadGetParams = DownloadsAPI.DownloadGetParams;
}
