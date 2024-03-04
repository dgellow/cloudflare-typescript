// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource colos', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dex.colos.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      timeEnd: '2023-08-24T20:45:00Z',
      timeStart: '2023-08-20T20:45:00Z',
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
    const response = await cloudflare.zeroTrust.dex.colos.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      timeEnd: '2023-08-24T20:45:00Z',
      timeStart: '2023-08-20T20:45:00Z',
      sortBy: 'fleet-status-usage',
    });
  });
});
