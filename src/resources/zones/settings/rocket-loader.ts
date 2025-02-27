// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RocketLoaderAPI from 'cloudflare/resources/zones/settings/rocket-loader';

export class RocketLoader extends APIResource {
  /**
   * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that
   * prioritises rendering your content while loading your site's Javascript
   * asynchronously. Turning on Rocket Loader will immediately improve a web page's
   * rendering time sometimes measured as Time to First Paint (TTFP), and also the
   * `window.onload` time (assuming there is JavaScript on the page). This can have a
   * positive impact on your Google search ranking. When turned on, Rocket Loader
   * will automatically defer the loading of all Javascript referenced in your HTML,
   * with no configuration required. Refer to
   * [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056)
   * for more information.
   */
  edit(
    params: RocketLoaderEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingRocketLoader> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/rocket_loader`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZoneSettingRocketLoader }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that
   * prioritises rendering your content while loading your site's Javascript
   * asynchronously. Turning on Rocket Loader will immediately improve a web page's
   * rendering time sometimes measured as Time to First Paint (TTFP), and also the
   * `window.onload` time (assuming there is JavaScript on the page). This can have a
   * positive impact on your Google search ranking. When turned on, Rocket Loader
   * will automatically defer the loading of all Javascript referenced in your HTML,
   * with no configuration required. Refer to
   * [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056)
   * for more information.
   */
  get(
    params: RocketLoaderGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingRocketLoader> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/rocket_loader`, options) as Core.APIPromise<{
        result: ZoneSettingRocketLoader;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that
 * prioritises rendering your content while loading your site's Javascript
 * asynchronously. Turning on Rocket Loader will immediately improve a web page's
 * rendering time sometimes measured as Time to First Paint (TTFP), and also the
 * `window.onload` time (assuming there is JavaScript on the page). This can have a
 * positive impact on your Google search ranking. When turned on, Rocket Loader
 * will automatically defer the loading of all Javascript referenced in your HTML,
 * with no configuration required. Refer to
 * [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056)
 * for more information.
 */
export interface ZoneSettingRocketLoader {
  /**
   * ID of the zone setting.
   */
  id: 'rocket_loader';

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

export interface RocketLoaderEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Rocket Loader is a general-purpose asynchronous JavaScript
   * optimisation that prioritises rendering your content while loading your site's
   * Javascript asynchronously. Turning on Rocket Loader will immediately improve a
   * web page's rendering time sometimes measured as Time to First Paint (TTFP), and
   * also the `window.onload` time (assuming there is JavaScript on the page). This
   * can have a positive impact on your Google search ranking. When turned on, Rocket
   * Loader will automatically defer the loading of all Javascript referenced in your
   * HTML, with no configuration required. Refer to
   * [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056)
   * for more information.
   */
  value: ZoneSettingRocketLoader;
}

export interface RocketLoaderGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace RocketLoader {
  export import ZoneSettingRocketLoader = RocketLoaderAPI.ZoneSettingRocketLoader;
  export import RocketLoaderEditParams = RocketLoaderAPI.RocketLoaderEditParams;
  export import RocketLoaderGetParams = RocketLoaderAPI.RocketLoaderGetParams;
}
