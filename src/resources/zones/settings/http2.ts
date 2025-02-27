// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HTTP2API from 'cloudflare/resources/zones/settings/http2';

export class HTTP2 extends APIResource {
  /**
   * Value of the HTTP2 setting.
   */
  edit(params: HTTP2EditParams, options?: Core.RequestOptions): Core.APIPromise<ZoneSettingHTTP2> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/http2`, { body, ...options }) as Core.APIPromise<{
        result: ZoneSettingHTTP2;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Value of the HTTP2 setting.
   */
  get(params: HTTP2GetParams, options?: Core.RequestOptions): Core.APIPromise<ZoneSettingHTTP2> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/http2`, options) as Core.APIPromise<{
        result: ZoneSettingHTTP2;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * HTTP2 enabled for this zone.
 */
export interface ZoneSettingHTTP2 {
  /**
   * ID of the zone setting.
   */
  id: 'http2';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface HTTP2EditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the HTTP2 setting.
   */
  value: 'on' | 'off';
}

export interface HTTP2GetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace HTTP2 {
  export import ZoneSettingHTTP2 = HTTP2API.ZoneSettingHTTP2;
  export import HTTP2EditParams = HTTP2API.HTTP2EditParams;
  export import HTTP2GetParams = HTTP2API.HTTP2GetParams;
}
