// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource monitors', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.monitors.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      expected_codes: '2xx',
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
    const response = await cloudflare.loadBalancers.monitors.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      expected_codes: '2xx',
      allow_insecure: true,
      consecutive_down: 0,
      consecutive_up: 0,
      description: 'Login page monitor',
      expected_body: 'alive',
      follow_redirects: true,
      header: { Host: ['example.com'], 'X-App-ID': ['abc123'] },
      interval: 0,
      method: 'GET',
      path: '/health',
      port: 0,
      probe_zone: 'example.com',
      retries: 0,
      timeout: 0,
      type: 'https',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.monitors.update('f1aba936b94213e5b8dca0c0dbf1f9cc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      expected_codes: '2xx',
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.loadBalancers.monitors.update('f1aba936b94213e5b8dca0c0dbf1f9cc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      expected_codes: '2xx',
      allow_insecure: true,
      consecutive_down: 0,
      consecutive_up: 0,
      description: 'Login page monitor',
      expected_body: 'alive',
      follow_redirects: true,
      header: { Host: ['example.com'], 'X-App-ID': ['abc123'] },
      interval: 0,
      method: 'GET',
      path: '/health',
      port: 0,
      probe_zone: 'example.com',
      retries: 0,
      timeout: 0,
      type: 'https',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.monitors.list({
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
    const response = await cloudflare.loadBalancers.monitors.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.monitors.delete('f1aba936b94213e5b8dca0c0dbf1f9cc', {
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
    const response = await cloudflare.loadBalancers.monitors.delete('f1aba936b94213e5b8dca0c0dbf1f9cc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.monitors.edit('f1aba936b94213e5b8dca0c0dbf1f9cc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      expected_codes: '2xx',
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
    const response = await cloudflare.loadBalancers.monitors.edit('f1aba936b94213e5b8dca0c0dbf1f9cc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      expected_codes: '2xx',
      allow_insecure: true,
      consecutive_down: 0,
      consecutive_up: 0,
      description: 'Login page monitor',
      expected_body: 'alive',
      follow_redirects: true,
      header: { Host: ['example.com'], 'X-App-ID': ['abc123'] },
      interval: 0,
      method: 'GET',
      path: '/health',
      port: 0,
      probe_zone: 'example.com',
      retries: 0,
      timeout: 0,
      type: 'https',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.loadBalancers.monitors.get('f1aba936b94213e5b8dca0c0dbf1f9cc', {
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
    const response = await cloudflare.loadBalancers.monitors.get('f1aba936b94213e5b8dca0c0dbf1f9cc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
