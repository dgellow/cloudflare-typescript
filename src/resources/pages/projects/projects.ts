// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProjectsAPI from 'cloudflare/resources/pages/projects/projects';
import * as DomainsAPI from 'cloudflare/resources/pages/projects/domains';
import * as DeploymentsAPI from 'cloudflare/resources/pages/projects/deployments/deployments';
import { SinglePage } from 'cloudflare/pagination';

export class Projects extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);

  /**
   * Create a new project.
   */
  create(params: ProjectCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProjectCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/pages/projects`, { body, ...options }) as Core.APIPromise<{
        result: ProjectCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a list of all user projects.
   */
  list(
    params: ProjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PagesDeploymentsSinglePage, PagesDeployments> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/pages/projects`,
      PagesDeploymentsSinglePage,
      options,
    );
  }

  /**
   * Delete a project by name.
   */
  delete(
    projectName: string,
    params: ProjectDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/pages/projects/${projectName}`, options);
  }

  /**
   * Set new attributes for an existing project. Modify environment variables. To
   * delete an environment variable, set the key to null.
   */
  edit(
    projectName: string,
    params: ProjectEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectEditResponse> {
    const { account_id, body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/pages/projects/${projectName}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ProjectEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a project by name.
   */
  get(
    projectName: string,
    params: ProjectGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagesProjects> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/pages/projects/${projectName}`, options) as Core.APIPromise<{
        result: PagesProjects;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Purge all cached build artifacts for a Pages project
   */
  purgeBuildCache(
    projectName: string,
    params: ProjectPurgeBuildCacheParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { account_id } = params;
    return this._client.post(
      `/accounts/${account_id}/pages/projects/${projectName}/purge_build_cache`,
      options,
    );
  }
}

export class PagesDeploymentsSinglePage extends SinglePage<PagesDeployments> {}

export interface PagesDeployments {
  /**
   * Id of the deployment.
   */
  id?: string;

  /**
   * A list of alias URLs pointing to this deployment.
   */
  aliases?: Array<unknown> | null;

  build_config?: unknown;

  /**
   * When the deployment was created.
   */
  created_on?: string;

  /**
   * Info about what caused the deployment.
   */
  deployment_trigger?: PagesDeployments.DeploymentTrigger;

  /**
   * A dict of env variables to build this deploy.
   */
  env_vars?: unknown;

  /**
   * Type of deploy.
   */
  environment?: string;

  /**
   * If the deployment has been skipped.
   */
  is_skipped?: boolean;

  latest_stage?: unknown;

  /**
   * When the deployment was last modified.
   */
  modified_on?: string;

  /**
   * Id of the project.
   */
  project_id?: string;

  /**
   * Name of the project.
   */
  project_name?: string;

  /**
   * Short Id (8 character) of the deployment.
   */
  short_id?: string;

  source?: unknown;

  /**
   * List of past stages.
   */
  stages?: Array<PagesDeployments.Stage>;

  /**
   * The live URL to view this deployment.
   */
  url?: string;
}

export namespace PagesDeployments {
  /**
   * Info about what caused the deployment.
   */
  export interface DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    metadata?: DeploymentTrigger.Metadata;

    /**
     * What caused the deployment.
     */
    type?: string;
  }

  export namespace DeploymentTrigger {
    /**
     * Additional info about the trigger.
     */
    export interface Metadata {
      /**
       * Where the trigger happened.
       */
      branch?: string;

      /**
       * Hash of the deployment trigger commit.
       */
      commit_hash?: string;

      /**
       * Message of the deployment trigger commit.
       */
      commit_message?: string;
    }
  }

  /**
   * The status of the deployment.
   */
  export interface Stage {
    /**
     * When the stage ended.
     */
    ended_on?: string | null;

    /**
     * The current build stage.
     */
    name?: string;

    /**
     * When the stage started.
     */
    started_on?: string | null;

    /**
     * State of the current stage.
     */
    status?: string;
  }
}

export interface PagesProjects {
  /**
   * Id of the project.
   */
  id?: string;

  /**
   * Configs for the project build process.
   */
  build_config?: PagesProjects.BuildConfig;

  canonical_deployment?: PagesDeployments;

  /**
   * When the project was created.
   */
  created_on?: string;

  /**
   * Configs for deployments in a project.
   */
  deployment_configs?: PagesProjects.DeploymentConfigs;

  /**
   * A list of associated custom domains for the project.
   */
  domains?: Array<unknown>;

  latest_deployment?: PagesDeployments;

  /**
   * Name of the project.
   */
  name?: string;

  /**
   * Production branch of the project. Used to identify production deployments.
   */
  production_branch?: string;

  source?: unknown;

  /**
   * The Cloudflare subdomain associated with the project.
   */
  subdomain?: string;
}

export namespace PagesProjects {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;

    /**
     * The classifying tag for analytics.
     */
    web_analytics_tag?: string | null;

    /**
     * The auth token for analytics.
     */
    web_analytics_token?: string | null;
  }

  /**
   * Configs for deployments in a project.
   */
  export interface DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    preview?: DeploymentConfigs.Preview;

    /**
     * Configs for production deploys.
     */
    production?: DeploymentConfigs.Production;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: Preview.AIBindings | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Preview.AnalyticsEngineDatasets | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: Preview.Browsers | null;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<unknown>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: Preview.D1Databases | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Preview.DurableObjectNamespaces | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Preview.EnvVars | null;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: Preview.HyperdriveBindings | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Preview.KVNamespaces;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: Preview.MTLSCertificates | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Preview.QueueProducers | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Preview.R2Buckets | null;

      /**
       * Services used for Pages Functions.
       */
      services?: Preview.Services | null;

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: Preview.VectorizeBindings | null;
    }

    export namespace Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      export interface AIBindings {
        /**
         * AI binding.
         */
        AI_BINDING?: AIBindings.AIBinding;
      }

      export namespace AIBindings {
        /**
         * AI binding.
         */
        export interface AIBinding {
          project_id?: unknown;
        }
      }

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
      }

      export namespace AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        export interface AnalyticsEngineBinding {
          /**
           * Name of the dataset.
           */
          dataset?: string;
        }
      }

      /**
       * Browser bindings used for Pages Functions.
       */
      export interface Browsers {
        /**
         * Browser binding.
         */
        BROWSER?: unknown;
      }

      /**
       * D1 databases used for Pages Functions.
       */
      export interface D1Databases {
        /**
         * D1 binding.
         */
        D1_BINDING?: D1Databases.D1Binding;
      }

      export namespace D1Databases {
        /**
         * D1 binding.
         */
        export interface D1Binding {
          /**
           * UUID of the D1 database.
           */
          id?: string;
        }
      }

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      export interface DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        DO_BINDING?: DurableObjectNamespaces.DoBinding;
      }

      export namespace DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        export interface DoBinding {
          /**
           * ID of the Durabble Object namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Environment variables for build configs.
       */
      export interface EnvVars {
        /**
         * Environment variable.
         */
        ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
      }

      export namespace EnvVars {
        /**
         * Environment variable.
         */
        export interface EnvironmentVariable {
          /**
           * The type of environment variable (plain text or secret)
           */
          type?: 'plain_text' | 'secret_text';

          /**
           * Environment variable value.
           */
          value?: string;
        }
      }

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      export interface HyperdriveBindings {
        /**
         * Hyperdrive binding.
         */
        HYPERDRIVE?: HyperdriveBindings.Hyperdrive;
      }

      export namespace HyperdriveBindings {
        /**
         * Hyperdrive binding.
         */
        export interface Hyperdrive {
          id?: string;
        }
      }

      /**
       * KV namespaces used for Pages Functions.
       */
      export interface KVNamespaces {
        /**
         * KV binding.
         */
        KV_BINDING?: KVNamespaces.KVBinding;
      }

      export namespace KVNamespaces {
        /**
         * KV binding.
         */
        export interface KVBinding {
          /**
           * ID of the KV namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * mTLS bindings used for Pages Functions.
       */
      export interface MTLSCertificates {
        /**
         * mTLS binding.
         */
        MTLS?: MTLSCertificates.MTLS;
      }

      export namespace MTLSCertificates {
        /**
         * mTLS binding.
         */
        export interface MTLS {
          certificate_id?: string;
        }
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      export interface QueueProducers {
        /**
         * Queue Producer binding.
         */
        QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
      }

      export namespace QueueProducers {
        /**
         * Queue Producer binding.
         */
        export interface QueueProducerBinding {
          /**
           * Name of the Queue.
           */
          name?: string;
        }
      }

      /**
       * R2 buckets used for Pages Functions.
       */
      export interface R2Buckets {
        /**
         * R2 binding.
         */
        R2_BINDING?: R2Buckets.R2Binding;
      }

      export namespace R2Buckets {
        /**
         * R2 binding.
         */
        export interface R2Binding {
          /**
           * Name of the R2 bucket.
           */
          name?: string;
        }
      }

      /**
       * Services used for Pages Functions.
       */
      export interface Services {
        /**
         * Service binding.
         */
        SERVICE_BINDING?: Services.ServiceBinding;
      }

      export namespace Services {
        /**
         * Service binding.
         */
        export interface ServiceBinding {
          /**
           * The entrypoint to bind to.
           */
          entrypoint?: string | null;

          /**
           * The Service environment.
           */
          environment?: string;

          /**
           * The Service name.
           */
          service?: string;
        }
      }

      /**
       * Vectorize bindings used for Pages Functions.
       */
      export interface VectorizeBindings {
        /**
         * Vectorize binding.
         */
        VECTORIZE?: VectorizeBindings.Vectorize;
      }

      export namespace VectorizeBindings {
        /**
         * Vectorize binding.
         */
        export interface Vectorize {
          index_name?: string;
        }
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: Production.AIBindings | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Production.AnalyticsEngineDatasets | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: Production.Browsers | null;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<unknown>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: Production.D1Databases | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Production.DurableObjectNamespaces | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Production.EnvVars | null;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: Production.HyperdriveBindings | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Production.KVNamespaces;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: Production.MTLSCertificates | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Production.QueueProducers | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Production.R2Buckets | null;

      /**
       * Services used for Pages Functions.
       */
      services?: Production.Services | null;

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: Production.VectorizeBindings | null;
    }

    export namespace Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      export interface AIBindings {
        /**
         * AI binding.
         */
        AI_BINDING?: AIBindings.AIBinding;
      }

      export namespace AIBindings {
        /**
         * AI binding.
         */
        export interface AIBinding {
          project_id?: unknown;
        }
      }

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
      }

      export namespace AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        export interface AnalyticsEngineBinding {
          /**
           * Name of the dataset.
           */
          dataset?: string;
        }
      }

      /**
       * Browser bindings used for Pages Functions.
       */
      export interface Browsers {
        /**
         * Browser binding.
         */
        BROWSER?: unknown;
      }

      /**
       * D1 databases used for Pages Functions.
       */
      export interface D1Databases {
        /**
         * D1 binding.
         */
        D1_BINDING?: D1Databases.D1Binding;
      }

      export namespace D1Databases {
        /**
         * D1 binding.
         */
        export interface D1Binding {
          /**
           * UUID of the D1 database.
           */
          id?: string;
        }
      }

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      export interface DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        DO_BINDING?: DurableObjectNamespaces.DoBinding;
      }

      export namespace DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        export interface DoBinding {
          /**
           * ID of the Durabble Object namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Environment variables for build configs.
       */
      export interface EnvVars {
        /**
         * Environment variable.
         */
        ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
      }

      export namespace EnvVars {
        /**
         * Environment variable.
         */
        export interface EnvironmentVariable {
          /**
           * The type of environment variable (plain text or secret)
           */
          type?: 'plain_text' | 'secret_text';

          /**
           * Environment variable value.
           */
          value?: string;
        }
      }

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      export interface HyperdriveBindings {
        /**
         * Hyperdrive binding.
         */
        HYPERDRIVE?: HyperdriveBindings.Hyperdrive;
      }

      export namespace HyperdriveBindings {
        /**
         * Hyperdrive binding.
         */
        export interface Hyperdrive {
          id?: string;
        }
      }

      /**
       * KV namespaces used for Pages Functions.
       */
      export interface KVNamespaces {
        /**
         * KV binding.
         */
        KV_BINDING?: KVNamespaces.KVBinding;
      }

      export namespace KVNamespaces {
        /**
         * KV binding.
         */
        export interface KVBinding {
          /**
           * ID of the KV namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * mTLS bindings used for Pages Functions.
       */
      export interface MTLSCertificates {
        /**
         * mTLS binding.
         */
        MTLS?: MTLSCertificates.MTLS;
      }

      export namespace MTLSCertificates {
        /**
         * mTLS binding.
         */
        export interface MTLS {
          certificate_id?: string;
        }
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      export interface QueueProducers {
        /**
         * Queue Producer binding.
         */
        QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
      }

      export namespace QueueProducers {
        /**
         * Queue Producer binding.
         */
        export interface QueueProducerBinding {
          /**
           * Name of the Queue.
           */
          name?: string;
        }
      }

      /**
       * R2 buckets used for Pages Functions.
       */
      export interface R2Buckets {
        /**
         * R2 binding.
         */
        R2_BINDING?: R2Buckets.R2Binding;
      }

      export namespace R2Buckets {
        /**
         * R2 binding.
         */
        export interface R2Binding {
          /**
           * Name of the R2 bucket.
           */
          name?: string;
        }
      }

      /**
       * Services used for Pages Functions.
       */
      export interface Services {
        /**
         * Service binding.
         */
        SERVICE_BINDING?: Services.ServiceBinding;
      }

      export namespace Services {
        /**
         * Service binding.
         */
        export interface ServiceBinding {
          /**
           * The entrypoint to bind to.
           */
          entrypoint?: string | null;

          /**
           * The Service environment.
           */
          environment?: string;

          /**
           * The Service name.
           */
          service?: string;
        }
      }

      /**
       * Vectorize bindings used for Pages Functions.
       */
      export interface VectorizeBindings {
        /**
         * Vectorize binding.
         */
        VECTORIZE?: VectorizeBindings.Vectorize;
      }

      export namespace VectorizeBindings {
        /**
         * Vectorize binding.
         */
        export interface Vectorize {
          index_name?: string;
        }
      }
    }
  }
}

export type ProjectCreateResponse = unknown | Array<unknown> | string;

export type ProjectDeleteResponse = unknown;

export type ProjectEditResponse = unknown | Array<unknown> | string;

export type ProjectPurgeBuildCacheResponse = unknown;

export interface ProjectCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Configs for the project build process.
   */
  build_config?: ProjectCreateParams.BuildConfig;

  /**
   * Body param:
   */
  canonical_deployment?: PagesDeployments;

  /**
   * Body param: Configs for deployments in a project.
   */
  deployment_configs?: ProjectCreateParams.DeploymentConfigs;

  /**
   * Body param:
   */
  latest_deployment?: PagesDeployments;

  /**
   * Body param: Name of the project.
   */
  name?: string;

  /**
   * Body param: Production branch of the project. Used to identify production
   * deployments.
   */
  production_branch?: string;
}

export namespace ProjectCreateParams {
  /**
   * Configs for the project build process.
   */
  export interface BuildConfig {
    /**
     * Enable build caching for the project.
     */
    build_caching?: boolean | null;

    /**
     * Command used to build project.
     */
    build_command?: string | null;

    /**
     * Output directory of the build.
     */
    destination_dir?: string | null;

    /**
     * Directory to run the command.
     */
    root_dir?: string | null;

    /**
     * The classifying tag for analytics.
     */
    web_analytics_tag?: string | null;

    /**
     * The auth token for analytics.
     */
    web_analytics_token?: string | null;
  }

  /**
   * Configs for deployments in a project.
   */
  export interface DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    preview?: DeploymentConfigs.Preview;

    /**
     * Configs for production deploys.
     */
    production?: DeploymentConfigs.Production;
  }

  export namespace DeploymentConfigs {
    /**
     * Configs for preview deploys.
     */
    export interface Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: Preview.AIBindings | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Preview.AnalyticsEngineDatasets | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: Preview.Browsers | null;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<unknown>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: Preview.D1Databases | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Preview.DurableObjectNamespaces | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Preview.EnvVars | null;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: Preview.HyperdriveBindings | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Preview.KVNamespaces;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: Preview.MTLSCertificates | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Preview.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Preview.QueueProducers | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Preview.R2Buckets | null;

      /**
       * Services used for Pages Functions.
       */
      services?: Preview.Services | null;

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: Preview.VectorizeBindings | null;
    }

    export namespace Preview {
      /**
       * Constellation bindings used for Pages Functions.
       */
      export interface AIBindings {
        /**
         * AI binding.
         */
        AI_BINDING?: AIBindings.AIBinding;
      }

      export namespace AIBindings {
        /**
         * AI binding.
         */
        export interface AIBinding {
          project_id?: unknown;
        }
      }

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
      }

      export namespace AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        export interface AnalyticsEngineBinding {
          /**
           * Name of the dataset.
           */
          dataset?: string;
        }
      }

      /**
       * Browser bindings used for Pages Functions.
       */
      export interface Browsers {
        /**
         * Browser binding.
         */
        BROWSER?: unknown;
      }

      /**
       * D1 databases used for Pages Functions.
       */
      export interface D1Databases {
        /**
         * D1 binding.
         */
        D1_BINDING?: D1Databases.D1Binding;
      }

      export namespace D1Databases {
        /**
         * D1 binding.
         */
        export interface D1Binding {
          /**
           * UUID of the D1 database.
           */
          id?: string;
        }
      }

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      export interface DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        DO_BINDING?: DurableObjectNamespaces.DoBinding;
      }

      export namespace DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        export interface DoBinding {
          /**
           * ID of the Durabble Object namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Environment variables for build configs.
       */
      export interface EnvVars {
        /**
         * Environment variable.
         */
        ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
      }

      export namespace EnvVars {
        /**
         * Environment variable.
         */
        export interface EnvironmentVariable {
          /**
           * The type of environment variable (plain text or secret)
           */
          type?: 'plain_text' | 'secret_text';

          /**
           * Environment variable value.
           */
          value?: string;
        }
      }

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      export interface HyperdriveBindings {
        /**
         * Hyperdrive binding.
         */
        HYPERDRIVE?: HyperdriveBindings.Hyperdrive;
      }

      export namespace HyperdriveBindings {
        /**
         * Hyperdrive binding.
         */
        export interface Hyperdrive {
          id?: string;
        }
      }

      /**
       * KV namespaces used for Pages Functions.
       */
      export interface KVNamespaces {
        /**
         * KV binding.
         */
        KV_BINDING?: KVNamespaces.KVBinding;
      }

      export namespace KVNamespaces {
        /**
         * KV binding.
         */
        export interface KVBinding {
          /**
           * ID of the KV namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * mTLS bindings used for Pages Functions.
       */
      export interface MTLSCertificates {
        /**
         * mTLS binding.
         */
        MTLS?: MTLSCertificates.MTLS;
      }

      export namespace MTLSCertificates {
        /**
         * mTLS binding.
         */
        export interface MTLS {
          certificate_id?: string;
        }
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      export interface QueueProducers {
        /**
         * Queue Producer binding.
         */
        QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
      }

      export namespace QueueProducers {
        /**
         * Queue Producer binding.
         */
        export interface QueueProducerBinding {
          /**
           * Name of the Queue.
           */
          name?: string;
        }
      }

      /**
       * R2 buckets used for Pages Functions.
       */
      export interface R2Buckets {
        /**
         * R2 binding.
         */
        R2_BINDING?: R2Buckets.R2Binding;
      }

      export namespace R2Buckets {
        /**
         * R2 binding.
         */
        export interface R2Binding {
          /**
           * Name of the R2 bucket.
           */
          name?: string;
        }
      }

      /**
       * Services used for Pages Functions.
       */
      export interface Services {
        /**
         * Service binding.
         */
        SERVICE_BINDING?: Services.ServiceBinding;
      }

      export namespace Services {
        /**
         * Service binding.
         */
        export interface ServiceBinding {
          /**
           * The entrypoint to bind to.
           */
          entrypoint?: string | null;

          /**
           * The Service environment.
           */
          environment?: string;

          /**
           * The Service name.
           */
          service?: string;
        }
      }

      /**
       * Vectorize bindings used for Pages Functions.
       */
      export interface VectorizeBindings {
        /**
         * Vectorize binding.
         */
        VECTORIZE?: VectorizeBindings.Vectorize;
      }

      export namespace VectorizeBindings {
        /**
         * Vectorize binding.
         */
        export interface Vectorize {
          index_name?: string;
        }
      }
    }

    /**
     * Configs for production deploys.
     */
    export interface Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      ai_bindings?: Production.AIBindings | null;

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      analytics_engine_datasets?: Production.AnalyticsEngineDatasets | null;

      /**
       * Browser bindings used for Pages Functions.
       */
      browsers?: Production.Browsers | null;

      /**
       * Compatibility date used for Pages Functions.
       */
      compatibility_date?: string;

      /**
       * Compatibility flags used for Pages Functions.
       */
      compatibility_flags?: Array<unknown>;

      /**
       * D1 databases used for Pages Functions.
       */
      d1_databases?: Production.D1Databases | null;

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      durable_object_namespaces?: Production.DurableObjectNamespaces | null;

      /**
       * Environment variables for build configs.
       */
      env_vars?: Production.EnvVars | null;

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      hyperdrive_bindings?: Production.HyperdriveBindings | null;

      /**
       * KV namespaces used for Pages Functions.
       */
      kv_namespaces?: Production.KVNamespaces;

      /**
       * mTLS bindings used for Pages Functions.
       */
      mtls_certificates?: Production.MTLSCertificates | null;

      /**
       * Placement setting used for Pages Functions.
       */
      placement?: Production.Placement | null;

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      queue_producers?: Production.QueueProducers | null;

      /**
       * R2 buckets used for Pages Functions.
       */
      r2_buckets?: Production.R2Buckets | null;

      /**
       * Services used for Pages Functions.
       */
      services?: Production.Services | null;

      /**
       * Vectorize bindings used for Pages Functions.
       */
      vectorize_bindings?: Production.VectorizeBindings | null;
    }

    export namespace Production {
      /**
       * Constellation bindings used for Pages Functions.
       */
      export interface AIBindings {
        /**
         * AI binding.
         */
        AI_BINDING?: AIBindings.AIBinding;
      }

      export namespace AIBindings {
        /**
         * AI binding.
         */
        export interface AIBinding {
          project_id?: unknown;
        }
      }

      /**
       * Analytics Engine bindings used for Pages Functions.
       */
      export interface AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        ANALYTICS_ENGINE_BINDING?: AnalyticsEngineDatasets.AnalyticsEngineBinding;
      }

      export namespace AnalyticsEngineDatasets {
        /**
         * Analytics Engine binding.
         */
        export interface AnalyticsEngineBinding {
          /**
           * Name of the dataset.
           */
          dataset?: string;
        }
      }

      /**
       * Browser bindings used for Pages Functions.
       */
      export interface Browsers {
        /**
         * Browser binding.
         */
        BROWSER?: unknown;
      }

      /**
       * D1 databases used for Pages Functions.
       */
      export interface D1Databases {
        /**
         * D1 binding.
         */
        D1_BINDING?: D1Databases.D1Binding;
      }

      export namespace D1Databases {
        /**
         * D1 binding.
         */
        export interface D1Binding {
          /**
           * UUID of the D1 database.
           */
          id?: string;
        }
      }

      /**
       * Durabble Object namespaces used for Pages Functions.
       */
      export interface DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        DO_BINDING?: DurableObjectNamespaces.DoBinding;
      }

      export namespace DurableObjectNamespaces {
        /**
         * Durabble Object binding.
         */
        export interface DoBinding {
          /**
           * ID of the Durabble Object namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * Environment variables for build configs.
       */
      export interface EnvVars {
        /**
         * Environment variable.
         */
        ENVIRONMENT_VARIABLE?: EnvVars.EnvironmentVariable;
      }

      export namespace EnvVars {
        /**
         * Environment variable.
         */
        export interface EnvironmentVariable {
          /**
           * The type of environment variable (plain text or secret)
           */
          type?: 'plain_text' | 'secret_text';

          /**
           * Environment variable value.
           */
          value?: string;
        }
      }

      /**
       * Hyperdrive bindings used for Pages Functions.
       */
      export interface HyperdriveBindings {
        /**
         * Hyperdrive binding.
         */
        HYPERDRIVE?: HyperdriveBindings.Hyperdrive;
      }

      export namespace HyperdriveBindings {
        /**
         * Hyperdrive binding.
         */
        export interface Hyperdrive {
          id?: string;
        }
      }

      /**
       * KV namespaces used for Pages Functions.
       */
      export interface KVNamespaces {
        /**
         * KV binding.
         */
        KV_BINDING?: KVNamespaces.KVBinding;
      }

      export namespace KVNamespaces {
        /**
         * KV binding.
         */
        export interface KVBinding {
          /**
           * ID of the KV namespace.
           */
          namespace_id?: string;
        }
      }

      /**
       * mTLS bindings used for Pages Functions.
       */
      export interface MTLSCertificates {
        /**
         * mTLS binding.
         */
        MTLS?: MTLSCertificates.MTLS;
      }

      export namespace MTLSCertificates {
        /**
         * mTLS binding.
         */
        export interface MTLS {
          certificate_id?: string;
        }
      }

      /**
       * Placement setting used for Pages Functions.
       */
      export interface Placement {
        /**
         * Placement mode.
         */
        mode?: string;
      }

      /**
       * Queue Producer bindings used for Pages Functions.
       */
      export interface QueueProducers {
        /**
         * Queue Producer binding.
         */
        QUEUE_PRODUCER_BINDING?: QueueProducers.QueueProducerBinding;
      }

      export namespace QueueProducers {
        /**
         * Queue Producer binding.
         */
        export interface QueueProducerBinding {
          /**
           * Name of the Queue.
           */
          name?: string;
        }
      }

      /**
       * R2 buckets used for Pages Functions.
       */
      export interface R2Buckets {
        /**
         * R2 binding.
         */
        R2_BINDING?: R2Buckets.R2Binding;
      }

      export namespace R2Buckets {
        /**
         * R2 binding.
         */
        export interface R2Binding {
          /**
           * Name of the R2 bucket.
           */
          name?: string;
        }
      }

      /**
       * Services used for Pages Functions.
       */
      export interface Services {
        /**
         * Service binding.
         */
        SERVICE_BINDING?: Services.ServiceBinding;
      }

      export namespace Services {
        /**
         * Service binding.
         */
        export interface ServiceBinding {
          /**
           * The entrypoint to bind to.
           */
          entrypoint?: string | null;

          /**
           * The Service environment.
           */
          environment?: string;

          /**
           * The Service name.
           */
          service?: string;
        }
      }

      /**
       * Vectorize bindings used for Pages Functions.
       */
      export interface VectorizeBindings {
        /**
         * Vectorize binding.
         */
        VECTORIZE?: VectorizeBindings.Vectorize;
      }

      export namespace VectorizeBindings {
        /**
         * Vectorize binding.
         */
        export interface Vectorize {
          index_name?: string;
        }
      }
    }
  }
}

export interface ProjectListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ProjectDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ProjectEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ProjectGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ProjectPurgeBuildCacheParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Projects {
  export import PagesDeployments = ProjectsAPI.PagesDeployments;
  export import PagesProjects = ProjectsAPI.PagesProjects;
  export import ProjectCreateResponse = ProjectsAPI.ProjectCreateResponse;
  export import ProjectDeleteResponse = ProjectsAPI.ProjectDeleteResponse;
  export import ProjectEditResponse = ProjectsAPI.ProjectEditResponse;
  export import ProjectPurgeBuildCacheResponse = ProjectsAPI.ProjectPurgeBuildCacheResponse;
  export import PagesDeploymentsSinglePage = ProjectsAPI.PagesDeploymentsSinglePage;
  export import ProjectCreateParams = ProjectsAPI.ProjectCreateParams;
  export import ProjectListParams = ProjectsAPI.ProjectListParams;
  export import ProjectDeleteParams = ProjectsAPI.ProjectDeleteParams;
  export import ProjectEditParams = ProjectsAPI.ProjectEditParams;
  export import ProjectGetParams = ProjectsAPI.ProjectGetParams;
  export import ProjectPurgeBuildCacheParams = ProjectsAPI.ProjectPurgeBuildCacheParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import DeploymentDeleteResponse = DeploymentsAPI.DeploymentDeleteResponse;
  export import DeploymentCreateParams = DeploymentsAPI.DeploymentCreateParams;
  export import DeploymentListParams = DeploymentsAPI.DeploymentListParams;
  export import DeploymentDeleteParams = DeploymentsAPI.DeploymentDeleteParams;
  export import DeploymentGetParams = DeploymentsAPI.DeploymentGetParams;
  export import DeploymentRetryParams = DeploymentsAPI.DeploymentRetryParams;
  export import DeploymentRollbackParams = DeploymentsAPI.DeploymentRollbackParams;
  export import Domains = DomainsAPI.Domains;
  export import DomainCreateResponse = DomainsAPI.DomainCreateResponse;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainDeleteResponse = DomainsAPI.DomainDeleteResponse;
  export import DomainEditResponse = DomainsAPI.DomainEditResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainListResponsesSinglePage = DomainsAPI.DomainListResponsesSinglePage;
  export import DomainCreateParams = DomainsAPI.DomainCreateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainDeleteParams = DomainsAPI.DomainDeleteParams;
  export import DomainEditParams = DomainsAPI.DomainEditParams;
  export import DomainGetParams = DomainsAPI.DomainGetParams;
}
