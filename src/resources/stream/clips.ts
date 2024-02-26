// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ClipsAPI from 'cloudflare/resources/stream/clips';

export class Clips extends APIResource {
  /**
   * Clips a video based on the specified start and end times provided in seconds.
   */
  create(params: ClipCreateParams, options?: Core.RequestOptions): Core.APIPromise<ClipCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/stream/clip`, { body, ...options }) as Core.APIPromise<{
        result: ClipCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ClipCreateResponse {
  /**
   * Lists the origins allowed to display the video. Enter allowed origin domains in
   * an array and use `*` for wildcard subdomains. Empty arrays allow the video to be
   * viewed on any origin.
   */
  allowedOrigins?: Array<string>;

  /**
   * The unique video identifier (UID).
   */
  clippedFromVideoUID?: string;

  /**
   * The date and time the clip was created.
   */
  created?: string;

  /**
   * A user-defined identifier for the media creator.
   */
  creator?: string;

  /**
   * Specifies the end time for the video clip in seconds.
   */
  endTimeSeconds?: number;

  /**
   * The maximum duration in seconds for a video upload. Can be set for a video that
   * is not yet uploaded to limit its duration. Uploads that exceed the specified
   * duration will fail during processing. A value of `-1` means the value is
   * unknown.
   */
  maxDurationSeconds?: number;

  /**
   * A user modifiable key-value store used to reference other systems of record for
   * managing videos.
   */
  meta?: unknown;

  /**
   * The date and time the live input was last modified.
   */
  modified?: string;

  playback?: ClipCreateResponse.Playback;

  /**
   * The video's preview page URI. This field is omitted until encoding is complete.
   */
  preview?: string;

  /**
   * Indicates whether the video can be a accessed using the UID. When set to `true`,
   * a signed token must be generated with a signing key to view the video.
   */
  requireSignedURLs?: boolean;

  /**
   * Specifies the start time for the video clip in seconds.
   */
  startTimeSeconds?: number;

  /**
   * Specifies the processing status for all quality levels for a video.
   */
  status?: 'pendingupload' | 'downloading' | 'queued' | 'inprogress' | 'ready' | 'error';

  /**
   * The timestamp for a thumbnail image calculated as a percentage value of the
   * video's duration. To convert from a second-wise timestamp to a percentage,
   * divide the desired timestamp by the total duration of the video. If this value
   * is not set, the default thumbnail image is taken from 0s of the video.
   */
  thumbnailTimestampPct?: number;

  watermark?: ClipCreateResponse.Watermark;
}

export namespace ClipCreateResponse {
  export interface Playback {
    /**
     * DASH Media Presentation Description for the video.
     */
    dash?: string;

    /**
     * The HLS manifest for the video.
     */
    hls?: string;
  }

  export interface Watermark {
    /**
     * The unique identifier for the watermark profile.
     */
    uid?: string;
  }
}

export interface ClipCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: The unique video identifier (UID).
   */
  clippedFromVideoUID: string;

  /**
   * Body param: Specifies the end time for the video clip in seconds.
   */
  endTimeSeconds: number;

  /**
   * Body param: Specifies the start time for the video clip in seconds.
   */
  startTimeSeconds: number;

  /**
   * Body param: Lists the origins allowed to display the video. Enter allowed origin
   * domains in an array and use `*` for wildcard subdomains. Empty arrays allow the
   * video to be viewed on any origin.
   */
  allowedOrigins?: Array<string>;

  /**
   * Body param: A user-defined identifier for the media creator.
   */
  creator?: string;

  /**
   * Body param: The maximum duration in seconds for a video upload. Can be set for a
   * video that is not yet uploaded to limit its duration. Uploads that exceed the
   * specified duration will fail during processing. A value of `-1` means the value
   * is unknown.
   */
  maxDurationSeconds?: number;

  /**
   * Body param: Indicates whether the video can be a accessed using the UID. When
   * set to `true`, a signed token must be generated with a signing key to view the
   * video.
   */
  requireSignedURLs?: boolean;

  /**
   * Body param: The timestamp for a thumbnail image calculated as a percentage value
   * of the video's duration. To convert from a second-wise timestamp to a
   * percentage, divide the desired timestamp by the total duration of the video. If
   * this value is not set, the default thumbnail image is taken from 0s of the
   * video.
   */
  thumbnailTimestampPct?: number;

  /**
   * Body param:
   */
  watermark?: ClipCreateParams.Watermark;
}

export namespace ClipCreateParams {
  export interface Watermark {
    /**
     * The unique identifier for the watermark profile.
     */
    uid?: string;
  }
}

export namespace Clips {
  export import ClipCreateResponse = ClipsAPI.ClipCreateResponse;
  export import ClipCreateParams = ClipsAPI.ClipCreateParams;
}
