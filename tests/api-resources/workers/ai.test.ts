// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource ai', () => {
  // skipped: tests are disabled for the time being
  test.skip('run: only required params', async () => {
    const responsePromise = cloudflare.workers.ai.run('string', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
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
  test.skip('run: required and optional params', async () => {
    const response = await cloudflare.workers.ai.run('string', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
    });
  });
});
