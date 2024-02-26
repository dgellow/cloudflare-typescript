// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey:
    'v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projects', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.pages.projects.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.pages.projects.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      build_config: {
        build_caching: true,
        build_command: 'npm run build',
        destination_dir: 'build',
        root_dir: '/',
        web_analytics_tag: 'cee1c73f6e4743d0b5e6bb1a0bcaabcc',
        web_analytics_token: '021e1057c18547eca7b79f2516f06o7x',
      },
      canonical_deployment: {},
      deployment_configs: {
        preview: {
          ai_bindings: { AI_BINDING: { project_id: {} } },
          analytics_engine_datasets: { ANALYTICS_ENGINE_BINDING: { dataset: 'api_analytics' } },
          compatibility_date: '2022-01-01',
          compatibility_flags: ['url_standard'],
          d1_databases: { D1_BINDING: { id: '445e2955-951a-43f8-a35b-a4d0c8138f63' } },
          durable_object_namespaces: { DO_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          env_vars: { ENVIRONMENT_VARIABLE: { type: 'plain_text', value: 'hello world' } },
          kv_namespaces: { KV_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          placement: { mode: 'smart' },
          queue_producers: { QUEUE_PRODUCER_BINDING: { name: 'some-queue' } },
          r2_buckets: { R2_BINDING: { name: 'some-bucket' } },
          service_bindings: { SERVICE_BINDING: { environment: 'production', service: 'example-worker' } },
        },
        production: {
          ai_bindings: { AI_BINDING: { project_id: {} } },
          analytics_engine_datasets: { ANALYTICS_ENGINE_BINDING: { dataset: 'api_analytics' } },
          compatibility_date: '2022-01-01',
          compatibility_flags: ['url_standard'],
          d1_databases: { D1_BINDING: { id: '445e2955-951a-43f8-a35b-a4d0c8138f63' } },
          durable_object_namespaces: { DO_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          env_vars: { ENVIRONMENT_VARIABLE: { type: 'plain_text', value: 'hello world' } },
          kv_namespaces: { KV_BINDING: { namespace_id: '5eb63bbbe01eeed093cb22bb8f5acdc3' } },
          placement: { mode: 'smart' },
          queue_producers: { QUEUE_PRODUCER_BINDING: { name: 'some-queue' } },
          r2_buckets: { R2_BINDING: { name: 'some-bucket' } },
          service_bindings: { SERVICE_BINDING: { environment: 'production', service: 'example-worker' } },
        },
      },
      latest_deployment: {},
      name: 'NextJS Blog',
      production_branch: 'main',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.pages.projects.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.pages.projects.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.pages.projects.delete('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.pages.projects.delete('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.pages.projects.edit('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {
        deployment_configs: {
          production: {
            compatibility_date: '2022-01-01',
            compatibility_flags: ['url_standard'],
            env_vars: {
              BUILD_VERSION: { value: '3.3' },
              delete_this_env_var: null,
              secret_var: { type: 'secret_text', value: 'A_CMS_API_TOKEN' },
            },
          },
        },
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.pages.projects.edit('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {
        deployment_configs: {
          production: {
            compatibility_date: '2022-01-01',
            compatibility_flags: ['url_standard'],
            env_vars: {
              BUILD_VERSION: { value: '3.3' },
              delete_this_env_var: null,
              secret_var: { type: 'secret_text', value: 'A_CMS_API_TOKEN' },
            },
          },
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.pages.projects.get('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.pages.projects.get('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('purgeBuildCache: only required params', async () => {
    const responsePromise = cloudflare.pages.projects.purgeBuildCache('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('purgeBuildCache: required and optional params', async () => {
    const response = await cloudflare.pages.projects.purgeBuildCache('this-is-my-project-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
