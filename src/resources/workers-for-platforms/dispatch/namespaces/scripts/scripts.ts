// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ScriptsScriptsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts';
import * as ScriptsAPI from 'cloudflare/resources/workers/scripts/scripts';
import * as BindingsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/bindings';
import * as ContentAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/content';
import * as SettingsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/settings';
import { type Uploadable, maybeMultipartFormRequestOptions } from 'cloudflare/core';

export class Scripts extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);

  /**
   * Upload a worker module to a Workers for Platforms namespace.
   */
  update(
    dispatchNamespace: string,
    scriptName: string,
    params: ScriptUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptsAPI.WorkersScript> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}`,
        maybeMultipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: ScriptsAPI.WorkersScript }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a worker from a Workers for Platforms namespace. This call has no
   * response body on a successful delete.
   */
  delete(
    dispatchNamespace: string,
    scriptName: string,
    params: ScriptDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id, force } = params;
    return this._client.delete(
      `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}`,
      { query: { force }, ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }

  /**
   * Fetch information about a script uploaded to a Workers for Platforms namespace.
   */
  get(
    dispatchNamespace: string,
    scriptName: string,
    params: ScriptGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkersForPlatformsNamespaceScript> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}`,
        options,
      ) as Core.APIPromise<{ result: WorkersForPlatformsNamespaceScript }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Details about a worker uploaded to a Workers for Platforms namespace.
 */
export interface WorkersForPlatformsNamespaceScript {
  /**
   * When the script was created.
   */
  created_on?: string;

  /**
   * Name of the Workers for Platforms dispatch namespace.
   */
  dispatch_namespace?: string;

  /**
   * When the script was last modified.
   */
  modified_on?: string;

  script?: ScriptsAPI.WorkersScript;
}

export type ScriptUpdateParams = ScriptUpdateParams.Variant0 | ScriptUpdateParams.Variant1;

export namespace ScriptUpdateParams {
  export interface Variant0 {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: A module comprising a Worker script, often a javascript file.
     * Multiple modules may be provided as separate named parts, but at least one
     * module must be present and referenced in the metadata as `main_module` or
     * `body_part` by part name.
     */
    '<any part name>'?: Array<Uploadable>;

    /**
     * Body param: JSON encoded metadata about the uploaded parts and Worker
     * configuration.
     */
    metadata?: ScriptUpdateParams.Variant0.Metadata;
  }

  export namespace Variant0 {
    /**
     * JSON encoded metadata about the uploaded parts and Worker configuration.
     */
    export interface Metadata {
      /**
       * List of bindings available to the worker.
       */
      bindings?: Array<unknown>;

      /**
       * Name of the part in the multipart request that contains the script (e.g. the
       * file adding a listener to the `fetch` event). Indicates a
       * `service worker syntax` Worker.
       */
      body_part?: string;

      /**
       * Date indicating targeted support in the Workers runtime. Backwards incompatible
       * fixes to the runtime following this date will not affect this Worker.
       */
      compatibility_date?: string;

      /**
       * Flags that enable or disable certain features in the Workers runtime. Used to
       * enable upcoming features or opt in or out of specific changes not included in a
       * `compatibility_date`.
       */
      compatibility_flags?: Array<string>;

      /**
       * List of binding types to keep from previous_upload.
       */
      keep_bindings?: Array<string>;

      /**
       * Whether Logpush is turned on for the Worker.
       */
      logpush?: boolean;

      /**
       * Name of the part in the multipart request that contains the main module (e.g.
       * the file exporting a `fetch` handler). Indicates a `module syntax` Worker.
       */
      main_module?: string;

      /**
       * Migrations to apply for Durable Objects associated with this Worker.
       */
      migrations?: Metadata.WorkersSingleStepMigrations | Metadata.WorkersSteppedMigrations;

      placement?: Metadata.Placement;

      /**
       * List of strings to use as tags for this Worker
       */
      tags?: Array<string>;

      /**
       * List of Workers that will consume logs from the attached Worker.
       */
      tail_consumers?: Array<Metadata.TailConsumer>;

      /**
       * Usage model to apply to invocations.
       */
      usage_model?: 'bundled' | 'unbound';

      /**
       * Key-value pairs to use as tags for this version of this Worker
       */
      version_tags?: unknown;
    }

    export namespace Metadata {
      /**
       * A single set of migrations to apply.
       */
      export interface WorkersSingleStepMigrations {
        /**
         * A list of classes to delete Durable Object namespaces from.
         */
        deleted_classes?: Array<string>;

        /**
         * A list of classes to create Durable Object namespaces from.
         */
        new_classes?: Array<string>;

        /**
         * Tag to set as the latest migration tag.
         */
        new_tag?: string;

        /**
         * Tag used to verify against the latest migration tag for this Worker. If they
         * don't match, the upload is rejected.
         */
        old_tag?: string;

        /**
         * A list of classes with Durable Object namespaces that were renamed.
         */
        renamed_classes?: Array<WorkersSingleStepMigrations.RenamedClass>;

        /**
         * A list of transfers for Durable Object namespaces from a different Worker and
         * class to a class defined in this Worker.
         */
        transferred_classes?: Array<WorkersSingleStepMigrations.TransferredClass>;
      }

      export namespace WorkersSingleStepMigrations {
        export interface RenamedClass {
          from?: string;

          to?: string;
        }

        export interface TransferredClass {
          from?: string;

          from_script?: string;

          to?: string;
        }
      }

      export interface WorkersSteppedMigrations {
        /**
         * Tag to set as the latest migration tag.
         */
        new_tag?: string;

        /**
         * Tag used to verify against the latest migration tag for this Worker. If they
         * don't match, the upload is rejected.
         */
        old_tag?: string;

        /**
         * Migrations to apply in order.
         */
        steps?: Array<WorkersSteppedMigrations.Step>;
      }

      export namespace WorkersSteppedMigrations {
        export interface Step {
          /**
           * A list of classes to delete Durable Object namespaces from.
           */
          deleted_classes?: Array<string>;

          /**
           * A list of classes to create Durable Object namespaces from.
           */
          new_classes?: Array<string>;

          /**
           * A list of classes with Durable Object namespaces that were renamed.
           */
          renamed_classes?: Array<Step.RenamedClass>;

          /**
           * A list of transfers for Durable Object namespaces from a different Worker and
           * class to a class defined in this Worker.
           */
          transferred_classes?: Array<Step.TransferredClass>;
        }

        export namespace Step {
          export interface RenamedClass {
            from?: string;

            to?: string;
          }

          export interface TransferredClass {
            from?: string;

            from_script?: string;

            to?: string;
          }
        }
      }

      export interface Placement {
        /**
         * Enables
         * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
         * Only `"smart"` is currently supported
         */
        mode?: 'smart';
      }

      /**
       * A reference to a script that will consume logs from the attached Worker.
       */
      export interface TailConsumer {
        /**
         * Name of Worker that is to be the consumer.
         */
        service: string;

        /**
         * Optional environment if the Worker utilizes one.
         */
        environment?: string;

        /**
         * Optional dispatch namespace the script belongs to.
         */
        namespace?: string;
      }
    }
  }

  export interface Variant1 {
    /**
     * Path param: Identifier
     */
    account_id: string;

    /**
     * Body param: Rollback message to be associated with this deployment. Only parsed
     * when query param `"rollback_to"` is present.
     */
    message?: string;
  }
}

export interface ScriptDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: If set to true, delete will not be stopped by associated service
   * binding, durable object, or other binding. Any of these associated
   * bindings/durable objects will be deleted along with the script.
   */
  force?: boolean;
}

export interface ScriptGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Scripts {
  export import WorkersForPlatformsNamespaceScript = ScriptsScriptsAPI.WorkersForPlatformsNamespaceScript;
  export import ScriptUpdateParams = ScriptsScriptsAPI.ScriptUpdateParams;
  export import ScriptDeleteParams = ScriptsScriptsAPI.ScriptDeleteParams;
  export import ScriptGetParams = ScriptsScriptsAPI.ScriptGetParams;
  export import Content = ContentAPI.Content;
  export import ContentUpdateParams = ContentAPI.ContentUpdateParams;
  export import ContentGetParams = ContentAPI.ContentGetParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
  export import Bindings = BindingsAPI.Bindings;
  export import BindingGetResponse = BindingsAPI.BindingGetResponse;
  export import BindingGetParams = BindingsAPI.BindingGetParams;
}
