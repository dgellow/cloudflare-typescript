// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ServerSideExcludesAPI from 'cloudflare/resources/zones/settings/server-side-excludes';

export class ServerSideExcludes extends APIResource {
  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  edit(
    params: ServerSideExcludeEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingServerSideExclude> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/server_side_exclude`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZoneSettingServerSideExclude }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * If there is sensitive content on your website that you want visible to real
   * visitors, but that you want to hide from suspicious visitors, all you have to do
   * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
   * be excluded from suspicious visitors in the following SSE tags:
   * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
   * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
   * have HTML minification enabled, you won't see the SSE tags in your HTML source
   * when it's served through Cloudflare. SSE will still function in this case, as
   * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
   * resource moves through our network to the visitor's computer.
   * (https://support.cloudflare.com/hc/en-us/articles/200170036).
   */
  get(
    params: ServerSideExcludeGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingServerSideExclude> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/server_side_exclude`, options) as Core.APIPromise<{
        result: ZoneSettingServerSideExclude;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * If there is sensitive content on your website that you want visible to real
 * visitors, but that you want to hide from suspicious visitors, all you have to do
 * is wrap the content with Cloudflare SSE tags. Wrap any content that you want to
 * be excluded from suspicious visitors in the following SSE tags:
 * <!--sse--><!--/sse-->. For example: <!--sse--> Bad visitors won't see my phone
 * number, 555-555-5555 <!--/sse-->. Note: SSE only will work with HTML. If you
 * have HTML minification enabled, you won't see the SSE tags in your HTML source
 * when it's served through Cloudflare. SSE will still function in this case, as
 * Cloudflare's HTML minification and SSE functionality occur on-the-fly as the
 * resource moves through our network to the visitor's computer.
 * (https://support.cloudflare.com/hc/en-us/articles/200170036).
 */
export interface ZoneSettingServerSideExclude {
  /**
   * ID of the zone setting.
   */
  id: 'server_side_exclude';

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

export interface ServerSideExcludeEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface ServerSideExcludeGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace ServerSideExcludes {
  export import ZoneSettingServerSideExclude = ServerSideExcludesAPI.ZoneSettingServerSideExclude;
  export import ServerSideExcludeEditParams = ServerSideExcludesAPI.ServerSideExcludeEditParams;
  export import ServerSideExcludeGetParams = ServerSideExcludesAPI.ServerSideExcludeGetParams;
}
