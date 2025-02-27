// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AutomaticPlatformOptimizationAPI from 'cloudflare/resources/zones/settings/automatic-platform-optimization';

export class AutomaticPlatformOptimization extends APIResource {
  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  edit(
    params: AutomaticPlatformOptimizationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingAutomaticPlatformOptimization> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/automatic_platform_optimization`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZoneSettingAutomaticPlatformOptimization }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  get(
    params: AutomaticPlatformOptimizationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingAutomaticPlatformOptimization> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/settings/automatic_platform_optimization`,
        options,
      ) as Core.APIPromise<{ result: ZoneSettingAutomaticPlatformOptimization }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ZoneSettingAutomaticPlatformOptimization {
  /**
   * Indicates whether or not
   * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
   * is enabled.
   */
  cache_by_device_type: boolean;

  /**
   * Indicates whether or not Cloudflare proxy is enabled.
   */
  cf: boolean;

  /**
   * Indicates whether or not Automatic Platform Optimization is enabled.
   */
  enabled: boolean;

  /**
   * An array of hostnames where Automatic Platform Optimization for WordPress is
   * activated.
   */
  hostnames: Array<string>;

  /**
   * Indicates whether or not site is powered by WordPress.
   */
  wordpress: boolean;

  /**
   * Indicates whether or not
   * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
   * installed.
   */
  wp_plugin: boolean;
}

export interface AutomaticPlatformOptimizationEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  value: ZoneSettingAutomaticPlatformOptimization;
}

export interface AutomaticPlatformOptimizationGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace AutomaticPlatformOptimization {
  export import ZoneSettingAutomaticPlatformOptimization = AutomaticPlatformOptimizationAPI.ZoneSettingAutomaticPlatformOptimization;
  export import AutomaticPlatformOptimizationEditParams = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationEditParams;
  export import AutomaticPlatformOptimizationGetParams = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationGetParams;
}
